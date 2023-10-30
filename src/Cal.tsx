import  { useState } from 'react';

import Piechart from './Piechart';



const Cal = () => {
  const [monthlyInvestement, setmonthlyInvestement] = useState(500);
  const [monthlyInvestementnumber, setmonthlyInvestementnumber] = useState(500);
  const [rate, setrate] = useState(1);
  const [ratenumber, setratenumber] = useState(1);
  const [year, setyear] = useState(1);
  const [yearnumber, setyearnumber] = useState(1);
  const [totalinvestement,settotalinvestement] = useState(0);
  const [est_returns,setest_returns] = useState(0);
  const [totalvalue,settotalvalue] = useState(0);

  


  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue: number = parseInt(e.target.value);
    setmonthlyInvestement(newValue);
    setmonthlyInvestementnumber(newValue);
    settotalinvestement(newValue*12*year);
    settotalvalue(newValue * (Math.pow(1 + rate / (12 * 100), 12 * year) - 1) * ((1 + rate / (12 * 100)) / (rate / (12 * 100))));
    setest_returns((newValue * (Math.pow(1 + rate / (12 * 100), 12 * year) - 1) * ((1 + rate / (12 * 100)) / (rate / (12 * 100))))-(newValue*12*year));
  };
  const handleNumberChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    const newValue: number = parseInt(e.target.value);
    if (newValue <= 100000 && newValue >= 500) {
      setmonthlyInvestementnumber(newValue);
      setmonthlyInvestement(newValue);
      settotalinvestement(newValue*12*year);
      settotalvalue(newValue * (Math.pow(1 + rate / (12 * 100), 12 * year) - 1) * ((1 + rate / (12 * 100)) / (rate / (12 * 100))));
      setest_returns((newValue * (Math.pow(1 + rate / (12 * 100), 12 * year) - 1) * ((1 + rate / (12 * 100)) / (rate / (12 * 100))))-(newValue*12*year));
    }
  };
  const handleRangeChange1 = (e : React.ChangeEvent<HTMLInputElement>) => {
    const newValue: number = parseInt(e.target.value);
    
    setrate(newValue);
    setratenumber(newValue);
    settotalvalue(monthlyInvestement * (Math.pow(1 + newValue / (12 * 100), 12 * year) - 1) * ((1 + newValue/ (12 * 100)) / (newValue / (12 * 100))));
    setest_returns((monthlyInvestement * (Math.pow(1 + newValue / (12 * 100), 12 * year) - 1) * ((1 + newValue/ (12 * 100)) / (newValue / (12 * 100))))-totalinvestement);
  };
  const handleNumberChange1 = (e : React.ChangeEvent<HTMLInputElement>) => {
    const newValue: number = parseInt(e.target.value);
    if (newValue <= 30 && newValue >= 1) {
      setratenumber(newValue);
      setrate(newValue);
      settotalinvestement(newValue);
      settotalvalue(monthlyInvestement * (Math.pow(1 + newValue / (12 * 100), 12 * year) - 1) * ((1 + newValue/ (12 * 100)) / (newValue / (12 * 100))));
      setest_returns((monthlyInvestement * (Math.pow(1 + newValue / (12 * 100), 12 * year) - 1) * ((1 + newValue/ (12 * 100)) / (newValue / (12 * 100))))-totalinvestement);
    }
  };

  const handleRangeChange2 = (e : React.ChangeEvent<HTMLInputElement>) => {
    const newValue: number = parseInt(e.target.value);
    
    setyear(newValue);
    setyearnumber(newValue);
    settotalinvestement(newValue*12*monthlyInvestement);
    settotalvalue(monthlyInvestement * (Math.pow(1 + rate / (12 * 100), 12 * newValue) - 1) * ((1 + rate / (12 * 100)) / (rate / (12 * 100))));
    setest_returns((monthlyInvestement * (Math.pow(1 + rate / (12 * 100), 12 * newValue) - 1) * ((1 + rate / (12 * 100)) / (rate / (12 * 100))))-(newValue*12*monthlyInvestement));
    
  };
  const handleNumberChange2 = (e : React.ChangeEvent<HTMLInputElement>) => {
    const newValue: number = parseInt(e.target.value);
    if (newValue <= 40 && newValue >= 1) {
      setyearnumber(newValue);
      setyear(newValue);
      setmonthlyInvestement(newValue*12*monthlyInvestement);
      settotalvalue(newValue);
      settotalvalue(monthlyInvestement * (Math.pow(1 + rate / (12 * 100), 12 * newValue) - 1) * ((1 + rate / (12 * 100)) / (rate / (12 * 100))));
      setest_returns((monthlyInvestement * (Math.pow(1 + rate / (12 * 100), 12 * newValue) - 1) * ((1 + rate / (12 * 100)) / (rate / (12 * 100))))-(newValue*12*monthlyInvestement));
    }
  };

  return (
<div className = "  sm:mt-[1%] duration-75    ">
  
  <div className = "w-96 mx-auto p-4 ">
    <div  >
        <div className = "flex gap-8 justify-between">
            <label htmlFor="monthlyInvestment " className = "font-bold ">Monthly Investement  </label>
            <div className = "flex">
              <span className = "pl-1 absolute font-bold ml-2 text-blue-700">₹</span>
            <input className = "w-32 outline-none  rounded-sm shadow-lg font-bold text-end  text-blue-700 bg-blue-200  "
                type="number"
                id="numberInput"
                min="500"
                max="100000"
                step="1"
                value={monthlyInvestementnumber}
                onChange={handleNumberChange}
            />
            </div>
        </div>
        <input className = " "
            type="range"
            id="rangeInput"
            min="500"
            max="100000"
            step="1"
            value={monthlyInvestement}
            onChange={handleRangeChange}
        />
       
    </div>
    <div>
        <div className = "flex gap-8 justify-between items-center">
            <label htmlFor="monthlyInvestment  " className = "font-bold ">Expected Return Rate(p.a)</label>
            <div className='flex'>
            
            <input className = "w-32  rounded-sm shadow-lg font-bold outline-none text-blue-700 bg-blue-200 px-2 "
                type="number"
                id="numberInput"
                min="1"
                max="30"
                step="1"
                value={ratenumber}
                onChange={handleNumberChange1}
            />
            <span className = "absolute ml-7 font-extrabold text-blue-700">%</span>
            </div>
        </div>
        <input className = ""
            type="range"
            id="rangeInput"
            min="1"
            max="30"
            step="1"
            value={rate} 
            onChange={handleRangeChange1}
        />
        
      </div>
      <div>
        <div className = "flex gap-8 justify-between">
            <label htmlFor="monthlyInvestment  " className = "font-bold ">Time Period </label>
            <div className='flex'>
            <input className = "w-32 outline-none rounded-sm shadow-lg font-bold text-blue-700 px-2 bg-blue-200 "
                type="number"
                id="numberInput"
                min="1"
                max="40"
                step="1"
                value={yearnumber}
                onChange={handleNumberChange2}
            /><span className = "absolute text-blue-700 ml-7 font-bold mt-[1px]">Yr</span>
            </div>
        </div>
        <input className = " "
            type="range"
            id="rangeInput"
            min="1"
            max="40"
            step="1"
            value={year}
            onChange={handleRangeChange2}
        />
        
    </div>
    </div>
    <div className = "mx-auto border-slate-300 border-2 items-center flex flex-col w-96 p-2 mb-4 sm:flex-row sm:w-[40rem]">
      <div className = " w-96  flex-col p-4  ">
      <div className = "justify-between flex"><span>Invested Amount :</span><span>₹ {totalinvestement}</span></div>
      <div className = "justify-between flex"><span>Est. Returns :</span> <span>₹ {est_returns} </span></div>
      <div className = "justify-between flex"><span>Total Value :</span><span>₹ {totalvalue} </span> </div>
      
      </div>
      <div className = " w-72 h-72" >
      <Piechart estreturns = {`${est_returns}`}  invested = {`${totalinvestement}`} />
      </div>
      
      </div>
</div>

  
      
    
  );
};

export default Cal;
