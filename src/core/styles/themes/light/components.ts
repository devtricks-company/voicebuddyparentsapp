import palette from 'core/styles/colors';

const components = {
  label: '#08080D',
  text: '#777F9E',
  border: '#939393',
  placeHolderColor: '#FFF',
  container: {
    bg: palette.light,
    overlay: palette.primary,
  },
  inputs: {
    element: palette.primary,
    disabled: palette.gray,
    bg: palette.lightGray,
  },
  list: {
    item: {
      icon: palette.primary,
    },
  },
  modal: {
    title: palette.black,
    bg: palette.light,
  },
  refreshControl: {
    color: undefined,
  },
  statusbar: {color: palette.primary},
  bottomNavigation: {
    bg: palette.light,
  },
};

export default components;
