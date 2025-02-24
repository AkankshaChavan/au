import React, { useState } from 'react';
import LineChart from "./LineChart";
import PieChart from "./PieChart";
import Header from './header';
import Footer from './footer';

function ChUser() {

  // const [selectedCard, setSelectedCard] = useState('Credit Card 2');
  // console.log(selectedCard);
  // const handleCard = (e) => {
  //   setSelectedCard(e.target.value);
  //   console.log(selectedCard);
  // };

  const [selectedCard, setSelectedCard] = useState('Primary Card');
  const handleCard = (e) => setSelectedCard(e.target.value);

  return (
    <>
      <Header />
      <div className="px-10">
        <div className="dashboard-wrap">
          <div className="flex flex-col md:flex-row justify-between py-3 align-middle">
            <div className="w-full md:w-1/4 md:border-r-[1px] md:pr-2">
              <div className='w-full'>
                <label className='w-full text-[22px] mb-5'>My Cards</label>
                <select className='w-full border-[1px] block text-sm/6 text-gray-700 font-bold p-2 md:w-[90%]' id="dropdown" value={selectedCard} onChange={handleCard}>
                  <option value='Primary Card'>Primary Card</option>
                  <option value='Credit Card 2'>Credit Card 2</option>
                </select>
                {/* <p>Selected option: {selectedCard}</p> */}
              </div>
            </div>
            <div className='w-full md:w-3/4'>
              <div>card</div>
              <div>expense

                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-1/2">
                    <LineChart />
                  </div>
                  <div className="w-full md:w-1/2">
                    <PieChart />
                  </div>
                </div>

              </div>
              <div>transations</div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ChUser;
