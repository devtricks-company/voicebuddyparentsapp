module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-require',
    [
      'module-resolver',
      {
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.android.js',
          '.android.tsx',
          '.ios.js',
          '.ios.tsx',
          '.json',
          '.png',
          '.svg',
        ],
        root: ['src'],
      },
    ],
    //reanimated **SHOULD** be last
    'react-native-reanimated/plugin',
  ],
};
