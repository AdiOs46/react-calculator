import "./App.css"
import Button from "./components/Button.jsx"
import React, { useState } from "react";


function App() {
  return(
    <>
        <main>
          <div className="displayPanel">
            <input type="text" readOnly />
          </div>
          <div className="calculatorInput">
            <div className="row row1">
              <Button setClassName="operation" onButtonClick={"C"}/>
              <Button setClassName="operation" onButtonClick={"+/-"} />
              <Button setClassName="operation" onButtonClick={"%"} />
              <Button setClassName="operation" onButtonClick={"/"} />
            </div>
            <div className="row row2">
              <Button onButtonClick={"7"} />
              <Button onButtonClick={"8"} />
              <Button onButtonClick={"9"} />
              <Button setClassName="operation" onButtonClick={"X"} />
            </div>
            <div className="row row3">
              <Button onButtonClick={"4"} />
              <Button onButtonClick={"5"} />
              <Button onButtonClick={"6"} />
              <Button setClassName="operation" onButtonClick={"-"} />
            </div>
            <div className="row row4">
              <Button onButtonClick={"1"}/>
              <Button onButtonClick={"2"}/>
              <Button onButtonClick={"3"}/>
              <Button setClassName="operation" onButtonClick={"+"}/>
            </div>
            <div className="row row5">
              <Button onButtonClick={"0"}/>
              <Button onButtonClick={"."}/>
              <Button setClassName="equal" onButtonClick={"="}/>
            </div>
          </div>
        </main>
    </>
  );
}

export default App;