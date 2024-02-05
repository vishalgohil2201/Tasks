import React, { useState } from 'react'

const AgeCalculator = () => {

  // Current Date
  // let [today, setToday] = useState('');

  let [dob, setDob] = useState('');

  let [year, setYear] = useState(0);
  let [month, setMonth] = useState(0);
  let [day, setDay] = useState(0);
  let [hour, setHour] = useState(0);
  let [minute, setMinute] = useState(0);
  let [second, setSecond] = useState(0);
  let [millisecond, setMillisecond] = useState(0);

  let [bool, setBool] = useState(false);

  let cd = new Date();
  let cms = cd.getTime();
  // console.log(cms);

  let bd = new Date(dob);
  let bms = bd.getTime();
  // console.log(bms);


  let ms = parseInt(cms) - parseInt(bms);

  let s = Math.floor(ms / 1000);

  let min = Math.floor(s / 60);

  let h = Math.floor(min / 60);

  let d = Math.floor(h / 24);

  let mon = Math.floor(d / 30.42);

  let y = Math.floor(mon / 12)


  const detail = () => {

    // MilliSeconds
    setMillisecond(ms);

    // Second
    setSecond(s)

    // Minutes
    setMinute(min)

    // Hours
    setHour(h)

    // Day
    setDay(d)

    // Month
    setMonth(mon)

    // year
    setYear(y)

    // Show Data
    setBool(true);

  }


  return (
    <>
      <div className="age-calculation py-5 border-bottom">

        <div className="title">
          <h2 className='mb-4'>Age Calculation</h2>
        </div>

        <div className="birth-of-date">
          {/* Current date */}
          {/* <span>Today : </span> */}
          {/* <input type="date" onChange={(e) => setToday(e.target.value)} /> */}
          <div className="input-data my-4">
            <span>Date of Birth :  </span>
            <input type="date" style={{ textTransform: 'uppercase' }} onChange={(e) => setDob(e.target.value)} />
          </div>
          <div className="find-btn mb-3">
            <input type="button" value={'Find Details'} className='body-btn w-auto bg-success-subtle' onClick={() => detail()} />
          </div>

          <table border={1} className='fs-4' style={{ display: (bool == true) ? 'inline-block' : 'none' }}>
            <tr>
              <td className='ps-3'>Age</td>
              <td className='px-4'>: {year}</td>
            </tr>
            <tr>
              <td className='ps-3'>Months</td>
              <td className='px-4'>: {month}</td>
            </tr>
            <tr>
              <td className='ps-3'>Days</td>
              <td className='px-4'>: {day}</td>
            </tr>
            <tr>
              <td className='ps-3'>Hours</td>
              <td className='px-4'>: {hour}</td>
            </tr>
            <tr>
              <td className='ps-3'>Minutes</td>
              <td className='px-4'>: {minute}</td>
            </tr>
            <tr>
              <td className='ps-3'>Seconds</td>
              <td className='px-4'>: {second}</td>
            </tr>
            <tr>
              <td className='ps-3'>Milliseconds</td>
              <td className='px-4'>: {millisecond}</td>
            </tr>
          </table>

        </div>

      </div>

    </>
  )
}

export default AgeCalculator;
