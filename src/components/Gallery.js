import React from 'react';
import { Flex, Box, Card, Image, Text } from 'rebass';
import { getPhotoUrl } from '../clients/flickr';

const Gallery = ({ photos }) => (
  <Flex flexWrap="wrap">
    {photos &&
      photos.map((pic) => (
        <Box p={2} height={240} key={pic.id}>
          <Card width={240} mx="auto">
            <Image src={getPhotoUrl(pic)} width={240} />
            <Text>{pic.title}</Text>
          </Card>
        </Box>
      ))}
  </Flex>
);
export default Gallery;
