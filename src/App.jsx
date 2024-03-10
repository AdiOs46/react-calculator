import "./App.css"
import Button from "./components/Button.jsx"

function App() {
  return(
    <>
        <header>
          <h1>Adi's Calculator App</h1>
        </header>
        <main>
          <div className="displayPanel">
            <input type="text" readOnly />
          </div>
          <div className="calculatorInput">
            <div className="row row1">
              <Button onButtonClick={"Clear"}/>
              <Button onButtonClick={"+-"} />
              <Button onButtonClick={"%"} />
              <Button onButtonClick={"/"} />
            </div>
            <div className="row row2">
              <Button onButtonClick={"7"} />
              <Button onButtonClick={"8"} />
              <Button onButtonClick={"9"} />
              <Button onButtonClick={"X"} />
            </div>
            <div className="row row3">
              <Button onButtonClick={"4"} />
              <Button onButtonClick={"5"} />
              <Button onButtonClick={"6"} />
              <Button onButtonClick={"-"} />
            </div>
            <div className="row row4">
              <Button onButtonClick={"1"}/>
              <Button onButtonClick={"2"}/>
              <Button onButtonClick={"3"}/>
              <Button onButtonClick={"+"}/>
            </div>
            <div className="row row5">
              <Button onButtonClick={"0"}/>
              <Button onButtonClick={"."}/>
              <Button onButtonClick={"="}/>
            </div>
          </div>
        </main>
    </>
  );
}

export default App;