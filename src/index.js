gsap.registerPlugin(CSSRulePlugin);

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", `${vh}px`);

const dimensions = {
  headerHeight: gsap.getProperty(".header", "height"),
  headerWidth: gsap.getProperty(".header", "width"),
  logoWidth: gsap.getProperty(".header__logo", "width"),
  logoHeight: gsap.getProperty(".header__logo", "height"),
  logoMarginLeft: gsap.getProperty(".header__logo", "marginLeft"),
};

const gridElems = document.querySelectorAll(".grid__item");

const ANIM_DURATION = 1;

const VIEW_BREAKPOINTS = {
  phone: 375,
  tablet_ver: 1024,
  tablet_hor: 768,
  desktop: 1920,
};

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
  // top: "calc(var(--vh,1vh)*53)",
  top: 53 * vh,
});
tl.to(".splash", {
  duration: ANIM_DURATION * 0.4,
  delay: ANIM_DURATION * 1,
  ease: "none",
  opacity: 0,
  // top: "calc(var(--vh,1vh)*47)",
  top: 47 * vh,
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
  "-=4"
);
tl.to(".header", {
  duration: ANIM_DURATION * 1,
  delay: ANIM_DURATION * 0.4,
  ease: "power2.inut",
  transform: "translate(0,0)",
  height: "11rem",
  onComplete: () => {
    document.querySelector(".header").classList.remove("header--centered");
    document.querySelector(".splash").classList.add("splash--hidden");
  },
  left: 0,
});
tl.from(
  gridElems,
  {
    duration: ANIM_DURATION * 1.5,
    opacity: 0,
    left: "50vw",
    scaleX: 1.5,
    ease: "power2.inOut",
    stagger: {
      each: 0.25,
      grid: "auto",
      axis: "y",
    },
  },
  "-=1"
);

document
  .querySelector(".modal__nav-left")
  .addEventListener("mouseenter", () => {
    gsap.to(".modal__content", {
      duration: 1,
      padding: "5rem 16rem",
      ease: "elastic",
    });
    gsap.to(".modal__pictures__container", {
      duration: 0.2,
      borderRadius: "6rem",
      ease: "power2.in",
    });
  });

document
  .querySelector(".modal__nav-right")
  .addEventListener("mouseenter", () => {
    gsap.to(".modal__content", {
      duration: 1,
      padding: "5rem 16rem",
      ease: "elastic",
    });
    gsap.to(".modal__pictures__container", {
      duration: 0.2,
      borderRadius: "6rem",
      ease: "power2.in",
    });
  });

document
  .querySelector(".modal__nav-left")
  .addEventListener("mouseleave", () => {
    gsap.to(".modal__content", {
      duration: 0.4,
      padding: "0",
      ease: "power2.out",
    });
    gsap.to(".modal__pictures__container", {
      duration: 0.2,
      borderRadius: "0 0 0 6rem",
      ease: "power2.in",
    });
  });

document
  .querySelector(".modal__nav-right")
  .addEventListener("mouseleave", () => {
    gsap.to(".modal__content", {
      duration: 0.4,
      padding: "0",
      ease: "power2.out",
    });
    gsap.to(".modal__pictures__container", {
      duration: 0.2,
      borderRadius: "0 0 0 6rem",
      ease: "power2.in",
    });
  });

document.querySelector(".modal__content").addEventListener("mouseover", () => {
  gsap.to(".modal__content", {
    duration: 0.4,
    padding: "0",
    ease: "power2.out",
  });
  gsap.to(".modal__pictures__container", {
    duration: 1,
    borderRadius: "0 0 0 6rem",
    ease: "power2.in",
  });
});
