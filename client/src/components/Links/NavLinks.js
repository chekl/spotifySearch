import React from 'react';
import { Link } from 'react-router-dom';
import navigation from '../../helpers/navigation';

export default function NavLinks({styles}) {
  return (
    <>
      <Link to={'/'} className={styles.link} onClick={navigation()}>
        Пошук виконавців
      </Link>
      <Link to={'/about'} className={styles.link} onClick={navigation()}>
        Про нас
      </Link>
      <Link to={'/articles'} className={styles.link} onClick={navigation()}>
        Статті
      </Link>
    </>
  );
}
