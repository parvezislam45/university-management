import React, { useEffect, useState } from "react";
import Card from "./Card";

const Courses = () => {
  const [courses, setCourse] = useState([]);
  useEffect(() => {
    fetch("Course.json")
      .then((res) => res.json())
      .then((data) => setCourse(data));
  }, []);
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 mt-20 px-12">
      {
      courses.map(course =><Card
      key={course.id}
      course = {course}
      ></Card>)
      }
    </div>
  );
};

export default Courses;
