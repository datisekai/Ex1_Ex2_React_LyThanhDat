import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import StudentInfo from "./StudentInfo";

const ClassWrapper = () => {
  const students = [
    {
      uuid: uuidv4(),
      fullName: "Nguyen Van A",
      points: 10,
    },
    {
      uuid: uuidv4(),
      fullName: "Le Van B",
      points: 8,
    },
    {
      uuid: uuidv4(),
      fullName: "Pham Thi C",
      points: 7,
    },
    {
      uuid: uuidv4(),
      fullName: "Tran Van D",
      points: 6,
    },
    {
      uuid: uuidv4(),
      fullName: "Ta Thi Lang",
      points: 1,
    },
  ];

  const [studentList, setStudentList] = useState(students);

  const onAddNewStudent = () => {
    setStudentList([
      ...studentList,
      { uuid: uuidv4(), fullName: "undefined", points: 0 },
    ]);
  };

  const onDisbanStudent = (uuid) => {
    const newStudentList = studentList.filter((item) => item.uuid !== uuid);
    setStudentList(newStudentList);
  };
  return (
    <div className="mx-auto w-[300px] md:w-[500px] lg:w-[800px] my-[100px] ">
      <table className="border-2 border-blue-400">
        <tr className="border-2 border-blue-400">
          <th className="border-2 border-blue-400">UUID</th>
          <th className="border-2 border-blue-400">fullName</th>
          <th className="border-2 border-blue-400">Point</th>
          <th className="border-2 border-blue-400">Hành động</th>
        </tr>
        {studentList.map((item) => (
          <StudentInfo onAddNewStudent={onAddNewStudent} onDisbanStudentCallback={onDisbanStudent} student={item} />
        ))}
      </table>
    </div>
  );
};

export default ClassWrapper;
