import React from 'react';
import './StartScreen.css';
import { useSelector, useDispatch } from "react-redux";
import { start } from "../../actions/Start";
import Preparation from "../Preparation/Preparation";


const StartScreen = () => {
  const dispatch = useDispatch();
  const isStarted = useSelector(state => state.isStarted);

  return (
    <div className="center">

      {!isStarted ?
        <div className="start-screen">
          <p className="text">Hello there, this tiny app was made to check your finger speed :)</p>
          <div>
          <button className="btn" onClick={() => dispatch(start())}>Start</button>
          </div>
        </div>
        :
        <Preparation>

        </Preparation>
      }
    </div>
  )
}

export default StartScreen;