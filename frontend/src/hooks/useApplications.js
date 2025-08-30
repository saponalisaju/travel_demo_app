// hooks/useApplications.js
import { useState, useEffect } from "react";
import api from "../api";

export const useApplications = () => {
  const [applications, setApplications] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      setError("");
      setLoading(true);
      try {
        const response = await api.get(`/fetchApplication`, { timeout: 5000 });
        setApplications(response.data.applications || []);
      } catch (err) {
        console.error("Error fetching applications:", err);
        setError("Error fetching applications. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return { applications, error, loading, setError, setLoading };
};
