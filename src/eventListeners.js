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
