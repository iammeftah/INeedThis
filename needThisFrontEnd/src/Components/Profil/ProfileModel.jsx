import * as React from "react";
import { useFormik } from "formik";
import profilePic from "../../recources/avatar.png";

export default function ProfileModel({ open, handleClose }) {
  const handleSubmit = (values) => {
    console.log("yes", values);
  };

  const formik = useFormik({
    initialValues: {
      FirstName: "",
      LastName: "",
      bio: "",
      location: "",
      bgImage: "",
      image: "",
    },
    onSubmit: handleSubmit,
  });

  const handleImageChange = (event) => {
    const { name } = event.target;
    const file = event.target.files[0];
    formik.setFieldValue(name, file);
  };

  return (
      <div className={`fixed inset-0 flex items-center justify-center z-50 ${open ? "block" : "hidden"}`}>
        <div className="bg-gray-950 text-white rounded-lg overflow-hidden w-[600px] outline-none">
          <form onSubmit={formik.handleSubmit}>
            <div className="relative h-1/2">
              <img
                  className="w-full h-[12rem] object-cover"
                  src="https://cdn.pixabay.com/photo/2024/03/04/16/44/barberry-8612696_640.jpg"
                  alt="wall"
              />
              <input
                  type="file"
                  className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                  name="bgImage"
                  onChange={handleImageChange}
              />
            </div>

            <div className="relative -translate-y-32 px-8">
              <div className="relative px-8">
                <img
                    src={profilePic}
                    alt="profile"
                    className="w-[10rem] h-[10rem] rounded-full border-4 border-purple-500"
                />
                <input
                    type="file"
                    className="absolute top-0 left-0 w-[10rem] h-full opacity-0 cursor-pointer"
                    name="image"
                    onChange={handleImageChange}
                />
              </div>
            </div>

            <div className="relative -translate-y-32 px-8 py-4">
              <div className="flex flex-row gap-2">
                <div className="w-full">
                  <label htmlFor="FirstName" className="block text-white">
                    First Name
                  </label>
                  <input
                      placeholder="First Name"
                      id="FirstName"
                      name="FirstName"
                      className={`w-full p-2 bg-transparent rounded-md border-2 ${
                          formik.touched.FirstName && formik.errors.FirstName
                              ? "border-red-500"
                              : "border-gray-500"
                      } hover:border-indigo-500 hover:bg-white/10 duration-300`}
                      value={formik.values.FirstName}
                      onChange={formik.handleChange}
                  />
                  {formik.touched.FirstName && formik.errors.FirstName && (
                      <div className="text-red-500">{formik.errors.FirstName}</div>
                  )}
                </div>
                <div className="w-full">
                  <label htmlFor="LastName" className="block text-white">
                    Last Name
                  </label>
                  <input
                      placeholder="Last Name"
                      id="LastName"
                      name="LastName"
                      className={`w-full p-2 bg-transparent rounded-md border-2 ${
                          formik.touched.LastName && formik.errors.LastName
                              ? "border-red-500"
                              : "border-gray-500"
                      } hover:border-indigo-500 hover:bg-white/10 duration-300`}
                      value={formik.values.LastName}
                      onChange={formik.handleChange}
                  />
                  {formik.touched.LastName && formik.errors.LastName && (
                      <div className="text-red-500">{formik.errors.LastName}</div>
                  )}
                </div>
              </div>

              <div className="mt-4">
                <label htmlFor="bio" className="block text-white">
                  Bio
                </label>
                <textarea
                    placeholder="Talk about yourself"
                    id="bio"
                    name="bio"
                    rows="2"
                    className={`w-full p-2 bg-transparent rounded-md border-2 ${
                        formik.touched.bio && formik.errors.bio
                            ? "border-red-500"
                            : "border-gray-500"
                    } hover:border-indigo-500 hover:bg-white/10 duration-300`}
                    value={formik.values.bio}
                    onChange={formik.handleChange}
                />
                {formik.touched.bio && formik.errors.bio && (
                    <div className="text-red-500">{formik.errors.bio}</div>
                )}
              </div>

              <div className="mt-4">
                <label htmlFor="location" className="block text-white">
                  Location
                </label>
                <input
                    placeholder="Location"
                    id="location"
                    name="location"
                    className={`w-full p-2 bg-transparent rounded-md border-2 ${
                        formik.touched.location && formik.errors.location
                            ? "border-red-500"
                            : "border-gray-500"
                    } hover:border-indigo-500 hover:bg-white/10 duration-300`}
                    value={formik.values.location}
                    onChange={formik.handleChange}
                />
                {formik.touched.location && formik.errors.location && (
                    <div className="text-red-500">{formik.errors.location}</div>
                )}
              </div>

              <div className="flex items-center justify-end mt-6">
                <div className="flex space-x-2">
                  <button
                      type="button"
                      onClick={handleClose}
                      className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                  >
                    Cancel
                  </button>
                  <button
                      type="submit"
                      className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-700"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
  );
}
