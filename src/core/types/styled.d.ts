import 'styled-components';
import palette from 'core/styles/colors';

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: typeof palette;
    components: {
      label: string;
      text: string;
      border: string;
      container: {
        bg: string;
        overlay: string;
      };
      inputs: {
        element: string;
        disabled: string;
        bg: string;
      };
      list: {
        item: {
          icon: string;
        };
      };
      modal: {
        title: string;
        bg: string;
      };
      refreshControl: {
        color: string | undefined;
      };
      statusbar: {color: string};
      bottomNavigation: {
        bg: string;
      };
    };
  }
}
