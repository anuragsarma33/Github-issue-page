import React from "react";
import { Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { OWNER, REPO, WEB_URL } from "../../constants/constant";
import { getDifference } from "../../utilities/getDifference";
import IssuesOpenSVG from "../../utilities/svg/IssuesOpenSVG";
import Labels from "./Labels";

const Issue = ({
  issue: {
    title,
    number,
    created_at,
    user: { login, type },
    labels,
  },
}) => {
  return (
    <div className="issue-wrapper">
      <div className="issue-anchor-title-wrapper">
        <IssuesOpenSVG />
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={`${WEB_URL}/${OWNER}/${REPO}/issues/${number}`}
          className="issue-anchor"
        >
          {title}
          {type === "Bug" ? (
            <Badge bg="danger" text="white">
              {type}
            </Badge>
          ) : (
            ""
          )}
        </a>
      </div>
      <Labels labels={labels} />
      <div className="issue-opened-by">
        <span>
          #{number}
          {""} opened
          {""} {getDifference(created_at)}
          {""} ago by
          {""}{" "}
          <Link
            className="user-anchor"
            to={`${WEB_URL}/${OWNER}/${REPO}/issues/created_by/${login}`}
          >
            {login}
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Issue;
