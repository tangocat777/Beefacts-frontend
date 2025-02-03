import React from "react";
import BeeFactContainer from './BeeFactContainer';

import "./App.css";

function App() {
  return (
    <>
    <div className='flex flex-row min-h-screen justify-center items-center'>
          <section className="text-gray-600 body-font">
      <div className="max-w-5xl pt-52 pb-24 mx-auto">
        <h1 className="text-80 text-center font-4 lh-6 ld-04 font-bold text-white mb-6">
          Welcome to Mitchell's Bee Facts!
        </h1>
        <BeeFactContainer/>
      </div>
      <div className="container flex flex-col items-center justify-center mx-auto">
        <img
          alt=""
          className="object-cover object-center w-3/4 mb-10 border shadow-md g327"
          src="./images/placeholder.png"
        ></img>
      </div>
      </section>
  </div>
  </>
  );
}

export default App;
