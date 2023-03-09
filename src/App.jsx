import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import mountainImage from './images/mountains.jpeg'
import russiaImage from './images/Russia.webp'
import kamalaImage from './images/Kamala.webp'
import pendriveImage from './images/pendrive.jpeg'
import bitsImage from './images/bits.jpeg'
import ramImage from './images/ram.jpeg'
import printerImage from './images/printer.jpeg'
import vacuumTubesImage from './images/vaccumtube.jpeg'
import unImage from './images/un.jpeg'
import ibmImage from './images/ibmimage.jpeg'

const questions = [
  {
    text: "What is the highest peak of the world?",
    answer: "Mount Everest",
    image: mountainImage,
    difficulty: 'easy'
  },
  {
    text: "Which is the biggest country in the world?",
    answer: "Russia",
    image: russiaImage,
    difficulty: 'easy'

  },
  {
    text: "Who is the vice president of the USA?",
    answer: "Kamala Harris",
    image: kamalaImage,
    difficulty: 'easy'

  },
  {
    text: "Is Pendrive a storage device?",
    answer: "Yes, it is.",
    image: pendriveImage
  },
  {
    text: "How many bits make 1 byte?",
    answer: "8 bits",
    image: bitsImage,
    difficulty: 'easy'

  },
  {
    text: "What is the full form of RAM?",
    answer: "Random Access Memory",
    image: ramImage,
    difficulty: 'easy'

  },
  {
    text: "Is Printer an example of output device?",
    answer: "Yes, Printer is an output device",
    image: printerImage,
    difficulty: 'easy'

  },
  {
    text: "Which electronic component was used in first generation of computer?",
    answer: "Vacuum Tubes",
    image: vacuumTubesImage,
    difficulty: 'easy'

  },
  {
    text: "What is the full form of UN?",
    answer: "United Nations",
    image: unImage,
    difficulty: 'easy'

  },
  {
    text: "When was IBM Computer invented?",
    answer: "August 12, 1981",
    image: ibmImage,
    difficulty: 'hard'
  }
]

const App = () => {
  const [index, setIndex] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)

  const toggleQuestionAnswer = (i) => {
    setShowAnswer(!showAnswer);
  }

  const updateQuestionNum = () => {
    setIndex(Math.floor(Math.random() * questions.length))
    setShowAnswer(false);
  }

  const colorDict = {
    easy: 'green',
    medium: 'yellow',
    hard: 'red'
  }


  const currentQuestion = questions[index]

  return (
    <div className='wholebody'>
      <Header />
      <div className='question-container'>
      <div className='question-box' style={{backgroundColor: colorDict[currentQuestion.difficulty]}} onClick={() => toggleQuestionAnswer()}>
      <img className='question-image' src={currentQuestion.image} alt='Question' />
        {!showAnswer && 
          <h1 className='question-text'>{currentQuestion.text}</h1>}
        {showAnswer && 
          <h1 className='answer-text'>{currentQuestion.answer}</h1>
        }
        </div>
      </div>
      <button className='button' onClick={updateQuestionNum}>➡️</button>
    </div>
  )
}

export default App
