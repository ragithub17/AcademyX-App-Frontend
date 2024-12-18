import { useEffect, useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { IoIosArrowBack } from "react-icons/io";
import { useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { createRating } from "../../../services/operations/courseDetailsApi";
import IconBtn from "../../common/IconBtn";
import { toast } from "react-hot-toast";

export default function VideoDetailsSidebar() {
  const [activeStatus, setActiveStatus] = useState("");
  const [videoBarActive, setVideoBarActive] = useState("");
  const [rating, setRating] = useState(0);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const { sectionId, subSectionId } = useParams();
  const {
    courseSectionData,
    courseEntireData,
    totalNoOfLectures,
    completedLectures,
  } = useSelector((state) => state.viewCourse);
  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    (() => {
      if (!courseSectionData.length) return;
      const currentSectionIndx = courseSectionData.findIndex(
        (data) => data._id === sectionId
      );
      const currentSubSectionIndx = courseSectionData?.[
        currentSectionIndx
      ]?.subSection.findIndex((data) => data._id === subSectionId);
      const activeSubSectionId =
        courseSectionData[currentSectionIndx]?.subSection?.[
          currentSubSectionIndx
        ]?._id;
      setActiveStatus(courseSectionData?.[currentSectionIndx]?._id);
      setVideoBarActive(activeSubSectionId);
    })();
  }, [courseSectionData, courseEntireData, location.pathname]);

  const handleRatingSubmit = async () => {
    if (rating === 0) return;

    setLoading(true);
    await createRating(
      {
        courseId: courseEntireData._id,
        rating: rating,
      },
      token
    );
    setLoading(false);
    toast.dismiss(false);
  };

  return (
    <>
      <div className="flex h-[calc(100vh-3.5rem)] w-[320px] max-w-[350px] flex-col border-r-[1px] border-r-richblack-700 bg-richblack-800">
        <div className="mx-5 flex flex-col items-start justify-between gap-2 gap-y-4 border-b-[1px] border-b-richblack-600 py-5 text-lg font-bold text-richblack-50">
          <div className="flex w-full items-center justify-between relative">
            <div
              onClick={() => {
                navigate(`/dashboard/enrolled-courses`);
              }}
              className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-richblack-50 p-1 text-richblack-700 transition-transform duration-200 hover:scale-110 hover:bg-yellow-100 hover:text-richblack-900 cursor-pointer group"
            >
              <IoIosArrowBack size={24} />
              {/* Custom Tooltip */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap bg-richblack-600 text-richblack-50 text-[12px] rounded-lg py-1 px-2 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                Go Back
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <p>{courseEntireData?.courseName}</p>
            <p className="text-sm font-semibold text-richblack-300">
              {completedLectures?.length} / {totalNoOfLectures}
            </p>
          </div>

          {/* Rating System */}
          <div className="flex items-center gap-2">
            <p className="text-sm font-semibold text-richblack-300">
              Rate the Course:
            </p>
            <ReactStars
              count={5}
              onChange={(newRating) => setRating(newRating)}
              size={24}
              activeColor="#ffd700"
              value={rating}
            />
          </div>
          <IconBtn
            text={loading ? "Submitting..." : "Submit Rating"}
            customClasses="mt-2"
            onclick={handleRatingSubmit}
            disabled={loading}
          />
        </div>

        <div className="h-[calc(100vh - 5rem)] overflow-y-auto">
          {courseSectionData.map((course, index) => (
            <div
              className="mt-2 cursor-pointer text-sm text-richblack-25"
              onClick={() => setActiveStatus(course?._id)}
              key={index}
            >
              {/* Section */}
              <div className="flex flex-row justify-between bg-richblack-700 px-5 py-4">
                <div className="w-[70%] font-semibold">
                  {course?.sectionName}
                </div>
                <div className="flex items-center gap-3">
                  <span
                    className={`${
                      activeStatus === course?.sectionName
                        ? "rotate-0"
                        : "rotate-180"
                    } transition-all duration-500`}
                  >
                    <BsChevronDown />
                  </span>
                </div>
              </div>

              {/* Sub Sections */}
              {activeStatus === course?._id && (
                <div className="transition-[height] duration-500 ease-in-out">
                  {course.subSection.map((topic, i) => (
                    <div
                      className={`flex gap-3  px-5 py-2 ${
                        videoBarActive === topic._id
                          ? "bg-yellow-200 font-semibold text-richblack-800"
                          : "hover:bg-richblack-900"
                      } `}
                      key={i}
                      onClick={() => {
                        navigate(
                          `/view-course/${courseEntireData?._id}/section/${course?._id}/sub-section/${topic?._id}`
                        );
                        setVideoBarActive(topic._id);
                      }}
                    >
                      <input
                        type="checkbox"
                        checked={completedLectures.includes(topic?._id)}
                        onChange={() => {}}
                      />
                      {topic.title}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
