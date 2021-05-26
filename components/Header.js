// for emotion
/** @jsxImportSource @emotion/react */

import { useContext } from 'react';
import { css } from '@emotion/react';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ThemeContext } from '../context/ThemeContext';

export default function Header() {
  const { dark, toggleTheme } = useContext(ThemeContext);
  // TODO: remove styles from jsx
  const styles = css`
    width: 100%;
    min-width: 375px;
    height: 4em;
    font-family: 'Nunito Sans', sans-serif;
    position: sticky;
    top: 0;
    color: ${dark ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)'};
    background-color: ${dark ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)'};
    box-shadow: 0 2px 2px 1px #ccc;
    font-family: inherit;
    div {
      border: 1px solid black;
    }
    `;

  return (
    <header css={ styles }>
      <div>
        <h1>
          Where in the world?
        </h1>
        <button type="button" onClick={ toggleTheme }>
          <FontAwesomeIcon css={{height: '1.5em'}} icon={dark ? faSun : faMoon} />
          {dark ? <span>Day Mode</span> : <span>Dark Mode</span>}
        </button>
      </div>
    </header>
  );
}