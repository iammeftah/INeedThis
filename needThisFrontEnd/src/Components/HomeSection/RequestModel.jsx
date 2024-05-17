import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createRequest } from "../../Store/Request/Action";
import { uploadtoCloud } from "../CloudAPi/UploadToCloud";
import { useFormik } from "formik";
import * as Yup from "yup";
import AvatarImg from "../../recources/avatar.png";
import { CloudDownload, RestartAlt, AttachMoney } from "@mui/icons-material";

const categories = [
  { value: "electronics", label: "Electronics" },
  // ... (other categories)
];

const validationSchema = Yup.object().shape({
  content: Yup.string()
      .required("Please provide product description")
      .max(150, "Maximum character limit reached"),
});

export default function RequestModel({ open, handleClose }) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [uploadingImage, setUploadingImage] = useState(false);
  const [selectImage, setSelectedImage] = useState("");
  const dispatch = useDispatch();
  const auth = useSelector((store) => store.auth);

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedCategory(selectedValue);
    formik.setFieldValue("category", selectedValue);
  };

  const handleSubmit = async (values, actions) => {
    dispatch(createRequest(values));
    actions.resetForm();
    setSelectedImage(null);
  };

  const formik = useFormik({
    initialValues: {
      content: "",
      image: "",
      location: "",
      category: "",
      maxPrice: "",
      requestType: true,
    },
    onSubmit: handleSubmit,
    validationSchema,
  });

  const handleSelectImage = async (event) => {
    setUploadingImage(true);
    const imgUrl = await uploadtoCloud(event.target.files[0]);
    formik.setFieldValue("image", imgUrl);
    setSelectedImage(imgUrl);
    setUploadingImage(false);
  };

  return (
      <div
          className={`fixed inset-0 flex items-center justify-center z-50 ${
              open ? "visible" : "invisible"
          }`}
      >
        <div className="bg-slate-950 text-neutral-50 rounded-lg max-w-full sm:w-4/5 md:w-3/4 lg:w-1/2 xl:w-2/5 p-4">
          <button
              onClick={handleClose}
              className="absolute top-0 right-0 m-4 text-indigo-500 hover:text-indigo-600 duration-300"
          >
            <i className="bx bxs-x-circle text-xl"></i>
          </button>
          <div className="flex items-center mb-2">
            <img
                className="w-10 h-10 rounded-full mr-4"
                src={AvatarImg}
                alt="Avatar"
            />
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <div className="font-semibold">{auth.user?.fullName}</div>
              </div>
            </div>
          </div>
          <form onSubmit={formik.handleSubmit} className="h-full glass">
            <div className="flex flex-col sm:flex-row h-full">
              <div className="w-full sm:w-2/3 mr-2 p-2 flex flex-col">
              <textarea
                  type="text"
                  name="content"
                  rows="3"
                  wrap="soft"
                  placeholder="Request description"
                  maxLength={150}
                  className="bg-slate-950 w-full resize-none rounded-sm p-2 border-none outline-none text-xl mb-2"
                  {...formik.getFieldProps("content")}
              />
                <div className="flex justify-between mb-3">
                  <input
                      type="text"
                      name="location"
                      placeholder="Location"
                      className="bg-slate-950 w-1/2 rounded-sm p-2 border-none outline-none text-xl mr-2"
                      {...formik.getFieldProps("location")}
                  />
                  <select
                      name="category"
                      value={selectedCategory}
                      onChange={handleChange}
                      className="bg-slate-950 w-1/2 rounded-sm p-2 border-none outline-none text-xl"
                  >
                    {categories.map((category) => (
                        <option key={category.value} value={category.value}>
                          {category.label}
                        </option>
                    ))}
                  </select>
                </div>
                <div className="flex justify-between">
                  <div className="w-1/2 mr-2">
                    <input
                        type="number"
                        name="maxPrice"
                        placeholder="Max price ($)"
                        className="bg-slate-950 w-full rounded-sm p-2 border-none outline-none text-xl"
                        {...formik.getFieldProps("maxPrice")}
                    />
                  </div>
                </div>
              </div>
              <div className="w-full sm:w-1/3 flex flex-col justify-between h-full">
                <div className="w-full flex items-center justify-center">
                  <label className="flex flex-col items-center justify-center w-full h-64 border-[1px] border-[#7c3aed] rounded-s cursor-pointer p-3">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6 relative w-full h-full">
                      {!uploadingImage ? (
                          <CloudDownload className="text-[#7c3aed]" />
                      ) : null}
                      {uploadingImage ? (
                          <RestartAlt className="text-[#7c3aed] animate-spin" />
                      ) : (
                          <img
                              src={selectImage}
                              alt=""
                              className="w-3/4 rounded-sm mt-4 absolute"
                          />
                      )}
                      <input
                          type="file"
                          name="image file"
                          className="hidden"
                          onChange={handleSelectImage}
                      />
                      {!uploadingImage ? (
                          <p className="mb-2 text-sm text-[#7c3aed]">
                            <span className="font-semibold">Click to upload</span>
                          </p>
                      ) : null}
                    </div>
                  </label>
                </div>
                <button
                    type="submit"
                    className="bg-[#7c3aed] hover:bg-[#3e1d76] text-white py-2 px-4 rounded-md transition-colors duration-300 w-full flex items-center justify-center"
                >
                  <AttachMoney className="mr-2" />
                  Request Product
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
  );
}