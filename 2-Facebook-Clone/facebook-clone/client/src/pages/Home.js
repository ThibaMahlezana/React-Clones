import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";

function Home() {
  return (
    <div className="App">
      <Header />
      <div className="body">
        <Sidebar />
        <Feed />
      </div>
    </div>
  );
}

export default Home;
