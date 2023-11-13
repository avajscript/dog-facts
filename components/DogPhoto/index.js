import { useEffect, useState } from "react";
import styled from "styled-components";
import COLORS from "@/data/colors";
import Input from "./Input";
import DogImage from "./DogImage";
import { fetchByBreed } from "@/lib/fetching";
import toast, { Toaster } from "react-hot-toast";

const Cont = styled.div`
  .photo-section {
  }

  .photo-content {
    display: flex;
    & > div:nth-of-type(1) {
      flex-basis: 30%;
    }
    & > :last-of-type {
      flex-basis: 70%;
    }
  }

  @media only screen and (max-width: 800px) {
    .input {
      margin-bottom: 8px;
    }
    .photo-content {
      flex-direction: column;
      .dog-image {
        position: relative;
        height: 600px;
        width: 100%;
      }
    }
  }
`;

const DogPhoto = () => {
  const [url, setUrl] = useState("");
  const [breed, setBreed] = useState("");
  const [filter, setFilter] = useState("random");

  const fetchRandomImage = async () => {
    // call to local api route, which calls free dog api to get random dog image
    const imageFetch = await fetch("/api/images/random", {
      cache: "no-cache",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    // set url to image json data
    const image = await imageFetch.json();
    setUrl(image?.message);
  };

  // set image based on user selected breed and update url state
  const fetchImageByBreed = async (breed) => {
    if (breed === "") {
      toast.error("Please select a breed");
      return;
    }
    const breedImage = await fetchByBreed(breed);
    setUrl(breedImage?.message);
    // return true for wrapper functions with loading state
    return true;
  };

  useEffect(() => {
    fetchRandomImage();
  }, []);

  return (
    <Cont className="default-section photo-section">
      <Toaster />
      <h3 className="mar-bottom-8">Want to see a dog photo?</h3>
      <div className="blue-line mar-bottom-32"></div>
      <div className="photo-content">
        <Input
          breed={breed}
          setBreed={setBreed}
          filter={filter}
          setFilter={setFilter}
          fetchRandomImage={fetchRandomImage}
          fetchImageByBreed={fetchImageByBreed}
        />
        <DogImage url={url} />
      </div>
    </Cont>
  );
};

export default DogPhoto;
