import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

const saverPhoto =
  "https://images.unsplash.com/photo-1541332246502-2e99eaa96cc1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80";

export const Home = (props) => (
  <div className="homePage">
    <div className="Title1">
      <h2>{props.Title}</h2>
    </div>
    <div className="none" style={{ height: 1000 }}>
      <div className="card" style={{ margin: "auto", width: 400 }}>
        <img src={saverPhoto} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  </div>
);
