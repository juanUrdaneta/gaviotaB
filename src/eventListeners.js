let modalWrapper = document.getElementsByClassName("modal")[0];
modalWrapper.classList.add("modal--hidden");
let openedKey = null;
let isAnimatingInOrOut = false;

let goBacks = document.getElementsByClassName("modal__post__go-back");

for (let i = 0; i < goBacks.length; i++) {
  goBacks[i].addEventListener("click", () => {
    if (isAnimatingInOrOut) return;
    isAnimatingInOrOut = true;
    gsap.to(".modal", {
      duration: 0.8,
      ease: "power2.out",
      transform: "translate(100vw,0)",
      clearProps: "transform",
      onComplete: () => {
        modalWrapper.classList.add("modal--hidden");

        if (openedKey == null) return;

        let openedClass = "modal__content_" + openedKey;
        let openedEle = document.getElementsByClassName(openedClass)[0];
        openedEle.classList.remove("modal__content--shown");
        isAnimatingInOrOut = false;
        openedKey = null;
      },
    });
  });
}

const gridItems = document.querySelectorAll(".grid__item");
for (let i = 0; i < gridItems.length; i++) {
  gridItems[i].addEventListener("click", (e) => {
    if (isAnimatingInOrOut) return;
    isAnimatingInOrOut = true;
    modalWrapper.classList.remove("modal--hidden");

    let key = gridItems[i].dataset.key;
    openedKey = key;

    let classname = "modal__content_" + key;
    let element = document.getElementsByClassName(classname)[0];
    // element.style.display = "flex";
    element.classList.add("modal__content--shown");

    gsap.to(".modal", {
      duration: 0.8,
      ease: "power2",
      transform: "translate(0vw,0)",
      onComplete: () => {
        isAnimatingInOrOut = false;
      },
    });
  });
}

document
  .getElementsByClassName("nav-right")[0]
  .addEventListener("click", () => {
    let nextModalKey = parseInt(openedKey) + 1;
    if (openedKey === "10") return;
    if (isAnimatingInOrOut) return;
    isAnimatingInOrOut = true;
    const nextTL = new gsap.timeline();
    nextTL.fromTo(
      `.modal__content_${openedKey}`,
      {
        transform: "translate(0vw,0)",
      },
      {
        duration: 0.4,
        transform: "translate(-100vw, 0)",
        clearProps: "transform",
        onComplete: () => {
          let openedClass = `modal__content_${openedKey}`;
          let openedEle = document.getElementsByClassName(openedClass)[0];
          openedEle.classList.remove("modal__content--shown");
        },
      }
    );
    nextTL.fromTo(
      `.modal__content_${nextModalKey}`,
      {
        transform: "translate(100vw,0)",
      },
      {
        duration: 0.4,
        onStart: () => {
          let openedClass = `modal__content_${nextModalKey}`;
          let openedEle = document.getElementsByClassName(openedClass)[0];
          openedEle.classList.add("modal__content--shown");
        },
        transform: "translate(0vw, 0)",
        onComplete: () => {
          openedKey = nextModalKey.toString();
          isAnimatingInOrOut = false;
        },
      }
    );
  });

document.getElementsByClassName("nav-left")[0].addEventListener("click", () => {
  let nextModalKey = parseInt(openedKey) - 1;
  if (openedKey === "0") return;
  if (isAnimatingInOrOut) return;
  isAnimatingInOrOut = true;
  const nextTL = new gsap.timeline();
  nextTL.fromTo(
    `.modal__content_${openedKey}`,
    {
      transform: "translate(0vw,0)",
    },
    {
      duration: 0.4,
      transform: "translate(100vw, 0)",
      clearProps: "transform",
      onComplete: () => {
        let openedClass = `modal__content_${openedKey}`;
        let openedEle = document.getElementsByClassName(openedClass)[0];
        openedEle.classList.remove("modal__content--shown");
      },
    }
  );
  nextTL.fromTo(
    `.modal__content_${nextModalKey}`,
    {
      transform: "translate(-100vw,0)",
    },
    {
      duration: 0.4,
      onStart: () => {
        let openedClass = `modal__content_${nextModalKey}`;
        let openedEle = document.getElementsByClassName(openedClass)[0];
        openedEle.classList.add("modal__content--shown");
      },
      transform: "translate(0vw, 0)",
      onComplete: () => {
        openedKey = nextModalKey.toString();
        isAnimatingInOrOut = false;
      },
    }
  );
});

//pic container

const getPic = (current, right = true) => {
  if (right) {
    if (current + 1 > 3) return 1;
    return current + 1;
  }
  if (current - 1 < 1) return 3;
  return current - 1;
};

let currentPicture = 1;
const modalPicContainer = document.getElementsByClassName("modal__pictures")[0];

document
  .getElementsByClassName("modal__pictures__nav--right")[0]
  .addEventListener("click", () => {
    const tl = gsap.timeline();
    if (isAnimatingInOrOut) return;
    isAnimatingInOrOut = true;
    let nextPic = getPic(currentPicture, false);
    tl.fromTo(
      `.modal__pictures_${currentPicture}`,
      { transform: "translate(0, 0)" },
      {
        duration: 0.2,
        transform: "translate(-100%,0)",
        onComplete: () => {
          currentPicture = nextPic;
        },
      }
    );
    tl.fromTo(
      `.modal__pictures_${nextPic}`,
      { transform: "translate(100%, 0)" },
      {
        duration: 0.2,
        transform: "translate(0,0)",
        onComplete: () => {
          currentPicture = nextPic;
          isAnimatingInOrOut = false;
        },
      }
    );
  });

document
  .getElementsByClassName("modal__pictures__nav--left")[0]
  .addEventListener("click", () => {
    const tl = gsap.timeline();
    if (isAnimatingInOrOut) return;
    isAnimatingInOrOut = true;
    let nextPic = getPic(currentPicture, true);
    tl.fromTo(
      `.modal__pictures_${currentPicture}`,
      { transform: "translate(0, 0)" },
      {
        duration: 0.2,
        transform: "translate(100%,0)",
        onComplete: () => {
          currentPicture = nextPic;
        },
      }
    );
    tl.fromTo(
      `.modal__pictures_${nextPic}`,
      { transform: "translate(-100%, 0)" },
      {
        duration: 0.2,
        transform: "translate(0,0)",
        onComplete: () => {
          currentPicture = nextPic;
          isAnimatingInOrOut = false;
        },
      }
    );
  });

gsap.fromTo(
  ".please-resize > p",
  { transform: "rotate(-45deg)" },
  { duration: 2, ease: "bounce", transform: "rotate(0deg)", repeat: -1 }
);
