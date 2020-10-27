import React from 'react';
import { fetchPhotos } from '../clients/flickr';
import Gallery from './Gallery';
import Pagination from './Pagination';

const Page = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [lastPage, setLastPage] = React.useState(1);
  const [data, setData] = React.useState({});
  const { photos } = data;

  React.useEffect(() => {
    fetchPhotos(currentPage).then((data) => {
      setData(data);
      if (currentPage === 1) {
        setLastPage(data.photos.pages);
      }
    });
  }, [currentPage]);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage + 1 < photos.pages) {
      setCurrentPage(currentPage + 1);
    }
  };

  if (!photos || !photos.photo) {
    return 'Loading...';
  }

  return (
    <>
      <Gallery photos={photos.photo} />
      <Pagination
        currentPage={currentPage}
        lastPage={lastPage}
        handlePreviousPage={handlePreviousPage}
        handleNextPage={handleNextPage}
      />
    </>
  );
};

export default Page;
