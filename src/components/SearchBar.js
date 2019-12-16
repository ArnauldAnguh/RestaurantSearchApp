import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };
  onFormSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className='ui segment two'>
        <h2 style={{textAlign: 'center'}}>Get The Best Restaurants in More Than 1000 Countries</h2>
        <div className='ui divider'></div>
        <form className='ui form' onSubmit={this.onFormSubmit}>
          <div className='ui field'>
            <label style={{ color: 'white' }}>Fastest Search Runner</label>
            <input
              type='text'
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
              placeholder='search by country, city, restaurant... '
            />
            <i className='ui icon search'></i>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
