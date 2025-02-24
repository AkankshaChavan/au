import React, { useState } from "react";
import { Link } from "react-router-dom";
import LineChart from "./LineChart";
import PieChart from "./PieChart";

function ChUser() {
  const [selectedCard, setSelectedCard] = useState("card1");

  const handleCardChange = (event) => {
    setSelectedCard(event.target.value);
  };

  return (
    <>
      <div className="px-2 md:px-10">
        <div className="dashboard-wrap">
          <div className="flex flex-col md:flex-row justify-between py-3 align-middle h-screen">
            <div className="w-full md:w-1/4 md:border-r-[1px] md:pr-5 pb-[50px] flex flex-col justify-between">
              <div className="w-full space-y-3">
                <label className="block text-sm/6 text-gray-700 font-bold">
                  My Cards
                </label>

                <div className="w-full">
                  <input
                    className="accent-[#6d3078]"
                    type="radio"
                    name="userSelectedCard"
                    value="card1"
                    checked={selectedCard === "card1"}
                    onChange={handleCardChange}
                  />
                  <label className="ml-3" for="card1">
                    Primary Card
                  </label>

                  <div className="relative w-full {selectedCard === 'card1' ? 'show' : 'hide'}">
                    <div className="card-bg bg-cover w-[250px] h-[165px] rounded-[25px]">
                      <div className="text-white h-full flex flex-col justify-evenly">
                        <div className="px-5 py-2">
                          <p>Credit Card</p>
                        </div>
                        <div className="px-5 py-2">
                          <p className="tracking-[2px]">4111 1111 1111 1111</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <div className="w-full">
                  <input
                    className="accent-[#6d3078]"
                    type="radio"
                    name="userSelectedCard"
                    value="card2"
                    checked={selectedCard === "card2"}
                    onChange={handleCardChange}
                  />
                  <label for="card2" className="ml-3">
                    Credit Card 2
                  </label>

                  <div className="relative w-full {selectedCard === 'card2' ? 'show' : 'hide'}">
                    <div className="card-bg bg-cover w-[250px] h-[165px] rounded-[25px]">
                      <div className="text-white h-full flex flex-col justify-evenly">
                        <div className="px-5 py-2">
                          <p>Credit Card</p>
                        </div>
                        <div className="px-5 py-2">
                          <p className="tracking-[2px]">4111 1111 1111 1111</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}

                {/* <div className="feild w-full mx-auto">
                  <button
                    type="submit"
                    className="w-full bg-[#9a48a9] hover:bg-[#6d3078] text-white p-2 m-auto border-none rounded-md my-5"
                  >
                    Select Card
                  </button>
                </div> */}

                {/* <p>Selected option: {selectedCard}</p> */}
              </div>

              <div className="flex flex-row gap-3">
                <button className="w-full bg-[#9a48a9] hover:bg-[#6d3078] text-white p-2 m-auto border-none rounded-md my-5 text-center">
                  <Link to="/edit-profile">Edit Profile</Link>
                </button>
                <button className="w-full bg-[#9a48a9] hover:bg-[#6d3078] text-white p-2 m-auto border-none rounded-md my-5 text-center">
                  <Link to="/change-pin">Change Pin</Link>
                </button>
              </div>
            </div>
            <div className="w-full md:w-3/4 px-5 overflow-y-auto pb-[50px] scrollbar-hide">
              <div>
                {/* expense */}
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-1/2">
                    <LineChart />
                  </div>
                  <div className="w-full md:w-1/2">
                    <PieChart />
                  </div>
                </div>
              </div>

              <div>
                <h1 className="text-center text-[24px] my-5 font-bold">
                  Transaction History
                </h1>
                <div className="overflow-x-auto">
                  <table className="min-w-full table-auto border-collapse border border-gray-300 md:max-w-[500px] md:overflow-x-scroll">
                    <thead>
                      <tr className="bg-[#D9D9D9]">
                        <th className="px-4 py-2 text-left border-b">
                          Transactions
                        </th>
                        <th className="px-4 py-2 text-left border-b">Time</th>
                        <th className="px-4 py-2 text-left border-b">Date</th>
                        <th className="px-4 py-2 text-left border-b">Amount</th>
                        <th className="px-4 py-2 text-left border-b">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="odd:bg-white even:bg-[#F2F2F2]">
                        <td className="px-4 py-2 border-b">Express Shopping</td>
                        <td className="px-4 py-2 border-b">5:30:16 AM</td>
                        <td className="px-4 py-2 border-b">25-Jan-2025</td>
                        <td className="px-4 py-2 border-b">₹ 1500</td>
                        <td className="px-4 py-2 border-b">Success</td>
                      </tr>
                      <tr className="odd:bg-white even:bg-[#F2F2F2]">
                        <td className="px-4 py-2 border-b">Online Course</td>
                        <td className="px-4 py-2 border-b">1:15:45 PM</td>
                        <td className="px-4 py-2 border-b">24-Jan-2025</td>
                        <td className="px-4 py-2 border-b">₹ 2000</td>
                        <td className="px-4 py-2 border-b">Failed</td>
                      </tr>
                      <tr className="odd:bg-white even:bg-[#F2F2F2]">
                        <td className="px-4 py-2 border-b">Food Delivery</td>
                        <td className="px-4 py-2 border-b">9:30:00 PM</td>
                        <td className="px-4 py-2 border-b">23-Jan-2025</td>
                        <td className="px-4 py-2 border-b">₹ 650</td>
                        <td className="px-4 py-2 border-b">Pending</td>
                      </tr>
                      <tr className="odd:bg-white even:bg-[#F2F2F2]">
                        <td className="px-4 py-2 border-b">Gym Membership</td>
                        <td className="px-4 py-2 border-b">8:00:12 AM</td>
                        <td className="px-4 py-2 border-b">22-Jan-2025</td>
                        <td className="px-4 py-2 border-b">₹ 3500</td>
                        <td className="px-4 py-2 border-b">Success</td>
                      </tr>
                      <tr className="odd:bg-white even:bg-[#F2F2F2]">
                        <td className="px-4 py-2 border-b">Ebook Purchase</td>
                        <td className="px-4 py-2 border-b">10:45:25 AM</td>
                        <td className="px-4 py-2 border-b">21-Jan-2025</td>
                        <td className="px-4 py-2 border-b">₹ 499</td>
                        <td className="px-4 py-2 border-b">Success</td>
                      </tr>
                      <tr className="odd:bg-white even:bg-[#F2F2F2]">
                        <td className="px-4 py-2 border-b">Restaurant Bill</td>
                        <td className="px-4 py-2 border-b">2:20:12 PM</td>
                        <td className="px-4 py-2 border-b">20-Jan-2025</td>
                        <td className="px-4 py-2 border-b">₹ 1200</td>
                        <td className="px-4 py-2 border-b">Failed</td>
                      </tr>
                      <tr className="odd:bg-white even:bg-[#F2F2F2]">
                        <td className="px-4 py-2 border-b">Concert Tickets</td>
                        <td className="px-4 py-2 border-b">6:00:35 PM</td>
                        <td className="px-4 py-2 border-b">19-Jan-2025</td>
                        <td className="px-4 py-2 border-b">₹ 3000</td>
                        <td className="px-4 py-2 border-b">Success</td>
                      </tr>
                      <tr className="odd:bg-white even:bg-[#F2F2F2]">
                        <td className="px-4 py-2 border-b">Mobile Recharge</td>
                        <td className="px-4 py-2 border-b">12:10:00 AM</td>
                        <td className="px-4 py-2 border-b">18-Jan-2025</td>
                        <td className="px-4 py-2 border-b">₹ 500</td>
                        <td className="px-4 py-2 border-b">Pending</td>
                      </tr>
                      <tr className="odd:bg-white even:bg-[#F2F2F2]">
                        <td className="px-4 py-2 border-b">Gift Voucher</td>
                        <td className="px-4 py-2 border-b">11:25:40 PM</td>
                        <td className="px-4 py-2 border-b">17-Jan-2025</td>
                        <td className="px-4 py-2 border-b">₹ 1000</td>
                        <td className="px-4 py-2 border-b">Success</td>
                      </tr>
                      <tr className="odd:bg-white even:bg-[#F2F2F2]">
                        <td className="px-4 py-2 border-b">
                          Movie Subscription
                        </td>
                        <td className="px-4 py-2 border-b">3:45:12 PM</td>
                        <td className="px-4 py-2 border-b">16-Jan-2025</td>
                        <td className="px-4 py-2 border-b">₹ 799</td>
                        <td className="px-4 py-2 border-b">Failed</td>
                      </tr>
                      <tr className="odd:bg-white even:bg-[#F2F2F2]">
                        <td className="px-4 py-2 border-b">Mobile Purchase</td>
                        <td className="px-4 py-2 border-b">4:30:00 PM</td>
                        <td className="px-4 py-2 border-b">15-Jan-2025</td>
                        <td className="px-4 py-2 border-b">₹ 15000</td>
                        <td className="px-4 py-2 border-b">Success</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChUser;
