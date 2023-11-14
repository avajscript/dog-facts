"use client";
import React from "react";
import styled from "styled-components";
import COLORS from "@/data/colors";
import Search from "@/components/search";
import Results from "./Results";

const Cont = styled.div`
  background-color: #fff;
  border-radius: 16px;
  max-width: 800px;
  margin: 0 auto;

  .header {
    background-color: ${(props) => props.colors.darkBlue};
    padding: 8px 12px;
    border-radius: 16px 16px 0 0;
  }
`;

const SearchSection = ({ searchText, updateSearch }) => {
  return (
    <Cont colors={COLORS}>
      <div className="header">
        <Search searchText={searchText} updateSearch={updateSearch} />
      </div>
    </Cont>
  );
};

export default SearchSection;
