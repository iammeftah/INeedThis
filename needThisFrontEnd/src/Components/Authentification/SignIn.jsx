import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { loginUser } from "../../Store/Auth/Action";

// Validation schema using Yup
const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
});

const SignIn = () => {
    const dispatch = useDispatch();

    // Formik setup
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema,
        onSubmit: (values) => {
            dispatch(loginUser(values));
            console.log("Form values", values);
        },
    });

    return (
        <form onSubmit={formik.handleSubmit} className="flex flex-col w-full max-w-md">
            <h1 className="text-3xl sm:text-4xl md:text-5xl p-2 text-center font-bold bg-gradient-to-r from-violet-600 via-fuchsia-600 to-blue-600 bg-clip-text text-transparent">Sign in to your account</h1>
            <div className="mb-4">
                <label htmlFor="email" className="block text-white">Email</label>
                <input
                    required
                    id="email"
                    name="email"
                    type="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Enter your email"
                    className={`w-full p-2 bg-transparent rounded-md border-2 ${
                        formik.touched.email && formik.errors.email
                            ? "border-red-500"
                            : "border-gray-500"
                    } hover:border-indigo-500 hover:bg-[#FFFFFF10] duration-300`}
                />
            </div>
            <div className="mb-4">
                <label htmlFor="password" className="block text-white">Password</label>
                <input
                    required
                    id="password"
                    name="password"
                    type="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Enter your password"
                    className={`w-full p-2 bg-transparent rounded-md border-2 ${
                        formik.touched.email && formik.errors.email
                            ? "border-red-500"
                            : "border-gray-500"
                    } hover:border-indigo-500 hover:bg-[#FFFFFF10] duration-300`}
                />
            </div>
            <button
                type="submit"
                className="bg-gradient-to-tr from-indigo-600 to-fuchsia-600 text-white py-2 px-4 rounded-md transition-colors duration-300"
            >
                Sign In
            </button>

            <div className="flex flex-row justify-center items-center gap-2 mt-2">
                <p className="text-[.8rem] text-gray-500">
                    Forget Password ?
                </p>
                <button
                    className="text-indigo-500 text-[.8rem] hover:text-indigo-400 hover:underline focus:outline-none"
                >
                    Reset
                </button>
            </div>
        </form>
    );
};

export default SignIn;