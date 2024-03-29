import React from "react";

const About = () => {
  return (
    <div name="about" className="h-screen w-full bg-gradient-to-bl from-[#0B6BBF] to-[#0455BF]">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-white max-md:pt-[200px]">
        <div className="pb-6">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
        </div>


        <div className="bg-gray-900 w-full h-full rounded-lg overflow-y-auto">
          <div className="flex p-2 gap-1">
            <div className="">
              <span className="bg-red-500 inline-block center w-3 h-3 rounded-full"></span>
            </div>
            <div className="circle">
              <span className="bg-yellow-500 inline-block center w-3 h-3 rounded-full"></span>
            </div>
            <div className="circle">
              <span className="bg-green-500 box inline-block center w-3 h-3 rounded-full"></span>
            </div>
          </div>
          <div className="card__content text-white px-4">
            <p className="text-xl mt-10">
              Hello Everyone! This is "Vivek Anand". I am an aspiring Full Stack Developer, especially a "MERN Stack Developer".

            </p>

            <br />

            <p className="text-xl">
              As a seasoned Mechanical Engineer embarking on a transformative journey, I am fueled by a passion for innovation and a desire to blend the precision of engineering with the dynamic world of full-stack development. Currently, I’m learning the exciting realm of web development, my focus is on becoming a proficient MERN stack developer.
            </p>
            <br />
            <p className="text-xl">
              With a foundation rooted in mechanical engineering, I have a proven track record as a Workshop Manager at a Maruti Suzuki dealership. In this role, I honed my technical expertise while leading teams and streamlining workshop operations. This experience instilled in me the importance of efficiency, problem-solving, and effective project management.
            </p>
            <br />
            <p className="text-xl">
              Also, I contributed to the intricate world of engineering as an AutoCAD Draftsman under a contractor for Indian Oil. Here, attention to detail and precision were paramount, and I cultivated a keen eye for drafting complex designs.
            </p>
            <br />
            <p className="text-xl">
              Eager to expand my skill set and embrace the challenges of the digital landscape, I am currently immersing myself in the intricacies of full-stack web development. The MERN stack—MongoDB, Express.js, React.js, and Node.js — captivates me with its versatility and potential to create dynamic, user-centric applications.
            </p>
            <br />
            <p className="text-xl">
              By leveraging the skills acquired in diverse roles, I aim to contribute to innovative projects, bringing a unique perspective and a commitment to excellence.
            </p>
            <br />
            <p className="text-xl">
              Embracing continuous learning, I am excited about the limitless possibilities that lie ahead in my journey from a mechanical engineer to a versatile and forward-thinking MERN stack developer.
            </p>
          </div>
        </div>


      </div>
    </div>
  );
};

export default About;
