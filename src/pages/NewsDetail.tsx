import React from 'react'
import NavbarComponent from '../components/common/navbar'
import NewsDetailComponent from '../components/newsDetail'

function NewsDetails() {
  // @ts-ignore
  const newsDetail:any = JSON.parse(localStorage?.getItem("newsDetail"));
  return (
    <>
    <NavbarComponent/>
    <NewsDetailComponent newsDetail={newsDetail}/>
    </>
  )
}

export default NewsDetails