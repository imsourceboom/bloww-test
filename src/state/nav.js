export const initialState = {
  notIndex: false,
  mobileNavigation: false,
  swiperSlideKey: 1,
};

export const NOT_INDEX = 'NOT_INDEX';
export const MOBILE_NAVIGATION = 'MOBILE_NAVIGATION';
export const SWIPER_SLIDE_KEY = 'SWIPER_SLIDE_KEY';

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
