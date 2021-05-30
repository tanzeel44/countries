// for emotion
/** @jsxImportSource @emotion/react */

import Link from 'next/link';
import { useContext } from 'react';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';

import { ThemeContext } from '../../context/ThemeContext';
import Flag from './Flag';
import CountryData from './CountryData';

export default function Country({ country, codes }) {
  const { dark } = useContext(ThemeContext);
  const router = useRouter();

  const styles = {
    section: css`
      width: 100%;
      margin: 0 auto;
      padding: 1em 0.5em;
    `,
    backButton: css`
      width: 6em;
      padding: 0 0.333em;
      display: flex;
      margin-left: 1em;
      align-items: center;
      justify-content: space-evenly;
      border: none;
      font-family: inherit;
      font-weight: 600;
      font-size: 1em;
      border-radius: 4px;
      color: ${dark ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)'};
      background-color: ${dark ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)'};
      box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
      cursor: pointer;
      svg {
        height: 2.5em;
      }
    `,
    container: css`
      width: 100%;
      margin-top: 2em;
      padding: 1em;
      display: block;
      @media only screen and (min-width: 992px) {
        display: grid;
        grid-gap: 2em;
        grid-template-columns: 50% 50%;
      }
    `, 
    borderButtonContainer: css`
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
    `,
    borderButton: css`
      margin: 1em;
      width: 100%;
      width: 12.5em;
      height: 3em;
      border: none;
      border-radius: 4px;
      color: ${dark ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)'};
      background-color: ${dark ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)'};
      box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
      font: inherit;
      font-size: 0.875em;
      cursor: pointer;
    `,
    borderLabel: css`
      font-weight: 800;
      margin: 1em;
    `
  }

  return (
    <section css={styles.section}>
      <button css={styles.backButton} onClick={router.back}>
        <FontAwesomeIcon icon={faLongArrowAltLeft} />
        Back
      </button>
      <div css={styles.container}>
        <Flag name={country.name} flag={country.flag} />
        <div>
          <CountryData country={country} />
          <div css={styles.borderButtonContainer}>
            <span css={styles.borderLabel}>Border Countries:{' '}</span>{country.borders.map(countryCode => 
              <Link key={countryCode} href={`/${countryCode}`}>
                <button css={styles.borderButton}>{codes.find(country => country.alpha3Code === countryCode).name}</button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}