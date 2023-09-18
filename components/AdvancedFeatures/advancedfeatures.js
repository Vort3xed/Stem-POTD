import StyledTextV2Small from "../StyledTextV2Small/StyledTextV2";
import Card from "../TimeLine/Card";
import TimelineData from "../../lib/data/TimelineData";

const { useScroll, useTransform, motion } = require("framer-motion");
const { useRef } = require("react");
const { stylesWithCssVar } = require("../motion/motion");

function AdvFeatures() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.9, 1], [0.8, 0.8, 1]);
  const x = useTransform(scrollYProgress, [0.3, 1], ["50%", "0%"]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.5, 0.6, 0.85, 0.9],
    [1, 1, 0.4, 0.4, 1]
  );

  const text1Opacity = useTransform(
    scrollYProgress,
    [0.3, 0.4, 0.5],
    [0, 1, 0]
  );
  const text1Y = useTransform(
    scrollYProgress,
    [0.3, 0.4, 0.5],
    ["30px", "0px", "-30px"]
  );

  const text2Opacity = useTransform(
    scrollYProgress,
    [0.5, 0.6, 0.7],
    [0, 1, 0]
  );
  const text2Y = useTransform(
    scrollYProgress,
    [0.5, 0.6, 0.7],
    ["30px", "0px", "-30px"]
  );

  const text3Opacity = useTransform(
    scrollYProgress,
    [0.7, 0.8, 0.9],
    [0, 1, 0]
  );
  const text3Y = useTransform(
    scrollYProgress,
    [0.7, 0.8, 0.9],
    ["30px", "0px", "-30px"]
  );

  return (
    <>
      <section
        ref={targetRef}
        className="flex h-[500vh] flex-col items-center justify-start"
      >
        <div className="sticky top-[16.7vh] h-[66.8vh] px-16 text-2xl leading-[1] text-white [&_p]:w-[45rem] [&_p]:max-w-[90%]">
          <motion.div style={{ x, scale }} className="relative h-full">
            <motion.figure style={{ opacity }} className="h-full">
            <img className="h-full w-auto" src="/gallery/gallery1.jpg" alt="compteam" />
            </motion.figure>
            <motion.figure style={{ opacity: text2Opacity }}>
            <img className="absolute inset-0 h-full w-auto" src="/gallery/gallery1.jpg" alt="compteam" />
            </motion.figure>
            <motion.figure style={{ opacity: text3Opacity }}>
            <img className="absolute inset-0 h-full w-auto" src="/gallery/gallery1.jpg" alt="compteam" />
            </motion.figure>
          </motion.div>
          <motion.p
            style={stylesWithCssVar({
              opacity: text1Opacity,
              "--y": text1Y,
            })}
            className="translate-y-centered-offset absolute top-1/2 left-0"
          >
            {/* <span className="text-primary">Preconfigured environments</span>
            <br />
            We detect your environment so you don't need to fiddle with
            configuration files. */}
            <h1>Phase 1</h1>
            <p>Design, Plan, Delegate, Calculate</p>
          </motion.p>
          <motion.p
            style={stylesWithCssVar({
              opacity: text2Opacity,
              "--y": text2Y,
            })}
            className="translate-y-centered-offset absolute top-1/2 left-0"
          >
            {/* <span className="text-primary">Command Palette</span>
            <br />
            Access and complete any action in seconds with the command palette. */}
            <h1>Phase 2</h1>
            <p>Research, Build, Program</p>
          </motion.p>
          <motion.p
            style={stylesWithCssVar({
              opacity: text3Opacity,
              "--y": text3Y,
            })}
            className="translate-y-centered-offset absolute top-1/2 left-0"
          >
            {/* <span className="text-primary">Devtools</span>
            <br />
            We've bundled useful tools to help you get your work done faster and
            more efficiently. */}
            <h1>Phase 3</h1>
            <p>Finalize, Test, Launch</p>
          </motion.p>
        </div>
      </section>

      <section className="py-10 sm:py-20">
        <div className="text-center pb-12 md:pb-16">
            <StyledTextV2Small text="Project Timeline" />
        </div>
        <div className="py-10 sm:py-20 rounded-lg bg-5eece1 p-2">
          {TimelineData.reverse().map((item, index) => (
            // eslint-disable-next-line
            <Card key={index} index={index} data={item} length={TimelineData.length} />
          ))}
        </div>
      </section>
    </>
  );
}

// module.exports = AdvFeatures;
export default AdvFeatures;
