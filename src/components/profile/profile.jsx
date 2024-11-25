import { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import FeedHeader from "../feed-header/feed-header";
import FeedSidebar from "../feed-sidebar/feed-sidebar";
import FeedProfile from '../feed-profile/feed-profile'

export default function Profile(){
  return (
    <div className="App">
      <div className="site-container">
        <FeedHeader />
        <FeedProfile />
        <FeedSidebar />
      </div>
    </div>
  );
}

