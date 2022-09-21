import React, { useState } from "react";
// import { fs } from "memfs";
const fs = require('fs');

const SearchBar = () => {
  const [searchString, setSearchString] = useState("");
  const [searchedFiles, setSearchedFiles] = useState([]);
  
  let directory_name = "Topics/javascript/snippets/";
  // let filenames = fs.readdirSync(directory_name);
  // filenames.forEach((file: any) => {
  //   console.log("File:", file);
  // });

  const searchFiles = (e: any) => {
    setSearchString(e.target.value);
  };

  return (
    <div style={{ color: "black", padding: "10px," }}>
      <input
        placeholder="Search for a snippet/topic"
        style={{ width: "400px", minWidth: "100px" }}
        value={searchString}
        onChange={searchFiles}
        className="rounded-2 m-2 p-2 w-5 border-0"
        autoFocus
      />
    </div>
  );
};

export default SearchBar;
