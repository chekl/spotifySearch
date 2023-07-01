import React, { useState } from 'react';
import CardArticle from '../../components/Card/CardArticle';
import { articles } from '../../articles/articles';
import useWindowWidth from '../../hooks/useWindowWidth';

export default function ArticleRecomends({ id }) {
  const articleList = articles.filter((el) => el._id !== id);
  let [elId, setElId] = useState(0);
  const width = useWindowWidth();

  return (
    <div className='list-container'>
      <h3>Читайте також:</h3>
      <div className='list'>
        {width > 1000 ? (
          <>
            {articleList.splice(0, 5).map((article) => {
              return <CardArticle key={article._id} article={article} />;
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
            <CardArticle key={articleList[elId]._id} article={articleList[elId]} />
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
