"use client";

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import COLORS from "@/data/colors";

const Cont = styled.div`
  padding: 8px 12px;
  border-radius: 0 0 16px 16px;
  background-color: #fff;
  max-height: 200px;
  overflow-y: auto;
`;

const Results = ({ breedSelects }) => {
  return (
    <Cont colors={COLORS}>
      <div className="flex flex-wrap">{breedSelects}</div>
    </Cont>
  );
};

export default Results;
