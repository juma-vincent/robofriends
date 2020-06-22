import React from "react";

const SearchBox = ({ onSearch }) => {
  return (
    <div className=" tc">
      <input
        className="searchbox  bg-white br2 pa1 ba b--silver  "
        onChange={onSearch}
        type="search"
        placeholder="Search a robot"
      />
    </div>
  );
};

export default SearchBox;
