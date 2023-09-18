import Image from 'next/image'
import styles from './basic-hero.module.css'
import ButtonV2 from '../buttonv2/ButtonV2'
import StyledTextV2 from '../StyledTextV2/StyledTextV2'
import SlidingComponent from '../SlidingComponent/Slider'

export default function BasicHero() {
    return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            <div className="text-center pb-12 md:pb-16">
                <div className="absolute opacity-30 transform translate-x-1/4 -translate-y-1/2 pointer-events-none" aria-hidden="true">
                    <Image 
                    className={styles.blobImage}
                    height="10000%"
                    width="10000%"
                    src="/betterblueblob.png"
                    alt="test"
                    />
                </div>
                <div className='relative z-10'> 
                    <StyledTextV2 text="Stem POTD" />
                </div>
                <div className="max-w-3xl mx-auto">
                    <p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="300">Poolesville&apos;s Olympiad Program?</p>
                    <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="600">
                        <ButtonV2>
                            <span className="flex items-center"> About Us </span>
                        </ButtonV2>
                        <div className='p-2 items-center'>
                            <ButtonV2>
                                <span className="flex items-center"> Join </span>
                            </ButtonV2>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        
        <SlidingComponent direction="right">
                    <div className="flex flex-col items-center justify-center" />
        </SlidingComponent>


    </div>
    )
  }