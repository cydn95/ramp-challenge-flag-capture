import { useState } from "react";

const useFetchFlagText = () => {
  const [loading, setLoading] = useState(false);
  const [flag, setFlag] = useState("");

  const fetchFlag = async (url: string) => {
    setLoading(true);

    const response = await fetch(url);
    const flag = await response.text();

    setFlag(flag);

    setLoading(false);

    return flag;
  };

  return {
    loading,
    flag,
    fetchFlag,
  };
};

export default useFetchFlagText;
