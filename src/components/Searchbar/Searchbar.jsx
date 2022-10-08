import { Component } from 'react';

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
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
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
      </header>
    );
  }
}
