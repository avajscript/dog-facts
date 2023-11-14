import React from "react";
import Image from "next/image";
import styled from "styled-components";
import COLORS from "@/data/colors";

const Cont = styled.div`
  position: relative;
  width: 100%;
  height: 600px;
  margin-left: 32px;

  @media only screen and (max-width: 800px) {
    margin-left: 0px;
  }
  @media only screen and (max-width: 600px) {
    .dog-image {
      height: 400px !important;
    }
    //height: 400px;
  }
`;

const DogImage = ({ url }) => {
  return (
    <Cont>
      <div className="dog-image">
        <Image
          src={url}
          alt="Dog"
          fill
          style={{
            objectFit: "contain",
          }}
        />
      </div>
    </Cont>
  );
};

export default DogImage;
