import { useState } from "react";
import BlockReveal from "./BlockReveal";
import "./styles.scss";

const App = () => {
  const [startAnimation, setStartAnimation] = useState(false);
  return (
    <div className="App" style={{ display: "flex", flexDirection: "column" }}>
      <BlockReveal start={startAnimation} direction={"up"} color={"black"}>
        <div
          onMouseEnter={() => setStartAnimation(true)}
          className="test-block"
        >
          Hello
        </div>
      </BlockReveal>
      <button onClick={() => setStartAnimation(true)}>Start</button>
      <h1>Hover or click the button</h1>
    </div>
  );
};

export default App;
