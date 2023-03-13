import React from "react";
import { useInView } from "react-intersection-observer";
import star from "../../assets/star.png";

function AboutMe() {
  const [ref1, inView1] = useInView({
    triggerOnce: false,
    rootMargin: "-15% 0px",
  });
  const [ref2, inView2] = useInView({
    triggerOnce: false,
    rootMargin: "-15% 0px",
  });

  const getTheAnimationStyle = (inView, isLeft: boolean, duration = 0.9) => {
    return {
      transform: inView
        ? "translateX(0)"
        : `translateX(${isLeft ? "-20%" : "20%"})`,
      opacity: inView ? 1 : 0,
      transition: `all ${duration}s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s`,
    };
  };

  return (
    <div className="grid grid-flow-row place-items-center">
      <div className="text-2xl text-white justify-center text-center pt-8">
        About Me
      </div>
      <div className="vl"></div>
      <div
        ref={ref1}
        className="text-center pt-8"
        style={getTheAnimationStyle(inView1, true)}
      >
        It is the start of my journey
      </div>
      <div>
        <img className="z-10 pt-7" width="60vw" src={star}></img>
      </div>
      <div
        ref={ref2}
        className=" flex flex-row h-96 place-items-center justify-items-center"
      >
        <div style={getTheAnimationStyle(inView2, true)} className="w-1/2">
          <h1 className="text-white text-3xl text-center ">
            My Academically Life
          </h1>
          <p className="pt-10">
            During my secondary school years, I excelled academically, achieving
            top grades in Physics, Mathematics, Economics, and ICT. I earned a
            total of 29 Best 5 scores in the Hong Kong Diploma of Secondary
            Education (DSE) exam. These achievements helped me secure admission
            to the prestigious Hong Kong University of Science and Technology
            (HKUST), where I pursued a Bachelor's degree in Mathematics and
            Economics. I am proud of my academic accomplishments and have
            developed a strong work ethic that has carried over into my
            professional career. My passion for learning and dedication to
            excellence continue to drive me in all aspects of my life.
          </p>
        </div>
        <div
          style={{
            ...getTheAnimationStyle(inView2, false, 2.5),
            width: "100%",
          }}
          className="text-center w-1/2"
        >
          aaaaaaaaaaaaaaaaa
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
