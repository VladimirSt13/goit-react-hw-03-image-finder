import { Component } from 'react';
import { fetchPics } from '../services/api';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    query: '',
    page: 1,
    images: [],
    loadMore: false,
    loader: false,
    modal: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { query: prevQuery, page: prevPage } = prevState;
    const { query, page } = this.state;

    if (prevQuery !== query || prevPage < page) {
      this.setState({ loader: true });

      try {
        const { data } = await fetchPics(query, page);
        const { hits, totalHits } = data;

        this.setState(state => ({
          images: [...state.images, ...hits],
          loadMore: totalHits > 12 * page,
          loader: false,
        }));
      } catch (error) {
        console.log('error', error);
      }
    }
  }

  changeQuery = value => {
    this.setState({ query: value, page: 1, images: [] });
  };

  loadMore = () => {
    this.setState(state => ({ page: state.page + 1 }));
  };

  render() {
    console.log('this.state', this.state);
    return (
      <>
        <Searchbar onSubmit={this.changeQuery} />
        <ImageGallery images={this.state.images} />
        {this.state.loadMore && <Button onClick={this.loadMore} />}
        <Loader visible={this.state.loader} />
        {this.state.modal && <Modal />}
      </>
    );
  }
}
