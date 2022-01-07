const body = document.querySelector('body');

document.onreadystatechange = () => {

  if (document.readyState === 'complete') {
    if (!body.classList.contains('preloader_off')) {
      body.classList.add('preloader_off');
    }

    // Remove preloader classes from body.
    setTimeout(() => {
      body.classList.remove('preloader_on');
      body.classList.remove('preloader_off');
    }, 1000);

  }
};
