// for emotion
/** @jsxImportSource @emotion/react */

import { useContext } from 'react';
import { css } from '@emotion/react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ThemeContext } from '../context/ThemeContext';

export default function Navigation({ searchQuery, changeHandler, regionFilter }) {
  const { dark } = useContext(ThemeContext);
  const regions = [
    'Asia',
    'Africa',
    'Americas',
    'Europe',
    'Oceania',
    'Polar',
  ];

  const styles = css`
    width: 100%;
    min-width: 375px;
    border: 1px solid #000;
    padding: 0.75em;
    div {
      border: 1px solid #000;
      width: 100%;
      height: 3.25em;
      border-radius: 0.333em;
      padding: 0 0 0 1em;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      background-color: ${dark ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)'};
      color: ${dark ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)'};
      input {
        flex: 2;
        padding: 0.5em 1em;
        font-size: 1em;
        border: none;
        background-color: inherit;
        color: inherit;
        font: inherit;
        font-weight: 600;
        font-size: 1em;
        &:focus {
          outline: none;
        }
      }
      svg {
        font-size: 1em;
      }
    }
  `;

  return (
    <nav css={ styles }>
      <div>
        <FontAwesomeIcon css={{ 'height': '1em' }} icon={ faSearch } />
        <input
          type="text" 
          value={searchQuery}
          onChange={event => changeHandler(event, 'search')}
          placeholder="Search for a country..." 
        />
      </div>
      <select value={regionFilter} onChange={event => changeHandler(event, 'region')}>
        <option value="">All</option>
        {regions.map(region => 
          <option key={region} value={region}>{region}</option>  
        )}
      </select>
    </nav>
  );
}