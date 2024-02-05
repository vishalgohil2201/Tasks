import React, { useState } from 'react'

const TicTacToe = () => {

    let [allData, setAllData] = useState(['', '', '', '', '', '', '', '', '']);

    let [cnt, setCnt] = useState(0);
    let [displayResult, setDisplayResult] = useState();

    let [bool, setBool] = useState(false);

    let [tie, setTie] = useState(1);

    let temp;

    const getData = (n) => {

        if (allData[n] == '') {


            temp = [...allData];
            if (cnt == 0) {
                temp[n] = "X";
                setCnt(1);
            }
            else {
                temp[n] = "O";
                // setAllData(temp);
                setCnt(0);
            }
            setAllData(temp);

            setTie(tie + 1);
            result(temp);
        }
    }

    const result = (temp) => {
        if ((temp[0] == 'X' && temp[1] == 'X' && temp[2] == 'X') ||
            (temp[3] == 'X' && temp[4] == 'X' && temp[5] == 'X') ||
            (temp[6] == 'X' && temp[7] == 'X' && temp[8] == 'X') ||
            (temp[0] == 'X' && temp[3] == 'X' && temp[6] == 'X') ||
            (temp[1] == 'X' && temp[4] == 'X' && temp[7] == 'X') ||
            (temp[2] == 'X' && temp[5] == 'X' && temp[8] == 'X') ||
            (temp[0] == 'X' && temp[4] == 'X' && temp[8] == 'X') ||
            (temp[2] == 'X' && temp[4] == 'X' && temp[6] == 'X')) {
            setDisplayResult("X IS WIN");
            setBool(true);
        }
        else if ((temp[0] == 'O' && temp[1] == 'O' && temp[2] == 'O') ||
            (temp[3] == 'O' && temp[4] == 'O' && temp[5] == 'O') ||
            (temp[8] == 'O' && temp[7] == 'O' && temp[8] == 'O') ||
            (temp[0] == 'O' && temp[3] == 'O' && temp[6] == 'O') ||
            (temp[1] == 'O' && temp[4] == 'O' && temp[7] == 'O') ||
            (temp[2] == 'O' && temp[5] == 'O' && temp[8] == 'O') ||
            (temp[0] == 'O' && temp[4] == 'O' && temp[8] == 'O') ||
            (temp[2] == 'O' && temp[4] == 'O' && temp[6] == 'O')) {
            setDisplayResult("O IS WIN");
            setBool(true);
        }
        else if (tie == 9) {
            setDisplayResult("TIE");
        }
    }

    return (
        <>
            <div className="TicTacToe py-5 border-bottom">
                <div className="main-box">

                    <div className="text-center title">
                        <h1 className='mb-4'>Tic Tac Toe</h1>
                    </div>
                    <div className="box d-flex flex-wrap">
                        <input type="button" value={allData[0]} className='bdr-t bdr-l' onClick={() => getData(0)} disabled={bool} />
                        <input type="button" value={allData[1]} className='bdr-t' onClick={() => getData(1)} disabled={bool} />
                        <input type="button" value={allData[2]} className='bdr-t bdr-r' onClick={() => getData(2)} disabled={bool} />
                        <input type="button" value={allData[3]} className='bdr-l' onClick={() => getData(3)} disabled={bool} />
                        <input type="button" value={allData[4]} onClick={() => getData(4)} disabled={bool} />
                        <input type="button" value={allData[5]} className='bdr-r' onClick={() => getData(5)} disabled={bool} />
                        <input type="button" value={allData[6]} className='bdr-b bdr-l' onClick={() => getData(6)} disabled={bool} />
                        <input type="button" value={allData[7]} className='bdr-b' onClick={() => getData(7)} disabled={bool} />
                        <input type="button" value={allData[8]} className='bdr-b bdr-r' onClick={() => getData(8)} disabled={bool} />
                    </div>
                    <div className="text-center mt-4 result">
                        <h3>{displayResult}</h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TicTacToe