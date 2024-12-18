import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { FiEdit2 } from "react-icons/fi";
import { HiClock } from "react-icons/hi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { formatDate } from "../../../../services/formatDate";
import {
  deleteCourse,
  fetchInstructorCourses,
} from "../../../../services/operations/courseDetailsApi";
import { COURSE_STATUS } from "../../../../utils/constants";
import ConfirmationModal from "../../../common/ConfirmationModal";
import { getUserEnrolledCourses } from "../../../../services/operations/profileAPI";

export default function CoursesTable({ courses, setCourses }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(false);
  const [confirmationModal, setConfirmationModal] = useState(null);
  const TRUNCATE_LENGTH = 30;
  const [enrolledCourses, setEnrolledCourses] = useState(null);

  const getEnrolledCourses = async () => {
    try {
      const res = await getUserEnrolledCourses(token);
      setEnrolledCourses(res);
    } catch (error) {
      console.log("Could not fetch enrolled courses.", error);
    }
  };

  useEffect(() => {
    getEnrolledCourses();
  }, []);

  const handleCourseDelete = async (courseId) => {
    setLoading(true);
    await deleteCourse({ courseId: courseId }, token);
    const result = await fetchInstructorCourses(token);
    if (result) {
      setCourses(result);
    }
    setConfirmationModal(null);
    setLoading(false);
  };

  return (
    <>
      {!enrolledCourses ? (
        <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
          <div className="spinner"></div>
        </div>
      ) : !enrolledCourses.length ? (
        <div className="flex justify-center items-center my-36">
          <div className="border-[2px] border-richblack-600 hover:shadow-none hover:scale-95 transition-all duration-200 w-[80%] rounded-lg bg-richblack-800 p-10">
            <p className="text-center text-2xl text-richblack-50 font-bold">
              No courses found!
            </p>
          </div>
        </div>
      ) : (
        <div className="my-8 text-richblack-100 hover:shadow-none hover:scale-95 transition-all duration-200">
          {/* Headings */}
          <div className="flex rounded-t-lg bg-richblack-700 text-richblack-50">
            <p className="w-[45%] px-5 py-3">Courses</p>
            <p className="w-1/4 px-2 py-3">Duration</p>
            <p className="w-1/4 px-2 py-3">Price</p>
            <p className="w-1/6 px-2 py-3">Actions</p>
          </div>
          {/* Course Rows */}
          {enrolledCourses.map((course, i, arr) => (
            <div
              className={`flex items-center border border-richblack-700 ${
                i === arr.length - 1 ? "rounded-b-lg" : "rounded-none"
              }`}
              key={course._id}
            >
              <div className="flex w-[45%] items-center gap-4 px-5 py-3">
                <img
                  src={course.thumbnail}
                  alt="course_img"
                  className="h-24 w-24 rounded-lg object-cover"
                />
                <div className="flex max-w-xs flex-col gap-2">
                  <p className="font-semibold text-richblack-100">
                    {course.courseName}
                  </p>
                  <p className="text-xs text-richblack-200">
                    {course.courseDescription.split(" ").length >
                    TRUNCATE_LENGTH
                      ? course.courseDescription
                          .split(" ")
                          .slice(0, TRUNCATE_LENGTH)
                          .join(" ") + "..."
                      : course.courseDescription}
                  </p>
                  <p className="text-[12px] text-richblack-100">
                    Created: {formatDate(course.createdAt)}
                  </p>
                  {course.status === COURSE_STATUS.DRAFT ? (
                    <p className="flex w-fit flex-row items-center gap-2 rounded-full bg-richblack-700 px-2 py-[2px] text-[12px] font-medium text-pink-100">
                      <HiClock size={14} />
                      Drafted
                    </p>
                  ) : (
                    <p className="flex w-fit flex-row items-center gap-2 rounded-xl bg-richblack-700 px-2 py-[2px] text-[12px] font-medium text-yellow-200">
                      <div className="flex h-3 w-3 items-center justify-center rounded-full bg-yellow-200 text-richblack-800">
                        <FaCheck size={8} />
                      </div>
                      Published
                    </p>
                  )}
                </div>
              </div>
              <div className="w-1/4 px-3 py-3">{course.totalDuration}</div>
              <div className="w-1/4 px-2 py-3">₹{course.price}</div>
              <div className="flex w-1/6 gap-2 px-2 py-3">
                <div className="relative group">
                  <button
                    disabled={loading}
                    onClick={() => {
                      navigate(`/dashboard/edit-course/${course._id}`);
                    }}
                    className="px-2 transition-all duration-200 hover:scale-110 hover:text-caribbeangreen-300"
                  >
                    <FiEdit2 size={20} />
                  </button>
                  <div className="absolute bottom-full mb-2 hidden w-max rounded-lg bg-richblack-600 px-3 py-1 text-xs text-richblack-50 shadow-lg group-hover:block">
                    Edit
                  </div>
                </div>

                <div className="relative group">
                  <button
                    disabled={loading}
                    onClick={() => {
                      setConfirmationModal({
                        text1: "Do you want to delete this course?",
                        text2:
                          "All the data related to this course will be deleted.",
                        btn1Text: !loading ? "Delete" : "Loading...",
                        btn2Text: "Cancel",
                        btn1Handler: !loading
                          ? () => handleCourseDelete(course._id)
                          : () => {},
                        btn2Handler: !loading
                          ? () => setConfirmationModal(null)
                          : () => {},
                      });
                    }}
                    className="px-1 transition-all duration-200 hover:scale-110 hover:text-[#ff0000]"
                  >
                    <RiDeleteBin6Line size={20} />
                  </button>
                  {/* Custom Tooltip */}
                  <div className="absolute bottom-full mb-2 hidden w-max rounded-lg bg-richblack-600 px-3 py-1 text-xs ring-richblack-50 shadow-lg group-hover:block">
                    Delete
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}
    </>
  );
}
