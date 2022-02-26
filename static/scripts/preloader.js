const body = document.querySelector('body');
const loader = document.querySelector('.loader');
const loaderIn = document.querySelector('.loader .inner');
const progressBar = document.querySelector('.loader .progress');

// show loader
gsap.set(loader, { autoAlpha: 1 });

document.onreadystatechange = () => {

  if (document.readyState === 'complete') {
    if (!body.classList.contains('is-ready')) {
      body.classList.add('is-ready');

      const observerOptions = {
        childList: true,
        attributes: true,
        attributesFilter: ["id"],
        subtree: false
      };
      const callback = () => {
        if (body.classList.contains('is-loading')) {
          setTimeout(() => {
            if (gsap) {
              gsap.to(loader, { duration: 1.2, yPercent: -105, ease: 'Power4.inOut' })
              body.classList.remove('is-loading');
            } else {
              body.removeChild(document.querySelector('.loader'));
            }
          //   body.classList.remove('is-loading');
          //   body.removeChild(body.querySelector('.c-loader-wrapper'))
          }, 400)
        }
      };

      if (window.location.pathname !== '/') {
        return callback();
      } else {
        const layoutLoaded = new MutationObserver(callback);
        layoutLoaded.observe(body, observerOptions);
      }
    }
    // setTimeout(() => {
      //   if (gsap) {
      //     // timelineOut
      //     const tlOut = gsap.timeline({
      //       id: 'tlIn',
      //       defaults: {
      //         duration: 1.2,
      //         ease: 'Power4.inOut',
      //       },
      //     });
      //     body.classList.remove('is-loading');
      //     tlOut.to(loader, { yPercent: -100 })
      //     const tlLoader = gsap.timeline();
      //     tlLoader.add(tlOut);
      //   } else {
      //     body.removeChild(document.querySelector('.loader'));
      //   }
    //   body.classList.remove('is-loading');
    //   body.removeChild(document.querySelector('.c-loader-wrapper'));
    // }, 300);
  }
};
