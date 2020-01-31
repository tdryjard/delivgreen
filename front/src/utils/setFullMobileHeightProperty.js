const getMobileFullHeight = function getMobileFullHeightProperty() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
};

export default function setFullMobileHeight() {
  getMobileFullHeight();
  window.addEventListener('resize', () => {
    getMobileFullHeight();
  });
}
