import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Report from "./Report";

function Home() {
  const [users, setUsers] = useState([]);
  const [userlogin, setUserLogin] = useState([]);
  const [save, setSave] = useState({});
  const {name,subject,branch,email} = save;

  function loadUsers() {
    axios.get("http://localhost:3001/students").then((res) => {
      setUsers(res.data);
    });

    axios.get("http://localhost:3001/admins").then((res) => {
      setUserLogin(res.data);
    });
  }

  useEffect(() => {
    axios.get('http://localhost:3001/loggedInUser').then((res) => {
      axios.get(`http://localhost:3001/admins/${res.data[res.data.length-1]._id}`).then((second_res) => {
        setSave(second_res.data);
        console.log(second_res.data);
      })
    })
  }, [])

  useEffect(() => {
    loadUsers();
  }, []);

  function deleteUser(id) {
    axios.delete(`http://localhost:3001/students/${id}`).then(loadUsers());
  }

  useEffect(() => {
      
  }, [])

  return (
    <>
    <Navbar />
      <div className="w-[100vw] h-full justify-center items-center flex flex-col px-10 py-8 mt-8">
        {/* <h1 className="text-3xl font-bold">DATA TABLE</h1> */}
        <h1 className="text-2xl font-bold">
          Faculty Name: {name}
        </h1>
        <h1 className="text-2xl font-bold">
          Faculty Email: {email}
        </h1>
        <h1 className="text-2xl font-bold">
          Faculty Subject: {subject}
        </h1>
        <h1 className="text-2xl font-bold">
          Faculty Branch: {branch}
        </h1>
        <div className="flex flex-row bg-gray-200 m-3">
        <Link to={"/add-user"}>
  <div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">Mid I ,II & Quiz</div>
  </Link>

  {/* <div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">Quiz I</div>
  <div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">Quiz II</div> */}
</div>
        <div className="flex flex-col">
          <div className="overflow-x-auto mt-8 sm:-mx-6 items-center lg:-mx-8">
            <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full text-center">
                  <thead className="border-b bg-gray-800">
                    <tr>
                      <th
                        scope="col"
                        className="text-sm font-medium text-white px-6 py-4"
                      >
                        #
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-lg text-white px-6 py-4"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-lg text-white px-6 py-4"
                      >
                        Gmail
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-lg text-white px-6 py-4"
                      >
                        Regulation Type
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-lg text-white px-6 py-4"
                      >
                        Semester
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-lg text-white px-6 py-4"
                      >
                        Total Mid I Marks
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-lg text-white px-6 py-4"
                      >
                        Total Mid II Marks
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-lg text-white px-6 py-4"
                      >
                        Roll Number
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-lg text-white px-6 py-4"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="border-black border-b-2">
                    {users.map((data, index) => (
                      <tr
                        key={index}
                        className="bg-white border-b-2 border-black"
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 ">
                          {index + 1}
                        </td>
                        <td className="text-xl text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                          {data.name}
                        </td>
                        <td className="text-xl text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                          {data.email}
                        </td>
                        <td className="text-xl text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                          {data.phone}
                        </td>
                        <td className="text-xl text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                          {data.sem}
                        </td>
                        <td className="text-xl text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                          {
                          parseInt(data.a) + 
                          parseInt(data.b) + 
                          parseInt(data.c) + 
                          parseInt(data.d) + 
                          parseInt(data.e) + 
                          parseInt(data.f) 
                          }
                        </td>
                        <td className="text-xl text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                          {
                          parseInt(data.g) + 
                          parseInt(data.h) + 
                          parseInt(data.i) + 
                          parseInt(data.j) + 
                          parseInt(data.k) + 
                          parseInt(data.l) 
                          }
                        </td>
                        <td className="text-xl text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                          {data.roll}
                        </td>
                        <td className="text-sm flex justify-between  items-center text-gray-900 font-bold px-6 py-4 space-x-4 whitespace-nowrap">
                          <Link to={`/users/${data._id}`} className="bg-teal-600 text-white px-6 py-2 rounded-lg">
                            VIew
                          </Link>
                          <Link
                            to={`/edit-user/${data._id}`}
                            className="bg-blue-600 text-white px-6 py-2 rounded-lg"
                          >
                            Edit
                          </Link>
                          <Link
                            onClick={() => deleteUser(data._id)}
                            to={"#"}
                            className="bg-red-600 text-white px-6 py-2 rounded-lg"
                          >
                            Delete
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {users.length > 0 && <Link to="/report" state={{ props: users }}><button className="absolute right-1 bottom-1 mb-10 mr-10 border rounded border-emerald-600 p-2 bg-emerald-400">
            Generate Report
        </button></Link>}
      </div>
    </>
  );
}

export default Home;
