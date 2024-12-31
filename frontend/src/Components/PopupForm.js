import axios from 'axios';
import React, { useState } from 'react'
import { AiOutlineUpload } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import '../App.css'
import { BiX } from 'react-icons/bi';

const PopupForm = ({onClose}) => {
    const [formData, setFormData] = useState({
        contactName: "",
        street: "",
        city: "",
        postcode: "",
        phone: "",
        email: "",
        idea: "",
        nda: false,
        file: null, // State to store the selected file
      });
      const [loading, setLoading] = useState(false);
      const [preview, setPreview] = useState(null);
      const navigate = useNavigate(); // Initialize the navigate function
    
      const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: type === "checkbox" ? checked : value,
        }));
      };
    
      const handleFileChange = (e) => {
        const file = e.target.files[0];
        console.log(e.target.files[0]);
        if (file) {
          setFormData((prevFormData) => ({
            ...prevFormData,
            file: file,
          }));
          setPreview(URL.createObjectURL(file)); // Create a preview URL for the selected file
        }
      };
      console.log("file", formData.file);
    
      const formDataToObject = (formData) => {
        const obj = {};
        formData.forEach((value, key) => {
          obj[key] = value;
        });
        return obj;
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Set loading state to true when submitting
    
        const data = new FormData();
        data.append("contactName", formData.contactName);
        data.append("street", formData.street);
        data.append("city", formData.city);
        data.append("postcode", formData.postcode);
        data.append("phone", formData.phone);
        data.append("email", formData.email);
        data.append("idea", formData.idea);
        data.append("nda", formData.nda);
    
        if (formData.file) {
          data.append("file", formData.file);
        }
    
        for (let pair of data.entries()) {
          console.log(`${pair[0]}: ${pair[1]}`);
        }
    
        try {
          const response = await axios.post(
            "http://localhost:5000/api/contact",
            data,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          );
          console.log(response.data);
    
          Swal.fire({
            title: "Success!",
            text: "Thanks for sending your details!",
            icon: "success",
            confirmButtonText: "OK",
          }).then(() => {
            setFormData({
              contactName: "",
              street: "",
              city: "",
              postcode: "",
              phone: "",
              email: "",
              idea: "",
              nda: false,
              file: null,
            });
    
            navigate("/");
          });
        } catch (error) {
          console.error("Submit error:", error);
    
          Swal.fire({
            title: "Error!",
            text: "There was an error submitting your details. Please try again.",
            icon: "error",
            confirmButtonText: "OK",
          });
        } finally {
          setLoading(false); // Reset loading state after submission
        }
      };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-2 z-50">
    <div className="bg-white rounded-lg shadow-xl w-full md:w-[60%]  h-auto lg:w-[60%] relative px-2 md:px-4 py-5">
    <button
          onClick={onClose}
          className="absolute right-2 top-2 text-gray-500 hover:text-gray-700 transition-colors"
          aria-label="Close"
        >
          <BiX className="h-6 w-6" />
        </button>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-4">
            Get Started with <span className='text-[#2334de]'>Maxify Solutions</span>
          </h2>
           <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
           <div className='flex w-full gap-2'>
            <input
              type="text"
              name="contactName"
              placeholder="Contact name"
              value={formData.contactName}
              onChange={handleChange}
              required
              className="border w-1/2 p-2 rounded"
            />

            <input
              type="text"
              name="street"
              placeholder="Street"
              value={formData.street}
              onChange={handleChange}
              required
              className="border w-1/2 p-2 rounded"
            />
            </div>

            <div className="flex w-full gap-2">
              <div className="w-1/2">
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className="border w-full p-2 rounded text-sm md:text-base"
                />
              </div>
              <div className="w-1/2">
                <input
                  type="text"
                  name="postcode"
                  placeholder="Postcode"
                  value={formData.postcode}
                  onChange={handleChange}
                  required
                  className="border w-full p-2 rounded text-sm md:text-base"
                />
              </div>
            </div>

            <div className='flex w-full gap-2'>

            <input
              type="text"
              name="phone"
              placeholder="Contact Phone"
              className='border w-full p-2 rounded text-sm md:text-base'
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="E-mail"
              value={formData.email}
              onChange={handleChange}
              required
              className='border w-full p-2 rounded text-sm md:text-base'
            />
            </div>

            <textarea
              name="idea"
              placeholder="Let's talk about your idea"
              value={formData.idea}
              onChange={handleChange}
              required
              className="border w-full p-2 rounded text-sm md:text-base"
            ></textarea>

            {/* Other form fields */}
            <label htmlFor="file-upload" className="cursor-pointer">
              <div className="h-[100px] flex justify-center items-center gap-3 border-dashed border-[2px]">
                {preview ? (
                  <img
                    src={preview}
                    alt="Preview"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <>
                    <AiOutlineUpload size={24} className="text-gray-600" />
                    <p
                      className="text-gray-600"
                      style={{ marginBottom: "0px" }}
                    >
                      Upload Additional File
                    </p>
                  </>
                )}
                <input
                  id="file-upload"
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </div>
            </label>
            <label className="checkbox-label text-sm flex items-center gap-1">
              <input
                type="checkbox"
                name="nda"
                checked={formData.nda}
                onChange={handleChange}
              />
              I want to protect my data by signing an NDA
            </label>

            <button type="submit" className='bg-[#2334de] text-white p-2 rounded-sm' disabled={loading}>
              {loading ? "Submitting..." : "SUBMIT"}
            </button>
          </form>
          </div>
    </div>
  )
}

export default PopupForm
