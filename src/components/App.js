import React from 'react';
import { Route, Switch } from 'react-router-dom';
import zomato from '../api/zomato';
import SearchBar from './SearchBar';
import RestaurantList from './RestaurantList';
import RestaurantResultsShow from './RestaurantResultsShow';
import Loader from './Loader';
import Header from './layout/Header';
import Footer from './layout/Footer';

class App extends React.Component {
  state = {
    restaurant: [],
    term: '',
    errorMsg: '',
    selectRestau: '',
    showLoader: false
  };

  onSearchSubmit = term => {
    this.setState({ showLoader: true }, async () => {
      try {
        const res = await zomato.get(
          `/search?entity_id=280&entity_type=city&q=${term}&start=0&count=100`
        );
        this.setState({
          showLoader: false,
          restaurant: res.data.restaurants,
          city: term
        });
      } catch (e) {
        return this.setState({
          showLoader: false,
          errorMsg: `Oopss!! No Results Found for Search Term: '${term}'`
        });
      }
    });
  };

  logic = () => {
    return this.state.showLoader ? (
      <Loader message='wait a second' />
    ) : (
      <div>
        <Header />
        <div className='ui container'>
          <Switch>
            <Route exact path='/'>
              <SearchBar onSubmit={this.onSearchSubmit} />
              <RestaurantList
                onItemSelect={this.onItemSelect}
                restaurants={this.state.restaurant}
                term={this.state.term}
                errorMsg={this.state.errorMsg}
                resultsLen={this.state.restaurant.length}
              />
            </Route>
            <Route
              exact
              path='/getDetails/:id'
              component={RestaurantResultsShow}
            />
          </Switch>
          <Footer />
        </div>
      </div>
    );
  };
  render() {
    return this.logic();
  }
}

export default App;
