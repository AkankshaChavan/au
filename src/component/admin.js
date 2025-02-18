import React from "react";
import LineChart from "./LineChart";
import PieChart from "./PieChart";

function Admin() {
  return (
    <>
      <div className="px-10">
        <div className="dashboard-wrap">
          <div className="flex flex-auto justify-between border-b-[1px] py-3 align-middle">
            <div>
              <h1 className="text-[16px] bold">Admin Dashboard</h1>
            </div>
            {/* <div className='top-search'>
              <input type='text' placeholder='Search'
              className='w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6d3078]-500 focus:border-[#6d3078]-500'></input>
            </div> */}
          </div>

          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2">
              <LineChart />
            </div>
            <div className="w-full md:w-1/2">
              <PieChart />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Admin;
