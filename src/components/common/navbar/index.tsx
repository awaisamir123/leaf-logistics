import { Link, useMatch } from "react-router-dom";
import React, { useEffect, useState } from "react";
// import { Navbar, Container, Nav } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { onNewsList } from "../../../redux/news/newsSlice";
function NavbarComponent() {
//   const [bgcolor, setBgcolor] = useState("grey");
//   const [textcolor, setTextcolor] = useState("red");

//   function handleHighlightTab() {
//     setBgcolor("red");
//     setTextcolor("black");
//   }
const [countryCode, setCountryCode] = useState('gb')
const dispatch = useDispatch<any>();
useEffect(()=>{
  const countryName = localStorage.getItem(`country_code`);
  dispatch(onNewsList())
  if(!countryName){
    localStorage.setItem(`country_code`,'gb')
    setCountryCode('gb')
  }else {
    setCountryCode(countryName)
  }
},[])
const setCountry = (code:string)=>{
  localStorage.setItem(`country_code`,`${code}`)
  setCountryCode(code)
  dispatch(onNewsList())
}
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className={`nav-link ${useMatch("/") ? "fw-bolder" : ""}`} to={"/"}>
              Top News
            </Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${useMatch("/categories") ? "fw-bolder" : ""}`} to={"/categories"}>
              Categories
            </Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${useMatch("/search") ? "fw-bolder" : ""}`} to={"/search"}>
              Search
            </Link>
          </li>
        </ul>
        <ul className="navbar-nav">
          <li className={`nav-item m-2 btn ${(countryCode === 'gb') ? ' fw-bolder':''}`} onClick={()=>setCountry('gb')}>GB</li>
          <li className={`nav-item m-2 btn ${(countryCode === 'us') ? ' fw-bolder':''}`} onClick={()=>setCountry('us')}>US</li>
        </ul>
      </div>
    </nav>
    </div>
  );
}

export default NavbarComponent;
