import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Add() {
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
  };

  function submitForm(e) {
    e.preventDefault();
    axios.post("http://localhost:3001/users", data).then(navigate("/home"));
  }
  return (
    <div className="w-screen h-full flex flex-col justify-center items-center mt-16">
      <h2 className="text-2xl font-bold">ADD Student</h2>
      <form className="w-[50%] h-full flex flex-col mt-2">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
          placeholder="Enter your name"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="Gmail"
          placeholder="Enter your Gmail"
        />
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="regulation type"
          placeholder="Enter your regulation type"
        />
        Mid I Marks
        <input
          value={a}
          onChange={(e) => setA(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="marks"
          placeholder="Enter your 1A marks"
        />
         <input
          value={b}
          onChange={(e) => setB(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="marks"
          placeholder="Enter your 1B marks"
        />
        <input
          value={c}
          onChange={(e) => setC(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="marks"
          placeholder="Enter your 2A marks"
        />        
        <input
        value={d}
        onChange={(e) => setD(e.target.value)}
        className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
        type="marks"
        placeholder="Enter your 2B marks"
        />        
        <input
          value={e}
          onChange={(e) => setE(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="marks"
          placeholder="Enter your 3A marks"
        />         
        <input
        value={f}
        onChange={(e) => setF(e.target.value)}
        className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
        type="marks"
        placeholder="Enter your 3B marks"
        />    
         Mid II Marks
        <input
          value={g}
          onChange={(e) => setG(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="marks"
          placeholder="Enter your 1A marks"
        />
         <input
          value={h}
          onChange={(e) => setH(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="marks"
          placeholder="Enter your 1B marks"
        />
        <input
          value={i}
          onChange={(e) => setI(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="marks"
          placeholder="Enter your 2A marks"
        />        
        <input
        value={j}
        onChange={(e) => setJ(e.target.value)}
        className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
        type="marks"
        placeholder="Enter your 2B marks"
        />        
        <input
          value={k}
          onChange={(e) => setK(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="marks"
          placeholder="Enter your 3A marks"
        />         
        <input
        value={l}
        onChange={(e) => setL(e.target.value)}
        className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
        type="marks"
        placeholder="Enter your 3B marks"
        />    
        <input
          value={roll}
          onChange={(e) => setRoll(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="Roll No."
          placeholder="Enter your Roll No"
        />
        Quiz I Marks
        <input
          value={quiz}
          onChange={(e) => setQuiz(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="Roll No."
          placeholder="Enter your Quiz I Marks"
        />
        Quiz II Marks
        <input
          value={quizz}
          onChange={(e) => setQuizz(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="Roll No."
          placeholder="Enter your Quiz II Marks"
        />
        <button
          className="bg-teal-600 outline-none font-bold border text-white border-zinc-400 py-4 pl-4 mt-4"
          type="submit"
          onClick={submitForm}
        >
          ADD USER
        </button>
      </form>
    </div>
  );
}

export default Add;
