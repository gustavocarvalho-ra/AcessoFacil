import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    gray: {
      900: '#000000',
      800: '#111111',
      700: '#212121',
      600: '#383838',
      500: '#404040',
      400: 'rgba(186, 186, 186, 0.6)',
      300: '#BABABA',
      200: '#D9D9D9', 
      100: '#EDEDED',
      50: '#FFFFFF', 
    },
    orange: {
      900: '#9D5C0D',
      800: '#E26A2C',
      700: '#CE9461',
      600: 'linear-gradient(to top, #ce9461, #c2864d, #b6773a, #aa6a25, #9d5c0d);',
      500: '#FF9F45',
      400: '#E0D8B0',
    },
  },
  fonts: {
    heading: 'Jost',
    body: 'Jost',

  },
  styles: {
    global: {
      'html::-webkit-scrollbar': {
        bg: 'blackAlpha 300',
        w: '8px',
      },
      'html::-webkit-scrollbar-thumb': {
        background: 'orange.700',
        borderRadius: '5px',
      },
      body: {
        bg: 'gray.50',
        color: 'gray.900',
      },
      '*': {
        scrollBehavior: 'smooth',
      },
    },
  },
});
