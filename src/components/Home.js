import React from "react";
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import InsertData from "./InsertData"; // ✅ जोड़ा गया

const Home = () => {
  return (
    <>
      <InsertData />  {/* ✅ Data DB में insert करेगा (1st time only) */}
      <TopBar />
      <Dashboard />
    </>
  );
};

export default Home;
