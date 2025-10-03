import React, { useEffect, useState } from "react";
import Common from "../../layouts/Common";
import { useNavigate } from "react-router-dom";
import "../../assets/styles/main.css";
import api from "../../api";
import apiUrl from "../../secret";
import Spinner from "react-bootstrap/Spinner";
import validationRules from "../../utils/validateField";

const AddUserApplication = () => {
  const [applications, setApplications] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    surname: "",
    givenN: "",
    email: "",
    phone: "",
    nationalId: "",
    sex: "",
    dob: "",
    birthCity: "",
    currentN: "",
    identification: "",
    company: "",
    dutyDuration: "",
    jobTitle: "",
    salary: "",
    image: null,
    passport: "",
    issuedCountry: "",
  });

  const [imagePreview, setImagePreview] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      setError("");
      setLoading(true);
      try {
        const response = await api.get(`/fetchApplication`, { timeout: 5000 });
        setApplications(response.data.applications || []);
      } catch (error) {
        console.error("Error fetching applications:", error);
        setError("Error fetching applications. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  const onChangeHandler = (e) => {
    const { name, value, type, files } = e.target;

    if (type === "file") {
      const selectedFile = files[0];
      const maxSize = 10 * 1024 * 1024; // 10 MB
      if (selectedFile && selectedFile.size > maxSize) {
        setError("File size exceeds the limit of 10 MB.");
        setFormData((prevData) => ({ ...prevData, image: null }));
        setImagePreview(null);
      } else {
        setError("");
        setFormData((prevData) => ({ ...prevData, image: selectedFile }));
        const reader = new FileReader();
        reader.onloadend = () => {
          setImagePreview(reader.result);
        };
        reader.readAsDataURL(selectedFile);
      }
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Run validation
    for (const [field, rule] of Object.entries(validationRules)) {
      if (!rule.validate(formData[field])) {
        setError(rule.message);
        setLoading(false);
        return;
      }
    }

    // Check for duplicates
    const { email, passport } = formData;
    if (applications.some((u) => u.email === email)) {
      setError("User email already exists. Please try another email.");
      setLoading(false);
      return;
    }
    if (applications.some((u) => u.passport === passport)) {
      setError("User passport already exists. Please try another passport.");
      setLoading(false);
      return;
    }

    // Build FormData
    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (key === "image" && value) {
        formDataToSend.append("image", value);
      } else {
        const trimmed = value?.trim?.();
        if (trimmed) {
          formDataToSend.append(key, trimmed);
        }
      }
    });

    // Submit
    try {
      const response = await api.post(
        `/application/addApplication`,
        formDataToSend,
        {
          headers: { "Content-Type": "multipart/form-data" },
          timeout: 20000,
        }
      );

      if (response?.status === 201) {
        setFormData(
          Object.keys(formData).reduce((acc, key) => {
            acc[key] = key === "image" ? null : "";
            return acc;
          }, {})
        );
        navigate("/application", { replace: true });
        setError("");
      } else {
        setError(
          `Failed to add application. Server responded with status: ${response.status}`
        );
      }
    } catch (error) {
      console.error("Error adding application:", error);
      setError("Error adding application. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && (
        <div className="text-center mt-3">
          <Spinner animation="border" variant="primary" />
        </div>
      )}
      <div id="navbar-example2">
        <Common />
      </div>
      <main
        data-bs-spy="scroll"
        data-bs-target="#navbar-example2"
        data-bs-offset="0"
        className="scrollspy-example add_user me-5"
        tabIndex="0"
        style={{ overflowY: "scroll", maxHeight: "100vh" }}
      >
        <h2 className="visa_form">Visa Application Form</h2>
        <p className="particulars">Personal Particulars</p>
        <hr className="user_application_hr " />
        <form
          onSubmit={handleSubmit}
          className="me-5 absolute "
          encType="multipart/form-data"
        >
          <div className="name-details d-flex">
            <div className="surname w-50 p-1">
              <label className="form-label" htmlFor="surname">
                Surname*
              </label>
              <input
                className="form-control p-2 mb-3"
                type="text"
                name="surname"
                required
                value={formData.surname}
                onChange={onChangeHandler}
              />
            </div>
            <div className="w-50 p-1">
              <label className="form-label" htmlFor="givenN">
                Given Name*
              </label>
              <input
                className="form-control p-2 mb-3"
                type="text"
                name="givenN"
                required
                value={formData.givenN}
                onChange={onChangeHandler}
              />
            </div>
          </div>
          <div>
            <label className="form-label" htmlFor="email">
              Email*
            </label>
            <input
              className="form-control p-2 mb-3"
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={onChangeHandler}
            />
          </div>
          <div className="identification d-flex">
            <div className="phone-no w-50 p-1">
              <label className="form-label" htmlFor="phone">
                Phone*
              </label>
              <input
                className="form-control p-2 mb-3"
                type="text"
                name="phone"
                required
                value={formData.phone}
                onChange={onChangeHandler}
              />
            </div>
            <div className="id-number w-50 p-1">
              <label className="form-label" htmlFor="nationalId">
                National ID*
              </label>
              <input
                className="form-control p-2 mb-3"
                type="text"
                name="nationalId"
                required
                value={formData.nationalId}
                onChange={onChangeHandler}
              />
            </div>
          </div>
          <div className="gender_date d-flex">
            <div className="gender w-50 p-1">
              <label className="form-label" htmlFor="sex">
                Sex*
              </label>
              <select
                id="sex"
                className="form-select p-2 mb-3"
                name="sex"
                value={formData.sex}
                required
                onChange={onChangeHandler}
              >
                <option value="" disabled>
                  Select Sex
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div className="dob w-50 p-1">
              <label className="form-label" htmlFor="dob">
                Date of Birth*
              </label>
              <input
                className="form-control p-2 mb-3"
                type="date"
                name="dob"
                required
                value={formData.dob}
                onChange={onChangeHandler}
              />
            </div>
          </div>
          <div className="city_birth d-flex">
            <div className="w-50 p-1">
              <label className="form-label" htmlFor="birthCity">
                Place of Birth Town/City*
              </label>
              <input
                className="form-control p-2 mb-3"
                type="text"
                name="birthCity"
                required
                value={formData.birthCity}
                onChange={onChangeHandler}
              />
            </div>
            <div className="id-number w-50 p-1">
              <label className="form-label" htmlFor="currentN">
                Current Nationality*
              </label>
              <input
                className="form-control p-2 mb-3"
                type="text"
                name="currentN"
                required
                placeholder="Enter current nationality"
                value={formData.currentN}
                onChange={onChangeHandler}
              />
            </div>
          </div>

          <div className="message">
            <label className="form-label" htmlFor="identification">
              Identification Marks*
            </label>
            <textarea
              id="identification"
              name="identification"
              className="form-control mb-3"
              required
              value={formData.identification}
              onChange={onChangeHandler}
            >
              Enter identification marks
            </textarea>
          </div>
          <div className="company_duration d-flex">
            <div className="phone-no w-50 p-1">
              <label className="form-label" htmlFor="company">
                Company Name*
              </label>
              <input
                className="form-control p-2 mb-3"
                type="text"
                name="company"
                required
                value={formData.company}
                onChange={onChangeHandler}
              />
            </div>
            <div className="id-number w-50 p-1">
              <label className="form-label" htmlFor="dutyDuration">
                Duty Duration*
              </label>
              <input
                className="form-control p-2 mb-3"
                type="text"
                name="dutyDuration"
                required
                value={formData.dutyDuration}
                onChange={onChangeHandler}
              />
            </div>
          </div>
          <div className="d-flex job_title">
            <div className="w-50 p-1">
              <label className="form-label" htmlFor="jobTitle">
                Job Title*
              </label>
              <select
                id="jobTitle"
                name="jobTitle"
                className="form-select p-2 mb-3"
                value={formData.jobTitle}
                onChange={onChangeHandler}
              >
                <option value="" disabled>
                  Select Job Title
                </option>
                <option value="Driving">Driving</option>
                <option value="Construction">Construction</option>
                <option value="Electrician">Electrician</option>
                <option value="Holder">Holder</option>
                <option value="Housekeeping">Housekeeping</option>
                <option value="Cleaner">Cleaner</option>
                <option value="Plumber">Plumber</option>
                <option value="Packaging">Packaging</option>
                <option value="Cook">Cook</option>
                <option value="Restaurant">Restaurant</option>
                <option value="Manager">Manager</option>
                <option value="Supervisor">Supervisor</option>
                <option value="Worker">Worker</option>
                <option value="Caring Operator">Caring Operator</option>
              </select>
            </div>
            <div className="id-number w-50 p-1">
              <label className="form-label" htmlFor="salary">
                Salary*
              </label>
              <input
                className="form-control p-2 mb-3"
                type="text"
                name="salary"
                required
                value={formData.salary}
                onChange={onChangeHandler}
              />
            </div>
          </div>
          <div className="edit-file">
            <label className="form-label" htmlFor="image">
              Image
            </label>
            <input
              className="form-control p-2 mb-3"
              type="file"
              name="image"
              accept="image/*"
              required
              onChange={onChangeHandler}
            />
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Selected"
                style={{ width: "100px", height: "100px" }}
              />
            )}
          </div>
          <div className="id-number p-1">
            <label className="form-label" htmlFor="passport">
              Passport*
            </label>
            <input
              className="form-control p-2 mb-3"
              type="text"
              name="passport"
              required
              value={formData.passport}
              onChange={onChangeHandler}
            />
          </div>
          <div>
            <label className="form-label" htmlFor="issuedCountry">
              Issued Country
            </label>
            <input
              className="form-control p-2 mb-5"
              type="text"
              name="issuedCountry"
              required
              placeholder="Enter issued country"
              value={formData.issuedCountry}
              onChange={onChangeHandler}
            />
            {error && <span style={{ color: "red" }}>{error}</span>}
          </div>
          <button type="submit" className="btn btn-primary mb-2">
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </main>
    </>
  );
};

export default AddUserApplication;
