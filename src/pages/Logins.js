import loginImg from "../assets/Images/login.jpg";
import Template from "../components/core/Auth/Template";

function Login() {
  return (
    <Template
      title="Welcome Back"
      description1="Empower your future with cutting-edge skills."
      description2="Keep evolving with continuous learning."
      image={loginImg}
      formType="login"
    />
  );
}

export default Login;
