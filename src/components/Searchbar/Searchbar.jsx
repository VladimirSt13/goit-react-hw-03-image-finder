import { Component } from 'react';
import PropTypes from 'prop-types';
import { Header } from './Searchbar.styled';
import { BiSearchAlt } from 'react-icons/bi';

export class Searchbar extends Component {
  state = {
    value: '',
  };

  handleChangeQuery = e => {
    this.setState({ value: e.currentTarget.value.toLowerCase().trim() });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.value === '') {
      console.log('Input value');
      return;
    }

    this.props.onSubmit(this.state.value);
    this.setState({ value: '' });

    // console.log('e', e.currentTarget);
  };

  render() {
    console.log('this.props :>> ', this.props);
    return (
      <Header>
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <BiSearchAlt style={{ width: 32, height: 32 }} />
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChangeQuery}
            value={this.state.value}
          />
        </form>
      </Header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
