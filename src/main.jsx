import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="fixed">
      <div className="circlePosition w-[274px] h-[274px] rounded-[1000px] blur-[200px] bg-[#7214FF] translate-y-3/4 fixed left-0 "></div>
      <div className="circlePosition w-[274px] h-[274px] rounded-[1000px] blur-[200px] bg-[#32CAFD] translate-y-3/4 fixed right-0"></div>

      <div className="circlePosition w-[274px] h-[274px] rounded-[1000px] blur-[200px] bg-[#7214FF] translate-y-3/4 fixed bottom-0 left-[600px]"></div>
    </div>
    <div className="relative z-10">
    <App />
    </div>
  </React.StrictMode>
);
