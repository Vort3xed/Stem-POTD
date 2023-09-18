import { useEffect } from 'react';
import Head from 'next/head';

import Screen from '@/components/screen/Screen';
import Button from '@/components/button/Button';
import styles from '@/styles/events.module.css';
import StyledTextV2Small from '@/components/StyledTextV2Small/StyledTextV2';
import EventCards from '@/components/event/Events';

function Events() {
  useEffect(() => {
    const handleClipping = () => {
      if (document.documentElement.clientWidth > 900) {
        const allElements = [
          ...document.querySelectorAll(`.${styles.contentWrapper}`),
        ];
        allElements.forEach((element) => {
          const circle =
            element.previousSibling.previousSibling.firstChild.firstChild
              .firstChild;
          const currentImageBox = element.previousSibling;
          const boundingBox = element.getBoundingClientRect();
          const clippedBoxHeight = boundingBox.height;
          const windowHeight = document.documentElement.clientHeight;
          const distanceFromTop = boundingBox.top + clippedBoxHeight / 13;
          let percentageOfElementVisible;
          let opacityRelativeToPosition;

          if (distanceFromTop > windowHeight) {
            percentageOfElementVisible = 0;
            opacityRelativeToPosition = 0;
          } else if (distanceFromTop > 0) {
            percentageOfElementVisible =
              (windowHeight - distanceFromTop) / clippedBoxHeight;
            percentageOfElementVisible = Math.min(
              percentageOfElementVisible,
              1
            );
            opacityRelativeToPosition = 1;
          } else {
            percentageOfElementVisible = 1;
          }
          if (
            element.parentNode.previousSibling &&
            percentageOfElementVisible > 0
          ) {
            const previousImageBox =
              element.parentNode.previousSibling.childNodes[1];
            previousImageBox.style.opacity = Math.max(
              1 - percentageOfElementVisible * 1.5,
              0
            );
          }
          currentImageBox.style.opacity = opacityRelativeToPosition;
          circle.setAttribute('r', percentageOfElementVisible * 1.5);
        });
      }
    };
    document.addEventListener('scroll', handleClipping);
    return () => document.removeEventListener('scroll', handleClipping);
  }, []);

  return (
    <Screen>
      <Head>
        <title>Our Events</title>
        <meta
          name="description"
          content="Event Information of Stem POTD"
        />
        <meta
          name="keywords"
          content="Stem, POTD, Blair Sat, Magnet Sat, Biology, Biology Olympiad, Satellite"
        />
      </Head>
      <section className="container-70 pt-28 md:pt-16 sm:pt-12">
        <StyledTextV2Small text="Our Events" />
        <EventCards />
      </section>
    </Screen>
  );
}

// eslint-disable-next-line
function EventBox({ title, description, src, link, id }) {
  return (
    <div className="contents lg:grid lg:gap-8 lg:justify-items-center">
      <svg width="0" height="0">
        <defs>
          <clipPath id={id} clipPathUnits="objectBoundingBox">
            <circle
              cx="0.5"
              cy="1.2"
              r="0"
              transform="translate(0.5 1.2) scale(0.8806584362139918 1) translate(-0.5 -1.2)"
            />
          </clipPath>
        </defs>
      </svg>

      <div className={styles.banner}>
        <div
          className="relative w-full h-full"
          style={{ clipPath: `url(#${id})` }}
        >
          <div className="absolute top-0 left-0 right-0 bottom-0 z-10 lg:static">
            <img
              src={src}
              alt="abc"
              className="h-full w-full object-cover object-top"
            />
          </div>
        </div>
      </div>

      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          <h2 className="text-5xl font-bold sm:text-3xl">{title}</h2>
          <p className="text-xl leading-normal sm:text-lg sm:font-light">
            {description}
          </p>
          <a
            href={link}
            target="_blank"
            className="flex w-[fit-content] rounded-full"
            rel="noreferrer"
          >
            <Button>
              <span className="z-50 block">View More</span>
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Events;
