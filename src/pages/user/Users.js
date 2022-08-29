import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Edit from "./Edit";

function Users() {
  const { id } = useParams();

  const [user, setUser] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:3001/users/${id}`).then((res) => {
      setUser(res.data);
    });
  }, []);

  return (
    <>
      <div className="h-full w-full flex flex-col mt-32 justify-center items-center">
        {/* <Link
          to={`/edit-user/${id}`}
          className="hover:bg-teal-600 bg-white hover:shadow-md  outline-none rounded-xl font-bold border mt-8 hover:text-teal-200 text-teal-600 border-zinc-400 py-4 px-4 pl-4"
        >
          Edit
        </Link> */}
        {/* <Link
          to={`/home`}
          className="hover:bg-teal-600 bg-white hover:shadow-md  outline-none rounded-xl font-bold border mt-8 hover:text-teal-200 text-teal-600 border-zinc-400 py-4 px-4 pl-4"
        >
          Back To Home
        </Link> */}
          <Link
          to={`/home`}
          className="hover:bg-teal-600 bg-white hover:shadow-md  outline-none rounded-xl font-bold border mt-8 hover:text-teal-200 text-teal-600 border-zinc-400 py-4 px-4 pl-4"
        >
          Back To Home
        </Link>

        {user && (
          <div className="w-[700px] h-[200] px-6 py-4 flex shadow-xl rounded-xl justify-center items-center bg-teal-600 mt-16 border-teal-800 border-2">
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
                {user.name}
              </h2>
              <h2 className="text-teal-200 font-bold text-3xl border-black border-b-2">
                {user.email}
              </h2>
              <h2 className="text-teal-200 font-bold text-3xl border-black border-b-2">
                {user.phone}
              </h2>
              <h2 className="text-teal-200 font-bold text-3xl border-black border-b-2">
                {user.a}
              </h2>
              <h2 className="text-teal-200 font-bold text-3xl border-black border-b-2">
                {user.b}
              </h2>
              <h2 className="text-teal-200 font-bold text-3xl border-black border-b-2">
                {user.c}
              </h2>
              <h2 className="text-teal-200 font-bold text-3xl border-black border-b-2">
                {user.d}
              </h2>
              <h2 className="text-teal-200 font-bold text-3xl border-black border-b-2">
                {user.e}
              </h2>
              <h2 className="text-teal-200 font-bold text-3xl border-black border-b-2">
                {user.f}
              </h2>
              <h2 className="text-teal-200 font-bold text-3xl border-black border-b-2">
                {parseInt(user.a) +
                  parseInt(user.b) +
                  parseInt(user.c) +
                  parseInt(user.d) +
                  parseInt(user.e) +
                  parseInt(user.f)}
              </h2>
              <h2 className="text-teal-200 font-bold text-3xl border-black border-b-2">
                {user.g}
              </h2>
              <h2 className="text-teal-200 font-bold text-3xl border-black border-b-2">
                {user.h}
              </h2>
              <h2 className="text-teal-200 font-bold text-3xl border-black border-b-2">
                {user.i}
              </h2>
              <h2 className="text-teal-200 font-bold text-3xl border-black border-b-2">
                {user.j}
              </h2>
              <h2 className="text-teal-200 font-bold text-3xl border-black border-b-2">
                {user.k}
              </h2>
              <h2 className="text-teal-200 font-bold text-3xl border-black border-b-2">
                {user.l}
              </h2>
              <h2 className="text-teal-200 font-bold text-3xl border-black border-b-2">
                {parseInt(user.g) +
                  parseInt(user.h) +
                  parseInt(user.i) +
                  parseInt(user.j) +
                  parseInt(user.k) +
                  parseInt(user.l)}
              </h2>
              <h2 className="text-teal-200 font-bold text-3xl border-black border-b-2">
                {user.quiz}
              </h2>
              <h2 className="text-teal-200 font-bold text-3xl border-black border-b-2">
                {user.quizz}
              </h2>
              <h2 className="text-teal-200 font-bold text-3xl border-black border-b-2">
                {user.roll}
              </h2>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Users;
