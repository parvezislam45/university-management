import React from "react";
import { Link } from "react-router-dom";

const Details = ({ student, handleDelate}) => {
  const { name, country, course, _id } = student;
  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div>
            <div className="font-bold">{name}</div>
          </div>
        </div>
      </td>
      <td>
        {country}
        <br />
      </td>
      <td>{course}</td>
      <th>
        <button
          onClick={() => handleDelate(_id)}
          className="btn btn-ghost btn-xs"
        >
          Delate
        </button>
        <Link to={`/update/${student._id}`}><button
          className="btn btn-ghost btn-xs"
        >
          Update
        </button></Link>
        
      </th>
    </tr>
  );
};

export default Details;
