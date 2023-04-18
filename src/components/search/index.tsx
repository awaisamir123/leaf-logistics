import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetNewsSlice, searchNews } from "../../redux/news/newsSlice";

function SearchComponent() {
  const navigate = useNavigate();
  const dispatch = useDispatch<any>();
  const newsCountry = localStorage.getItem(`country_code`) ?? "gb";
  const { isLoading, searchNewsData } = useSelector(
    (state: any) => state.newsReducer
  );
  const [searchValue, setSearchValue] = useState("");
  useEffect(() => {
    if (searchValue) {
      dispatch(searchNews(searchValue));
    }
  }, [newsCountry]);
  const handledDetails = (article: any) => {
    const articleDetails = { ...article, path: "/search" };
    localStorage.setItem("newsDetail", JSON.stringify(articleDetails));
    navigate("/news-detail");
  };
  const searcDetails = (e: any) => {
    e.preventDefault();
    setSearchValue(e?.target?.value);
    let searchTerm: any = e?.target?.value;
    if (searchTerm) {
      dispatch(searchNews(searchTerm));
    } else {
      dispatch(resetNewsSlice());
    }
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 mt-5 mb-5 d-flex">
            <h2>
              News by{" "}
              <span className="text-info">
                {newsCountry === "gb" ? "Great Britian" : "United States"}
              </span>
            </h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="w-50 mt-3 mb-2">
            <div className="form-outline text-center">
              <div className="input-group telegram rounded">
                <span className="input-group-text background-search">
                  <i className="bi bi-search"></i>
                </span>
                <input
                  type="search"
                  id="form1"
                  className="form-control border-search"
                  placeholder="search term.."
                  value={searchValue}
                  onChange={(e) => searcDetails(e)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row ">
          {searchNewsData?.articles?.length ? (
            searchNewsData.articles.map((article: any, index: any) => (
              <React.Fragment key={index}>
                <div
                  className="col-md-4 col-12 mt-2 mb-4 "
                  data-aos="fade-up"
                  onClick={() => handledDetails(article)}
                >
                  <div className="card services h-100 p-3">
                    <h5 className="d-flex align-items-center card-title text-dark text-center h-100">
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
                      {article?.content?.split("").slice(0, 130).join("") ||
                        article?.description?.split("").slice(0, 130).join("")}
                      <span> </span>
                      <span className="text-decoration-underline text-primary">
                        More
                        <i
                          className="bi bi-chevron-right"
                          style={{ fontSize: "13px" }}
                        ></i>
                      </span>
                    </p>
                  </div>
                </div>
              </React.Fragment>
            ))
          ) : (
            <>
              {isLoading ? (
                <div className="row">
                  <div className="">
                    <div className="">
                      <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <span>No Data</span>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default SearchComponent;
