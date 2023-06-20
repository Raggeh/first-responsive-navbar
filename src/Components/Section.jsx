import React from 'react'
import Raggeh from './Raggeh.jpg';

const section = () => {
  return (
    <div className="w-full h-auto md:h-[350px] bg-slate-300">
      <div className="md:grid block md:grid-cols-2 justify-between md:gap-2 px-2">

        <div >
          <h1 className='font-bold text-2xl py-8'> Welcome to CA2020 React Course </h1>
          <p className='pb-5' > Start youtr journey as a developer here !</p>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg ">
            {" "}
            Get Started{" "}
          </button>
        </div >
        <div className="md:ml-auto ">
          <img
            src={Raggeh}
            alt=""
            className="w-79 h-[200px] mr-24 mt-10 rounded-md"
          />
        </div>
      </div>
    </div>
  );
}

export default section