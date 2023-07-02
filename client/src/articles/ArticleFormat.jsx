import React from 'react'

export default function ArticleFormat({article}) {
    let headnum = 0;
    return (
    <div>
       {article[0].text.map((paragraph, index) => {
              let header = paragraph.includes('*');

              if(header) {
                paragraph = paragraph.split('*')[1];
              }

              let link = paragraph.split("/");

              return index === 2 ?
                <div key={index}>
                  <img
                    src={article[0].img}
                    alt={article[0].alt}
                    className='article-img'
                  />

                  {header &&
                  <h2>{article[0].headers[headnum++]}</h2>
                  }    

                  {link.length > 1 &&
                    <p>{link[0]} <strong>
                  <a className="article-link" href={article[0].link}>{link[1]}</a>
                  </strong>
                  {link.length > 2 && link[2]}
                </p>
                  }

                  {link.length === 1 &&
                  <p>{paragraph}</p>
                  }

                </div>              

               : <div key={index}>
               {header &&
                  <h2>{article[0].headers[headnum++]}</h2>
                  }    

                  {link.length > 1 &&
                    <p>{link[0]} <strong>
                  <a className="article-link" href={article[0].link}>{link[1]}</a>
                  </strong>
                  {link.length > 2 && link[2]}
                </p>
                  }

                  {link.length === 1 &&
                  <p>{paragraph}</p>
                  }
               </div>;
            })
            
            }
    </div>
  )
}
