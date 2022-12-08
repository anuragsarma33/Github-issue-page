import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Header from "../Layout/Header";
import SubNav from "../SubNavs/SubNav";
import IssuesTable from "../IssuesTable/IssuesTable";
import { useState } from "react";

function App() {
  const [query, setQuery] = useState("is:issue is:open");

  const getQuery = (data) => {
    setQuery(data);
  };
  return (
    <>
      <Header />
      <div className="issues-listing-container">
        <SubNav query={query} getQuery={(data) => getQuery(data)} />
        <Routes>
          <Route path="/" element={<IssuesTable query={query} />} />
          <Route path="*" element={<IssuesTable query={query} />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
