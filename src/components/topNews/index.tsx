import React from "react";
import { Link, useNavigate } from "react-router-dom";
import britain from "../../assets/britain.svg";
import { useSelector } from "react-redux";

function TopNewsComponent(props: any) {
  const { isLoading, newsListData } = useSelector(
    (state: any) => state.newsReducer
  );
  const navigate = useNavigate();
  const { articles } = props?.news;
  const newsCountry = localStorage.getItem(`country_code`) ?? "gb";
  const handledDetails = (article:any) => {
    localStorage.setItem("newsDetail", JSON.stringify(article));
    navigate("/news-detail");
  };
  return (
    <>
      <div className="container">
        {isLoading ? (
          <div className="row">
            <div className="col-12 mt-5 mb-5 d-flex">
              <div className="">
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="row">
              <div className="col-12 mt-5 mb-5 d-flex">
                <h2>
                  News From{" "}
                  <span className="text-info">
                    {newsCountry === "gb" ? "Great Britian" : "United States"}
                  </span>
                </h2>
              </div>
            </div>
            <div className="row ">
              {articles?.length
                ? articles.map((article: any, index: any) => (
                    <React.Fragment key={index}>
                      <div
                        className="col-md-4 col-12 mt-2 mb-4 "
                        data-aos="fade-up"
                        onClick={()=>handledDetails(article)}
                      >
                          <div className="card services h-100 p-3">
                            <h5 className="card-title text-dark text-center h-100">
                              {article.title}
                            </h5>
                            <div></div>
                            <hr className="hr-info" />
                            <div className="img-header">
                              <img
                                data-aos="zoom-in"
                                data-aos-duration="1000"
                                className="card-img-top "
                                src={
                                  article.urlToImage ??
                                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAAja6c9Ip37JMYpOmIIe9JGv16LvccS2OoCpr2Evz5Gv2-ImNwePvBoxNWctyWlJwYmA&usqp=CAU"
                                }
                                alt="Cardimagecap"
                              />
                            </div>

                            <p className="text-muted mt-3">
                              {article?.description
                                ?.split("")
                                .slice(0, 160)
                                .join("")}
                              ...
                            </p>
                          </div>
                      </div>
                    </React.Fragment>
                  ))
                : ""}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default TopNewsComponent;
