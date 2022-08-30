import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

const customViewports = {
  kindleFire2: {
    name: 'Nest Hub',
    styles: {
      width: '1024px',
      height: '600px',
    },
  },
  kindleFireHD: {
    name: 'Nest Hub Max',
    styles: {
      width: '1280px',
      height: '800px',
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: {
      ...INITIAL_VIEWPORTS,
      ...customViewports
    },
  },
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: '#fdfeff',
      },
      {
        name: 'dark',
        value: '#1b294b',
      },
    ],
  },
}
