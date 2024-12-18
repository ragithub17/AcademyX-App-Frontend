import signupImg from "../assets/Images/signup.jpg";
import Template from "../components/core/Auth/Template";

function Signup() {
  return (
    <Template
      title="Learn coding with us."
      description1="Empower your future with cutting-edge skills."
      description2=""
      image={signupImg}
      formType="signup"
    />
  );
}

export default Signup;
