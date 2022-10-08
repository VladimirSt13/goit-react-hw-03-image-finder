import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images }) => {
  return (
    images.length > 0 && (
      <ul className="ImageGallery">
        {images.map(img => (
          <ImageGalleryItem key={img.id} img={img} />
        ))}
      </ul>
    )
  );
};
