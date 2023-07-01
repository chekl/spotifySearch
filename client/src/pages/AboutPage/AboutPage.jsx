import React from 'react';
import { Link } from 'react-router-dom';
import BackLink from '../../components/BackLink/BackLink';
import Layout from '../../components/Layout/Layout';
import { Helmet } from 'react-helmet';
import './AboutPage.css';
import '../Page.css';

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>Про команду Hark!</title>
        <meta
          name='description'
          content='Мета Hark! проста, але благородна. Вона прагне просувати та
          популяризувати українських музичних виконавців. Сайт є мішаниною
          всього: від традиційної української музики до сучасного попу та року.'
        />
      </Helmet>

      <Layout>
        <div className='page-container'>
          <BackLink />
          <p>
            Hark! це платформа, створена талановитим тріо Владиславою Чайкою,
            Анастасією Гойсак та Ростиславом Бибичем. Ми звичайні троє студентів
            з Харківського національного університету радіоелектроніки - мізки
            інноваційного сайту, який завойовує українську музичну індустрію.
          </p>
          <p>
            Мета Hark! проста, але благородна. Вона прагне просувати та
            популяризувати українських музичних виконавців. Сайт є мішаниною
            всього: від традиційної української музики до сучасного попу та
            року. З таким різноманіттям, є щось для кожного.
            <Link className='about-link' to={'/'}>
              Пошук виконавців став легшим!
            </Link>
          </p>
          <p>
            Hark! повністю керується ентузіастами. Ми використовували свою
            пристрасть до музики та технологій, створюючи веб-сайт, який є
            функціональним та зручним у використанні. Ми хочемо наголосити, що
            українська музика варта прослуховування.
          </p>
          <p>
            Отже, залишаючись вірними духу Hark!, давайте підтримувати наших
            талановитих українських музикантів та допомогти їм зростати в
            популярності.
          </p>
          <img
            className='authors-img'
            src='/authors.webp'
            alt='Команда Hark! Українські гурти'
          />
        </div>
      </Layout>
    </>
  );
}
