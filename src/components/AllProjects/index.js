import React, { useEffect, useRef } from 'react';
import { Link } from 'gatsby';
import gsap from 'gsap';
import './style.scss';

const images = [
  {
    src: require('../../images/projects/01.png'),
    path: '/projects/webfolio',
    desc: '',
    title: 'Webfolio',
  },
  {
    src: require('../../images/projects/02.png'),
    path: '/projects/udacity',
    desc: '',
    title: 'Udacity',
  },
  {
    src: require('../../images/projects/03.png'),
    path: '/projects/blog',
    desc: '',
    title: 'Blog',
  },
  {
    src: require('../../images/projects/03.png'),
    path: '/projects/notes',
    desc: '',
    title: 'Docunotes',
  },
  {
    src: require('../../images/projects/04.png'),
    path: 'https://github.com/thatGuyAnes/Responsive-restaurant-website',
    desc: '',
    title: 'HTML template',
  },
];

const Box = ({ imageObj }) => {
  const { src, path, desc, title } = imageObj;
  const elRef = useRef();
  const textContainerRef = useRef();
  const textCopyRef = useRef();
  const textMaskRef = useRef();
  const imageContainerRef = useRef();
  const imageMaskRef = useRef();
  const imageRef = useRef();
  let el;

  // Return the text info's height.
  const getTextHeight = (text) => text.clientHeight;

  /* Animate the box's elements.*/
  const hoverHandler = (e) => {
    if (elRef.current) {
      const {
        imageContainer,
        imageMask,
        image,
        textContainer,
        textCopy,
        textMask,
      } = el;
      const timeline = gsap.timeline({
        defaults: { duration: 0.5, ease: 'Power4.out' },
      });

      if (e.type === 'mouseenter') {
        // on mouse enter:

        // Pull image down and push mask up to the reveal position.
        timeline
          .to(imageContainer, { yPercent: 0 })
          .to(imageMask, { yPercent: 0 }, 0)
          .to(textCopy, { yPercent: 0 }, 0)
          .to(textMask, { yPercent: 0 }, 0)
          .to(image, { scale: 1, duration: 1 }, 0)
          // Text animation: move text block up by half the width of the paragraph's container.
          .to(textContainer, { y: () => -getTextHeight(textContainer) / 2 }, 0);
      } else if (e.type === 'mouseleave') {
        // on mouse leave:

        // Reset to initial position, Push image up and pull mask down.
        timeline
          .to(imageMask, { yPercent: 100 })
          .to(imageContainer, { yPercent: -101 }, 0)
          .to(image, { scale: 1.2 }, 0)
          // Text animation: reset position.
          .to(textContainer, { y: 0 }, 0)
          .to(textCopy, { yPercent: -101 }, 0)
          .to(textMask, { yPercent: 100 }, 0);
      } //** END if;

      return timeline;
    }
  }; //** END hoverHandler;

  const init = () => {
    el = {
      textContainer: textContainerRef.current,
      textMask: textMaskRef.current,
      textCopy: textCopyRef.current,
      imageContainer: imageContainerRef.current,
      imageMask: imageMaskRef.current,
      image: imageRef.current,
    };

    const tl = gsap.timeline();
    // Reset the initial positions.
    tl.to(el.imageContainer, { yPercent: -101 })
      .to(el.textCopy, { yPercent: -101 }, 0)
      .to(el.imageMask, { yPercent: 100 }, 0)
      .to(el.textMask, { yPercent: 100 }, 0)
      .to(el.image, { scale: 1.2 }, 0);

    // Add event listeners for each section.
    elRef.current.addEventListener('mouseenter', hoverHandler);
    elRef.current.addEventListener('mouseleave', hoverHandler);
  };

  useEffect(() => {
    init();
    return () => {
      elRef.current?.removeEventListener('mouseenter', hoverHandler);
      elRef.current?.removeEventListener('mouseleave', hoverHandler);
      gsap.killTweensOf('*');
    };
  }, []);

  return (
    <div className="c-box js-hover" ref={elRef}>
    <Link to={path} >
      <div className="c-box__heading" ref={textContainerRef}>
        <span>01</span>
        <h3>{title}</h3>
      </div>
      <div className="c-box__info" ref={textCopyRef}>
        <div className="c-box__info__mask" ref={textMaskRef}>
          <p>{desc}</p>
        </div>
      </div>
      <div className="c-box__image" ref={imageContainerRef}>
        <div className="c-box__image__mask" ref={imageMaskRef}>
          <img src={src.default} ref={imageRef} />
        </div>
      </div>
    </Link>
    </div>
  );
};

const AllProjects = () => {
  const infoRef = useRef();
  return (

    <main className="c-ap o-container" data-scroll-section="">
      <div className="c-ap__list">

        {/* <div className="c-list__info__wrapper" ref={infoRef}> */}
        {/*   <div className="c-list__info"> */}
        {/*     <h3>List title</h3> */}
        {/*     <p>List description:</p> */}
        {/*   </div> */}
        {/* </div> */}

        <div className="c-ap__list__boxes-container">
          {images.map((image) => (
            <Box imageObj={image} key={image.path} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default AllProjects;
