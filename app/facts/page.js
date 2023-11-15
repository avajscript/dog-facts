"use server";

import React from "react";
import Render from "./Render";
import { fetchFacts } from "@/lib/fetching";

const Facts = async () => {
  const factsFetch = await fetchFacts(11);

  return (
    <div>
      <Render facts={factsFetch.facts} />
    </div>
  );
};

export default Facts;
