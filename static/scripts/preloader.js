const body = document.querySelector('body');
console.log('script loaded');

document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    // Remove preloader classes from body.
    if (!body.classList.contains('is-ready')) {
      body.classList.add('is-ready');
    }
    setTimeout(() => {
      body.classList.remove('is-loading');
      body.removeChild(document.querySelector('.c-loader-wrapper'));
    }, 300);
  }
};
