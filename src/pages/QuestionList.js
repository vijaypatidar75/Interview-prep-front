import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Nav from "../components/Nav";

const QuestionList = () => {
  const { rating } = useParams();
  const [problemList, setProblemList] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getProblemList = async () => {
      try {
        const response = await fetch(
          `http://localhost:3001/documents/${rating}`
        );
        const jsonData = await response.json();
        if (jsonData && jsonData.length > 0) {
          setIsLoading(false);
        }
        setProblemList(jsonData);
      } catch (error) {
        console.log(error);
      }
    };
    getProblemList();
  }, [rating]);

  return (
    <>
      <Nav />
      <div className=" max-w-4xl mx-auto">
        <h1 className="text-[#004b3c] text-2xl font-semibold pb-6 py-8">
          <span className="border-b-4 border-emerald-500">Questions List</span>
        </h1>
        <div className={`flex border py-2  bg-green-200 font-semibold`}>
          <p className=" w-20 ml-8">S. No.</p>
          <p className=" w-96 mx-4 mr-28">Problem Name</p>
          <p className=" w-28">Problem Link</p>

          <div>
            <p className=" w-24 ml-8">Status</p>
          </div>
        </div>
        <div>
          {problemList &&
            problemList.map((item, index) => {
              return (
                <div
                  className={`flex border py-2 ${
                    index % 2 ? " bg-slate-50" : ""
                  }`}
                  key={index}
                >
                  <p className=" w-20 ml-8">{index + 1}</p>
                  <p className=" w-96 mx-4 mr-28">{item.name}</p>
                  <a
                    href={item.link}
                    target="blank"
                    className=" w-28 hover:text-blue-800"
                  >
                    Problem Link
                  </a>
                  <div>
                    <input className=" w-24" type="checkbox" />
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default QuestionList;
