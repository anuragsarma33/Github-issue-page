import React, { useState } from "react";
import Issue from "./Issue";
import InfiniteScroll from "react-infinite-scroll-component";
import { useFetchIssues } from "../../customhooks/useFetchIssues";
import { Spinner } from "react-bootstrap";

const IssuesContainer = ({ query }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const { loading, issues, hasMore } = useFetchIssues(query, currentPage);

  const loadMoreIssues = () => {
    console.log({ hasMore, issues });
    setCurrentPage(currentPage + 1);
  };

  return (
    <div
      id="scrollable-target"
      className="issues-container-wrapper"
      style={{ height: 500, overflow: "auto" }}
    >
      {loading && (
        <div className="d-flex align-items-center justify-content-center h-100">
          <Spinner animation="border" role="status" className="text-center">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      )}
      {!!issues && !loading && (
        <InfiniteScroll
          dataLength={issues.length}
          pullDownToRefreshThreshold={50}
          next={loadMoreIssues}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
          scrollableTarget="scrollable-target"
        >
          {issues.map((issue) => (
            <Issue key={issue.id} issue={issue} />
          ))}
        </InfiniteScroll>
      )}
    </div>
  );
};

export default IssuesContainer;
