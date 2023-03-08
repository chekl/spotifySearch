async function getArticles() {
    return await fetch(`http://localhost:5000/articles/`)
      .then((result) => result.json())
      .then((data) => data);
  }
  
  async function getArticleById(id) {
    return await fetch(
      `http://localhost:5000/articles/${id}`)
      .then((response) => response.json())
      .then((data) => data);
  }

  export { getArticles, getArticleById };