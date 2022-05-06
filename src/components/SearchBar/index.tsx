import { Input } from "antd";
import React, {  useState } from "react";
// import { readdirSync } from "fs";

const SearchBar = () => {
  const [searchString, setSearchString] = useState('') 
  const [searchedFiles, setSearchedFiles] = useState([])

  // const searchFromDir = () => {
  //   readdirSync('src/')
  // }

  const searchFiles = (e : any) => {
    setSearchString(e.target.value)
  }
  return (
    <div style={{color:'black', padding:'10px,'}}>
      <input placeholder="Search for a snippet/topic" style={{width:'400px', minWidth:'100px' }} value={searchString} onChange={searchFiles} className='rounded-2 m-2 p-2 w-5 border-0' autoFocus />
    </div>
  );
};

export default SearchBar;
