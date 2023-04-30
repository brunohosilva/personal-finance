import type {TextStyle, ViewStyle} from 'react-native/types';

import type {ButtonType} from '.';

interface ButtonStyleType {
  container?: ViewStyle;
  text?: TextStyle;
}

export default function useButton() {
  const buttonStyle = (type: ButtonType): ButtonStyleType => {
    switch (type) {
      case 'primary':
        return {
          container: {
            backgroundColor: '#000',
          },
          text: {
            color: '#FFF',
          },
        };
      case 'secondary':
        return {
          container: {
            backgroundColor: '#FFF',
          },
          text: {
            color: '#000',
          },
        };
      case 'transparent':
        return {
          container: {
            backgroundColor: 'transparent',
          },
          text: {
            color: '#000',
          },
        };

      default:
        return {};
    }
  };

  return {
    buttonStyle,
  };
}
