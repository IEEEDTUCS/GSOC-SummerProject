import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HomeCard from "./components/HomeCard";

function App() {
  const a = 23;
  console.log(a);
  return (
    <>
      <h1 className="text-3xl font-bold">IEEE Summer of Code</h1>
      <div className="flex justify-center items-center">
        <HomeCard/>
      </div>
    </>
  );
}

export default App;
