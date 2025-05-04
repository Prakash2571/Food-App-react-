import React from "react";

const useOnline = () => {
  const [ison, isonfun] = React.useState(true);

  React.useEffect(() => {
    const online = () => {
      isonfun(true);
    };

    const offline = () => {
      isonfun(false);
    };

    window.addEventListener("online", online);
    window.addEventListener("offline", offline);

    return () => {
      window.removeEventListener("online", online);
      window.removeEventListener("offline", offline);
    };
  }, []);

  return ison;
};

export default useOnline;
