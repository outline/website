import * as React from "react";

export default function useSearchParams() {
  const key = "search"
  const defaultValue = "";

  if (typeof window === "undefined") {
    return defaultValue;
  }

  const [value, setValue] = React.useState(() => {
    const stickyValue = window.localStorage ? window.localStorage.getItem(key) : defaultValue;
    return stickyValue || defaultValue;
  });

  React.useEffect(() => {
    if (window.localStorage && window.location.search) {
      window.localStorage.setItem(key, window.location.search);
      setValue(window.location.search);
    }
  }, []);

  return value;
}