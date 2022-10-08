import { Component } from 'react';
import { fetchPics } from '../../services/api';

export class ImageGallery extends Component {
  state = {
    data: '',
  };
  getData = async (query, page) => {
    const response = await fetchPics(query, page);
    this.setState({ data: response });
  };

  render() {
    this.getData(this.props.query, this.props.page);
    console.log(this.state.data);
    return (
      <ul className="ImageGallery">
        <li className="ImageGalleryItem">
          <img src="" alt="" className="ImageGalleryItem-image" />
        </li>
      </ul>
    );
  }
}

{
  /* this.state.data && this.state.data.map(card => ( )) */
}
