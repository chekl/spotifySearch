import React from 'react';
import PageContainer from '../../blocks/PageContainer';
import style from "./Page404.module.css"

export default function Page404() {
  return (
    <PageContainer>
      <div className={style.nonPage}>
        <h1>404</h1>
        <p>Сторінку не знайдено</p>
      </div>
    </PageContainer>
  );
}
