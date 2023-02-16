// import { useState, useEffect, useRef, useMemo } from 'react';

import { useEffect, useState } from "react";

const COLOR_SCHEMES = ['no-preference', 'dark', 'light'] as const;
type ColorScheme = typeof COLOR_SCHEMES[number];
// const DEFAULT_TARGET_COLOR_SCHEME = 'dark';

// function resolveTargetColorScheme(scheme: ColorScheme) {
//   let nextScheme = scheme;
//   if (
//     !COLOR_SCHEMES.includes(scheme) ||
//     scheme === 'no-preference'
//   ) nextScheme = DEFAULT_TARGET_COLOR_SCHEME;

//   return nextScheme;
// }

// const QUERIES = new Map<ColorScheme, MediaQueryList>()

// function getCurrentColorScheme(): { query: MediaQueryList, scheme: ColorScheme } {
//   function setAndGet(scheme: ColorScheme): MediaQueryList {
//     const queryList = matchMedia(`(prefers-color-scheme: ${scheme})`);
//     QUERIES.set(scheme, queryList);
//     return queryList;
//   }
//   return (function (): { query: MediaQueryList, scheme: ColorScheme } {
//     let query = new MediaQueryList()
//     let scheme: ColorScheme = DEFAULT_TARGET_COLOR_SCHEME;
//     for (let nextScheme of COLOR_SCHEMES) {
//       query = QUERIES.has(nextScheme)
//         ? QUERIES.get(nextScheme)!
//         : setAndGet(nextScheme);

//       if (query.matches) {
//         scheme = nextScheme;
//         break;
//       }
//     }

//     return { query, scheme };
//   })();
// }

// // Define and export the `useColorScheme` hook
// export default function useColorScheme(targetColorScheme: ColorScheme) {
//   const isMounted = useRef(true);
//   const colorScheme = useRef(getCurrentColorScheme());

//   const targetScheme = useMemo(
//     () => resolveTargetColorScheme(targetColorScheme),
//     [targetColorScheme]
//   );

//   const [scheme, setColorScheme] = useState(() => {
//     const { scheme } = colorScheme.current!
//     return scheme;
//   });

//   useEffect(() => {
//     const { query } = colorScheme.current!;

//     query.addEventListener('change', schemeChangeHandler);
//     isMounted.current = true;

//     function schemeChangeHandler(evt: MediaQueryListEvent) {
//       if (!evt.matches) {
//         query.removeEventListener('change', schemeChangeHandler);
//         const { query: nextQuery, scheme } = colorScheme.current = getCurrentColorScheme();

//         isMounted.current && setColorScheme(scheme);
//         nextQuery.addEventListener('change', schemeChangeHandler);
//       }
//     }

//     return () => {
//       const { query } = colorScheme.current;
//       query.removeEventListener('change', schemeChangeHandler);
//       isMounted.current = false;
//     };
//   }, []);

//   return scheme === targetScheme;
// }

const COLOR_SCHEME_KEY = 'color_scheme_key';

function getCurrentColorScheme(): ColorScheme {
  const maybeColorScheme = localStorage.getItem(COLOR_SCHEME_KEY)
  if (maybeColorScheme !== undefined) {
    return maybeColorScheme as ColorScheme;
  }

  let browserColorScheme = window.matchMedia(`(prefers-color-scheme: light)`)

  return browserColorScheme.matches ? 'light' : 'dark';
}

function updateTheme(theme: ColorScheme) {
  if (theme === 'light') {
    document.documentElement.classList.remove('dark');
  } else {
    document.documentElement.classList.add('dark');
  }

  localStorage.setItem(COLOR_SCHEME_KEY, theme);
}


export default function (): [ColorScheme, () => void] {
  // Query preferences and derive initial truth from that.
  // Set or remove "dark" class from html node based on current theme.
  // return function that allows user to set.
  // const [theme, setTheme] = useState(mode);

  const [theme, setTheme] = useState<ColorScheme>('dark');

  useEffect(() => {
    const currentColorSchme = getCurrentColorScheme();
    updateTheme(currentColorSchme);
  }, [theme],);


  return [
    theme,
    () => {
      const nextTheme = theme === 'dark' || theme === 'no-preference' ?
        'light' : 'dark';

      localStorage.setItem(COLOR_SCHEME_KEY, nextTheme)

      setTheme(nextTheme);
    },
  ];
}
