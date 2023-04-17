import React from "react";
import { useNavigate } from "react-router-dom";

function NewsDetailComponent(props: any) {
  const navigate = useNavigate();
  const newDetails = props.newsDetail;
  return (
    <div className="container">
      <div className="row mt-5 mb-3">
        <div className="col-lg-8 col-12 offset-lg-2">
          <h1>{newDetails?.title ? newDetails?.title : ""}</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-8 col-12 offset-lg-2">
          <div className="d-flex justify-content-between">
            <i className="text-info">
              <b>{newDetails?.author ? newDetails?.author : ""}</b>
            </i>
            <i className="text-warning">
              {newDetails?.source.name ? newDetails.source.name : ""}
            </i>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-8 col-12 offset-lg-2">
          <img
            src={newDetails?.urlToImage ?? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAAja6c9Ip37JMYpOmIIe9JGv16LvccS2OoCpr2Evz5Gv2-ImNwePvBoxNWctyWlJwYmA&usqp=CAU"}
            alt={newDetails?.title}
            className="w-100 h-100"
          ></img>
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
      <div className="row mt-2" onClick={()=>{
         navigate(`${newDetails.path}`)
      }}>
        <span className="col-lg-8 d-flex col-12 float-left offset-lg-2 text-decoration-underline text-primary">
        <i className="bi bi-chevron-left pt-1" style={{ fontSize: "13px" }}></i>Back to list
        </span>
      </div>
    </div>
  );
}

export default NewsDetailComponent;
