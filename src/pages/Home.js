import React from 'react';

import Categories from '../components/Categories/Categories';
import Hero from '../components/Hero/Hero';
import Infos from '../components/Infos/Infos';
import Middle from '../components/Middle/Middle';
import Readers from '../components/Readers/Readers';

export default function Home() {
  return <div>
    <Hero />
    <Infos />
    <Middle />
    <Categories />
    <Readers />
  </div>;
}
