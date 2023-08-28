// Importing the required components
import Board from './Board';
import Info from "./Info";
 
// Importing the CSS File
import "./css/app.css";
 
// Importing the useState hook
import { useState } from 'react';
 
function App() {
    //whether game should be reset or not
    //useState - allows you to add state to a function component
    //returns an array w/ 2 values: current state + function to update it to
    const [reset, setReset] = useState(false)

    //indicates current winner
    const [winner, setWinner] = useState('');

    //reset property set to true, which in turn resets the board
    const resetBoard = () => {
        setReset(true);
    }

    return (
        <div className = "App">
            {/*shrinks popuo when no winner*/}
            <div className={`winner ${winner !== '' ? '' : 'shrink'}`}>
                {/*current winner*/}
                <div className='winner-text'>{winner}</div>
                {/*reset button - sets setReset to true*/}
                <button onClick={() => resetBoard()}>
                    Reset Board
                </button>
            </div>
            <Board reset = {reset} setReset={setReset} winner={winner} setWinner={setWinner} />
            <Info />
        </div>
    )
}
export default App;