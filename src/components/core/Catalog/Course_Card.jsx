import React, { useEffect, useState } from "react";
import RatingStars from "../../common/RatingStars";
import GetAvgRating from "../../../utils/avgRating";
import { Link } from "react-router-dom";

const Course_Card = ({ course, Height }) => {
  const [avgReviewCount, setAvgReviewCount] = useState(0);

  useEffect(() => {
    if (course) {
      const count = GetAvgRating(course.ratingAndReviews);
      setAvgReviewCount(count);
    }
  }, [course]);

  if (!course) {
    return null; // Or render a loading indicator if course data is loading
  }

  return (
    <Link to={`/courses/${course._id}`}>
      <div className="hover:shadow-none hover:scale-95 transition-all duration-200">
        <div className="rounded-xl">
          <img
            src={course?.thumbnail}
            alt="course thumbnail"
            className={`${Height} w-full rounded-xl object-cover`}
          />
        </div>
        <div className="flex flex-col gap-2 px-1 py-3">
          <p className="text-xl text-richblack-100">{course?.courseName}</p>
          <p className="text-sm text-richblack-50">
            {course?.instructor?.firstName} {course?.instructor?.lastName}
          </p>
          <div className="flex items-center gap-2">
            <span className="text-yellow-200">{avgReviewCount || 0}</span>
            <RatingStars Review_Count={avgReviewCount} />
            <span className="text-richblack-100">
              {course?.ratingAndReviews?.length} Ratings
            </span>
          </div>
          <p className="text-xl text-richblack-200">Rs. {course?.price}</p>
        </div>
      </div>
    </Link>
  );
};

export default Course_Card;
