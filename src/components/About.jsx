import React from "react";

const About = () => {
  return (
    <div name="about" className="h-screen w-full bg-gradient-to-bl from-[#0B6BBF] to-[#0455BF]">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-white">
        <div className="pb-6">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
        </div>
        <p className="text-xl mt-10">
        Hello Everyone! This is "Vivek Anand". I am a Full Stack Developer, especially a "MERN Stack Developer". 

        </p>

        <br />

        <p className="text-xl">
        I have been working as a freelancer for the last year.
        You need a website to be built for your business, work, portfolio etc. You can contact me by filling out the "Contact Form".
        </p>
      </div>
    </div>
  );
};

export default About;
