import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} -Furniture resale market`;
  }, [title]);
};
export default useTitle;
