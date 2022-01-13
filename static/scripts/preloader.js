const body = document.querySelector('body');
console.log('script loaded')

document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    // Remove preloader classes from body.
    if (!body.classList.contains('is-ready')) {
      body.classList.add('is-ready');
    }
    body.classList.remove('is-loading');
    setTimeout(() => {
      body.removeChild(document.querySelector('.loader-wrapper'));
    }, 300);
  }
};
