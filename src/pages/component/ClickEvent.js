import React, { useState } from "react";

const ClickEvent = () => {
  const [click, setClick] = useState(0);

  if (click > 3) {
    setClick(1);
  }
  return (
    <div className="button-click-box">
      <div className="box-section">
        <p>Click a Button 3 time to change a button Name</p>
        <button onClick={() => setClick((prvState) => prvState + 1)}>
          {click === 3 ? <>Bang</> : <>Click Me</>}
        </button>
      </div>
    </div>
  );
};

export default ClickEvent;
