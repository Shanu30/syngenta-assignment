import "./App.css";
import { useState } from "react";
import randomcolor from "randomcolor";
let ballArray = [
  {
    id: 1,
    bgcolor: randomcolor(),
    view: true,
  },
  {
    id: 2,
    bgcolor: randomcolor(),
    view: true,
  },
  {
    id: 3,
    bgcolor: randomcolor(),
    view: true,
  },
  {
    id: 4,
    bgcolor: randomcolor(),
    view: true,
  },
  {
    id: 5,
    bgcolor: randomcolor(),
    view: true,
  },
];

function App() {
  const [pos, setPos] = useState("");
  const [balls, setBalls] = useState(ballArray);

  const handleAdd = () => {
    const selectedBall = balls.map((el) =>
      el.id === Number(pos) ? { ...el, view: false } : el
    );
    setBalls(selectedBall);
    setPos("")
  };
  const handleUndo = (id) => {
    const undo = balls.map((el) => el.id === Number(id) ? { ...el, view: true } : el)
    setBalls(undo);
  }

  return (
    <div className="App">
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={pos}
          onChange={(e) => setPos(e.currentTarget.value)}
        />
        <button onClick={handleAdd}>SHOOT</button>
      </div>
      <div className="display">
        <div className="box">
          {balls
            .filter((el) => el.view === false)
            .map((el) => {
              return (
                <div
                  key={el.id}
                  className="ball"
                  style={{ background: `${el.bgcolor}` }}
                  onClick={()=>handleUndo(el.id)}
                ></div>
              );
            })}
        </div>
        
        <div className="ballContainer">
        {balls.filter((el) => el.view===true)
        .map((el)=> {
            return <div 
            key={el.id} 
            className="ball" 
            style={{ background: `${el.bgcolor}`}}></div>
        })}
    </div>
      </div>
    </div>
  );
}

export default App;
