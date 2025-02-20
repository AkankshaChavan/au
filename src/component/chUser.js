import React, { useState } from 'react';
import LineChart from "./LineChart";
import PieChart from "./PieChart";

function ChUser() {

  const [selectedCard, setSelectedCard] = useState('');
  const handleChange = (event) => {
    setSelectedCard(event.target.value);
    console.log(selectedCard);
  };

  return (
    <>
      <div className="px-10">
        <div className="dashboard-wrap">
          <div className="flex flex-col md:flex-row justify-between py-3 align-middle">
            <div className="w-full md:w-1/4 md:border-r-[1px] md:pr-2">
              <div className='w-full'>
                <label className='w-full'>My Cards</label>
                <select className='w-full border-[0px]' id="dropdown" value={selectedCard} onChange={handleChange}>
                  <option value="option1">Primary Card</option>
                  <option value="option2">Credit Card 2</option>
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
    </>
  );
}

export default ChUser;
