"use client";
import styled from "styled-components"
import COLORS from "@/data/colors"
import Joke from "@/components/Fact";
import DogPhoto from "@/components/DogPhoto";

const Cont = styled.main`

`;

export default function Home() {
  
  

  return (
    <Cont className="default-page">
      <Joke />
      <div className="mar-bottom-80"></div>
      <DogPhoto />
    </Cont>
  )
}
