import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';

import { Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import MoviesPage from './components/pages/MoviesPage';
import HomePage from './components/pages/HomePage'
import NewMoviePage from './components/pages/NewMoviePage.js';
import Footer from './components/Footer';
import Header from './components/Header';

class App extends Component {
  render() {
      return (
          <div>
              <Header />
              <Container text>
                <Route exact path='/' component={HomePage} />
                <Route exact path='/movies' component={MoviesPage} />
                <Route exact path='/movies/new' component={NewMoviePage} />
                <Route exact path='/movie/:_id' component={NewMoviePage} />
              </Container>
              <Footer/>
          </div>
    );
  }
}

export default App;
