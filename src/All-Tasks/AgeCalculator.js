import React, { useEffect, useState } from 'react'



const AgeCalculator = () => {

  let [today, setToday] = useState('');

  useEffect(() => {
    const currentDate = new Date().toISOString().substring(0, 10);
    setToday(currentDate);
  }, []);

  let [dob, setDob] = useState('');

  let [year, setYear] = useState(0);
  let [month, setMonth] = useState(0);
  let [day, setDay] = useState(0);
  let [week, setWeek] = useState(0);
  let [hour, setHour] = useState(0);
  let [minute, setMinute] = useState(0);
  let [second, setSecond] = useState(0);

  let [bool, setBool] = useState(false);

  let cd = new Date(today);
  let cms = cd.getTime();

  let bd = new Date(dob);
  let bms = bd.getTime();

  let ms = parseInt(cms) - parseInt(bms);

  let s = Math.floor(ms / 1000);

  let min = Math.floor(s / 60);

  let h = Math.floor(min / 60);

  let d = Math.floor(h / 24);

  let w = Math.floor(d / 7);

  let mon = Math.floor(d / 30.42);

  let y = Math.floor(mon / 12)


  const detail = () => {

    if (!dob) {
      alert("Please enter your date of birth..!")
    }
    else {
      setSecond(s.toLocaleString())
      setMinute(min.toLocaleString())
      setHour(h.toLocaleString())
      setWeek(w.toLocaleString())
      setDay(d.toLocaleString())
      setMonth(mon.toLocaleString())
      setYear(y)
      setBool(true);
    }
  }

  const clearData = () => {
    setDob('');
    setYear(0);
    setMonth(0);
    setWeek(0)
    setDay(0);
    setHour(0);
    setMinute(0);
    setSecond(0);
    setBool(false);
  }


  return (
    <>
      <div className="age-calculation py-5 border-bottom">

        <div className="title">
          <h2 className='mb-4'>Age Calculator</h2>
        </div>

        <div className="birth-of-date">
          <div className="input-data my-4">

            <span>Age at the Date of: </span>
            <input type="date" style={{ textTransform: 'uppercase' }} value={today} onChange={(e) => setToday(e.target.value)} />
          </div>
          <div className="input-data my-4">
            <span>Date of Birth :  </span>
            <input type="date" style={{ textTransform: 'uppercase' }} value={dob} onChange={(e) => setDob(e.target.value)} />
          </div>
          <div className="find-btn mb-3">
            <input type="button" value={'Clear'} className='body-btn w-auto bg-success-subtle me-2' onClick={() => clearData()} />
            <input type="button" value={'Calculate'} className='body-btn w-auto bg-success-subtle' onClick={() => detail()} />
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
              <td className='ps-3'>Weeks</td>
              <td className='px-4'>: {week}</td>
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
          </table>

        </div>
      </div>

    </>
  )
}

export default AgeCalculator;
