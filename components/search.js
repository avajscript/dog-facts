import React from "react";
import styled from "styled-components";
import COLORS from "@/data/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Cont = styled.div`
  border: 1px solid ${(props) => props.colors.darkBlue};
  border-radius: 32px;
  background-color: ${(props) => props.colors.paleBlue};
  padding: 8px;
  display: inline-flex;
  input {
    font-size: 16px;
    border: none;
    outline: none;
    background-color: ${(props) => props.colors.paleBlue};
  }
`;

const Search = ({ searchText, updateSearch }) => {
  return (
    <Cont colors={COLORS}>
      <input type="text" value={searchText} onChange={updateSearch} />
      <FontAwesomeIcon icon={faSearch} className="dark-blue icon-sm" />
    </Cont>
  );
};

export default Search;
