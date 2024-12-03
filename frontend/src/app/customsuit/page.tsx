'use client';
import React from 'react';

import { HomePage } from '../components/customsuit';
import { FabricProvider } from '../utils/context/fabricContext';

const Home = () => {
  return (
    <FabricProvider>
      <HomePage />
    </FabricProvider>
  );
};

export default Home;
