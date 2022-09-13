import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Edit() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [roll, setRoll] = useState("");
  const [quiz, setQuiz] = useState("");
  const [quizz, setQuizz] = useState("");
  // Mid I
  const [a,setA] =useState("");
  const [b,setB] =useState("");
  const [c,setC] =useState("");
  const [d,setD] =useState("");
  const [e,setE] =useState("");
  const [f,setF] =useState("");
    // Mid II
    const [g, setG] = useState("");
    const [h, setH] = useState("")
    const [i, setI] = useState("");
    const [j, setJ] = useState("")
    const [k, setK] = useState("");
    const [l, setL] = useState("")

  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3001/students/${id}`).then((res) => {
      setName(res.data.name);
      setEmail(res.data.email);
      setPhone(res.data.phone);
      setRoll(res.data.roll);
      setA(res.data.a);
      setB(res.data.b)
      setC(res.data.c)
      setD(res.data.d)
      setE(res.data.e)
      setF(res.data.f)
      setG(res.data.g)
      setH(res.data.h)
      setI(res.data.i)
      setJ(res.data.j)
      setK(res.data.k)
      setL(res.data.l)
      setQuiz(res.data.quiz)
      setQuizz(res.data.quizz)
    });
  }, []);

  const navigate = useNavigate();

  const data = {
    name: name,
    email: email,
    phone: phone,
    roll: roll,
    a: a,
    b: b,
    c: c,
    d: d,
    e: e,
    f: f,
    g: g,
    h: h,
    i: i,
    j: j,
    k: k,
    l: l,
    quiz: quiz,
    quizz: quizz
  };

  function Update(e) {
    e.preventDefault();
    axios.put(`http://localhost:3001/students/${id}`, data).then(navigate(`/users/${id}`));
  }
  return (
    <div className="w-screen h-full flex flex-col justify-center items-center mt-16">
      <h2 className="text-2xl font-bold">User Details</h2>
      <form className="w-[50%] h-full flex flex-col mt-2">
        <div className="font-bold text-3xl">
        Name:
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-1"
          type="text"
          placeholder="Enter your name"
        />
        </div>
        <div className="font-bold text-3xl">
        Email:
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="Gmail"
          placeholder="Enter your Gmail"
        />
                <div className="font-bold text-3xl">
          Roll Number  
        <input
          value={roll}
          onChange={(e) => setRoll(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="roll no"
          placeholder="Enter your Roll no"
        />
        </div>
        <div className="font-bold text-3xl">
        RegulationType:
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="regulation type"
          placeholder="Enter your regulation type"
        />
        </div>
        </div>
        <h1 className="font-bold text-3xl">Mid I Marks</h1>
        <div className="font-bold text-3xl">
          IA Marks:
          <input
          value={a}
          onChange={(e) => setA(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="marks"
          placeholder="Enter your 1A marks"
        />
        </div>
        <div className="font-bold text-3xl">
          IB Marks:
         <input
          value={b}
          onChange={(e) => setB(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="marks"
          placeholder="Enter your 1B marks"
        />
        </div>
                <div className="font-bold text-3xl">
          IIA Marks:
        <input
          value={c}
          onChange={(e) => setC(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="marks"
          placeholder="Enter your 2A marks"
        />   
        </div>
        <div className="font-bold text-3xl">
          IIB Marks:     
        <input
        value={d}
        onChange={(e) => setD(e.target.value)}
        className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
        type="marks"
        placeholder="Enter your 2B marks"
        />  
        </div>   
        <div className="font-bold text-3xl">
          III A Marks:   
        <input
          value={e}
          onChange={(e) => setE(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="marks"
          placeholder="Enter your 3A marks"
        />  
        </div>
         <div className="font-bold text-3xl">
          IIIB Marks:       
        <input
        value={f}
        onChange={(e) => setF(e.target.value)}
        className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
        type="marks"
        placeholder="Enter your 3B marks"
        />  
        </div>
        <div className="font-bold text-3xl">
          Total Mid I Marks:
        {parseInt(a) +
                  parseInt(b) +
                  parseInt(c) +
                  parseInt(d) +
                  parseInt(e) +
                  parseInt(f)}
        </div>
        <h1 className="font-bold text-3xl">Mid II Marks</h1>
        <div className="font-bold text-3xl">
          IIA Marks:
          <input
          value={g}
          onChange={(e) => setG(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="marks"
          placeholder="Enter your 1A marks"
        />
        </div>
        <div className="font-bold text-3xl">
          IB Marks:
         <input
          value={h}
          onChange={(e) => setH(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="marks"
          placeholder="Enter your 1B marks"
        />
        </div>
                <div className="font-bold text-3xl">
          IIA Marks:
        <input
          value={i}
          onChange={(e) => setI(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="marks"
          placeholder="Enter your 2A marks"
        />   
        </div>
        <div className="font-bold text-3xl">
          IIB Marks:     
        <input
        value={j}
        onChange={(e) => setJ(e.target.value)}
        className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
        type="marks"
        placeholder="Enter your 2B marks"
        />  
        </div>   
        <div className="font-bold text-3xl">
          III A Marks:   
        <input
          value={k}
          onChange={(e) => setK(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="marks"
          placeholder="Enter your 3A marks"
        />  
        </div>
         <div className="font-bold text-3xl">
          IIIB Marks:       
        <input
        value={l}
        onChange={(e) => setL(e.target.value)}
        className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
        type="marks"
        placeholder="Enter your 3B marks"
        />  
        </div>
        <div className="font-bold text-3xl">
          Total Mid II Marks:
        {parseInt(g) +
                  parseInt(h) +
                  parseInt(i) +
                  parseInt(j) +
                  parseInt(k) +
                  parseInt(l)}
        </div>
        <div className="font-bold text-3xl">
          Quiz I Marks       
        <input
        value={quiz}
        onChange={(e) => setQuiz(e.target.value)}
        className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
        type="marks"
        placeholder="Enter your quiz I marks"
        />  
        </div>
        <div className="font-bold text-3xl">
          Quiz II Marks       
        <input
        value={quizz}
        onChange={(e) => setQuizz(e.target.value)}
        className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
        type="marks"
        placeholder="Enter your quiz II marks"
        />  
        </div>
        <button
          className="bg-teal-600 outline-none font-bold border text-white border-zinc-400 py-4 pl-4 mt-4"
          type="submit"
          onClick={Update}
        >
          UPDATE USER
        </button>
      </form>
    </div>
  );
}

export default Edit;
