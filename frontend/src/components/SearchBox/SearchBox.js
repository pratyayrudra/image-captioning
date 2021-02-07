import React, { useEffect, useState } from "react";
import "./searchbox.css";
const SearchBox = (props) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    // TODO: Get query results
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        // justifyContent: '',
        marginTop: "10px",
      }}
    >
      <div className="search-box">
        <h1 style={{ textAlign: "center" }}>Search box</h1>
        <input
          type="text"
          className="search-box-input"
          placeholder="Search images using the caption"
          onChange={(e) => {
            setQuery(e.target.value);
            if (e.target.value.length == 0) {
              props.setFlag(false);
            } else {
              props.setFlag(true);
            }
          }}
        />
      </div>
    </div>
  );
};

export default SearchBox;
