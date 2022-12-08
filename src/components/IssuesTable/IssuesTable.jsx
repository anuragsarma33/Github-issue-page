import React from "react";
import IssuesContainer from "./IssuesContainer";
import IssuesHeader from "./IssuesHeader";

const IssuesTable = ({ query }) => {
  return (
    <div className="issues-wrapper">
      <IssuesHeader />
      <IssuesContainer query={query} />
    </div>
  );
};

export default IssuesTable;
