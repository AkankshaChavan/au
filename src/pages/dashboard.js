import React from "react";
import Header from "../component/header";
import Footer from "../component/footer";
import Admin from "../component/admin";
import ChUser from "../component/chUser";
import LineChart from "../component/LineChart";

function Dashboard() {
  return (
    <>
      <Header />
      <Admin />
      <LineChart />
      <Footer />
    </>
  );
}

export default Dashboard;
