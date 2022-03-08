import React from "react";

const saverPhoto =
  "https://images.unsplash.com/photo-1541332246502-2e99eaa96cc1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=800&q=80";

export const Card = (props) => (
  <div className="homePage">
    <div className="Title1">
      <h2>{props.title1}</h2>
    </div>
    <section className="py-4 py-lg-5 container horizontal-scrollable">
      <div className="row">
        <div className="col-sm-3">
          <div className="card">
            <img src={saverPhoto} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div className="Title2">
      <h2>{props.title2}</h2>
    </div>
    <section className="py-4 py-lg-5 container">
      <div className="row">
        <div className="col-sm-3">
          <div className="card">
            <img src={saverPhoto} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>        
      </div>
    </section>
    <div className="Title3">
      <h2>{props.title3}</h2>
    </div>
    <section className="py-4 py-lg-5 container">
      <div className="row">
        <div className="col-sm-3">
          <div className="card">
            <img src={saverPhoto} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>      
      </div>
    </section>
  </div>
);
