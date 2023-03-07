import { useState } from 'react'
import './App.css'
import Header from './components/Header'


const App = () => {

  const[index, setIndex] = useState(0);
  
  const updateQuestionNum = () => {
      setIndex(Math.floor(Math.random() * (9 - 1 + 1)) + 1);
  }

  const[qa1,setQA1] = useState("What is the highest peak of world?");
  const[qa2,setQA2] = useState("Which is the biggest Country in the world?");
  const[qa3,setQA3] = useState("Who is the vice president of the USA?");
  const[qa4,setQA4] = useState("Is Pendrive a storage device?");
  const[qa5,setQA5] = useState("How many bits make 1 byte?");
  const[qa6,setQA6] = useState("What is the full form of RAM?");
  const[qa7,setQA7] = useState("Is Printer an example of output device?");
  const[qa8,setQA8] = useState("Which electronic component was used in first generation of computer?");
  const[qa9,setQA9] = useState("What is the Full form of UN?");
  const[qa10,setQA10] = useState("When was IBM Computer invented?");
  


  const updateQA1 = () => {
    if (qa1 == "What is the highest peak of world?"){
      setQA1("Mount Everest");
    }
    else{
      setQA1("What is the highest peak of world?");
    }
  }

  const updateQA2 = () => {
    if (qa2 == "Which is the biggest Country in the world?"){
      setQA2("Russia");
    }
    else{
      setQA2("Which is the biggest Country in the world?");
    }
  }

  const updateQA3 = () => {
    if (qa3 == "Who is the vice president of the USA?"){
      setQA3("Kamala Harris");
    }
    else{
      setQA3("Who is the vice president of the USA?");
    4
  }
}

  const updateQA4 = () => {
    if (qa4 == "Is Pendrive a storage device?"){
      setQA4("Yes, It is.");
    }
    else{
      setQA4("Is Pendrive a storage device?");
    }
  }

  const updateQA5 = () => {
    if (qa5 == "How many bits make 1 byte?"){
      setQA5("8 bits");
    }
    else{
      setQA5("How many bits make 1 byte?");
    }
  }

  const updateQA6 = () => {
    if (qa6 == "What is the full form of RAM?"){
      setQA6("Random Access Memory");
    }
    else{
      setQA6("What is the full form of RAM?");
    }
  }

  const updateQA7 = () => {
    if (qa7 == "Is Printer an example of output device?"){
      setQA7("Yes, Printer is an output device");
    }
    else{
      setQA7("Is Printer an example of output device?");
    }
  }

  const updateQA8 = () => {
    if (qa8 == "Which electronic component was used in first generation of computer?"){
      setQA8("Vacuum Tubes");
    }
    else{
      setQA8("Which electronic component was used in first generation of computer?");
    }
  }

  const updateQA9 = () => {
    if (qa9 == "What is the Full form of UN?"){
      setQA9("United Nations");
    }
    else{
      setQA9("What is the Full form of UN?");
    }
  }

  const updateQA10 = () => {
    if (qa10 == "When was IBM Computer invented?"){
      setQA10("August 12, 1981");
    }
    else{
      setQA10("When was IBM Computer invented?");
    }
  }


  const arrQuestion = [qa1, qa2, qa3, qa4, qa5, qa6, qa7, qa8, qa9, qa10];
  const arrupdateAnswer = [updateQA1,updateQA2,updateQA3,updateQA4, updateQA5,updateQA6,updateQA7,updateQA8, updateQA9,updateQA10];

  const arrBGColor = ["Green", "Yellow", "Red","Green", "Yellow", "Marron","Green", "Yellow", "Yellow","Red"]
  return(
    <div className='wholebody'>
      <Header/>

      <div className= {arrBGColor[index]} onClick={arrupdateAnswer[index]}>
          <h1>{arrQuestion[index]}</h1>
      </div>
      <button className = 'button' onClick={updateQuestionNum}>➡️</button>
    </div>
  )
}

export default App;