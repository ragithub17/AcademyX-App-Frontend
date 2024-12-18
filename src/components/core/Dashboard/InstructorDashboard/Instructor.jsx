import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { fetchInstructorCourses } from "../../../../services/operations/courseDetailsApi";
import { getInstructorData } from "../../../../services/operations/profileAPI";
import InstructorChart from "./InstructorChart";
import { Link } from "react-router-dom";
import { HiOutlineHand } from "react-icons/hi";
import IconBtn from "../../../common/IconBtn";

export default function Instructor() {
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const [loading, setLoading] = useState(false);
  const [instructorData, setInstructorData] = useState(null);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const instructorApiData = await getInstructorData(token);
      const result = await fetchInstructorCourses(token);
      if (instructorApiData.length) {
        setInstructorData(instructorApiData);
      }
      if (result) {
        setCourses(result);
      }
      setLoading(false);
    })();
  }, []);

  const totalAmount = instructorData?.reduce(
    (acc, curr) => acc + curr.totalAmountGenerated,
    0
  );

  const totalStudents = instructorData?.reduce(
    (acc, curr) => acc + curr.totalStudentsEnrolled,
    0
  );

  return (
    <div>
      <div className="space-y-2">
        <h1 className="flex text-2xl font-bold text-richblack-50">
          Hi {user?.firstName}{" "}
          <HiOutlineHand className="text-richblack-50 text-3xl ml-[2px] animate-waving" />
        </h1>
        <p className="font-medium text-richblack-200">
          Let's start something new
        </p>
      </div>
      {loading ? (
        <div className="spinner"></div>
      ) : courses.length > 0 ? (
        <div>
          <div className="my-4 flex h-[450px] space-x-4">
            {/* Render chart / graph */}
            {totalAmount > 0 || totalStudents > 0 ? (
              <InstructorChart courses={instructorData} />
            ) : (
              <div className="hover:shadow-none hover:scale-95 transition-all duration-200 border-[2px] border-richblack-600 flex-1 rounded-md bg-richblack-800 p-6">
                <p className="text-lg font-bold text-richblack-25">Visualize</p>
                <p className="mt-4 text-xl font-medium text-richblack-50">
                  Not Enough Data To Visualize
                </p>
              </div>
            )}
            {/* Total Statistics */}
            <div className="border-[2px] border-richblack-600 hover:shadow-none hover:scale-95 transition-all duration-200 flex min-w-[250px] flex-col rounded-md bg-richblack-800 p-6">
              <p className="text-lg font-bold text-richblack-50">Statistics</p>
              <div className="mt-4 space-y-4">
                <div>
                  <p className="text-lg text-richblack-100">Total Courses</p>
                  <p className="text-3xl font-semibold text-richblack-50">
                    {courses.length}
                  </p>
                </div>
                <div>
                  <p className="text-lg text-richblack-100">Total Students</p>
                  <p className="text-3xl font-semibold text-richblack-50">
                    {totalStudents}
                  </p>
                </div>
                <div>
                  <p className="text-lg text-richblack-100">Total Income</p>
                  <p className="text-3xl font-semibold text-richblack-50">
                    Rs. {totalAmount}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="border-[2px] border-richblack-600 hover:shadow-none hover:scale-95 transition-all duration-200 rounded-md bg-richblack-800 p-6">
            {/* Render 3 courses */}
            <div className="flex items-center justify-between">
              <p className="text-lg font-bold text-richblack-50">
                Your Courses
              </p>
              <Link to="/dashboard/my-courses">
                <p className="text-xs font-semibold text-yellow-200">
                  View All
                </p>
              </Link>
            </div>
            <div className="my-4 flex items-start space-x-6">
              {courses.slice(0, 3).map((course) => (
                <div key={course._id} className="w-1/3">
                  <img
                    src={course.thumbnail}
                    alt={course.courseName}
                    className="h-[201px] w-full rounded-md object-cover"
                  />
                  <div className="mt-3 w-full">
                    <p className="text-sm font-medium text-richblack-100">
                      {course.courseName}
                    </p>
                    <div className="mt-1 flex items-center space-x-2">
                      <p className="text-xs font-medium text-richblack-200">
                        {course.studentsEnrolled.length} students
                      </p>
                      <p className="text-xs font-medium text-richblack-200">
                        |
                      </p>
                      <p className="text-xs font-medium text-richblack-200">
                        Rs. {course.price}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="border-[2px] border-richblack-600 hover:shadow-none hover:scale-95 transition-all duration-200 mt-20 rounded-md bg-richblack-800 p-6 py-20">
          <p className="text-center text-2xl font-bold text-richblack-50">
            You have not created any courses yet!
          </p>
          <Link to="/dashboard/add-course">
            <div className="flex justify-center items-center mt-4">
              <div className="text-center">
                <IconBtn text="Create a course" />
              </div>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
}
