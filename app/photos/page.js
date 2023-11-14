import React from "react";
import Render from "./Render";
import Results from "./components/Results";
import SearchSection from "./components/SearchSection";
import ImageSection from "./components/ImageSection";
import { fetchAllImagesbyBreed } from "@/lib/fetching";

const Photos = async () => {
  // fetch breed list from dog api
  const breedsFetch = await fetch(process.env.URL + "/api/breeds", {
    cache: "force-cache",
    method: "GET",
  });
  // turn to json
  let breeds = await breedsFetch.json();
  // map over key values to form array
  breeds = Object.entries(breeds.breeds).map(([key, value]) => {
    return key;
  });
  let imagesFetch = await fetchAllImagesbyBreed(breeds[0]);

  return (
    <div className="default-page">
      <Render breeds={breeds} imagesFetch={imagesFetch.message} />
    </div>
  );
};

export default Photos;
