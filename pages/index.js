/* eslint-disable jsx-a11y/media-has-caption */
import Head from 'next/head';
import BasicHero from '@/components/basic-hero/BasicHero';
import TechStackV2 from '@/components/TechStackV2/TechStackV2';
import BigReveal from '@/components/BigReveal/BigReveal';
import AnimatedScrollButton from '@/components/AnimatedScrollButton';
import Sponsors from '../components/sponsors/Sponsors';
import Screen from '../components/screen/Screen';
import HomeAbout from '../components/homeAbout/HomeAbout';

export default function Home() {
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
      <AnimatedScrollButton
        onClick={() =>
          document.getElementById('scrolled-to').scrollIntoView()
        }
      />
      <div>
        <BigReveal />
      </div>
      <BasicHero />
      <div id="scrolled-to" />
      <HomeAbout />
      <TechStackV2 />
      <Sponsors />
    </Screen>
  );
}
