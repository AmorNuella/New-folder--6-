import React from "react";
import Contact from "./Pages/Contact";
/*import Navbar from "./component/Navbar";
import Content from "./component/Content";
import ImageSection from "./component/ImageSection";
import Half from "./component/Half";*/

const App = () => {
  return (
    <div>
      {/*
    <div className=" w-full h-full max-sm:w-full max-sm:h-screen max-sm:ml-2 ">
      <div className="h-96 w-46  bg-slate-400 float-right relative"></div>
      <Half />
      <div className="">
        <Navbar />
        <div className="flex w-full h-max my-8 items-start justify-start m-auto absolute max-md:flex-col-reverse max-md:items-center max-md:justify-center ">
          <Content />
          <ImageSection />
        </div>
      </div>
  </div>*/}
      <Contact />
    </div>
  );
};

export default App;
