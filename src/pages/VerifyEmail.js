import { useEffect, useState } from "react";
import OtpInput from "react-otp-input";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { RxCountdownTimer } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { sendOtp, signUp } from "../services/operations/authAPI";
import { useNavigate } from "react-router-dom";

function VerifyEmail() {
  const [otp, setOtp] = useState("");
  const { signupData, loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!signupData) {
      navigate("/signup");
    }
  }, []);

  const handleVerifyAndSignup = (e) => {
    e.preventDefault();
    const {
      accountType,
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    } = signupData;

    dispatch(
      signUp(
        accountType,
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        otp,
        navigate
      )
    );
  };

  return (
    <div className="bg-richblack-900 min-h-[calc(100vh-3.5rem)] flex items-center justify-center p-4">
      <div className="border-[2px] border-richblack-600 hover:shadow-none hover:scale-95 transition-all duration-200 w-full max-w-[500px] rounded-lg bg-richblack-800 p-6 lg:p-8 shadow-lg">
        {loading ? (
          <div className="flex justify-center items-center">
            <div className="spinner"></div>
          </div>
        ) : (
          <div>
            <h1 className="text-richblack-50 font-semibold text-xl lg:text-2xl leading-snug text-center">
              Verify Email
            </h1>
            <p className="text-richblack-100 text-base lg:text-lg leading-relaxed mt-4 text-center">
              A verification code has been sent to you. Enter the code below.
            </p>
            <form onSubmit={handleVerifyAndSignup} className="mt-6 space-y-4">
              <OtpInput
                value={otp}
                onChange={setOtp}
                numInputs={6}
                renderInput={(props) => (
                  <input
                    {...props}
                    placeholder="-"
                    style={{
                      boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                    }}
                    className="w-[40px] sm:w-[48px] lg:w-[60px] border-[2px] bg-richblack-700 rounded-[0.5rem] text-richblack-25 aspect-square text-center focus:outline-none"
                  />
                )}
                containerStyle={{
                  justifyContent: "space-between",
                  gap: "6px",
                }}
              />
              <button
                type="submit"
                className="hover:shadow-none hover:scale-95 transition-all duration-200 w-full bg-yellow-100 py-3 px-4 rounded-md text-richblack-900 font-medium"
              >
                Verify Email
              </button>
            </form>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-y-4">
              <Link
                to="/signup"
                className="hover:shadow-none hover:scale-95 transition-all duration-200 flex items-center text-richblack-50 gap-2"
              >
                <BiArrowBack />
                Back To Signup
              </Link>
              <button
                className="hover:shadow-none hover:scale-95 transition-all duration-200 flex items-center text-blue-100 gap-2"
                onClick={() => dispatch(sendOtp(signupData.email))}
              >
                <RxCountdownTimer />
                Resend it
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default VerifyEmail;
