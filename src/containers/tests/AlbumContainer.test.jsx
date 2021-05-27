import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import albumContainer from '../../../JSON/albumContainer.json';
import AlbumContainer from '../AlbumContainer';

const server = setupServer(
  rest.get('http://musicbrainz.org/ws/2/recording?release=027eea17-113a-4355-8c9b-5a12e08b7275&fmt=json', (req, res, ctx) => {
    return res(ctx.json(albumContainer));
  })
);

describe('album container', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('fetches albums adn renders songs to the page', () => {
    render(
      <MemoryRouter>
        <AlbumContainer />
      </MemoryRouter>
    );

    const ul = screen.findByRole('list', { name: 'songs' });

    expect(ul).toMatchSnapshot();
  });
});
