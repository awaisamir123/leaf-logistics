import React from "react";
import { useNavigate } from "react-router-dom";

function CategoriesComponent(props: any) {
  const navigate = useNavigate();
  const newsCountry = localStorage.getItem(`country_code`) ?? "gb";
  const { articles } = props?.news;
  const handledDetails = (article: any) => {
    const articleDetails = { ...article, path: "/Categories" };
    localStorage.setItem("newsDetail", JSON.stringify(articleDetails));
    navigate("/news-detail");
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
        <div className="row ">
          {articles.map((article: any, index: any) => (
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
          ))}
        </div>
      </div>
    </>
  );
}

export default CategoriesComponent;
