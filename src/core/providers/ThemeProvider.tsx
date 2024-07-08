import {ThemeProvider as StyeledThemeProvider} from 'styled-components';
import {useAtomValue} from 'jotai';
import lightTheme from 'core/styles/themes/light/theme';
import darkTheme from 'core/styles/themes/dark/theme';
import {themeAtom} from 'core/atoms/themes';

export function ThemeProvider({children}: {children: JSX.Element}) {
  const mode = useAtomValue(themeAtom);

  return (
    <StyeledThemeProvider theme={mode === 'light' ? lightTheme : darkTheme}>
      {children}
    </StyeledThemeProvider>
  );
}
