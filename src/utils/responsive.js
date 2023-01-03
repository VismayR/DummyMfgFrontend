import {Dimensions, PixelRatio} from 'react-native';

const {width, height} = Dimensions.get('window');

const calWidth = widthSize => {
  // console.warn('great')

  let givenWidth =
    typeof widthSize === 'number' ? widthSize : parseFloat(widthSize);

  return PixelRatio.roundToNearestPixel((width * givenWidth) / 100);
};

const calHeight = heightSize => {
  let givenHeight =
    typeof heightSize === 'number' ? heightSize : parseFloat(heightSize);

  return PixelRatio.roundToNearestPixel((height * givenHeight) / 100);
};

let vh = calHeight(1);

let vw = calWidth(1);

let _16px = 3.82 * vw;

let _14px = 3.4 * vw;

let _18px = 4.3 * vw;

let _12px = 3.2 * vw;

export {calHeight, calWidth, vh, vw, _12px, _14px, _16px, _18px};
