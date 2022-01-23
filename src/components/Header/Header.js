import React from 'react';
import HeaderMid from './HeaderMid';
import HeaderTop from './HeaderTop';
import Menu from './Menu';

export default function Header() {
  return <div>
    <HeaderTop />
    <HeaderMid />
    <Menu />
  </div>;
}
