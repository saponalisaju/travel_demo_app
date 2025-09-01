import React, { useEffect, useState } from "react";
import Common from "../../layouts/Common";
import { useLocation, useNavigate } from "react-router-dom";
import "../../assets/styles/main.css";
import api from "../../api";
import { formSchema } from "../../utils/formSchema";
import FormField from "./UpdateApplicationForm";

const EditApplication = () => {
  const [error, setError] = useState("");
  const [id, setId] = useState(" ");
  const [formData, setFormData] = useState({
    surname: " ",
    givenN: " ",
    email: " ",
    phone: " ",
    nationalId: " ",
    sex: "",
    dob: " ",
    birthCity: " ",
    currentN: " ",
    identification: "",
    company: " ",
    dutyDuration: " ",
    jobTitle: " ",
    image: null,
    file: null,
    salary: " ",
    passport: " ",
    issuedCountry: " ",
  });

  const onChangeHandler = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state) {
      setId(location.state._id);
      setFormData(location.state);
    } else {
      navigate("/application");
    }
  }, [location.state, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { surname, givenN } = formData;

    if (
      surname.trim().length < 3 ||
      surname.trim().length > 31 ||
      givenN.trim().length < 3 ||
      givenN.trim().length > 31
    ) {
      setError(
        "Surname and Given name must be between 3 and 31 characters long."
      );
      return;
    }
    try {
      const response = await api.put(`/updateApplication/${id}`, {
        ...formData,
        id,
      });
      if (response.status === 200) {
        navigate("/application", { replace: true });
      } else {
        setError("Failed to update application.");
      }
    } catch (error) {
      console.error("Error updating application:", error);
      setError("Error updating application. Please try again.");
    }
  };
  return (
    <>
      <div id="navbar-example2">
        <Common />
      </div>
      <main
        data-bs-spy="scroll"
        data-bs-target="#navbar-example2"
        data-bs-offset="0"
        className="scrollspy-example me-5 user_manage"
        tabIndex="0"
        style={{ overflowY: "scroll", maxHeight: "80vh" }}
      >
        <h2>Application Form</h2>
        <p>Personal Particulars</p>
        <hr className="user_manage_hr" />

        <form
          onSubmit={handleSubmit}
          className="me-5 absolute"
          encType="multipart/form-data"
        >
          <div className="d-flex flex-wrap">
            {formSchema.map((field) => (
              <FormField
                key={field.name}
                {...field}
                value={formData[field.name]}
                onChange={onChangeHandler}
              />
            ))}
          </div>

          {error && <div style={{ color: "red" }}>{error}</div>}
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </form>
      </main>
    </>
  );
};

export default EditApplication;
