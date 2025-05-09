import { Theme } from '@aws-amplify/ui-react';

export const dutchTheme: Theme = {
  name: 'dutch-theme',
  tokens: {
    colors: {
      font: {
        primary: { value: '#333333' },
        secondary: { value: '#555555' },
        interactive: { value: '#21468B' },
        hover: { value: '#FF6200' },
        focus: { value: '#FF6200' },
        active: { value: '#E05600' },
        error: { value: '#AE1C28' },
      },
      background: {
        primary: { value: '#FFFFFF' },
        secondary: { value: '#F8F8F8' },
        tertiary: { value: '#F0F0F0' },
      },
      border: {
        primary: { value: '#DDDDDD' },
        secondary: { value: '#CCCCCC' },
        tertiary: { value: '#21468B' },
        focus: { value: '#FF6200' },
        error: { value: '#AE1C28' },
      },
      brand: {
        primary: {
          10: { value: '#FFF2E5' },
          20: { value: '#FFE5CC' },
          40: { value: '#FFCC99' },
          60: { value: '#FFA64D' },
          80: { value: '#FF8019' },
          90: { value: '#FF6200' },
          100: { value: '#E05600' },
        },
      },
    },
    components: {
      button: {
        primary: {
          backgroundColor: { value: '{colors.brand.primary.90}' },
          _hover: {
            backgroundColor: { value: '{colors.brand.primary.100}' },
          },
          _focus: {
            backgroundColor: { value: '{colors.brand.primary.90}' },
            borderColor: { value: '{colors.border.focus}' },
          },
          _active: {
            backgroundColor: { value: '{colors.brand.primary.100}' },
          },
        },
      },
      tabs: {
        item: {
          _focus: {
            color: { value: '{colors.font.hover}' },
          },
          _hover: {
            color: { value: '{colors.font.hover}' },
          },
          _active: {
            color: { value: '{colors.font.active}' },
            borderColor: { value: '{colors.font.active}' },
          },
        },
      },
      fieldcontrol: {
        _focus: {
          borderColor: { value: '{colors.border.focus}' },
          boxShadow: { value: '0 0 0 2px rgba(255, 98, 0, 0.2)' },
        },
      },
      authenticator: {
        router: {
          borderColor: { value: 'transparent' },
        }
        // ✅ container styling will be handled via CSS
      },
    },
    radii: {
      small: { value: '4px' },
      medium: { value: '8px' },
      large: { value: '12px' },
    },
    space: {
      small: { value: '8px' },
      medium: { value: '16px' },
      large: { value: '24px' },
    },
    borderWidths: {
      small: { value: '1px' },
      medium: { value: '2px' },
      large: { value: '4px' },
    },
  },
  overrides: [
    {
      colorMode: 'light',
      tokens: {
        components: {
          authenticator: {
            modal: {
              width: { value: '460px' },
              height: { value: 'auto' },
            },
          },
        },
      },
    },
    {
      colorMode: 'dark',
      tokens: {
        colors: {
          background: {
            primary: { value: '#1A1A1A' },
          },
        },
      },
    },
  ],
};

// ✅ Add missing visual styling via CSS
if (typeof window !== 'undefined' && document?.head && !document.getElementById('dutch-theme-style')) {
  const style = document.createElement('style');
  style.id = 'dutch-theme-style';
  style.textContent = `
    .amplify-authenticator {
      position: relative;
      overflow: hidden;
    }

    .amplify-authenticator > div {
      background-color: #FFFFFF !important;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      border-radius: 8px;
      border: 1px solid #DDDDDD;
    }

    .amplify-authenticator .amplify-flex[class*="footer"] {
      background-color: #F8F8F8;
      border-top: 1px solid #EEEEEE;
    }

    .amplify-authenticator::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: linear-gradient(to right, #AE1C28 33%, #FFFFFF 33%, #FFFFFF 66%, #21468B 66%);
      z-index: 1;
    }
  `;
  document.head.appendChild(style);
}
