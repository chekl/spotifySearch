import React, { useState } from 'react';
import CardRecomendArticle from '../Card/CardRecomendArticle';
import { articles } from '../../mock/articles';
import useWindowWidth from '../../hooks/useWindowWidth';
import "./ArticleRecomendation.css"

export default function ArticleRecomends({ id }) {
  const articleList = articles.filter((el) => el._id !== id);
  let [elId, setElId] = useState(0);
  const width = useWindowWidth();

  return (
    <div className='list-container'>
      <h2>Читайте також:</h2>
      <div className='list'>
        {width > 1000 ? (
          <>
            {articleList.splice(0, 5).map((article) => {
              return <CardRecomendArticle key={article._id} article={article} />;
            })}
          </>
        ) : (
          <>
            <button
              className='slider'
              onClick={() => setElId(elId ? --elId : articleList.length - 1)}
            >
              &lt;
            </button>
            <CardRecomendArticle key={articleList[elId]._id} article={articleList[elId]} />
            <button
              className='slider'
              onClick={() => setElId(elId < articleList.length - 1 ? ++elId : 0)}
            >
              &gt;
            </button>
          </>
        )}
      </div>
    </div>
  );
}
