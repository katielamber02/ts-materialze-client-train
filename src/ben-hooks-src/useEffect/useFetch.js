import { useEffect, useState } from "react";

export const useFetch = url => {
  // useEffect(async () => {
  //   await fetch(url);
  // }, [url]);

  const [state, setState] = useState({ data: null, loading: true });

  useEffect(() => {
    // setState({ data: null, loading: true });
    setState(state => ({ data: state.data, loading: true }));
    fetch(url)
      .then(res => res.text())
      .then(res => {
        console.log("res:", res);
        setState({ data: res, loading: false });
      });
  }, [url]);
  return state;
};
