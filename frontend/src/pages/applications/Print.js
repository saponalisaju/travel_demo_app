import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

class ComponentToPrint extends React.Component {
  render() {
    const { application, innerRef } = this.props;
    const labels = [
      "application image 0",
      "application image 1",
      "application image 2",
      "application image 3",
      "application image 4",
      "application image 5",
    ];
    const fileExtensions = [
      application?.file0?.split(".").pop().toLowerCase(),
      application?.file1?.split(".").pop().toLowerCase(),
      application?.file2?.split(".").pop().toLowerCase(),
      application?.file3?.split(".").pop().toLowerCase(),
      application?.file4?.split(".").pop().toLowerCase(),
      application?.file5?.split(".").pop().toLowerCase(),
    ];

    const fileURLs = [
      application.file0,
      application.file1,
      application.file2,
      application.file3,
      application.file4,
      application.file5,
    ];

    if (
      !application.file0 &&
      !application.file1 &&
      !application.file2 &&
      !application.file3 &&
      !application.file4 &&
      !application.file5
    ) {
      return <div ref={innerRef}>File data is missing or undefined.</div>;
    }

    return (
      <div ref={innerRef}>
        {fileURLs.map((url, index) => (
          <div key={index}>
            <h4>{labels[index]}</h4>
            {fileExtensions[index] === "pdf" ? (
              <iframe
                style={{ width: "100%", height: window.innerHeight }}
                src={url}
                title={`PDF viewer ${index}`}
              />
            ) : (
              <img
                style={{ width: "100%" }}
                src={url}
                alt={`attachment ${index}`}
              />
            )}
          </div>
        ))}
      </div>
    );
  }
}

const Print = ({ application }) => {
  const contentRef = useRef(null);
  const handlePrint = useReactToPrint({ content: () => contentRef.current });

  return (
    <div>
      <button
        className="btn btn-outline-info mb-3 btn-sm"
        onClick={handlePrint}
      >
        Print
      </button>
      <div ref={contentRef}>
        <ComponentToPrint innerRef={contentRef} application={application} />
      </div>
    </div>
  );
};

export default Print;
