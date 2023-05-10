import React from 'react';
import { Paper } from '@mui/material';
import BackLink from '../../components/BackLink/BackLink';
import Layout from '../../components/Layout/Layout';
import './AboutPage.css';
import '../Page.css';

export default function AboutPage() {
  return (
    <Layout>
      <Paper elevation={3} className='page-container'>
        <BackLink />
        <p>
          Hark! це платформа, створена талановитим тріо Владиславою Чайкою,
          Анастасією Гойсак та Ростиславом Бибичем. Ми звичайні троє студентів з
          Харківського національного університету радіоелектроніки - мізки
          інноваційного сайту, який завойовує українську музичну індустрію.
          </p>
          <div className='container-author'>
            <img
            className='author'
              src='vladyslava.png'
              alt='Картинка для Владислави' />
            <img
            className='author'
              src='rostuslav.png'
              alt='Картинка для Ростислава'
            />
            <img
            className='author'
              src='anastasia.png'
              alt='Картинка для Анастасії'
            />
            
          </div>
          <p>
          <br />
          Мета Hark! проста, але благородна. Вона прагне просувати та
          популяризувати українських музичних виконавців. Сайт є мішаниною
          всього: від традиційної української музики до сучасного попу та року.
          З таким різноманіттям, є щось для кожного.
          <br />
          Hark! повністю керується ентузіастами. Ми використовували свою
          пристрасть до музики та технологій, створюючи веб-сайт, який є
          функціональним та зручним у використанні. Ми хочемо наголосити, що
          українська музика варта прослуховування.
          <br />
          Отже, залишаючись вірними духу Hark!, давайте підтримувати наших
          талановитих українських музикантів та допомогти їм зростати в
          популярності.
        </p>
      </Paper>
    </Layout>
  );
};
