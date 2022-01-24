import React from 'react';
import Categories from '../components/Categories/Categories';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Infos from '../components/Infos/Infos';
import Middle from '../components/Middle/Middle';
import Readers from '../components/Readers/Readers';

export default function Home() {
  return <div>
    <Header />
    <Hero />
    <Infos />
    <Middle />
    <Categories />
    <Readers />
    <Footer />
  </div>;
}
