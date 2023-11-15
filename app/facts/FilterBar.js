import React, { useRef } from "react";
import styled from "styled-components";
import COLORS from "@/data/colors";
import Select from "react-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRefresh } from "@fortawesome/free-solid-svg-icons";

const Cont = styled.div`
  padding: 8px 12px;
  background-color: ${(props) => props.colors.darkBlue};
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .select {
    max-width: 140px;
  }
`;

const FilterBar = ({ setFactCount, refetchJokes }) => {
  const refreshRef = useRef(null);
  const options = [
    { value: 10, label: 10 },
    { value: 25, label: 25 },
    { value: 50, label: 50 },
    { value: 100, label: 100 },
  ];

  const refetchJokesWrapper = () => {
    refreshRef.current.classList.add("rotate-anim");
    setTimeout(() => {
      refreshRef.current.classList.remove("rotate-anim");
    }, 1000);
    refetchJokes();
  };

  return (
    <Cont colors={COLORS}>
      <div className="select">
        <Select
          placeholder="Fact Count"
          options={options}
          onChange={(option) => setFactCount(option.value)}
        />
      </div>
      <FontAwesomeIcon
        ref={refreshRef}
        icon={faRefresh}
        className="green-icon icon-med"
        onClick={refetchJokesWrapper}
      />
    </Cont>
  );
};

export default FilterBar;
