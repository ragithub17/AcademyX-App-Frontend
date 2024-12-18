import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { resetPassword } from "../services/operations/authAPI";

function UpdatePassword() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const { loading } = useSelector((state) => state.auth);
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { password, confirmPassword } = formData;

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const token = location.pathname.split("/").at(-1);
    dispatch(resetPassword(password, confirmPassword, token, navigate));
  };

  return (
    <div className="bg-richblack-900 flex justify-center items-center min-h-screen py-8 px-4">
      <div className="hover:shadow-none hover:scale-95 transition-all duration-200 border-[2px] border-richblack-600 max-w-lg w-full px-4 py-6 bg-richblack-800 rounded-lg shadow-lg sm:max-w-md lg:max-w-lg xl:max-w-xl mx-4 sm:mx-8 md:mx-12">
        {loading ? (
          <div className="spinner"></div>
        ) : (
          <div className="w-full">
            <h1 className="text-3xl font-semibold text-richblack-25 mb-4">
              Choose new password
            </h1>
            <p className="text-lg text-richblack-100 mb-6">
              Almost there! Set your new password, confirm it, and then you’re
              good to go.
            </p>
            <form onSubmit={handleOnSubmit}>
              <div className="relative mb-6">
                <label className="block text-sm text-richblack-50 mb-2">
                  New Password <sup className="text-pink-200">*</sup>
                </label>
                <input
                  required
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={password}
                  onChange={handleOnChange}
                  placeholder="Enter Password"
                  className="w-full p-3 rounded-lg bg-richblack-700 text-richblack-5 shadow-inner focus:outline-none focus:ring-2 focus:ring-yellow-50"
                />
                <span
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-3 top-[35px] z-10 cursor-pointer"
                >
                  {showPassword ? (
                    <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                  ) : (
                    <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                  )}
                </span>
              </div>

              <div className="relative mb-6">
                <label className="block text-sm text-richblack-50 mb-2">
                  Confirm New Password <sup className="text-pink-200">*</sup>
                </label>
                <input
                  required
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={handleOnChange}
                  placeholder="Confirm Password"
                  className="w-full p-3 rounded-lg bg-richblack-700 text-richblack-5 shadow-inner focus:outline-none focus:ring-2 focus:ring-yellow-50"
                />
                <span
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                  className="absolute right-3 top-[35px] z-10 cursor-pointer"
                >
                  {showConfirmPassword ? (
                    <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                  ) : (
                    <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                  )}
                </span>
              </div>

              <button
                type="submit"
                className="w-full py-3 mt-6 bg-yellow-50 text-richblack-900 font-medium rounded-lg hover:scale-95 hover:shadow-none transition-all duration-200"
              >
                Reset Password
              </button>
            </form>

            <div className="mt-6 flex justify-between items-center">
              <Link to="/login">
                <p className="flex items-center gap-x-2 text-sm text-richblack-50 hover:scale-95 hover:shadow-none transition-all duration-200">
                  <BiArrowBack /> Back To Login
                </p>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default UpdatePassword;
