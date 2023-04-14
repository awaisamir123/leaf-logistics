import React from "react";

function NewsDetailComponent(props:any) {
  const newDetails =
   props.newsDetail;
  return (
    <div className="container">
      <div className="row mt-5 mb-3">
        <div className="col-lg-8 col-12 offset-lg-2">
          <h1>{newDetails?.title? newDetails?.title:''}</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-8 col-12 offset-lg-2">
          <div className="d-flex justify-content-between">
            <i className="text-info">
              <b>{newDetails?.author? newDetails?.author: ''}</b>
            </i>
            <i className="text-warning">{newDetails?.source.name ? newDetails.source.name: ''}</i>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-8 col-12 offset-lg-2">
          <img src={newDetails?.urlToImage} alt={newDetails?.title} className="w-100 h-100"></img>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-8 col-12 offset-lg-2">
          <small className="text-warning">
            <i>{newDetails?.description}</i>
          </small>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-8 col-12 offset-lg-2">
          <p>{newDetails?.content}</p>
        </div>
      </div>
    </div>
  );
}

export default NewsDetailComponent;
