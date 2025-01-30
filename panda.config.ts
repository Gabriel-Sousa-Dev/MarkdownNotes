import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: false,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],
  
  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          brand: {
            primary: { value: '#1f363d' },
            secondary: { value: '#40798c' },
            tertiary: { value: '#70a9a1' },
            quaternary: { value: '#9ec1a3' },
            quintenary: { value: '#cfe0c3'},

          }
        }
      }
    },
  },
 
  globalCss: {
    html: {
      '--global-font-body': '"Noto Sans", serif',
      background: 'slate.900',
      boxSizing: 'border-box',
      // '> *': {
      //   margin:0,
      //   padding: 0
      // }
    },
    body: {
      padding: 0,
      margin: 0
    },
    '*': {
      boxSizing: 'border-box'
    },
    'input, button': {
      margin: 0,
      padding: 0,
      all: 'unset',
      boxSizing:'border-box',
      font: 'inherit'
    }
  },

  // The output directory for your css system
  outdir: "styled-system",
});
