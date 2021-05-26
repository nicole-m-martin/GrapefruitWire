import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from '../ui/Header';
import SearchContainer from '../../containers/SearchContainer';
import ArtistContainer from '../../containers/ArtistContainer';
// import AlbumContainer from '../../containers/AlbumContainer';
// import SongContainer from '../../containers/SongContainer';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={SearchContainer} />

        <Route exact path="/artist/:artistId"
          component={ArtistContainer} />

        {/* <Route exact path="/album/:id"
        component={AlbumContainer} /> */}

        {/* <Route exact path="/song/:id"
        component={SongContainer} /> */}
      </Switch>
    </Router>
  );
}
