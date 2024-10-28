import { useState } from "react";
import { IoPersonSharp } from "react-icons/io5";
import { FaStarOfLife } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
const Register = () => {
  const calculatePasswordStrength = (password) => {
    let score = 0;
    if (password.length >= 8) score += 1;
    if (/[A-Z]/.test(password)) score += 1;
    if (/[a-z]/.test(password)) score += 1;
    if (/[0-9]/.test(password)) score += 1;
    if (/[@$!%*?&#]/.test(password)) score += 1;
    return score; // Max score: 5
  };
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    companyName: "",
    street: "",
    street1: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    currency: "",
    phoneNumber: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    if (name === "password") {
      const strength = calculatePasswordStrength(value);
      setPasswordStrength(strength);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/create", {
        personalInfo: {
          firstName: formData.firstName,
          lastName: formData.lastName,
          phoneNumber: formData.phoneNumber,
          email: formData.email,
          password: formData.password,
        },
        billingAddress: {
          companyName: formData.companyName,
          street: formData.street,
          // street2: formData.street2,
          city: formData.city,
          state: formData.state,
          zip: formData.zip,
          country: formData.country,
        },
        // AdditionalInformation: {
        //   currency: formData.currency,
        // },
      });
      alert("Signup successful!");
    } catch (error) {
      console.error(error);
      alert(error);
    }
    console.log("Form Submitted:", formData);
  };
  const getStrengthColor = () => {
    switch (passwordStrength) {
      case 1:
        return "bg-red-500";
      case 2:
        return "bg-yellow-500";
      case 3:
        return "bg-blue-500";
      case 4:
      case 5:
        return "bg-green-500";
      default:
        return "bg-gray-300";
    }
  };
  return (
    <section className=" min-h-screen flex   mx-20 my-10 space-x-6">
      <div className="flex flex-col w-1/4 h-10  items-center">
        <div className="border-2 space-y-4">
          <div className="text-center space-x-2 flex w-full justify-center items-center text-blue-900 bg-gray-200 px-5 py-2">
            <IoPersonSharp className="text-2xl" />
            <h1 className="text-xl font-medium">Already Registered?</h1>
          </div>
          <div className="text-left text-wrap text-sm w-full px-4 ">
            <p className="text-gray-600">
              Already registered with us? If so, click the button below to log
              in to our client area from where you can manage your account.
            </p>
          </div>
          <div className="w-full">
            <button className="group hover:bg-blue-500 w-full flex items-center justify-between py-3 px-4">
              <span className="text-gray-700 text-sm group-hover:text-white">
                Login
              </span>
              <IoPersonSharp className="text-lg text-gray-400 group-hover:text-white" />
            </button>
            <button className="group hover:bg-blue-500 w-full flex items-center justify-between py-3 px-4 mt-2">
              <span className="text-gray-700 text-sm group-hover:text-white">
                Login Password Reset
              </span>
              <FaStarOfLife className="text-md text-gray-400 group-hover:text-white" />
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col  w-3/4">
        <div className="space-y-2 w-full mb-8">
          <h1>
            <span className="text-indigo-900 text-xl text-bold">Register</span>
            <span className="text-gray-500"> Create An Account With Us...</span>
          </h1>
          <hr className="border-t border-gray-500 w-full " />
          <p>
            <span className="text-indigo-900 text-sm">Portal Home</span>
            <span className="text-gray-500 text-xs"> / Register</span>
          </p>
        </div>
        <div className="flex items-center justify-center  mt-18 ">
          <hr className=" border-t border-gray-500 w-full mr-2" />
          <span className="px-2  text-blue-800 text-center">SignUp</span>
          <hr className=" border-t border-gray-500 w-full ml-2" />
        </div>
        <div className="flex justify-center items-center my-5 space-x-2">
          <button className="flex justify-center items-center bg-blue-600 hover:bg-blue-800 px-3 py-1">
            <CiFacebook className="text-2xl text-white" />
            <span className="text-white"> Sign Up With Facebook</span>
          </button>
          <button className="flex justify-center items-center px-3 py-1 border-2">
            <FcGoogle className="text-2xl" />
            <span className="text-gray-600"> Sign In With Google</span>
          </button>
        </div>
        <div className="flex items-center justify-center my-4 ">
          <hr className=" border-t border-gray-500 w-full mr-2" />
          <span className="pl-2  text-blue-800 text-center">Personal </span>
          <span className="pr-2 pl-1 text-blue-800 text-center">
            {" "}
            Information
          </span>
          <hr className=" border-t border-gray-500 w-full ml-2" />
        </div>
        <div className="">
          <form>
            <div className="grid grid-cols-2 gap-4 ">
              <div className="space-y-4">
                <input
                  className="focus:outline-none border-2 py-1 px-2 w-full"
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  onChange={handleChange}
                  required
                />
                <input
                  className="focus:outline-none border-2 py-1 px-2 w-full"
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-4">
                <input
                  className="focus:outline-none border-2 py-1 px-2 w-full"
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  onChange={handleChange}
                  required
                />
                <input
                  className="focus:outline-none border-2 py-1 px-2 w-full"
                  type="number"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="flex items-center justify-center  my-4">
              <hr className=" border-t border-gray-500 w-full mr-2" />
              <span className="pl-2  text-blue-800 text-center">Billing </span>
              <span className="pr-2 pl-1 text-blue-800 text-center">
                {" "}
                Address
              </span>
              <hr className=" border-t border-gray-500 w-full ml-2" />
            </div>
            <div className="space-y-4">
              <input
                className="focus:outline-none border-2 py-1 px-2 w-full"
                type="text"
                name="companyName"
                placeholder="Company Name"
                onChange={handleChange}
              />
              <input
                className="focus:outline-none border-2 py-1 px-2 w-full"
                type="text"
                name="street"
                placeholder="Street Address"
                onChange={handleChange}
                required
              />
              <input
                className="focus:outline-none border-2 py-1 px-2 w-full"
                type="text"
                name="street"
                placeholder="Street Address 2"
                onChange={handleChange}
                required
              />
            </div>
            <div className="grid grid-cols-3 gap-4 my-4">
              <input
                className="focus:outline-none border-2 py-1 px-2"
                type="text"
                name="city"
                placeholder="City"
                onChange={handleChange}
                required
              />
              <input
                className="focus:outline-none border-2 py-1 px-2"
                type="text"
                name="state"
                placeholder="State"
                onChange={handleChange}
                required
              />
              <input
                className="focus:outline-none border-2 py-1 px-2"
                type="number"
                name="zip"
                placeholder="ZIP Code"
                onChange={handleChange}
                required
              />
            </div>
            <input
              className="focus:outline-none border-2 py-1 px-2 w-full"
              type="text"
              name="country"
              placeholder="Country"
              onChange={handleChange}
              required
            />
            <div className="flex  items-center justify-center  mt-4">
              <hr className=" border-t border-gray-500 w-full mr-2" />
              <span className="pl-2  text-blue-800 text-center">
                Additional{" "}
              </span>
              <span className="pr-2 pl-1 text-blue-800 text-center">
                Information
              </span>
              <hr className=" border-t border-gray-500 w-full ml-2" />
            </div>
            <h1 className="text-blue-800 text-center">
              (required fields are marked with *)
            </h1>
            <input
              className="focus:outline-none border-2 py-1 px-2"
              type="currency"
              name="currency"
              placeholder="USD"
              onChange={handleChange}
              required
            />
            <div className="flex  items-center justify-center  my-4">
              <hr className=" border-t border-gray-500 w-full mr-2" />
              <span className="pl-2  text-blue-800 text-center">Account </span>
              <span className="pr-2 pl-1 text-blue-800 text-center">
                {" "}
                Security
              </span>
              <hr className=" border-t border-gray-500 w-full ml-2" />
            </div>
            <div className="grid grid-cols-2 gap-4 my-4">
              <input
                className="focus:outline-none border-2 py-1 px-2"
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                required
              />
              <input
                className="focus:outline-none border-2 py-1 px-2"
                type="passwords"
                name="passwords"
                placeholder="ConfirmPassword"
              />
              <div className="bg-blue-900 text-center text-sm text-white  py-2 hover:border-2 border-blue-900 hover:bg-blue-400 w-1/2">
                Generate Password
              </div>
              <div className="w-full h-2 rounded bg-gray-300 mt-2">
                <div
                  className={`h-full ${getStrengthColor()} rounded transition-all`}
                  style={{ width: `${(passwordStrength / 5) * 100}%` }}
                ></div>
                <h1 className="text-red-700">
                  Password Strength : `{(passwordStrength / 5) * 100}%`
                </h1>
              </div>
            </div>
            <div className="flex  items-center justify-center">
              <button
                onClick={handleSubmit}
                type="submit"
                className="bg-blue-500 text-sm text-white px-2 py-1 hover:border-2 border-black"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Register;
