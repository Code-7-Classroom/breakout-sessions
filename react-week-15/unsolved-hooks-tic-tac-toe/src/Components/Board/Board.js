import React from 'react';
import Square from '../Square/Square';
import ResetButton from '../ResetButton/Resetbutton';
import r2h from '../../img/r2h.png'
import fellowship from '../../img/fellowships.png'

const Board = () => {
    const renderSquare = (i) => {
        return <Square />
    }

    return (
        <>
            <main className="main--container">
                <div className="logo">
                    <img src={r2h} alt="r2h logo" />
                    <img src={fellowship} alt="fellowship" />
                </div>
                <div className="status">
                    Next player is player X
                </div>

                <div className="board--container">
                    <div className="board">
                        <div className="board--row">
                            {renderSquare(0)}
                            {renderSquare(1)}
                            {renderSquare(2)}
                        </div>
                        <div className="board--row">
                            {renderSquare(3)}
                            {renderSquare(4)}
                            {renderSquare(5)}
                        </div>
                        <div className="board--row">
                            {renderSquare(6)}
                            {renderSquare(7)}
                            {renderSquare(8)}
                        </div>
                    </div>


                    <ResetButton />
                </div>

            </main>
        </>
    )
}

export default Board;


