import React from "react";

const SignInAndSignUpPage = () => {
  return (
    <div>
      <div className="px-2">
        <h1>Login</h1>
        <form>
          <div>
            <label className="text-base font-semibold">Email</label>
            <input className="w-full py-2 px-2 outline-none border" type="text" placeholder="Email" />
          </div>
          <div>
            <label className="text-base font-semibold">Password</label>
            <input className="w-full py-2 px-2 outline-none border" type="text" placeholder="Password" />
          </div>
          <div className="flex items-center justify-between text-sm mt-2">
            <a className="hover:underline">Create Account</a>
            <a className="hover:underline">Forget Password</a>
          </div>
          <button className="w-full py-3 bg-blue-500 text-white font-semibold rounded-md uppercase">Login</button>
        </form>
      </div>

      {/* <div className="px-2">
        <h1>Signup</h1>
        <form>
          <div>
            <label className="text-base font-semibold">Email</label>
            <input className="w-full py-2 px-2 outline-none border" type="text" placeholder="Email" />
          </div>
          <div>
            <label className="text-base font-semibold">Password</label>
            <input className="w-full py-2 px-2 outline-none border" type="text" placeholder="Password" />
          </div>
          <div>
            <label className="text-base font-semibold">Confirm Password</label>
            <input className="w-full py-2 px-2 outline-none border" type="text" placeholder="Confirm Password" />
          </div>

          <button className="w-full py-3 bg-blue-500 text-white font-semibold rounded-md uppercase">Sign Up</button>
        </form>
      </div> */}
    </div>
  );
};

export default SignInAndSignUpPage;
