/* eslint-disable */
import { css } from 'styled-components';

export const screenSize = {
  extraSmall: '30rem',
  small: '48rem',
  medium: '64rem',
  large: '90rem',
  extraLarge: '120rem',
};

export const mediaQuery = {
  extraSmall: (...args: any) => css`
    @media only screen and (min-width: ${screenSize.small}) {
      ${css(args)}
    }
  `,
  small: (...args: any) => css`
    @media only screen and (min-width: ${screenSize.small}) {
      ${css(args)}
    }
  `,
  medium: (...args: any) => css`
    @media only screen and (min-width: ${screenSize.medium}) {
      ${css(args)}
    }
  `,
  large: (...args: any) => css`
    @media only screen and (min-width: ${screenSize.large}) {
      ${css(args)}
    }
  `,
  extraLarge: (...args: any) => css`
    @media only screen and (min-width: ${screenSize.extraLarge}) {
      ${css(args)}
    }
  `,
};

export const fontWeight = {
  light: 300,
  book: 400,
  medium: 500,
  bold: 700,
  black: 800,
};

export const fontSize = {
  extraSmall: () => css`
    font-weight: ${fontWeight.book};
    line-height: 1;
    font-size: 0.875rem;
    
    ${mediaQuery.extraSmall`
      font-size: 0.875rem;
    `}
    ${mediaQuery.small`
      font-size: 0.875rem;
    `}
    ${mediaQuery.medium`
      font-size: 0.875rem;
    `}
    ${mediaQuery.large`
      font-size: 0.875rem;
    `}
    ${mediaQuery.extraLarge`
      font-size: 0.875rem;
    `}
  `,
  small: () => css`
    font-weight: ${fontWeight.medium};
    line-height: 1;
    font-size: 1rem;

    ${mediaQuery.extraSmall`
      font-size: 1rem;
    `}
    ${mediaQuery.small`
      font-size: 1rem;
    `}
    ${mediaQuery.medium`
      font-size: 1rem;
    `}
    ${mediaQuery.large`
      font-size: 1rem;
    `}
    ${mediaQuery.extraLarge`
      font-size: 1rem;
    `}
  `,
  medium: () => css`
    font-weight: ${fontWeight.bold};
    line-height: 1;
    font-size: 1.5rem;

    ${mediaQuery.extraSmall`
      font-size: 1.5rem;
    `}
    ${mediaQuery.small`
      font-size: 1.5rem;
    `}
    ${mediaQuery.medium`
      font-size: 1.5rem;
    `}
    ${mediaQuery.large`
      font-size: 1.5rem;
    `}
    ${mediaQuery.extraLarge`
      font-size: 1.5rem;
    `}
  `,
  large: () => css`
    font-weight: ${fontWeight.black};
    line-height: 1;
    font-size: 2rem;

    ${mediaQuery.extraSmall`
      font-size: 2rem;
    `}
    ${mediaQuery.small`
      font-size: 2rem;
    `}
    ${mediaQuery.medium`
      font-size: 2rem;
    `}
    ${mediaQuery.large`
      font-size: 2rem;
    `}
    ${mediaQuery.extraLarge`
      font-size: 2rem;
    `}
  `,
  extraLarge: () => css`
    font-weight: ${fontWeight.black};
    line-height: 1;
    font-size: 2.25rem;

    ${mediaQuery.extraSmall`
      font-size: 2.25rem;
    `}
    ${mediaQuery.small`
      font-size: 2.25rem;
    `}
    ${mediaQuery.medium`
      font-size: 2.25rem;
    `}
    ${mediaQuery.large`
      font-size: 2.25rem;
    `}
    ${mediaQuery.extraLarge`
      font-size: 2.25rem;
    `}
  `,
};

export const borderWidth = { sm: '1px', md: '2px', lg: '4px' };

export const fontFamily = { default: 'Poppins', special: 'Roboto Mono' };