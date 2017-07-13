import React, { Component } from 'react';

// These imports are used to connecct SearchBar container to Redux
// in order to use the ActionCreator ( fetchWeather)
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
    // Initial state
  constructor(props) {
    super(props);

    // Make our default state as empty string
    this.state = { term: '' };

    // We need to bind "this" to fix the (cannot find setState of undefined)
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    // Vanilla JS thing, not react
    this.setState({ term: event.target.value });
  }


  onFormSubmit(event) {
    // prevents the <form> from re-submitting
    event.preventDefault();
    // When the user submit the form, we want to fire up the fetchWeather ActionCreator
    this.props.fetchWeather(this.state.term);
    // After we kickoff the search, we want to clear up that search input
    this.setState({ term: '' });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Get a five day forecast in your favorite cities"
          className="form-control"

          // turn this into controlled component
          // the input value come from this.state.term
          value={this.state.term}
          onChange={this.onInputChange}
        />

        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary"> Submit </button>
        </span>

      </form>
    );
  }
}

// These code below is used to "glue" our fetchWeather ActionCreator to SearchBar component
// so the fetchWeather will be accessible through this.props.fetchWeather
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

// We want our mapDispatchToProps as our second argument, so we use "null" as our first argument
// Since we don't need mapStateToProps (first argument)
export default connect(null, mapDispatchToProps)(SearchBar);
