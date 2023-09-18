import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Styles from './tech-stack.module.css';
import StyledTextV2Small from '../StyledTextV2Small/StyledTextV2';
import SlidingComponent from '../SlidingComponent/Slider'



function TechStack() {
  return (
    <section className={`${Styles.techStack}`}>
      <div className="container-70">
        <Element1 />
        <Element2 />
        {/* <Element3 /> */}
      </div>
    </section>
  );
}

export default TechStack;

function Element1() {
  const ref = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        if (window.innerHeight + 100 > ref.current.getBoundingClientRect().y) {
          ref.current.classList.add('active');
        } else {
          ref.current.classList.remove('active');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (

    <div ref={ref} className={`${Styles.row} mt-40 fadeonscroll`}>
      <div className={`${Styles.col} ${Styles.col40}`}>
        {/* <h2 className={`${Styles.header} `}>Explore.</h2> */}
        <div className={`${Styles.header} `}>
          <StyledTextV2Small text="Magnet3 Sat" />
        </div>
      </div>
      <div className={`${Styles.col} ${Styles.col60} `}>
        <SlidingComponent direction="left">
          <div className={Styles.headDescription}>
            Not only do we make impacts on earth, we also make impacts in space. We are currently working on a satellite
            that will be launched into space to collect data on the Earth&apos;s atmosphere.
          </div>
        </SlidingComponent>

        <div className={Styles.contentContainer}>
          <div className={Styles.newContent}>
            <div className={`${Styles.content}`}>
              {/* <GridImage
              key="1"
              src="/gallery/gallery1.jpg"
              mobileSrc="/gallery/gallery1.jpg"
              title=""
              id="1"
            /> */}
              <img className={`${Styles.headerImage} mt-2 `} src="/gallery/gallery1.jpg" alt="compteam" />
            </div>
          </div>
          <div className={Styles.content} data-aos="zoom-y-out" data-aos-delay="500">
            <h2>Devise.</h2>
            <p>
              Develop and design our satellite. Use math and physics and apply engineering skills to prototype the design.
            </p>
          </div>

          <div className="absolute opacity-100 transform -translate-x-1/4 translate-y-1/4 pointer-events-none" aria-hidden="true">
            <Image
              className={Styles.blobImage}
              height="10000%"
              width="10000%"
              // src="/blob.png"
              src="/betterblueblob.png"
              alt="test"
            />
          </div>
          <div className='relative z-10'>
            <div className={Styles.content} data-aos="zoom-y-out" data-aos-delay="600">
              <h2>Launch.</h2>
              <p>
                A Coalition of female students who are passionate about computer science and want to share their knowledge with others.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

function Element2() {
  const ref = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        if (window.innerHeight + 100 > ref.current.getBoundingClientRect().y) {
          ref.current.classList.add('active');
        } else {
          ref.current.classList.remove('active');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={ref} className={`${Styles.row} mt-40 fadeonscroll sm:mt-4`}>
      <div className={`${Styles.col} ${Styles.col60}`}>
        <SlidingComponent direction="right">
          <div className={Styles.headDescription}>
            Find resources for the USABO olympiad. We offer a variety of resources to help you succeed.
          </div>
        </SlidingComponent>
        <div className={Styles.contentContainer}>
          <div className={Styles.content} data-aos="zoom-y-out" data-aos-delay="500">
            <h2>Resources</h2>
            <p>
              Check out our resources to help you succeed in the USABO olympiad.
            </p>
          </div>
          <div className={Styles.content} data-aos="zoom-y-out" data-aos-delay="600">
            <h2>Join</h2>
            <p>
              Join the team and help develop resources for the USABO olympiad.
            </p>
          </div>
        </div>
      </div>
      <div className={`${Styles.col} ${Styles.col40}`}>
        <div className={`${Styles.header} `}>
          <StyledTextV2Small text="Biology Olympiad" />
        </div>
      </div>
    </div>
  );
}

// eslint-disable-next-line
function Element3() {
  const ref = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        if (window.innerHeight + 100 > ref.current.getBoundingClientRect().y) {
          ref.current.classList.add('active');
        } else {
          ref.current.classList.remove('active');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div ref={ref} className={`${Styles.row} mt-40 fadeonscroll sm:mt-4`}>
      <div className={`${Styles.col} ${Styles.col40}`}>
        <h2 className={Styles.header}>Element 3</h2>
        <img className={`${Styles.headerImage} mt-2 `} src="/gallery/gallery1.jpg" alt="compteam" />
      </div>
      <div className={`${Styles.col} ${Styles.col60}`}>
        <div className={Styles.headDescription}>
          Description
        </div>
        <div className={Styles.contentContainer}>
          <div className={Styles.content}>
            <h2>Item 1</h2>
            <p>
              Description
            </p>
          </div>
          <div className={Styles.content}>
            <h2>Item 1</h2>
            <p>
              Description
            </p>
          </div>
          <div className={Styles.content}>
            <h2>Item 1</h2>
            <p>
              Description
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
