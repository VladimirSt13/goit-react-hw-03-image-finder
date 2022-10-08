import { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';

export class App extends Component {
  state = {
    query: '',
    page: 1,
  };

  async componentDidUpdate(prevProps, prevState) {
    // const { query, page } = this.state;
    // const response = await fetchPics(query, page);
    // console.log(response.hits);
    // this.setState({ data: response.hits });
  }

  changeQuery = value => {
    this.setState({ query: value });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.changeQuery} />
        <ImageGallery query={this.state.query} page={this.state.page} />
        <button type="button" className="Button">
          Load more
        </button>
      </>
    );
  }
}
