import React from 'react';
import { Route, Switch } from 'react-router-dom';
import zomato from '../api/zomato';
import SearchBar from './SearchBar';
import RestaurantList from './RestaurantList';
import RestaurantResultsShow from './RestaurantResultsShow';
import Header from './layout/Header';
import Footer from './layout/Footer';

class App extends React.Component {
  state = {
    restaurant: [],
    term: '',
    errorMsg: '',
    selectRestau: ''
  };

  onSearchSubmit = async term => {
    try {
      const res = await zomato.get(
        `/search?entity_id=280&entity_type=city&q=${term}&start=0&count=100`
      );
      this.setState({ restaurant: res.data.restaurants, city: term });
    } catch (e) {
      return this.setState({
        errorMsg: `Oopss!! No Results Found for Search Term: '${term}'`
      });
    }
  };

  logic = () => {
    return (
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
                loader={this.state.showLoader}
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
