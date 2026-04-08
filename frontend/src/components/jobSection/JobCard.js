import React from "react";
import JobDetailCard2 from "./JobDetailsCard2";
import JobDetailCard1 from "./JobDetailsCard1";

const JobCard = () => {
  return (
    <div className="d-flex">
      <JobDetailCard1 />
      <JobDetailCard2 />
    </div>
  );
};

export default JobCard;
