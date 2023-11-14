"use client";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
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

const ImageSection = ({ images, selectImage, renderCount }) => {
  const setImages = () => {
    const imageArr = [];
    for (let i = 0; i < renderCount; i++) {
      imageArr.push(
        <SingleImage selectImage={selectImage} key={i} url={images[i]} />
      );
    }
    return imageArr;
  };
  const [imageElems, setImageElems] = useState(setImages);

  useEffect(() => {
    setImageElems(setImages);
  }, [renderCount, images]);

  return <Cont colors={COLORS}>{imageElems}</Cont>;
};

export default ImageSection;
