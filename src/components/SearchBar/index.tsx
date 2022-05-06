import { Input } from "antd";
import React, { useState } from "react";
// const fs = require("fs");
// const fs = require('fs-extra')
import { fs } from 'memfs'; 

const SearchBar = () => {
  const [searchString, setSearchString] = useState("");
  const [searchedFiles, setSearchedFiles] = useState([]);
  let directory_name = "Topics/javascript/snippets/";

  // fs.writeFileSync('/hello.txt', 'World!');
  // console.log(fs.readFileSync('/hello.txt','utf8'))
  // fs.access(directory_name, (err) => {
  //   console.error('Fetching Filesystem failed!')
  // })

  // let filenames = fs.readdirSync(directory_name);
  // filenames.forEach((file: any) => {
  //   console.log("File:", file);
  // });

  // const searchFromDir = () => {
  //   readdirSync('src/')
  // }

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
