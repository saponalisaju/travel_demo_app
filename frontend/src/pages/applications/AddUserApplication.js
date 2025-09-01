import React, { useEffect, useState } from "react";
import Common from "../../layouts/Common";
import { useNavigate } from "react-router-dom";
import "../../assets/styles/main.css";
import api from "../../api";
import apiUrl from "../../secret";
import axios from "axios";
import { validateApplication } from "../../utils/validateField";
import { buildFormData } from "../../utils/buildFormData";
import FormField from "./FormField";
import { formSchema } from "../../utils/formSchema";

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
    dutyDuration: "8 Hours",
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

    const errorMsg = validateApplication(formData, applications);
    if (errorMsg) {
      setError(errorMsg);
      setLoading(false);
      return;
    }

    try {
      const formDataToSend = buildFormData(formData);
      const response = await axios.post(
        `${apiUrl}/api/application/addApplication`,
        formDataToSend,
        {
          headers: { "Content-Type": "multipart/form-data" },
          timeout: 20000,
        }
      );

      if (response?.status === 201) {
        setFormData({
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
        navigate("/application", { replace: true });
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

  const groupedFields = formSchema.reduce((acc, field) => {
    const row = field.row || "default";
    acc[row] = acc[row] || [];
    acc[row].push(field);
    return acc;
  }, {});

  return (
    <>
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
            {Object.entries(groupedFields).map(([rowClass, fields]) => (
              <div key={rowClass} className={`${rowClass} d-flex flex-wrap`}>
                {fields.map((field) => (
                  <FormField
                    key={field.name}
                    {...field}
                    value={formData[field.name]}
                    onChange={onChangeHandler}
                    preview={field.name === "image" ? imagePreview : undefined}
                  />
                ))}
              </div>
            ))}
          </div>
          {error && <span style={{ color: "red" }}>{error}</span>}
          <button type="submit" className="btn btn-primary mb-2">
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </main>
    </>
  );
};

export default AddUserApplication;
