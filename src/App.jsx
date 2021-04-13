import React from 'react';
import styled from 'styled-components';

import './App.css';

const KITTENS = [
  'http://placekitten.com/600/400',
  'http://placekitten.com/g/600/400',
  'http://placekitten.com/300/400',
  'http://placekitten.com/g/300/400',
  'http://placekitten.com/500/400',
];

const Title = styled.h2`
  text-align: center;
`;

export const App = () => {
  // TODO: Start here! 🐈

  return (
    <>
      <Title>🐱 Atomic Kitten Slider</Title>
    </>
  );
};
