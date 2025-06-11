import './Start.css'
import {Quiz_stages, setQuizStage} from '../../constants/constant';


const Start = ({setQuizStage}) => {

  return (

    <div className="start-screen">
        <h1>Take the Quiz</h1>
        <h1>Evaluate Your Skills Now</h1>
        <button id='start' onClick={() => setQuizStage(Quiz_stages.In_Progress)}>Start</button>
    </div>
  )
}

export default Start