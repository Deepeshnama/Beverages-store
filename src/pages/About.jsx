import React from "react";

const About = () => {
  return (
    <>
      <div className="about bg-[#FF9FAC] flex items-center justify-center space-x-20 p-4 ">
        <div className="img">
          <img src="/about-us-image.png" alt="" />
        </div>

        <div className="text">
          <h1 className="text-red-700 text-4xl">
            Fresh Juice <br /> Shop{" "}
          </h1>

          <h1 className="text-4xl font-bold text-white">
            Summer <br /> Juice
          </h1>

          <h2>
            Lorem ipsum dolor sit amet <br />
            consectetur adipisicing <br />
            elit. Delectus porro consectetur fuga <br />
            obcaecati unde itaque quis neque magnam! <br />
            Laboriosam recusandae soluta perferendis
          </h2>
        </div>
      </div>

      {/* <Footer */}
    </>
  );
};

export default About;
