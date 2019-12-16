import React from 'react';
import zomato from '../api/zomato';

import RestauDetails from './RestauDetails';

class RestaurantResultsShow extends React.Component {
  state = { RestauData: '' };
  componentDidMount = async () => {
    try {
      const { id } = this.props.match.params;
      const results = await zomato.get(`/restaurant?res_id=${id}`);
      this.setState({ RestauData: results.data });
    } catch (e) {
      return this.setState({
        errorMsg: `Error: ${e.message}`
      });
    }
  };
  render() {
    return (
      <div
        className='ui container main'
        style={{ paddingTop: '30px', overflowY: 'hidden' }}
      >
        <RestauDetails data={this.state.RestauData} />
      </div>
    );
  }
}

export default RestaurantResultsShow;
