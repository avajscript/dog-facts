import React from "react";
import styled from "styled-components";
import COLORS from "@/data/colors";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

const Cont = styled.div`
  width: 100%;
  height: 100%;
  left: 0px;
  top: 0px;
  position: fixed;
  background-color: rgba(2, 60, 136, 0.8);

  padding: 32px;

  .image-preview {
    position: relative;
    width: 100%;
    height: 100%;
  }
  .close {
    margin-bottom: 8px;
  }
`;

const ImagePreview = ({ previewUrl, hidePreview }) => {
  const hidePreviewWrapper = () => {
    setTimeout(() => {}, 1000);
  };
  return (
    <Cont colors={COLORS}>
      <div className="flex justify-end">
        <div className="close">
          <FontAwesomeIcon
            icon={faClose}
            className="icon-lg"
            onClick={hidePreview}
          />
        </div>
      </div>
      <div className="image-preview">
        <Image src={previewUrl} style={{ objectFit: "contain" }} fill />
      </div>
    </Cont>
  );
};

export default ImagePreview;
