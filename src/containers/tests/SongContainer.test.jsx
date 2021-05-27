import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import songContainer from '../../../JSON/songContainer.json';
import SongContainer from '../SongContainer';

const server = setupServer(
  rest.get('https://api.lyrics.ovh/v1/beyonce/halo', (req, res, ctx) => {
    return res(ctx.json(songContainer));
  })
);

describe('song container', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('fetches song lyrics and renders them to the page', () => {
    render(
      <MemoryRouter>
        <SongContainer />
      </MemoryRouter>
    );

    const ul = screen.findByRole('div', { name: 'lyric' });

    expect(ul).toMatchSnapshot();
  });
});
