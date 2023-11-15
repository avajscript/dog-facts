import React from "react";
import Image from "next/image";
import styled from "styled-components";
import COLORS from "@/data/colors";

const Cont = styled.div`
  margin-right: 16px;
  margin-left: 16px;
  margin-bottom: 32px;
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  opacity: 1;
  transition: opacity 0.25s ease;
  height: 400px;
  @media only screen and (max-width: 1200px) {
    height: 300px;
  }
  @media only screen and (max-width: 700px) {
    margin-right: 8px;
    margin-left: 8px;
    margin-bottom: 16px;
    height: 200px;
  }

  @media only screen and (max-width: 400px) {
    margin-right: 0;
    margin-left: 0;
  }
  &:hover {
    opacity: 0.9;
  }
`;
const WIDTH = 200;

const SingleImage = ({ url, selectImage }) => {
  if (typeof window != "undefined") {
    const img = document.createElement("img");
    img.src = url;
    // find horizontal-vertical img ratio
    const ratio = img.width / img.height;

    return (
      <Cont colors={COLORS} onClick={() => selectImage(url)}>
        {/** Set image width based on actual image dimension ratio times the WIDTH VARIABLE (200) */}
        <Image
          src={url}
          fill
          alt="dog"
          loading="lazy"
          style={{ objectFit: "cover" }}
        />
      </Cont>
    );
  }
};

export default SingleImage;
