import { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { getPasswordResetToken } from "../services/operations/authAPI";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(getPasswordResetToken(email, setEmailSent));
  };

  return (
    <div className="bg-richblack-900 min-h-[calc(100vh-3.5rem)] flex items-center justify-center px-4 sm:px-6 lg:px-8">
      {loading ? (
        <div className="spinner"></div>
      ) : (
        <div className="hover:shadow-none hover:scale-95 transition-all duration-200 border-[2px] border-richblack-600 w-full max-w-[500px] bg-richblack-800 p-6 sm:p-8 rounded-lg shadow-lg text-center">
          <h1 className="text-[1.875rem] font-semibold leading-[2.375rem] text-richblack-25">
            {!emailSent ? "Reset your password." : "Check your email."}
          </h1>
          <p className="mt-4 text-[1.125rem] leading-[1.625rem] text-richblack-100">
            {!emailSent
              ? "Have no fear. We'll email you instructions to reset your password. If you don’t have access to your email, we can try account recovery."
              : `We have sent the reset email to ${email}`}
          </p>
          <form onSubmit={handleOnSubmit} className="mt-6">
            {!emailSent && (
              <label className="block text-left">
                <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-50">
                  Email Address <sup className="text-pink-200">*</sup>
                </p>
                <input
                  required
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email address"
                  style={{
                    boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                  }}
                  className="w-full rounded-[0.5rem] bg-richblack-700 p-[12px] text-richblack-5"
                />
              </label>
            )}
            <button
              type="submit"
              className="hover:shadow-md hover:scale-95 transition-all duration-200 mt-6 w-full rounded-[8px] bg-yellow-50 py-[12px] px-[12px] font-medium text-richblack-900"
            >
              {!emailSent ? "Submit" : "Resend Email"}
            </button>
          </form>
          <div className="mt-6 flex items-center justify-center">
            <Link to="/login">
              <p className="flex items-center gap-x-2 text-richblack-100 hover:scale-95 transition-transform duration-200">
                <BiArrowBack /> Back To Login
              </p>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default ForgotPassword;
