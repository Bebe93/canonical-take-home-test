import React, { useState, useEffect } from "react";
import axios from "axios"; // I used axios instead of fetch for no particular reason other than avoiding one line more of code such as .then(res => res.json())

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
      <div className="articleList">
        {articles.map((article) => {
          if (article)
            return (
              <div key={article.id}>
                <ul className="p-list row">
                  <li className="p-list__item col-4 p-card--highlighted ">
                    {/* I wasn't able to add the first line of colour, I tried with notification but eventually realised that it wasn't the right option */}
                    <h1 className="p-card__title p-text--x-small-capitalised ">
                      CLOUD AND SERVER
                    </h1>
                    <hr />
                    <img src={article.featured_media}></img>
                    <br />
                    <a href={article.link} target="_blank" rel="noreferrer">
                      {article.title.rendered}
                    </a>
                    <br />
                    <p>
                      By
                      <a
                        href={article._embedded.author[0].link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {article._embedded.author[0].name}
                      </a>{" "}
                      on {article.date}
                    </p>
                    {/* I wasn't ale to change the format of the date */}
                    <hr />
                    {/* I didn't know how to choose a dotted separator */}
                    <p className="p-text--small">Article</p>
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
