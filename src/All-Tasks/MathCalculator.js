import React, { useState } from 'react'

const MathCalculator = () => {

  let [display, setDisplay] = useState('');
  const [temp, setTemp] = useState('');
  const [fv, setFv] = useState('');
  const [sv, setSv] = useState('');

  const enterValue = (n) => {

    if (temp == '') {
      setDisplay(display += n)
      setFv(display);
    }
    else {
      setDisplay(display += n);
      setSv(display);
    }

  }

  const sign = (s) => {
    setDisplay('');
    setTemp(s);
  }

  const calculate = () => {

    if (temp == '+') {
      setDisplay(parseFloat(fv) + parseFloat(sv));
    }
    else if (temp == '-') {
      setDisplay(parseFloat(fv) - parseFloat(sv));
    }
    else if (temp == '*') {
      setDisplay(parseFloat(fv) * parseFloat(sv));
    }
    else if (temp == '/') {
      setDisplay(parseFloat(fv) / parseFloat(sv));
    }
    else if (temp == '%') {
      setDisplay(parseInt(fv) % parseInt(sv));
    }
  }

  const allClean = () => {
    setFv('');
    setSv('');
    setTemp('');
    setDisplay('');
  }


  const oneClean = () => {
    setDisplay(display.substring(0, display.length - 1))

  }

  return (
    <>

      <div className="calC py-5 border-bottom">

        <div className="title">
          <h2 className='mb-4'>Math Calculator</h2>
        </div>

        <div className="box">

          <div className="input-part">
            <input type="text" value={display} placeholder='0' className='screen' style={{ textAlign: "right" }} id='display' />
          </div>

          <div class="btn-part">

            <div class="row btn-row">
              <div className="col"><input type="button" value={'AC'} className='btn-design bg-lightgray' onClick={() => allClean()} /></div>
              <div className="col"><input type="button" value={'C'} className='btn-design bg-lightgray' onClick={() => oneClean()} /></div>
              <div className="col"><input type="button" value={'%'} className='btn-design bg-lightgray' onClick={(s) => sign(s.target.value)} ></input></div>
              <div className="col"><input type="button" value={'/'} className='btn-design bg-lightgray' onClick={(s) => sign(s.target.value)} /> <span /></div>
            </div>

            <div class="row btn-row">
              <div className="col"><input type="button" value={7} className='btn-design bg-lightgray' onClick={(n) => enterValue(n.target.value)} /></div>
              <div className="col"><input type="button" value={8} className='btn-design bg-lightgray' onClick={(n) => enterValue(n.target.value)} /></div>
              <div className="col"><input type="button" value={9} className='btn-design bg-lightgray' onClick={(n) => enterValue(n.target.value)} /></div>
              <div className="col"><input type="button" value={'*'} className='btn-design bg-lightgray' onClick={(s) => sign(s.target.value)} ></input></div>
            </div>

            <div class="row btn-row">
              <div className="col"><input type="button" value={4} className='btn-design bg-darkgray' onClick={(n) => enterValue(n.target.value)} /></div>
              <div className="col"><input type="button" value={5} className='btn-design bg-darkgray' onClick={(n) => enterValue(n.target.value)} /></div>
              <div className="col"><input type="button" value={6} className='btn-design bg-darkgray' onClick={(n) => enterValue(n.target.value)} /></div>
              <div className="col"><input type="button" value={'-'} className='btn-design bg-orange' onClick={(s) => sign(s.target.value)} ></input></div>
            </div>

            <div class="row btn-row">
              <div className="col"><input type="button" value={1} className="btn-design bg-darkgray" onClick={(n) => enterValue(n.target.value)} /></div>
              <div className="col"><input type="button" value={2} className="btn-design bg-darkgray" onClick={(n) => enterValue(n.target.value)} /></div>
              <div className="col"><input type="button" value={3} className="btn-design bg-darkgray" onClick={(n) => enterValue(n.target.value)} /></div>
              <div className="col"><input type="button" value={'+'} className="btn-design bg-orange" onClick={(s) => sign(s.target.value)} /></div>
            </div>

            <div class="row btn-row">
              <div className="col-6"><input type="button" value={0} className="btn-h-rectangle bg-darkgray" onClick={(n) => enterValue(n.target.value)} /></div>
              <div className="col"><input type="button" value={'.'} className="btn-design bg-darkgray" onClick={(n) => enterValue(n.target.value)} /></div>
              <div className="col"><input type="button" value={' = '} className="btn-design bg-orange" onClick={() => calculate()} /></div>
            </div>

          </div>

        </div>

      </div>

    </>
  )
}

export default MathCalculator;
