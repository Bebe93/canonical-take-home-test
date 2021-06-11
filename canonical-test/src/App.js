import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles();
  }, []);

  const getArticles = () => {
    const url = `https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json`;
    axios
      .get(url)

      .then((data) => setArticles(data.data))
      .catch((error) => console.log(error));
  };

  return (
    <div className="App">
      <div className="reposList">
        {articles.map((article) => {
          if (article)
            return (
              <div key={article.id}>
                <ul className="p-list">
                  <li className="p-list__item">
                    <h1>CLOUD AND SERVER</h1>
                    <img src={article.featured_media}></img>
                    <a href={article.link} target="_blank" rel="noreferrer">
                      {article.title.rendered}
                    </a>
                    <p>
                      By{" "}
                      <a
                        href={article._embedded.author[0].link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {article._embedded.author[0].name}
                      </a>{" "}
                      on {article.date}
                    </p>
                    <p>Article</p>
                  </li>
                </ul>
              </div>
            );
        })}
      </div>
    </div>
  );
}

export default App;
