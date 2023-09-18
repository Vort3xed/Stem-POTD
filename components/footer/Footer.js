import Link from 'next/link';
import StyledTextV2Small from '../StyledTextV2Small/StyledTextV2';
import Styles from './Footer.module.css';
import Image from 'next/image';

function Footer() {
  return (
    <footer className={`${Styles.footer} container-70`}>
      <StyledTextV2Small text="Get In Touch" />

      <div className={Styles.linksContainer}>
        <div className="flex-2 md:flex-1">
          <div className="mb-3 flex flex-col">
            <h3 className="text-2xl">Email</h3>
            <h4 className="text-lg font-extralight">
              <a href="mailto:contact@stempotd.org">contact@stempotd.org</a>
            </h4>
          </div>
          <div className="my-3 flex flex-col">
            <h3 className="text-2xl">Social Media</h3>
            <h4 className="text-lg font-extralight">
              <a href="https://www.instagram.com/stempotd/" target="_blank" rel='noreferrer'>www.instagram.com/stempotd/</a> <br />
              <a href="https://github.com/stempotd" target="_blank" rel='noreferrer'>github.com/stempotd</a> <br />
            </h4>
          </div>
        </div>
        <div className="flex-4 md:flex-1 md:mx-4 sm:mx-0 sm:mt-8">
          <h3 className="text-2xl">Other Pages</h3>
          <Link href="/about">
            <a className="pl-1 block text-lg my-1 font-extralight">About Us</a>
          </Link>
          <Link href="/teams">
            <a className="pl-1 block text-lg my-1 font-extralight">Team</a>
          </Link>
          <Link href="/events">
            <a className="pl-1 block text-lg my-1 font-extralight">Events</a>
          </Link>
        </div>
        <div className="flex-4 md:flex-1 sm:mt-8">
          <h3 className="text-2xl">Get Help</h3>
          <a
            href="https://docs.google.com/forms/"
            className="block pl-1 text-lg my-1 font-extralight"
            target="_blank"
            rel="noreferrer"
          >
            Join Us
          </a>
          <Link href="/faqs">
            <a className="block pl-1 text-lg my-1 font-extralight">FAQs</a>
          </Link>
          <Link href="/contact">
            <a className="pl-1 block text-lg my-1 font-extralight">
              Contact Us
            </a>
          </Link>
        </div>
      </div>

      <div className={Styles.copyrightBottom}>
        <h6>
          © {new Date().getFullYear()} Stem POTD. All rights
          reserved.
        </h6>
        <h6 className="flex items-center">
          Crafted with&nbsp;<span className="text-2xl">♥</span>&nbsp;by Agneya Tharun
        </h6>
        <div className="absolute opacity-70 transform translate-x-2/4 -translate-y-1/4 pointer-events-none" aria-hidden="true">
          <Image
            className={Styles.blobImage}
            height="1000%"
            width="1000%"
            src="/betterblueblob.png"
            alt="test"
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
