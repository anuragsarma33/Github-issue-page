import { useEffect, useState } from "react";
import axios from "axios";

export const useFetchIssues = (query, page) => {
  const [loading, setLoading] = useState(false);
  const [issues, setIssues] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  useEffect(() => {
    let cancel;
    axios({
      method: "get",
      url: "https://api.github.com/repos/facebook/react/issues",
      params: { q: query, page },
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((resp) => {
        setLoading(false);
        const { data } = resp;
        setIssues((prevIssue) => {
          return [...prevIssue, ...data];
        });
        setHasMore(resp.data.length > 0);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
      });
    return () => cancel();
  }, [query, page]);
  return { loading, issues, hasMore };
};
