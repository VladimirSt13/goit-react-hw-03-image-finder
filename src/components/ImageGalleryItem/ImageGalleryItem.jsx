export const ImageGalleryItem = ({ img }) => {
  return (
    <li className="ImageGalleryItem">
      <img
        src={img.webformatURL}
        alt={img.tags}
        className="ImageGalleryItem-image"
      />
    </li>
  );
};
