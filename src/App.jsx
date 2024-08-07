import { useState } from "react";

import Card from "./components/card.component";
import Nav from "./components/nav.component";
import reactQuestions from "../src/jsonQuestions/reactQuestions.json";
import jsQuestions from "../src/jsonQuestions/jsQuestions.json";
import generalQuestions from "../src/jsonQuestions/generalQuestions.json";
import dotNetQuestions from "../src/jsonQuestions/netQuestions.json";

import "./App.css";

function App() {
  const [category, setCategory] = useState(reactQuestions);

  const categorySelection = (selection) => {
    console.log(selection);
    if (selection === "React") {
      setCategory(reactQuestions);
    } else if (selection === "JS") {
      setCategory(jsQuestions);
    } else if (selection === "General") {
      setCategory(generalQuestions);
    } else if (selection === "dotNet") {
      setCategory(dotNetQuestions);
    }
  };
  console.log(category);

  return (
    <div className="App">
      <Nav categorySelection={categorySelection} />
      <Card category={category} />
    </div>
  );
}

export default App;
