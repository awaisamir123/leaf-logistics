import { TabTitle } from "../helpers/TabTitle.js";
import NavbarComponent from "../components/common/navbar/index.js";
import CategoriesComponent from "../components/categories";
import { useSelector } from "react-redux";

function Categories() {
  TabTitle("Top-News Leaf-Logistics");
  const { isLoading, newsListData } = useSelector(
    (state: any) => state.newsReducer
  );
  return (
    <>
      {" "}
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
        <CategoriesComponent news={newsListData} />
      )}
    </>
  );
}

export default Categories;
