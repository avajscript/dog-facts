"use client";
import React, { useState } from "react";
import styled from "styled-components";
import COLORS from "@/data/colors";
import SearchSection from "./components/SearchSection";
import Results from "./components/Results";
import ImageSection from "./components/ImageSection";
import ImagePreview from "./components/ImagePreview";

const Cont = styled.div`
  .search-section {
    background-color: #fff;
    border-radius: 16px 16px 16px 16px;
    margin: 0 auto;
    max-width: 800px;
  }
`;

const Render = ({ breeds, imagesFetch }) => {
  const [selectedBreed, setSelectedBreed] = useState(breeds[0]);
  const [images, setImages] = useState(imagesFetch);
  // Preview image for fullscreen
  const [showPreview, setShowPreview] = useState(true);
  const [previewUrl, setPreviewUrl] = useState(images[0]);
  // returns array of breed selectors for input section
  const renderBreeds = (selectedBreed) => {
    return breeds.map((breed, index) => {
      return (
        <div
          key={index}
          onClick={() => selectBreed(breed)}
          className={
            breed === selectedBreed ? "breed-selected" : "breed-select"
          }
        >
          <p>{breed}</p>
        </div>
      );
    });
  };
  console.log("images");
  console.log(previewUrl);

  const [breedSelects, setBreedSelects] = useState(renderBreeds(selectedBreed));

  const selectBreed = (breed) => {
    setSelectedBreed(breed);
    setBreedSelects(renderBreeds(breed));
  };

  // sets the url and sets the image preview to visible
  const selectImage = (url) => {
    setPreviewUrl(url);
    setShowPreview(true);
  };

  const hidePreview = () => {
    setShowPreview(false);
  };
  return (
    <Cont colors={COLORS}>
      <div className="search-section">
        <SearchSection />
        <Results breedSelects={breedSelects} />
      </div>
      <div className="mar-bottom-80"></div>
      <ImageSection images={images} selectImage={selectImage} />
      {showPreview && (
        <ImagePreview previewUrl={previewUrl} hidePreview={hidePreview} />
      )}
    </Cont>
  );
};

export default Render;
