import React from "react";

function Popup() {
  return (
    <div className="h-[230px] w-[450px]">
      <h2>React Chrome Extension</h2>
      <button onClick={() => alert("Hello!")}>Click Me</button>
    </div>
  );
}

export default Popup;