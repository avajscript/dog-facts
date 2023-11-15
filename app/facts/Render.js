"use client";
import React, { useEffect, useState } from "react";
import COLORS from "@/data/colors";
import styled from "styled-components";
import Fact from "./Fact";
import FilterBar from "./FilterBar";
import { fetchFacts } from "@/lib/fetching";

const Cont = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  .fact {
    padding: 8px 12px;
    border-bottom: 1px solid ${(props) => props.colors.lightBlue};
    &:nth-of-type(2n) {
      background-color: #fff;
    }
  }
`;

const Render = ({ facts }) => {
  const [factCount, setFactCount] = useState(10);
  const [factElems, setFactElems] = useState(
    facts.map((fact) => {
      return <Fact fact={fact} />;
    })
  );

  // refetch jokes based on user selected count and re-render jokes
  const refetchJokes = async () => {
    const factsFetch = await fetchFacts(factCount);
    setFactElems(
      factsFetch.facts.map((fact) => {
        return <Fact fact={fact} />;
      })
    );
  };

  return (
    <Cont colors={COLORS} className="default-page">
      <FilterBar setFactCount={setFactCount} refetchJokes={refetchJokes} />
      <div>{factElems}</div>
    </Cont>
  );
};

export default Render;
