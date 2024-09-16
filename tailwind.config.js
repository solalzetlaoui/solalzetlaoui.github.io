/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.astro',
  ],
  theme: {
    extend: {
      fontSize: {
        'xsm': ['clamp(0.75rem, 2vw, 1rem)', {
          fontWeight: '200',
        }],
        
        'sm': ['clamp(0.875rem, 2vw, 1.125rem)', {
          fontWeight: '400',
          lineHeight: 'clamp(1.5rem, 2vw, 1.85rem)',
        }],

        'md': ['clamp(1rem, 2vw, 1.25rem)', {
          fontWeight: '400',
          lineHeight: 'clamp(1.5rem, 2vw + 1.5rem, 1.95rem)',
        }],

        'lg': ['clamp(1.5rem, 2vw, 1.75rem)', {
          fontWeight: '400',
          lineHeight: 'clamp(2.5rem, 2vw, 3rem)',
        }],

        'xl': ['clamp(1.5rem, 2vw, 2rem)', {
          fontWeight: '700',
        }],

        '2xl': ['clamp(2rem, 2vw + 1.5rem, 3rem)', {
          fontWeight: '700',
        }],
        
        'hero': ['clamp(1.875rem, 2vw + 1.5rem, 8rem)', {
          fontWeight: '700',
        }],
      },


      spacing: {
        'screen': '100vh',
      },

      height: {
        '95vh': '95vh',
        '5vh': '5vh',
        '120': '120%',
      },

      inset: {
        '10p': '10%',
      },

      width: {
        '300': '300%',
        '120': '120%',
      },

      minHeight: {
        '95vh': '95vh',
        '5vh': '5vh',
      },

      margin: {
        '-100': '-100%',
      },
      
      colors: {
        'primary': 'var(--color-primary)',
      },

      backgroundImage: {
        'custom-gradient': 'linear-gradient(to bottom, #0e090de6, #0e090de1 10.31%, #0e090dd4 20.25%, #0e090dc2 29.83%, #0e090daa 39.04%, #0e090d8f 47.88%, #0e090d73 56.38%, #0e090d56 64.51%, #0e090d3b 72.3%, #0e090d24 79.73%, #0e090d11 86.83%, #0e090d05 93.58%, #0e090d00)',
      },
      zIndex: {
        '-1': '-1',
        '-2': '-2',
      },
      
      gridTemplateAreas: {
        'footer-sm': [
          'socials',
          'copyright',
          'madeby'
        ],
        'footer-lg': [
          'copyright socials madeby'
        ],
      },
    },
  },
  plugins: [function ({ addUtilities }) {
    addUtilities({
      '.grid-areas-footer-sm': {
        'grid-template-areas': `
          "socials"
          "copyright"
          "madeby"
        `,
      },
      '.grid-areas-footer-lg': {
        'grid-template-areas': `
          "copyright socials madeby"
        `,
      },
    });
  },],
}


