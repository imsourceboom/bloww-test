export const initialState = {
  isBrowser: null,
  isBrowser: null,
  notIndex: false,
  mobileNavigation: false,
  swiperSlideKey: 0,
};

export const IS_DEVICE = 'IS_DEVICE';
export const IS_BROWSER = 'IS_BROWSER';
export const NOT_INDEX = 'NOT_INDEX';
export const MOBILE_NAVIGATION = 'MOBILE_NAVIGATION';
export const SWIPER_SLIDE_KEY = 'SWIPER_SLIDE_KEY';

export const isDeviceAction = isDevice => ({
  type: IS_DEVICE,
  isDevice,
});
export const isBrowserAction = isBrowser => ({
  type: IS_BROWSER,
  isBrowser,
});
export const notIndexAction = notIndex => ({
  type: NOT_INDEX,
  notIndex,
});
export const mobileNavigationAction = mobileNavigation => ({
  type: MOBILE_NAVIGATION,
  mobileNavigation,
});
export const swiperSlideKeyAction = swiperSlideKey => ({
  type: SWIPER_SLIDE_KEY,
  swiperSlideKey,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case IS_DEVICE:
      return {
        ...state,
        isDevice: action.isDevice,
      };

    case IS_BROWSER:
      return {
        ...state,
        isBrowser: action.isBrowser,
      };

    case NOT_INDEX:
      return {
        ...state,
        notIndex: action.notIndex,
      };

    case MOBILE_NAVIGATION:
      return {
        ...state,
        mobileNavigation: action.mobileNavigation,
      };

    case SWIPER_SLIDE_KEY:
      return {
        ...state,
        swiperSlideKey: action.swiperSlideKey,
      };

    default:
      return {
        ...state,
      };
  }
};
