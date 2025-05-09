import { Theme } from '@aws-amplify/ui-react';

export const dutchTheme: Theme = {
  name: 'dutch-theme',
  tokens: {
    colors: {
      font: {
        primary: { value: '#333333' },
        secondary: { value: '#555555' },
        interactive: { value: '#21468B' }, // Dutch blue
        hover: { value: '#FF6200' }, // Dutch orange
        focus: { value: '#FF6200' }, // Dutch orange
        active: { value: '#E05600' }, // Darker Dutch orange
        error: { value: '#AE1C28' }, // Dutch red
      },
      background: {
        primary: { value: '#FFFFFF' },
        secondary: { value: '#F8F8F8' },
        tertiary: { value: '#F0F0F0' },
      },
      border: {
        primary: { value: '#DDDDDD' },
        secondary: { value: '#CCCCCC' },
        tertiary: { value: '#21468B' }, // Dutch blue
        focus: { value: '#FF6200' }, // Dutch orange
        error: { value: '#AE1C28' }, // Dutch red
      },
      brand: {
        primary: {
          10: { value: '#FFF2E5' }, // Very light orange
          20: { value: '#FFE5CC' },
          40: { value: '#FFCC99' },
          60: { value: '#FFA64D' },
          80: { value: '#FF8019' },
          90: { value: '#FF6200' }, // Dutch orange
          100: { value: '#E05600' }, // Darker Dutch orange
        }
      }
    },
    components: {
      button: {
        primary: {
          backgroundColor: { value: '{colors.brand.primary.90}' },
          _hover: {
            backgroundColor: { value: '{colors.brand.primary.100}' }
          },
          _focus: {
            backgroundColor: { value: '{colors.brand.primary.90}' },
            borderColor: { value: '{colors.border.focus}' }
          },
          _active: {
            backgroundColor: { value: '{colors.brand.primary.100}' }
          }
        }
      },
      tabs: {
        item: {
          _focus: {
            color: { value: '{colors.font.hover}' }
          },
          _hover: {
            color: { value: '{colors.font.hover}' }
          },
          _active: {
            color: { value: '{colors.font.active}' },
            borderColor: { value: '{colors.font.active}' }
          }
        }
      },
      fieldcontrol: {
        _focus: {
          borderColor: { value: '{colors.border.focus}' },
          boxShadow: { value: '0 0 0 2px rgba(255, 98, 0, 0.2)' }
        }
      },
      authenticator: {
        router: {
          borderColor: { value: 'transparent' }
        },
        container: {
          backgroundColor: { value: '#FFFFFF' },
          boxShadow: { value: '0 2px 4px rgba(0, 0, 0, 0.1)' },
          borderRadius: { value: '8px' },
          borderWidth: { value: '1px' },
          borderStyle: { value: 'solid' },
          borderColor: { value: '#DDDDDD' }
        },
        footer: {
          backgroundColor: { value: '#F8F8F8' },
          borderTopWidth: { value: '1px' },
          borderTopStyle: { value: 'solid' },
          borderTopColor: { value: '#EEEEEE' }
        }
      }
    },
    radii: {
      small: { value: '4px' },
      medium: { value: '8px' },
      large: { value: '12px' }
    },
    space: {
      small: { value: '8px' },
      medium: { value: '16px' },
      large: { value: '24px' }
    },
    borderWidths: {
      small: { value: '1px' },
      medium: { value: '2px' },
      large: { value: '4px' }
    }
  },
  overrides: [
    {
      colorMode: 'light',
      tokens: {
        colors: {
          background: {
            primary: { value: '#FFFFFF' }
          }
        },
        components: {
          authenticator: {
            modal: {
              width: { value: '460px' },
              height: { value: 'auto' },
              backgroundColor: { value: '#FFFFFF' }
            }
          }
        }
      }
    }
  ]
};

// Add custom CSS for Dutch flag stripe at the top of the authenticator
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = `
    .amplify-authenticator {
      position: relative;
      overflow: hidden;
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