import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Common from "../../layouts/Common";
import "../../assets/styles/main.css";
import api from "../../api";
import Spinner from "react-bootstrap/Spinner";

const ApplicationManagement = () => {
  const [applications, setApplications] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setError("");
      setLoading(true);
      try {
        const response = await api.get(`/fetchApplication`, {
          timeout: 10000,
          params: { page, limit: 10, search },
        });
        console.log("hello", response.data.applications);
        setApplications(response?.data?.applications || []);
        setTotalPages(response?.data?.totalPages || 0);
      } catch (error) {
        if (error.response) {
          // The request was made and the server responded with a status code that falls out of the range of 2xx
          console.error("Error response:", error.response.data);
          setError(
            "Failed to fetch data from the server. Please try again later."
          );
        } else if (error.request) {
          // The request was made but no response was received
          console.error("Error request:", error.request);
          setError(
            "No response from the server. Please check your connection."
          );
        } else {
          // Something happened in setting up the request that triggered an Error
          console.error("Error message:", error.message);
          setError("An unexpected error occurred. Please try again.");
        }
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [page, search]);

  const deleteHandler = async (id) => {
    if (typeof id === "string" && id.length === 24) {
      try {
        const response = await api.delete(`/deleteApplication/${id}`);
        if (response.status === 200) {
          const updatedResponse = await api.get(`/fetchApplication`, {
            timeout: 10000,
            params: { page, limit: 10, search },
          });
          setApplications(updatedResponse?.data?.applications || []);
          setTotalPages(updatedResponse?.data?.totalPages || 0);
        } else {
          console.error("Failed to delete application");
        }
      } catch (error) {
        console.error("Error deleting application", error);
        setError("Error deleting application. Please try again.");
      } finally {
        setLoading(false);
      }
    } else {
      console.error("Invalid ID format:", id);
    }
  };

  return (
    <>
      <div className="example2">
        <Common />
      </div>

      <main
        data-bs-spy="scroll"
        data-bs-target="#example2"
        data-bs-offset="0"
        className="user_manage"
        tabIndex="0"
        style={{ overflowY: "scroll", maxHeight: "80vh" }}
      >
        <div className="user_manage_head d-flex">
          <h2 className="user_manage_app me-auto">Application Management</h2>
          <Link className="btn btn-primary" to="/addUserApplication">
            Add New Application
          </Link>
        </div>
        <hr />
        {loading && (
          <div className="text-center mt-5">
            <Spinner animation="border" variant="primary" />
          </div>
        )}
        {error && <p>{error}</p>}
        <div className="d-flex search_box">
          <p>Show 1 to 10 entries</p>
          <input
            className="ms-auto input-search form-control"
            type="text"
            placeholder="Passport search ..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div>
          <table className="table table-striped-column app_table table-bordered">
            <thead>
              <tr className="tApp_head">
                <th scope="col" className="bg-light">
                  NAME
                </th>
                <th scope="col" className="bg-light">
                  ADMIN
                </th>
                <th scope="col" className="bg-light">
                  PASSPORT NO
                </th>
                <th scope="col" className="bg-light">
                  STATUS
                </th>
                <th scope="col" className="bg-light">
                  VISA COLLECT DATE
                </th>
                <th scope="col" className="bg-light">
                  VISA APPROVE DATE
                </th>
                <th scope="col" className="bg-light">
                  ACTION
                </th>
                <th className="visually-hidden">all</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((user) => {
                const {
                  _id,
                  image,
                  file0,
                  file1,
                  file2,
                  file3,
                  file4,
                  file5,
                  surname,
                  givenN,
                  sex,
                  birthCity,
                  currentN,
                  dob,
                  identification,
                  nationalId,
                  company,
                  dutyDuration,
                  jobTitle,
                  salary,
                  passport,
                  issuedCountry,
                  phone,
                  email,
                  isAdmin,
                  isStatus,
                  pending,
                  approve,
                } = user;
                return (
                  <React.Fragment key={_id}>
                    <tr className="tApp_head">
                      <td>{surname}</td>
                      <td> {isAdmin ? "Admin" : givenN} </td>
                      <td>{passport}</td>
                      <td>{isStatus}</td>
                      <td>{pending}</td>
                      <td>{approve}</td>

                      <td>
                        <Link
                          to="/userView"
                          state={{
                            _id,
                            image,
                            file0,
                            file1,
                            file2,
                            file3,
                            file4,
                            file5,
                            surname,
                            givenN,
                            sex,
                            birthCity,
                            currentN,
                            dob,
                            identification,
                            nationalId,
                            company,
                            dutyDuration,
                            jobTitle,
                            salary,
                            passport,
                            issuedCountry,
                            isStatus,
                            phone,
                            email,
                          }}
                        >
                          <button className="btn btn-white text-primary p-1">
                            View
                          </button>
                        </Link>
                        <Link
                          className="btn btn-white text-primary p-1"
                          to="/editApplication"
                          state={{
                            _id,
                            image,
                            file0,
                            file1,
                            file2,
                            file3,
                            file4,
                            file5,
                            surname,
                            givenN,
                            sex,
                            birthCity,
                            currentN,
                            dob,
                            identification,
                            nationalId,
                            company,
                            dutyDuration,
                            jobTitle,
                            salary,
                            passport,
                            issuedCountry,
                            isStatus,
                            phone,
                            email,
                          }}
                        >
                          Edit
                        </Link>
                        <button
                          className="btn btn-white text-danger p-1"
                          onClick={() => deleteHandler(_id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  </React.Fragment>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="pagination justify-content-end">
          <button
            className="btn btn-secondary btn-sm"
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            disabled={page === 1}
          >
            Prev
          </button>

          <span className="page-link">
            Page {page} of {totalPages}
          </span>

          <button
            className="btn btn-secondary btn-sm"
            onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={page === totalPages}
          >
            Next
          </button>
        </div>
      </main>
    </>
  );
};

export default ApplicationManagement;
