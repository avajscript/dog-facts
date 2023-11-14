import React, { useRef } from "react";
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

  @media only screen and (max-width: 800px) {
    padding: 16px;
  }

  @media only screen and (max-width: 400px) {
    padding: 4px;
  }
`;

const ImagePreview = ({ previewUrl, hidePreview }) => {
  const imgRef = useRef(null);
  const hidePreviewWrapper = () => {
    imgRef.current.classList.remove("show-img-anim");
    imgRef.current.classList.add("hide-img-anim");
    setTimeout(() => {
      hidePreview();
      imgRef.current.classList.remove("hide-img-anim");
    }, 1000);
  };

  return (
    <Cont ref={imgRef} colors={COLORS} className="show-img-anim">
      <div className="flex justify-end">
        <div className="close">
          <FontAwesomeIcon
            icon={faClose}
            className="icon-lg"
            onClick={hidePreviewWrapper}
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
