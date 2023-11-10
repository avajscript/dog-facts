"use client";
import styled from "styled-components"
import COLORS from "@/data/colors"
import Joke from "@/components/Joke";

const Cont = styled.main`
  .joke {
    max-width: 800px;
    margin: 0 auto;
    background-color: #fff;
    border-radius: 16px;
    padding: 12px 16px;
   
  }
`;

export default function Home() {
  
  

  return (
    <Cont className="default-page">
      <Joke />
    </Cont>
  )
}
