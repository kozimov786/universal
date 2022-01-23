import React from 'react';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Infos from '../components/Infos/Infos';
import Middle from '../components/Middle/Middle';

export default function Home() {
  return <div>
    <Header />
    <Hero />
    <Infos />
    <Middle />
  </div>;
}
