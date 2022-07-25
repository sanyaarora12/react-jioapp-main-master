import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import data from "../Components/api.json";

export const Nextpage = () => {
  const [filter, setFilter] = React.useState("all");
  const [images, setimages] = React.useState("");

  useEffect(() => {
    if (filter === "all") {
      setimages(data.results);
    } else {
      const filteredimg = data.results.filter((i) => i.tags === filter);
      setimages(filteredimg);
    }
  }, [filter]);

  return (
    <div>
      {images &&
        images.slice(8, 16).map((i) => (
          <div className="i">
            <img src={i.link} alt="" height="150px" />
          </div>
        ))}
      <button>
        <Link to="/">Back</Link>
      </button>
    </div>
  );
};
export default Nextpage;
