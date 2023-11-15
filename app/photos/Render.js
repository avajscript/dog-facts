"use client";
import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import COLORS from "@/data/colors";
import SearchSection from "./components/SearchSection";
import Results from "./components/Results";
import ImageSection from "./components/ImageSection";
import ImagePreview from "./components/ImagePreview";
import { fetchAllImagesbyBreed } from "@/lib/fetching";

const Cont = styled.div`
  .search-section {
    background-color: #fff;
    border-radius: 16px 16px 16px 16px;
    margin: 0 auto;
    max-width: 800px;
  }
`;

const renderIterator = 20;

const Render = ({ breeds, imagesFetch }) => {
  const [searchText, setSearchText] = useState("");
  // loading state of images when new breed is selected
  const [loading, setLoading] = useState(false);
  // amount of images to render, updates by renderIterator on page scroll
  const [renderCount, setRenderCount] = useState(renderIterator);
  // selected breed to render images by
  const [selectedBreed, setSelectedBreed] = useState(breeds[0]);
  // list of all image urls
  const [images, setImages] = useState(imagesFetch);
  // Preview image for fullscreen
  const [showPreview, setShowPreview] = useState(false);
  const [previewUrl, setPreviewUrl] = useState(images[0]);
  const scrollRef = useRef(null);
  // returns array of breed selectors for input section
  const renderBreeds = (selectedBreed, breedList = breeds) => {
    return breedList.map((breed, index) => {
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

  const [breedSelects, setBreedSelects] = useState(renderBreeds(selectedBreed));

  // updates the search bar filters the search selects
  const updateSearch = (e) => {
    const text = e.target.value.toLowerCase();
    setSearchText(text);
    const filteredBreeds = breeds.filter((breed) => {
      return breed.includes(text);
    });
    setBreedSelects(renderBreeds(selectedBreed, filteredBreeds));
  };
  // updates breed, re-renders select list and images
  const selectBreed = async (breed) => {
    console.log("????");
    console.log(breed);
    setLoading(true);
    setSelectedBreed(breed);
    setBreedSelects(renderBreeds(breed));

    // fetch images and set based on selected breed
    let imagesFetch = await fetchAllImagesbyBreed(breed);
    imagesFetch = imagesFetch.message;

    setImages(imagesFetch);
    // set render count to images array length if it is less than the renderIterator
    setRenderCount(
      imagesFetch.length >= renderIterator ? renderIterator : imagesFetch.length
    );
    setLoading(false);
  };

  // sets the url and sets the image preview to visible
  const selectImage = (url) => {
    setPreviewUrl(url);
    setShowPreview(true);
  };

  const hidePreview = () => {
    setShowPreview(false);
  };

  // check if element below images is visible to increase render count
  // which triggers a re-render of more images
  const checkVisible = () => {
    const elemTop = scrollRef.current.getBoundingClientRect().top;

    // check if element is in view, then render more images
    if (elemTop < window.innerHeight) {
      setRenderCount((prev) => {
        // new render count
        let increase = prev + renderIterator;
        // check if render count greater than images array length
        if (increase > images.length) {
          increase = images.length;
          window.removeEventListener("scroll", checkVisible);
        }
        return increase;
      });
    }
  };

  // add window scroll listener to check if new images need to be rendered
  // on bottom page scroll
  useEffect(() => {
    window.addEventListener("scroll", checkVisible);
    return () => {
      window.removeEventListener("scroll", checkVisible);
    };
  }, []);

  return (
    <Cont colors={COLORS}>
      <div className="search-section">
        <SearchSection searchText={searchText} updateSearch={updateSearch} />
        <Results breedSelects={breedSelects} />
      </div>
      <div className="mar-bottom-80"></div>
      {loading ? (
        <span className="loader-blue"></span>
      ) : (
        <ImageSection
          images={images}
          selectImage={selectImage}
          renderCount={renderCount}
        />
      )}

      {showPreview && (
        <ImagePreview previewUrl={previewUrl} hidePreview={hidePreview} />
      )}
      {/* This elements position is checked on scroll to see if new images should be rendered */}
      <div ref={scrollRef}></div>
    </Cont>
  );
};

export default Render;
