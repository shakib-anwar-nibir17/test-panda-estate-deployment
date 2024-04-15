import { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
const AuthForm = () => {
  const [register, setRegister] = useState(false);
  return (
    <div className="w-80 md:w-96 lg:w-[800px] mx-auto bg-white flex items-center relative overflow-hidden shadow-xl">
      {/* register form  */}
      <RegisterForm register={register} setRegister={setRegister} />
      {/* img */}
      <div
        className={`hidden lg:block absolute w-1/2 h-full top-0 z-50 duration-500 overflow-hidden bg-black/20 ${
          register
            ? "translate-x-full rounded-bl-full duration-500"
            : "rounded-br-full"
        }`}
      >
        <img
          src="https://images.unsplash.com/photo-1582647509711-c8aa8a8bda71?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="object-cover h-full"
          alt="card navigate ui"
        />
      </div>
      {/* login form */}
      <LoginForm register={register} setRegister={setRegister} />
    </div>
  );
};

export default AuthForm;
