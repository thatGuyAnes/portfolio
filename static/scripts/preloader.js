const body = document.querySelector('body');
const loader = document.querySelector('.loader');
const loaderIn = document.querySelector('.loader .inner');
const progressBar = document.querySelector('.loader .progress');

// show loader
gsap.set(loader, { autoAlpha: 1 });

document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    if (window.location.pathname !== '/') {
      if (body.classList.contains('is-light')) body.classList.remove('is-light');
    }

    if (!body.classList.contains('is-ready')) {
      body.classList.add('is-ready');

      const observerOptions = {
        childList: true,
        attributes: true,
        attributesFilter: ['id'],
        subtree: false,
      };

      const callback = () => {
        if (body.classList.contains('is-loading')) {
          setTimeout(() => {
            if (gsap) {
              gsap.to(loader, {
                duration: 0.8, delay: 0.8, yPercent: -105, ease: 'power4.inOut',
              });
              body.classList.remove('is-loading');
            } else {
              body.classList.remove('is-loading');
              body.removeChild(document.querySelector('.loader'));
            }
          //   body.classList.remove('is-loading');
          //   body.removeChild(body.querySelector('.c-loader-wrapper'))
          }, 300);
        }
      };

      if (window.location.pathname !== '/') {
        return callback();
      }
      const layoutLoaded = new MutationObserver(callback);
      layoutLoaded.observe(body, observerOptions);
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
