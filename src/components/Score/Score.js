import React, { useEffect, useRef } from "react";
import "./Score.css";
import { useSelector, useDispatch } from "react-redux";
import { newGame } from "../../actions/NewGame";

const Score = props => {

  const inputRef = useRef(null);
  const score = useSelector(state => state.counter);
  const doAgain = useSelector(state => state.doAgain);
  const dispatch = useDispatch();

  useEffect(() => {

    props.handle();
  }, [score, props]);

  const saveScore = (userScore, userName) => {
    
    const temp = {};
    temp.userName = userName  || 'no name';
    temp.score = userScore;
  
    return temp;
  }

  const setScore = obj => {
    const getData = JSON.parse(localStorage.getItem('react-game')) || [];
    
    if (getData.length) {

      const newData = [...getData];
      newData.push(obj);
      localStorage.setItem('react-game', JSON.stringify(newData));
    } else {

      localStorage.setItem('react-game', JSON.stringify([obj]));
    }
  }

  return (
      <>
        <div className="result">
          <p className="score">{ score }</p>
          <span className="hint">press Space</span>
        </div>
        { doAgain ?
            <div className="brt-wrap">
              <div className="result-wrap">
                <input ref={ inputRef } type="text" placeholder="enter your name..."/>
              </div>
              <button className="again-btn" onClick={() => {
                dispatch(newGame());
                setScore(saveScore(score, inputRef.current.value))
                }}>Again</button>
            </div> :
            <div>

            </div>
        }

      </>
  )
}

export default Score;