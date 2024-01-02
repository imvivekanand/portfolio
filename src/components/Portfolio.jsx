import React from "react";
import flashcard from "../assets/portfolio/flashcard.jpg";
import sillyapp from "../assets/portfolio/thesillyapp.jpg";
import imagesearch from '../assets/portfolio/imagesearch.jpg'



const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: flashcard,
      demo: "https://transcendent-kitten-6d66d8.netlify.app/",
      code: "https://github.com/imvivekanand/AlmaBetter_Flashcard_Capstone_Project"
    },
    {
      id: 2,
      src: sillyapp,
      demo: "https://thesillyapp.netlify.app/",
      code: "https://github.com/imvivekanand/the_silly_app.git"
    },
    {
      id: 3,
      src: imagesearch,
      demo: "https://theimagesearch.netlify.app/",
      code: "https://github.com/imvivekanand/imagesearchreactapp.git"
    },
  ];

  return (
    <div
      name="portfolio"
      className="h-screen w-full bg-gradient-to-br from-[#0455BF] to-[#0B6BBF]"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-white max-md:pt-[400px]">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here.</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src,demo,code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="ProjectThumbnail"
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
              <a href={demo} rel="noreferrer">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" >
                  Demo
                </button>
                </a>
              <a href={code} rel="noreferrer">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
