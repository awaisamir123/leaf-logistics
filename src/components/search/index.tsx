import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { searchNews } from "../../redux/news/newsSlice";

function SearchComponent() {
  const navigate = useNavigate();
  const dispatch = useDispatch<any>();
  const { isLoading, searchNewsData } =
  useSelector((state: any) => state.newsReducer);
  const [searchValue, setSearchValue] = useState();
  const handledDetails = (article:any) => {
   
    localStorage.setItem("newsDetail", JSON.stringify(article));
    navigate("/news-detail");
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 mt-5 mb-5 d-flex">
            <h2>
              News by <span className="text-info">Great Britian</span>
            </h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="w-50 mt-3 mb-2">
            <div className="form-outline text-center">
              <input
                type="search"
                id="form1"
                className="form-control"
                placeholder="search term.."
                value={searchValue}
                onChange={(e:any) => setSearchValue(e.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    dispatch(searchNews(searchValue));
                  }
                }}
              />
            </div>
          </div>
        </div>
        <div className="row ">
          {searchNewsData?.articles?.length ?
            searchNewsData.articles.map((article:any, index:any) => (
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
                          src={article.urlToImage}
                          alt="Cardimagecap"
                        />
                      </div>

                      <p className="text-muted mt-3">
                        {article?.content?.split("").slice(0, 130).join("") ||
                          article?.description
                            ?.split("")
                            .slice(0, 130)
                            .join("")}
                        ...
                      </p>
                    </div>
                </div>
              </React.Fragment>
            )):<span>
              No Data
              </span>}
        </div>
      </div>
    </>
  );
}

export default SearchComponent;
