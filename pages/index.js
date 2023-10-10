/* eslint-disable jsx-a11y/media-has-caption */
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import BasicHero from '@/components/basic-hero/BasicHero';
import TechStackV2 from '@/components/TechStackV2/TechStackV2';
import BigReveal from '@/components/BigReveal/BigReveal';
import AnimatedScrollButton from '@/components/AnimatedScrollButton';
import Sponsors from '../components/sponsors/Sponsors';
import Screen from '../components/screen/Screen';
import HomeAbout from '../components/homeAbout/HomeAbout';

export default function Home() {
  const [isDesktop, setDesktop] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 1300) {
      setDesktop(true);
    } else {
      setDesktop(false);
    }

    const updateMedia = () => {
      if (window.innerWidth > 1300) {
        setDesktop(true);
      } else {
        setDesktop(false);
      }
    };
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  }, []);

  return (
    <Screen>
      <Head>
        <title>Stem POTD</title>
        <meta
          name="description"
          content="Stem POTD is an organization that creates educational content to help train for the Biology Olympiad and other under-represented olympiads. 
          We also let students gain research experience by letting them work on our big projects, such as the satellite project."
        />
        <meta
          name="keywords"
          content="Stem, POTD, Blair Sat, Magnet Sat, Biology, Biology Olympiad, Satellite"
        />
      </Head>
      {isDesktop ? (
          <div>
            <AnimatedScrollButton
              onClick={() =>
                document.getElementById('scrolled-to').scrollIntoView()
              }
            />
            <div>
              <BigReveal />
            </div>
          </div>
      ) : (
        <div>
        </div>
      )}
      {/* <div>
        <AnimatedScrollButton
          onClick={() =>
            document.getElementById('scrolled-to').scrollIntoView()
          }
        />
        <div>
          <BigReveal />
        </div>
      </div> */}
      <BasicHero />
      <div id="scrolled-to" />
      <HomeAbout />
      <TechStackV2 />
      <Sponsors />
    </Screen>
  );
}
