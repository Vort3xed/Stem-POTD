import Head from 'next/head';
import Screen from '../components/screen/Screen';
import StyledTextV2Small from '@/components/StyledTextV2Small/StyledTextV2';
import BasicGridImages from '@/components/gridGallery/BasicGridImages';
import Image from 'next/image';
import styles from './blob.module.css'

function About() {
  return (
    <Screen>
      
      <Head>
        <title>About Us</title>
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
      <section className="container-70 pt-28 md:pt-16 sm:pt-12">
        <div className="mt-12 mb-6 sm:mt-8 sm:mb-4">
          <StyledTextV2Small text="About Us"/>
          <div className="mt-6">
            <div className="absolute opacity-70 transform -translate-x-1/4 -translate-y-1/2 pointer-events-none" aria-hidden="true">
                    <Image 
                    className={styles.blobImage}
                    height="10000%"
                    width="10000%"
                    src="/betterblueblob.png"
                    alt="test"
                    />
                </div>
            <div className='relative z-10'>
            <p className="text-lg">
              Stem-POTD is a program to help students train for under-represented olympiads. We also let students gain research experience by letting them work on our big projects, 
              such as the satellite project.
            </p>
            </div>
          </div>
        </div>
        <div className="mt-20 mb-6 sm:mt-8 sm:mb-4">
          <StyledTextV2Small text="Operation"/>
          <div className="mt-6">
            <p className="text-lg">
              We hold meetings every week to continue working on the satellite project. We also hold meetings to create and upload content for olympiad preperation.
            </p>
          </div>
        </div>
        <div className="absolute opacity-70 transform translate-x-1/4 -translate-y-1/4 pointer-events-none" aria-hidden="true">
                    <Image 
                    className={styles.blobImage}
                    height="10000%"
                    width="10000%"
                    src="/betterblueblob.png"
                    alt="test"
                    />
                </div>
            <div className='relative z-10'>
        <BasicGridImages />
        </div>
      </section>
    </Screen>
  );
}

export default About;
