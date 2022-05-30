import {useState, useEffect} from "react";
import Question from "./Question.js";
import Navbar from "../Navbar.js";

const TriviaApp = () => {
  const URL = "https://opentdb.com/api.php?amount=10&category=15&difficulty=easy&type=multiple";

  const [data, setData] = useState();

  useEffect(() => {
    fetch(URL)
    .then((res) => res.json())
    .then(jsonData => setData(jsonData))
  }, [])

  if (data) {
    const total = data.results.length;
    return (
      <>
      <Navbar />
      <div className="App">
        <h1>Trivia App</h1>
        <p>There are {total} questions.</p>
        {/*JSON.stringify(data,null,2)*/}
        {data.results.map(question => <Question content={question.question} correct={question.correct_answer} 
          incorrect={question.incorrect_answers} />)}
        <h1> ~ </h1>
      </div>
      </>
    );
  } else {
    return (
      <h1>Loading...</h1>
    );
  }
}

export default TriviaApp;