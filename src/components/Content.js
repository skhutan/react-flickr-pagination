import React from 'react';
import { Flex, Box, Image } from 'rebass';
import logo from '../logo.svg';
import Page from './Page';

const Content = () => (
  <Flex flexWrap="wrap" align="center" flexDirection="column" width={1} p={3}>
    <Box as="header">
      <Image src={logo} />
    </Box>
    <Box
      my={1}
      sx={{
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'primary'
      }}
    />
    <Page />
  </Flex>
);

export default Content;
