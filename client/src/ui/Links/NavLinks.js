import React from 'react';
import { Link } from 'react-router-dom';
import navigation from '../../utils/navigation';

export default function NavLinks({header}) {
  const style = header ? "link-white" : "link"
  
  return (
    <>
      <Link to={'/'} className={`${style} link-wave`} onClick={navigation()}>
        Пошук виконавців
      </Link>
      <Link to={'/about'} className={`${style} link-wave`} onClick={navigation()}>
        Про нас
      </Link>
      <Link to={'/articles'} className={`${style} link-wave`} onClick={navigation()}>
        Статті
      </Link>
    </>
  );
}
