import React, { useState } from 'react'

const StudentResult = () => {

  let [no, setNo] = useState(1);

  const [name, setName] = useState('');

  let [subject1, setSubject1] = useState();
  let [subject2, setSubject2] = useState();
  let [subject3, setSubject3] = useState();
  let [subject4, setSubject4] = useState();
  let [subject5, setSubject5] = useState();
  let [subject6, setSubject6] = useState();

  let [bool, setBool] = useState(false);

  const [allData, setAllData] = useState([]);

  const findData = () => {
    // hide Menu Bar
    setBool(true);

    // No of Student
    setNo(no + 1);

    // Total
    const total = parseInt(subject1) + parseInt(subject2) + parseInt(subject3) + parseInt(subject4) + parseInt(subject5) + parseInt(subject6);

    // MIN & MAX
    const min = Math.min(parseInt(subject1), parseInt(subject2), parseInt(subject3), parseInt(subject4), parseInt(subject5), parseInt(subject6))
    const max = Math.max(parseInt(subject1), parseInt(subject2), parseInt(subject3), parseInt(subject4), parseInt(subject5), parseInt(subject6))

    // PERCENTAGE

    let per = (min < 33) ? 0 : parseFloat(total / 6);
    per = per.toFixed(2)

    // RESULT
    let cnt = 0;
    if (subject1 < 33) {
      cnt++;
    }
    if (subject2 < 33) {
      cnt++;
    }
    if (subject3 < 33) {
      cnt++;
    }
    if (subject4 < 33) {
      cnt++;
    }
    if (subject5 < 33) {
      cnt++;
    }
    if (subject6 < 33) {
      cnt++;
    }


    let result = (cnt == 0) ? "PASS" : (cnt <= 3) ? "ATKT" : "FAIL";

    let bg = (cnt == 0) ? "green" : (cnt < 3) ? "magenta" : "red";


    setAllData([...allData,
    {
      no: no,
      name: name,
      sub1: parseInt(subject1),
      sub2: parseInt(subject2),
      sub3: parseInt(subject3),
      sub4: parseInt(subject4),
      sub5: parseInt(subject5),
      sub6: parseInt(subject6),
      total,
      min,
      max,
      per,
      result,
      bg,
    }
    ]);

    setName('');

    setSubject1('');
    setSubject2('');
    setSubject3('');
    setSubject4('');
    setSubject5('');
    setSubject6('');
  }

  return (
    <>
      <div className="studentResult py-5 border-bottom">

        <h1 className='mb-5'>Student Result</h1>
        <div className="container">
          <div className="box col-10">

            <div className='nameBox d-flex align-items-center mb-4'>

              <div className='col-3 text-start'>
                <label htmlFor="" className='form-label mb-0'>NAME :  </label>
              </div>

              <div className='col'>
                <input type="text" placeholder='ENTER NAME' className='form-control w-100' value={name} onChange={(e) => setName(e.target.value)} />
              </div>

            </div>

            <div className='subjectBox d-flex mb-4'>

              <div className='col-3 text-start'>
                <label htmlFor="" className='form-label mb-0'>MARK OF ALL SUBJECTS : </label>
              </div>

              <div className="col d-flex justify-content-between">

                <div>
                  <input type="text" placeholder='CPP' className='form-control mb-3' value={subject1} onChange={(e) => setSubject1(e.target.value)} />
                  <input type="text" placeholder='JAVSCRIPT' className='form-control' value={subject2} onChange={(e) => setSubject2(e.target.value)} />
                </div>

                <div>
                  <input type="text" placeholder='PHP' className='form-control mb-3' value={subject3} onChange={(e) => setSubject3(e.target.value)} />
                  <input type="text" placeholder='JAVA' className='form-control' value={subject4} onChange={(e) => setSubject4(e.target.value)} />
                </div>

                <div>
                  <input type="text" placeholder='NETWORK' className='form-control mb-3' value={subject5} onChange={(e) => setSubject5(e.target.value)} />
                  <input type="text" placeholder='ASP.NET' className='form-control' value={subject6} onChange={(e) => setSubject6(e.target.value)} />
                </div>

              </div>

            </div>

            <div className='buttonBox col-3'>
              <input type="button" value='FIND DATA' className='body-btn bg-success-subtle' onClick={() => findData()} />
            </div>

            <div className='outputData mt-5'>
              <table className='table m-0 text-white'>
                <tr style={{
                  opacity: (bool == true) ? '1' : '0',
                  visibility: (bool == true) ? 'visible' : 'hidden'
                }} className='bg-secondary' align='center' >
                  <td>NO</td>
                  <td>NAME</td>
                  <td>CPP</td>
                  <td>JAVASCRIPT</td>
                  <td>PHP</td>
                  <td>JAVA</td>
                  <td>NETWORK</td>
                  <td>ASP.NET</td>
                  <td>TOTAL</td>
                  <td>MAX</td>
                  <td>MIN</td>
                  <td>PERCENTAGE</td>
                  <td>RESULT</td>
                </tr>
                {
                  allData.map((value, index) => {
                    return (
                      <tr style={{ backgroundColor: value.bg }} key={index} align='center'>
                        <td>{value.no}</td>
                        <td>{value.name}</td>
                        <td>{value.sub1}</td>
                        <td>{value.sub2}</td>
                        <td>{value.sub3}</td>
                        <td>{value.sub4}</td>
                        <td>{value.sub5}</td>
                        <td>{value.sub6}</td>
                        <td>{value.total}</td>
                        <td>{value.max}</td>
                        <td>{value.min}</td>
                        <td>{value.per}</td>
                        <td>{value.result}</td>
                      </tr>
                    )
                  })
                }

              </table>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default StudentResult;