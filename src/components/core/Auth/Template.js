import { FcGoogle } from "react-icons/fc";
import { useSelector } from "react-redux";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

function Template({ title, description1, description2, image, formType }) {
  const { loading } = useSelector((state) => state.auth);

  return (
    <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center bg-richblack-900 from-blue-50 via-white to-blue-100">
      {loading ? (
        <div className="spinner"></div>
      ) : (
        <div className="mx-auto flex w-11/12 max-w-5xl flex-col-reverse items-center justify-between gap-y-12 py-16 md:flex-row md:gap-y-0 md:gap-x-16">
          {/* Left Section */}
          <div className="mx-auto w-11/12 max-w-[450px] text-center md:text-left">
            <h1 className="text-3xl font-extrabold leading-tight text-pure-greys-25 md:text-4xl">
              {title}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-pure-greys-100">
              <span>{description1}</span> <br />
              <span className="font-semibold text-blue-400">
                {description2}
              </span>
            </p>
            <div className="mt-8">
              {formType === "signup" ? <SignupForm /> : <LoginForm />}
            </div>
          </div>

          {/* Right Section */}
          <div className="relative mx-auto w-11/12 max-w-[450px]">
            <div className="">
              <img
                src={image}
                alt="students"
                width={410}
                height={200}
                className="hover:shadow-none hover:scale-95 transition-all duration-200 rounded-lg shadow-blue-400 shadow-[20px_20px_0_0]"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Template;
