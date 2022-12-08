/* eslint-disable jsx-a11y/anchor-is-valid */
import { Button } from "react-bootstrap";
import React from "react";
import Badge from "react-bootstrap/Badge";
import ForkSVG from "../../utilities/svg/ForkSVG";
import StarSVG from "../../utilities/svg/StarSVG";
import WatchSVG from "../../utilities/svg/WatchSVG";
import CodeSVG from "../../utilities/svg/CodeSVG";
import IssuesOpenSVG from "../../utilities/svg/IssuesOpenSVG";
import PullRequestSVG from "../../utilities/svg/PullRequestSVG";
import ActionSVG from "../../utilities/svg/ActionSVG";
import ProjectSVG from "../../utilities/svg/ProjectSVG";
import WikiSVG from "../../utilities/svg/WikiSVG";
import SecuritySVG from "../../utilities/svg/SecuritySVG";
import InsightsSVG from "../../utilities/svg/InsightsSVG";
import SettingsSVG from "../../utilities/svg/SettingsSVG";

const Header = () => {
  return (
    <div className="repository-header">
      <div className="d-flex justify-content-space-between align-items-center m-l-1">
        <div className="d-flex align-items-center">
          <svg
            aria-hidden="true"
            height="16"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            data-view-component="true"
            className="icon-margin"
          >
            <path
              fillRule="evenodd"
              d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"
            ></path>
          </svg>
          <a
            href="#"
            className="d-flex align-items-center text-decoration-none"
          >
            Facebook <span className="color-dark">/</span> react
          </a>
          <Badge bg="lights" text="dark" className="badge-public">
            Public
          </Badge>
        </div>
        <div className="d-flex-lg align-items-center d-none-sm m-t-10 m-r-1">
          <Button className="btn-lights" size="sm" variant="secondary">
            <span className="d-flex align-items-baseline">
              <WatchSVG /> Watch{" "}
              <Badge
                className="badge-bg-color m-l-1 m-r-5"
                bg="secondarys"
                text="dark"
              >
                6.6k
              </Badge>
              <span className="caret" />
            </span>
          </Button>
          <Button
            className="m-l-1 m-r-1 btn-lights"
            size="sm"
            variant="secondary"
          >
            <span className="d-flex align-items-baseline">
              <ForkSVG /> Fork{" "}
              <Badge
                className="badge-bg-color m-l-1 m-r-5"
                bg="secondarys"
                text="dark"
              >
                41.3k
              </Badge>
              <span className="caret" />
            </span>
          </Button>
          <Button className="btn-lights" size="sm" variant="secondary">
            <span className="d-flex align-items-baseline">
              <StarSVG /> Star{" "}
              <Badge
                className="badge-bg-color m-l-1 m-r-5"
                bg="secondarys"
                text="dark"
              >
                199k
              </Badge>
              <span className="caret" />
            </span>
          </Button>
        </div>
      </div>
      <div className="d-flex gap-25 m-b-1 m-l-1">
        <a className="d-flex item align-items-baseline pointer">
          <CodeSVG /> Code
        </a>
        <a className="d-flex align-items-center pointer item item-selected gap-5px">
          <IssuesOpenSVG /> Issues
        </a>
        <a className="pointer item d-flex align-items-center gap-5px">
          <PullRequestSVG /> Pull requests{" "}
          <Badge className="badge-bg-color" bg="secondarys" text="dark">
            242
          </Badge>
        </a>
        <a className="pointer item d-flex align-items-center gap-5px">
          <ActionSVG /> Actions
        </a>
        <a className="pointer item d-flex align-items-center gap-5px">
          <ProjectSVG /> Projects
        </a>
        <a className="pointer item d-flex align-items-center gap-5px">
          <WikiSVG /> Wiki
        </a>
        <a className="pointer item d-flex align-items-center gap-5px">
          <SecuritySVG /> Security
        </a>
        <a className="pointer item d-flex align-items-center gap-5px">
          <InsightsSVG /> Insights
        </a>
        <a className="pointer item d-flex align-items-center gap-5px">
          <SettingsSVG /> Settings
        </a>
      </div>
    </div>
  );
};

export default Header;
