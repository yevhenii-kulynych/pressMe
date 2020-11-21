import React, {useState, useEffect, useRef} from "react";
import "./Leaderboard.css";


const Leaderboard = () => {

  const [isOpened, setOpened] = useState(false);
  let users = useRef([]);
  const getContainerRef = useRef(null);

  const handleClick = () => {

    if (isOpened) {

      setOpened(false)
    } else {
      setOpened(true);
    }
  }

  useEffect(() => {

    if(isOpened) {

      getContainerRef.current.style.right = '0rem';
    } else {
      getContainerRef.current.style.right = '-15rem';
    }

     
  }, [isOpened, users]);

  const getData = () => {

    const dbUsers = JSON.parse(localStorage.getItem("react-game")) || [];

    users = [...dbUsers];

    const sortedUser = users.sort((a, b) => b.score - a.score);

    const limitUsers = [];
    limitUsers.push(...sortedUser);
    limitUsers.length = 15;

    return limitUsers.map((el, index) => {
        return (
          <li key={ index }> { index + 1 }: { el.userName } - <code>{ el.score }</code></li>
          )
    })
  }



  return (
      <div className="leaderboard" ref={getContainerRef}>
        <header className="leaderboard__head">
          <button onClick={handleClick}>&#9819;</button>
        </header>
        <div className="leaderboard__body">
          <h1 className="title">Leaderboard</h1>
          <div className="table">
            <ul>{ getData() }</ul>
          </div>
        </div>
      </div>
  )
}

export default Leaderboard;