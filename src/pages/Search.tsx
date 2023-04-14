import { useEffect } from "react";
import NavbarComponent from "../components/common/navbar/index.js";
import SearchComponent from "../components/search/index.jsx";
import { useDispatch, useSelector } from "react-redux";
import { resetNewsSlice } from "../redux/news/newsSlice.js";

function Search() {
  const dispatch = useDispatch<any>();
  useEffect(()=>{
    return ()=>{
      dispatch(resetNewsSlice())
    }
  },[])
  return (
    <>
    <NavbarComponent/>
    <SearchComponent/>
    </>
  )
}

export default Search