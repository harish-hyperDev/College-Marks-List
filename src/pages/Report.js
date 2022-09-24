import axios from "axios";
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'



const Report = () => {
  
  const [student, setStudent] = useState([0])
  const [search, setSearch] = useState('');

  const location = useLocation();
  const { props } = location.state;

  useEffect(() => {
    // axios.get(`http://localhost:3001/student[0]s/`)

    setStudent(
      props.filter((studs) => {return Number(studs.roll) === Number(search) ? studs : null})
    )
    // console.log(typeof())
  },[search])

  useEffect(() => {
    /* if(student[0] === 0 || student[0] === undefined) {
      document.getElementsByClassName("not-found")[0].classList.remove('hidden');
    } else {
      document.getElementsByClassName("not-found")[0].classList.add('hidden');
    } 
    
    if (document.getElementsByClassName('student-finder')[0].value === '') {
      document.getElementsByClassName("not-found")[0].classList.add('hidden');
    } else {
      document.getElementsByClassName("not-found")[0].classList.remove('hidden');
    } */

  },[])

  useEffect(() => {
    if(student[0] === undefined) {
      document.getElementsByClassName("not-found")[0].classList.remove('hidden');
    } else {
      document.getElementsByClassName("not-found")[0].classList.add('hidden');
    } 
    
    /* if (document.getElementsByClassName('student-finder')[0].value === '') {
      document.getElementsByClassName("not-found")[0].classList.add('hidden');
    } else {
      document.getElementsByClassName("not-found")[0].classList.remove('hidden');
    } */

    console.log(document.getElementsByClassName('student-finder')[0].value)
    if(document.getElementsByClassName('student-finder')[0].value === '')
      setStudent([0]);

    console.log('trigger student')
    console.log(student[0])
  }, [student])

  return (
    <div className="text-left">

      <div className="flex mt-10">
        <div className="ml-[40%] flex-start mt-2">Enter <b>Roll Number</b>:</div>
        <input value={search} onChange={(e) => setSearch(e.target.value)} className="flex-start p-1 border border-black student-finder"></input>
      </div>
      <div className="not-found ml-[50%] mt-2 text-red-500">Student not found</div>

      {/* {console.log(student[0].name)} */}
      
      {student[0] && (
        <div className="text-center w-[700px] h-[200] ml-[30%] px-6 py-4 flex shadow-xl rounded-xl justify-center items-center bg-teal-600 mt-16 border-teal-800 border-2">
          <div className="w-5/12 flex flex-col space-y-4">
            <h2 className="text-white font-bold text-3xl border-black border-b-2">
              Name
            </h2>
            <h2 className="text-white font-bold text-3xl border-black border-b-2">
              Gmail
            </h2>
            <h2 className="text-white font-bold text-3xl border-black border-b-2">
              Regulation Type
            </h2>
            <h2 className="text-white font-bold text-3xl border-black border-b-2">
              Semester
            </h2>
            <h2 className="text-white font-bold text-3xl border-black border-b-2">
              IA Marks
            </h2>
            <h2 className="text-white font-bold text-3xl border-black border-b-2">
              IB Marks
            </h2>
            <h2 className="text-white font-bold text-3xl border-black border-b-2">
              IIA Marks
            </h2>
            <h2 className="text-white font-bold text-3xl border-black border-b-2">
              IIB Marks
            </h2>
            <h2 className="text-white font-bold text-3xl border-black border-b-2">
              IIIA Marks
            </h2>
            <h2 className="text-white font-bold text-3xl border-black border-b-2">
              IIIB Marks
            </h2>
            <h2 className="text-white font-bold text-3xl border-black border-b-2">
              Total Mid I Marks
            </h2>
            <h2 className="text-white font-bold text-3xl border-black border-b-2">
              IA Marks
            </h2>
            <h2 className="text-white font-bold text-3xl border-black border-b-2">
              IB Marks
            </h2>
            <h2 className="text-white font-bold text-3xl border-black border-b-2">
              IIA Marks
            </h2>
            <h2 className="text-white font-bold text-3xl border-black border-b-2">
              IIB Marks
            </h2>
            <h2 className="text-white font-bold text-3xl border-black border-b-2">
              IIIA Marks
            </h2>
            <h2 className="text-white font-bold text-3xl border-black border-b-2">
              IIIB Marks
            </h2>
            <h2 className="text-white font-bold text-3xl border-black border-b-2">
              Total Mid II Marks
            </h2>
            <h2 className="text-white font-bold text-3xl border-black border-b-2">
              Quiz II Marks
            </h2>
            <h2 className="text-white font-bold text-3xl border-black border-b-2">
              Quiz II Marks
            </h2>
            <h2 className="text-white font-bold text-3xl border-black border-b-2">
              Roll Number
            </h2>
          </div>
          <div className="w-7/12 flex flex-col space-y-4  ">
            <h2 className="text-teal-200 font-bold text-3xl border-black border-b-2">
              {student[0].name}
            </h2>
            <h2 className="text-teal-200 font-bold text-3xl border-black border-b-2">
              {student[0].email}
            </h2>
            <h2 className="text-teal-200 font-bold text-3xl border-black border-b-2">
              {student[0].phone}
            </h2>
            <h2 className="text-teal-200 font-bold text-3xl border-black border-b-2">
              {student[0].sem}
            </h2>
            <h2 className="text-teal-200 font-bold text-3xl border-black border-b-2">
              {student[0].a}
            </h2>
            <h2 className="text-teal-200 font-bold text-3xl border-black border-b-2">
              {student[0].b}
            </h2>
            <h2 className="text-teal-200 font-bold text-3xl border-black border-b-2">
              {student[0].c}
            </h2>
            <h2 className="text-teal-200 font-bold text-3xl border-black border-b-2">
              {student[0].d}
            </h2>
            <h2 className="text-teal-200 font-bold text-3xl border-black border-b-2">
              {student[0].e}
            </h2>
            <h2 className="text-teal-200 font-bold text-3xl border-black border-b-2">
              {student[0].f}
            </h2>
            <h2 className="text-teal-200 font-bold text-3xl border-black border-b-2">
              {parseInt(student[0].a) +
                parseInt(student[0].b) +
                parseInt(student[0].c) +
                parseInt(student[0].d) +
                parseInt(student[0].e) +
                parseInt(student[0].f)}
            </h2>
            <h2 className="text-teal-200 font-bold text-3xl border-black border-b-2">
              {student[0].g}
            </h2>
            <h2 className="text-teal-200 font-bold text-3xl border-black border-b-2">
              {student[0].h}
            </h2>
            <h2 className="text-teal-200 font-bold text-3xl border-black border-b-2">
              {student[0].i}
            </h2>
            <h2 className="text-teal-200 font-bold text-3xl border-black border-b-2">
              {student[0].j}
            </h2>
            <h2 className="text-teal-200 font-bold text-3xl border-black border-b-2">
              {student[0].k}
            </h2>
            <h2 className="text-teal-200 font-bold text-3xl border-black border-b-2">
              {student[0].l}
            </h2>
            <h2 className="text-teal-200 font-bold text-3xl border-black border-b-2">
              {parseInt(student[0].g) +
                parseInt(student[0].h) +
                parseInt(student[0].i) +
                parseInt(student[0].j) +
                parseInt(student[0].k) +
                parseInt(student[0].l)}
            </h2>
            <h2 className="text-teal-200 font-bold text-3xl border-black border-b-2">
              {student[0].quiz}
            </h2>
            <h2 className="text-teal-200 font-bold text-3xl border-black border-b-2">
              {student[0].quizz}
            </h2>
            <h2 className="text-teal-200 font-bold text-3xl border-black border-b-2">
              {student[0].roll}
            </h2>
          </div>
        </div>
      )}
    </div>
  );

}

export default Report;