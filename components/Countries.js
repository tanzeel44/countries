// for emotion
/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { useContext } from "react";

import { ThemeContext } from "../context/ThemeContext";
import CountryCard from "./CountryCard";


export default function Countries({ countries, regionFilter, searchQuery }) {
  const { dark } = useContext(ThemeContext);
  const styles = css`
    margin: 0 auto;
    padding: 0 0.444em;
    width: 100%;
    max-width: 1440px;
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  // simplified for reusability
  const mapToCards = countriesToMap => (
    <main css={styles}>
      {countriesToMap.map(country => <CountryCard 
        key={country.alpha3Code}
        flag={country.flag}
        name={country.name}
        capital={country.capital}
        population={country.population}
        region={country.region}
        code={country.alpha3Code}
      />)}
    </main>
  );
  
  // no search query, no filter
  if (!searchQuery.trim().length && !regionFilter.length) {
    return mapToCards(countries);
  }

  // region filter applied, no search query
  if (!searchQuery.trim().length && regionFilter.length) {
    return mapToCards(
      countries.filter(country => country.region === regionFilter));
  }

  // search query verification edited to be case insensitive
  // search query but no region filter
  if (searchQuery.trim().length && !regionFilter.length) {
    return mapToCards(
      countries.filter(country => country.name.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }

  // search query verification edited to be case insensitive
  // search query and region filter
  if (searchQuery.trim() && regionFilter) {
    return mapToCards(
      countries
        .filter(country => country.region === regionFilter)
        .filter(country => country.name.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }
}
