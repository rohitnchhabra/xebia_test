import React, { useState, useEffect } from "react";
import { searchPlanets } from "../action";
import { useDispatch, useSelector } from "react-redux";

// min width is 10px
const min = 10;

export default function Search() {
  const [search, setSearch] = useState("");
  const [max, setMax] = useState("0");
  //check if 15 searches are done and not logged in
  const [counter, setCounter] = useState(0);
  const dispatch = useDispatch();
  const loginResult = useSelector((state) => state.login);
  const searchResult = useSelector((state) => state.search);
  const handleSearch = (e) => {
    if (loginResult.isLoggedIn || counter < 15) {
      const text = e.target.value;
      setMax("0");
      setSearch(text);
      setCounter(counter + 1);
      dispatch(searchPlanets(text));
    }
  };

  useEffect(() => {
    if (searchResult.isSuccess) {
      let m = "0";
      searchResult.data?.forEach((p) => {
        if (p.population !== "unknown" && p.population.length > m.length) {
          m = p.population;
        }
      });
      const x = window.innerWidth / m;
      setMax(x);
    }
  }, [searchResult.isSuccess]);

  return (
    <>
      <div className="container-fluid">
        <div class="mt-3 form-group">
          <label for="username">Please search here</label>
          <input
            type="text"
            class="form-control"
            id="search"
            placeholder="search"
            value={search}
            onChange={handleSearch}
          />
        </div>
        {!loginResult.isLoggedIn && counter > 14 && (
          <div className="alert alert-primary">No more searches allowed, please login</div>
        )}
        {searchResult.data?.map((planet) => (
          <div
            className="planet"
            style={{
              width: `${
                max * planet.population > min
                  ? max * planet.population - 30
                  : min
              }px`,
            }}
          >
            {planet.name}
          </div>
        ))}
      </div>
    </>
  );
}
