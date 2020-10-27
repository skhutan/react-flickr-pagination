import React from 'react';
import { Flex, Button, Text } from 'rebass';

const Pagination = ({
  currentPage,
  lastPage,
  handlePreviousPage,
  handleNextPage
}) => (
  <Flex alignItems="center" justifyContent="space-evenly" marginTop="1rem">
    <Button onClick={handlePreviousPage}>Previous Page</Button>
    <Text fontSize={2} fontWeight="bold">
      {currentPage}/{lastPage}
    </Text>
    <Button onClick={handleNextPage}>Next Page</Button>
  </Flex>
);

export default React.memo(Pagination);
