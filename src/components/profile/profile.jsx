import { Component } from "react";
import {BrowserRouter as Router, Routes, Route, Link, useParams} from "react-router-dom";

import FeedHeader from "../feed-header/feed-header";
import FeedSidebar from "../feed-sidebar/feed-sidebar";
import FeedProfile from '../feed-profile/feed-profile'

export default function Profile(){
    const { id } = useParams();

  return (
    <div className="App">
      <div className="site-container">
        <FeedHeader />
        <FeedProfile userId={id}/>
        <FeedSidebar />
      </div>
    </div>
  );
}

