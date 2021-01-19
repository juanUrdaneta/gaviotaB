gsap.registerPlugin(CSSRulePlugin);

const dimensions = {
  headerHeight: gsap.getProperty(".header", "height"),
  headerWidth: gsap.getProperty(".header", "width"),
  logoWidth: gsap.getProperty(".header__logo", "width"),
  logoHeight: gsap.getProperty(".header__logo", "height"),
  logoMarginLeft: gsap.getProperty(".header__logo", "marginLeft"),
};

const gridElems = document.querySelectorAll(".grid__item");

const fixedDimensions = {
  headerHeight: {
    phone: "8rem",
    desktop: "11rem",
  },
};

const VIEW_BREAKPOINTS = {
  phone: 375,
  tablet_ver: 1024,
  tablet_hor: 768,
  desktop: 1920,
};

const ANIM_DURATION = 1;

const setDimension = (el) => {
  const windowWidth = window.innerWidth;
  if (windowWidth <= VIEW_BREAKPOINTS.phone) {
    return fixedDimensions[el].phone;
  } else if (windowWidth <= VIEW_BREAKPOINTS.tablet_ver) {
    return fixedDimensions[el].tablet_hor;
  } else if (windowWidth <= VIEW_BREAKPOINTS.tablet_hor) {
    return fixedDimensions[el].tablet_ver;
  } else if (windowWidth <= VIEW_BREAKPOINTS.desktop) {
    return fixedDimensions[el].desktop;
  }
};

const computeCenter = () => {
  let left = 0;

  left += dimensions.logoWidth;
  left /= 2;
  left += dimensions.logoMarginLeft;

  return { left };
};

gsap.set(".header--centered", {
  left: -computeCenter().left,
});

const tl = gsap.timeline();
const headerBefore = CSSRulePlugin.getRule(".header::before");

tl.from(".splash", {
  duration: ANIM_DURATION * 0.4,
  delay: ANIM_DURATION * 1,
  ease: "none",
  opacity: 0,
  top: "53vh",
});
tl.to(".splash", {
  duration: ANIM_DURATION * 0.4,
  delay: ANIM_DURATION * 1,
  ease: "none",
  opacity: 0,
  top: "47vh",
});
tl.from(".header", {
  duration: ANIM_DURATION * 0.4,
  delay: ANIM_DURATION * 0.5,
  ease: "power.in",
  top: "2rem",
  opacity: 0,
});
tl.to(headerBefore, {
  duration: ANIM_DURATION * 1.5,
  width: "2rem",
  ease: "power2.in",
});
tl.to(
  headerBefore,
  { duration: ANIM_DURATION * 1.5, height: "0rem", ease: "power2.out" },
  "-=.4"
);
tl.to(".header", {
  duration: ANIM_DURATION * 1,
  delay: ANIM_DURATION * 0.4,
  ease: "power2.inut",
  transform: "translate(0,0)",
  height: "11rem",
  onComplete: () => {
    document.querySelector(".header").classList.remove("header--centered");
    document.querySelector(".grid").classList.remove("grid--absolute");
    document.querySelector(".splash").classList.add("splash--hidden");
  },
  left: 0,
});
tl.from(
  gridElems,
  {
    duration: ANIM_DURATION * 1.5,
    opacity: 0,
    transform: "translate(25vw,0)",
    scaleX: "1.5",
    ease: "power2.inOut",
    stagger: {
      each: 0.25,
      grid: "auto",
      axis: "y",
    },
  },
  "-=1"
);
