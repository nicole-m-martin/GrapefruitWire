import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import ArtistContainer from '../ArtistContainer';
import artistcontainer from '../../../JSON/artistcontainer.json';

const server = setupServer(
  rest.get('https://musicbrainz.org/ws/2/release?artist=99790314-885a-4975-8614-9c5bc890364d&fmt=json', (req, res, ctx) => {
    return res(ctx.json(artistcontainer));
  })
);

describe('artist Container', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());
  
  it('fetches artists albums and renders it to the page',  () => {
    render(
      <MemoryRouter>
        <ArtistContainer />
      </MemoryRouter>
    );

    const ul = screen.findByRole('list', { name: 'albumList' });

    expect(ul).toMatchSnapshot();
  });
});
