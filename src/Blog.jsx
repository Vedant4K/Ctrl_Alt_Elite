import React, { useEffect, useState } from "react";
import axios from "axios";

const Blog = () => {
  // const [data, setData] = useState([]);
  const [titles, setTitles] = useState([]);
  const [authors, setAuthors] = useState([]);
  var myTitles = [];
  var myAuthors = [];
  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=discipline&from=2023-09-07&sortBy=publishedAt&apiKey=a48b458983244e228ab37aec70ccebba&pageSize=20"
      )
      .then((res) => {
        // setData(res);
        const revdArray = res.data.articles;
        // author, title url
        // var extractedData = [];
        revdArray.map((e) => {
          const rtitle = e.title;
          const rauthor = e.author;
          console.log(rtitle);
          myTitles.push(rtitle);
          myAuthors.push(rauthor);

          // const rlink = e.link;
          // const myObj = {
          //   title: rtitle,
          //   author: rauthor,
          //   link: rlink,
          // };
          // extractedData.push(myObj);
        });

        // console.log("done");
        setTitles(myTitles);
        setAuthors(myAuthors);
        // setData(extractedData);
      });
  }, []);

  // console.log(myTitles, myAuthors);
  return (
    <div className="gradient-div-2" style={{ padding: "16px" }}>
      <div style={{ textAlign: "center" }}>
        <h1>Blogs</h1>
        <h5>Deep dive into the sea of knowledge.</h5>
      </div>
      <div
        className=""
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          padding: "12px",
        }}
      >
        <div class="card-container">
          {titles.map((element1, index) => {
            const element2 = authors[index];
            // Perform some operation on element1 and element2
            return (
              <div
                className="card-blog border-success mb-3 "
                style={{ maxWidth: "18rem" }}
              >
                <div className="card-header">{element2}</div>
                <div className="card-body text-success">
                  <h5 className="card-title">{element1}</h5>
                  {/* <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p> */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Blog;
