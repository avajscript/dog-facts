import { useEffect, useState } from "react";
import styled from "styled-components";
import Select from "react-select";
import COLORS from "@/data/colors";

const Cont = styled.div``;

const Input = ({
  filter,
  setFilter,
  breed,
  setBreed,
  fetchRandomImage,
  fetchImageByBreed,
}) => {
  const [loading, setLoading] = useState(false);
  const renderFilters = () => {
    return ["random", "breed"].map((fil, index) => {
      return (
        <div
          onClick={() => setFilter(fil)}
          key={index}
          className={
            fil === filter
              ? "default-btn mar-right-16"
              : "unselected-btn mar-right-16"
          }
        >
          <h5>{fil}</h5>
        </div>
      );
    });
  };

  const fetchBreeds = async () => {
    let res = await fetch("/api/images/breeds", {
      cache: "force-cache",
      method: "GET",
    });
    res = await res.json();

    setBreeds(
      Object.keys(res.breeds).map((key) => {
        return { value: key, label: key };
      })
    );
  };

  const [filterBtns, setFilterBtns] = useState(renderFilters);
  const [breeds, setBreeds] = useState([]);

  const selectBreed = (inputValue) => {
    setBreed(inputValue.value);
  };

  useEffect(() => {
    setFilterBtns(renderFilters);
  }, [filter]);

  useEffect(() => {
    fetchBreeds();
  }, []);

  const fetchImageByBreedWrapper = async () => {
    setLoading(true);
    const res = await fetchImageByBreed(breed);
    setLoading(false);
  };

  return (
    <Cont colors={COLORS} className="input">
      <div className="flex mar-bottom-16">{filterBtns}</div>
      <Select options={breeds} onChange={selectBreed} />
      <div className="mar-bottom-32"></div>
      <div
        className="default-btn"
        onClick={() =>
          filter === "random" ? fetchRandomImage() : fetchImageByBreedWrapper()
        }
      >
        {loading ? <span className="loader"></span> : <h5>Search</h5>}
      </div>
    </Cont>
  );
};

export default Input;
