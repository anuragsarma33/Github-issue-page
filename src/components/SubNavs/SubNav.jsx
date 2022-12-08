import React from "react";
import { Button } from "react-bootstrap";
import { debounce } from "../../utilities/debounce";
import LabelSVG from "../../utilities/svg/LabelSVG";
import MilestoneSVG from "../../utilities/svg/MilestoneSVG";
import SearchSVG from "../../utilities/svg/SearchSVG";

const SubNav = ({ query, getQuery }) => {
  const isMobile = window.innerWidth <= 500;

  const handleInputChange = debounce((e) => {
    getQuery(e.target.value);
  });

  return (
    <div className="subnav-container">
      <div className="filter-search-container">
        <div className="d-flex">
          <div className="filters-container">
            Filters
            <span className="caret p-l-5px" />
          </div>
          <div className="search-container">
            <form className="w-100" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                defaultValue={query}
                className="w-100 form-control p-l-2"
                onChange={handleInputChange}
                autoFocus={false}
              />
              <SearchSVG />
            </form>
          </div>
        </div>
      </div>
      <div className="detail-container">
        <div className="label-container">
          <LabelSVG /> Labels
          <span className="count">66</span>
        </div>
        <div className="milestone-container">
          <MilestoneSVG /> Milestones <span className="count">1</span>
        </div>
        <Button variant="success" className="p-t-2 m-l-1 font-s14-sm">
          {isMobile ? "New" : "New Issue"}
        </Button>
      </div>
    </div>
  );
};

export default SubNav;
