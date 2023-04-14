import NavbarComponent from "../components/common/navbar/index.jsx";
import { TabTitle } from "../helpers/TabTitle.jsx";
import TopNewsComponent from "../components/topNews/index.jsx";
import { useSelector } from "react-redux";

function TopNews() {
  const { isLoading, newsListData } = useSelector(
    (state: any) => state.newsReducer
  );

  TabTitle("Top-News");
  return (
    <>
      <NavbarComponent />
      {isLoading ? (
        <div className="container mt-5">
          <div className="text-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      ) : (
        <TopNewsComponent news={newsListData} />
      )}
      {/* <TopNewsComponent news={newsListData} /> */}
    </>
  );
}

export default TopNews;
