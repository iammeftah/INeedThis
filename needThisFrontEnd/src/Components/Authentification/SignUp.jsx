import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { registerUser } from "../../Store/Auth/Action";

const validationSchema = Yup.object().shape({
  fullName: Yup.string().required("Full name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
  confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], "Passwords must match")
      .required("Confirm Password is required"),
});

const currentYear = new Date().getFullYear();
const years = Array.from({ length: 50 }, (_, i) => currentYear - i);
const days = Array.from({ length: 31 }, (_, i) => i + 1);
const months = [
  { value: 1, label: "January" },
  { value: 2, label: "February" },
  { value: 3, label: "March" },
  { value: 4, label: "April" },
  { value: 5, label: "May" },
  { value: 6, label: "June" },
  { value: 7, label: "July" },
  { value: 8, label: "August" },
  { value: 9, label: "September" },
  { value: 10, label: "October" },
  { value: 11, label: "November" },
  { value: 12, label: "December" },
];

const SignUp = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      dateOfBirth: {
        day: "",
        month: "",
        year: "",
      },
      seller: "",
    },
    validationSchema,
    onSubmit: (values) => {
      const { day, month, year } = values.dateOfBirth;
      const dateOfbirth = `${year}-${month}-${day}`;
      values.dateOfBirth = dateOfbirth;
      dispatch(registerUser(values));
      console.log("from values ::::::::::::::", values);
    },
  });

  const handleDateChange = (name) => (event) => {
    formik.setFieldValue("dateOfBirth", {
      ...formik.values.dateOfBirth,
      [name]: event.target.value,
    });
  };

  const handleChange = (event) => {
    setValue(event.target.value);
    const { value } = event.target;
    formik.setFieldValue("seller", value === "true");
  };

  const [value, setValue] = React.useState("seller");

  return (
      <form onSubmit={formik.handleSubmit} className="flex flex-col w-full max-w-md gap-4">
        <div className="flex flex-col items-center justify-center gap-2">
          <h1 className="text-2xl sm:text-3xl md:text-5xl p-2 text-center font-bold bg-gradient-to-r from-violet-600 via-fuchsia-600 to-blue-600 bg-clip-text text-transparent">
            Create your account
          </h1>
          <h3 className="text-xl sm:text-2xl md:text-3xl p-2 text-white font-bold">
            Join the community
          </h3>
        </div>

        {/* Full name */}
        <div>
          <label htmlFor="fullName" className="block text-white">
            Full Name
          </label>
          <input
              required
              id="fullName"
              name="fullName"
              type="text"
              placeholder="Enter your full name"
              value={formik.values.fullName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`w-full p-2 bg-transparent rounded-md border-2 ${
                  formik.touched.fullName && formik.errors.fullName
                      ? "border-red-500"
                      : "border-gray-500"
              } hover:border-indigo-500 hover:bg-[#FFFFFF10] duration-300`}
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-white">
            Email
          </label>
          <input
              required
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`w-full p-2 bg-transparent rounded-md border-2 ${
                  formik.touched.email && formik.errors.email
                      ? "border-red-500"
                      : "border-gray-500"
              } hover:border-indigo-500 hover:bg-[#FFFFFF10] duration-300`}
          />
        </div>

        {/* Password and Confirm Password */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="w-full">
            <label htmlFor="password" className="block text-white">
              Password
            </label>
            <input
                required
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`w-full p-2 bg-transparent rounded-md border-2 ${
                    formik.touched.password && formik.errors.password
                        ? "border-red-500"
                        : "border-gray-500"
                } hover:border-indigo-500 hover:bg-[#FFFFFF10] duration-300`}
            />
          </div>

          <div className="w-full">
            <label htmlFor="confirmPassword" className="block text-white">
              Confirm Password
            </label>
            <input
                required
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="Confirm your password"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`w-full p-2 bg-transparent rounded-md border-2 ${
                    formik.touched.confirmPassword && formik.errors.confirmPassword
                        ? "border-red-500"
                        : "border-gray-500"
                } hover:border-indigo-500 hover:bg-[#FFFFFF10] duration-300`}
            />
          </div>
        </div>

        {/* Date of Birth */}
        <div>
          <label htmlFor="dateOfBirth" className="block text-white">
            Date of Birth
          </label>
          <input
              required
              id="dateOfBirth"
              name="dateOfBirth"
              type="date"
              value={formik.values.dateOfBirth}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`w-full p-2 bg-transparent rounded-md border-2 ${
                  formik.touched.dateOfBirth && formik.errors.dateOfBirth
                      ? "border-red-500"
                      : "border-gray-500"
              } hover:border-indigo-500 hover:bg-[#FFFFFF10] duration-300`}
              style={{
                colorScheme: "dark", // ensures the text is visible in dark mode
              }}
          />
        </div>

        {/* Buyer - Seller */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white font-bold">Type:</p>
          <div className="flex items-center gap-2">
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                  type="radio"
                  name="seller"
                  value="true"
                  checked={formik.values.seller}
                  onChange={() => formik.setFieldValue("seller", true)}
                  className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-indigo-500 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-indigo-600"></div>
              <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            Seller
          </span>
            </label>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                  type="radio"
                  name="seller"
                  value="false"
                  checked={!formik.values.seller}
                  onChange={() => formik.setFieldValue("seller", false)}
                  className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-indigo-500 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-indigo-600"></div>
              <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            Buyer
          </span>
            </label>
          </div>
        </div>

        {/* Sign up */}
        <div>
          <button
              className="w-full font-bold p-2 rounded-md bg-gradient-to-tr from-indigo-600 to-fuchsia-600 hover:shadow-[_0px_0px_30px_4px_rgba(124,58,237,0.25)] duration-300"
              type="submit"
          >
            Sign Up
          </button>
        </div>
      </form>
  );
};

export default SignUp;
