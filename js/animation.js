const animatedScrollObserver = new Intersectionobserver {
  (entries, animatedScrollObserver) => {
    entries.forEach((entry) => {
      if(entry.isIntersecting) {
        entry.target.classList.add('enter');
        animatedScrollObserver.unobserve(entry.target);
      }
    });
  }
};
export default {
  bind(el) {
    el.classList.add('before-enter');
    animatedScrollObserverobserve(el);
  }
}
