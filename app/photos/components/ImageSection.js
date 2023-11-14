"use client";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import styled from "styled-components";
import COLORS from "@/data/colors";
const SingleImage = dynamic(
  () => {
    return import("./SingleImage");
  },
  { ssr: false }
);

const Cont = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
`;

const RENDER_COUNT = 20;

const ImageSection = ({ images }) => {
  const setImages = () => {
    const imageArr = [];
    for (let i = 0; i < RENDER_COUNT; i++) {
      imageArr.push(<SingleImage key={i} url={images[i]} />);
    }
    return imageArr;
  };
  const [imageElems, setImageElems] = useState(setImages);

  return <Cont colors={COLORS}>{imageElems}</Cont>;
};

export default ImageSection;
