import React, { useState } from "react";
import "../App.css";
import { AiOutlineUpload } from "react-icons/ai";
import axios from "axios";
import Swal from "sweetalert2"; // Import SweetAlert2
import { useNavigate } from "react-router-dom"; //

const ContactForm = () => {
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
    console.log(e.target.files[0])
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
    <div className="relative">
      <div className="contact-container" id="contact">
        <div className="contact-content md:px-12">
          <h2 className="text-4xl font-bold">
            Get Started with <span>Maxify Solutions</span>
          </h2>
          <p className="text-sm text-justify">
            Are you ready to take your business to new heights? Contact Maxify
            Solutions today to find out how we can help you in achieving your
            goals. We're here to help you find a trusted website development
            company in Noida or the best digital marketing services provider in
            Noida. Let's partner to capitalize on new opportunities and drive
            your company to the next step.
          </p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="contactName"
              placeholder="Contact name"
              value={formData.contactName}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="street"
              placeholder="Street"
              value={formData.street}
              onChange={handleChange}
              required
            />

            <div className="form-group">
              <div className="input-half">
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-half">
                <input
                  type="text"
                  name="postcode"
                  placeholder="Postcode"
                  value={formData.postcode}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <input
              type="text"
              name="phone"
              placeholder="Contact Phone"
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
            />

            <textarea
              name="idea"
              placeholder="Let's talk about your idea"
              value={formData.idea}
              onChange={handleChange}
              required
            ></textarea>

            {/* Other form fields */}
            <label htmlFor="file-upload" className="cursor-pointer">
              <div className="h-[200px] flex justify-center items-center gap-3 border-dashed border-[2px]">
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
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="nda"
                checked={formData.nda}
                onChange={handleChange}
              />
              I want to protect my data by signing an NDA
            </label>

            <button type="submit" disabled={loading}>
              {loading ? "Submitting..." : "SUBMIT"}
            </button>
          </form>
        </div>

        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108852.64967372696!2d74.3243776!3d31.506432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919051cb6d08ffd%3A0x5a61626c98977248!2sJoyland!5e0!3m2!1sen!2s!4v1720365561236!5m2!1sen!2s"
            width="600"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
