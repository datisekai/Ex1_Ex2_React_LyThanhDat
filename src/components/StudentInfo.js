import React from "react";

const StudentInfo = ({onAddNewStudent, onDisbanStudentCallback,student }) => {
  return (
    <tr>
      <td className="border-2 border-blue-400">{student.uuid}</td>
      <td className="border-2 border-blue-400">{student.fullName}</td>
      <td className="border-2 border-blue-400">{student.points}</td>
      <td className="border-2 border-blue-400">
        <button
          className="px-5 py-1 bg-blue-400 hover:bg-blue-600 transition-all"
          onClick={() => onAddNewStudent()}
        >
          Add students
        </button>
        <button
          className="px-5 py-1 bg-red-400 hover:bg-red-600 transition-all"
          onClick={() => onDisbanStudentCallback(student.uuid)}
        >
          Delete students
        </button>
      </td>
    </tr>
  );
};

export default StudentInfo;
