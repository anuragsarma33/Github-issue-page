import React from "react";
import CheckmarkSVG from "../../utilities/svg/CheckmarkSVG";
import IssuesOpenSVG from "../../utilities/svg/IssuesOpenSVG";

const IssuesHeader = () => {
  const otherValues = [
    "Author",
    "Label",
    "Projects",
    "Milestones",
    "Assignee",
    "Sort",
  ];
  return (
    <div className="table-header-container">
      <div className="p-l-1 d-flex align-items-center justify-content-space-between">
        <div className="open-closed-issue-anchor d-flex align-items-center m-l-1">
          <IssuesOpenSVG />
          253 Open
          <div className="open-closed-issue-anchor m-l-1">
            <CheckmarkSVG /> 11,003 Closed
          </div>
        </div>

        <div className="other-details">
          {otherValues.map((value, idx) => (
            <span className="details-reset" key={idx}>
              {value} <span className="caret" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IssuesHeader;
