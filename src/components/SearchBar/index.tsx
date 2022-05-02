import { Input } from "antd";
import React from "react";
import SearchIcon from "../SearchIcon";

const SearchBar = () => {
  return (
    <div style={{color:'black', padding:'10px,'}}>
      <input placeholder="Search for a snippet/topic" style={{width:'400px', minWidth:'100px' }} className='rounded-2 m-2 p-2 w-5 border-0' autoFocus />
    </div>
  );
};

export default SearchBar;
