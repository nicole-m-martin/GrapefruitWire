/* eslint-disable max-len */
/**
 /* @jest-environment jsdom
 */
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchContainer from '../SearchContainer';
import { MemoryRouter } from 'react-router';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import beyonceSearch from '../../../JSON/beyonceSearch.json';

const server = setupServer(
  rest.get('http://musicbrainz.org/ws/2/artist', (req, res, ctx) => {
    const query = req.url.searchParams;
    // const query = query.get('query');
    query.get('fmt');
    query.get('limit');
    query.get('offset');
    return res(ctx.json(beyonceSearch));
  })
);

describe('Search Container', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('fetches the search page and renders artists to the page', async () => {
    render(
      <MemoryRouter>
        <SearchContainer />
      </MemoryRouter>
    );

    const ul = await screen.findByRole('list', { name: 'artistList' });

    const input = await screen.findByPlaceholderText('Search Artist...');
    userEvent.type(input, 'beyonce');

    const button = await screen.findByRole('button', { name: 'search' });
    userEvent.click(button);
    return waitFor(() => {
      expect(ul).not.toBeEmptyDOMElement();
    });
  });
});
