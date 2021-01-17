const dimensions = {
  headerHeight: gsap.getProperty(".header", "height"),
  headerWidth: gsap.getProperty(".header", "width"),
  logoWidth: gsap.getProperty(".header__logo", "width"),
  logoHeight: gsap.getProperty(".header__logo", "height"),
  logoMarginLeft: gsap.getProperty(".header__logo", "marginLeft"),
  headerPaddingBottom: gsap.getProperty(".header", "paddingBottom"),
};

const computeCenter = () => {
  let left = 0;
  let top = 0;

  top += dimensions.logoHeight;
  top /= 2;
  top += dimensions.headerPaddingBottom;

  left += dimensions.logoWidth;
  left /= 2;
  left += dimensions.logoMarginLeft;

  return { left, top };
};

gsap.set(".header--centered", {
  left: -computeCenter().left,
});
