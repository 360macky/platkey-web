import React from "react";
import { useTranslation } from "react-i18next";

const Love = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen w-full bg-gradient-to-t from-black to-darkblue flex flex-col justify-center gap-y-16 text-center">
      <div className="flex flex-col gap-y-4">
        <h1 className="text-4xl text-white text-center font-bold">
          <span role={"img"}>💚</span> Did you like PlatKey?
        </h1>
        <p className="text-white text-xl">
          If so, you can tweet about this project!
        </p>
        <div>
          <a
            href="https://twitter.com/intent/tweet?text=Me encanta esta extensión&url=https://platkey.dev&hashtags=platzi,chrome"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-skyblue active:ring text-darkblue font-bold py-2 px-6 rounded-lg text-xl"
          >
            Tweet
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-y-4">
        <h1 className="text-4xl text-white text-center font-bold">
          <span role={"img"}>🚀</span> Do you want to write feedback for
          PlatKey?
        </h1>
        <p className="text-white text-xl">
          Ideas, feedback, and code contributions are always welcome!
        </p>
        <div>
          <a
            href="https://tally.so/r/waOBvb"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue active:ring text-skyblue font-bold py-2 px-6 rounded-lg text-xl"
          >
            Give Feedback
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-y-4">
        <h1 className="text-4xl text-white text-center font-bold">
          <span role={"img"}>😥</span> Did you have a problem with PlatKey?
        </h1>
        <p className="text-white text-xl">
          Report something that is not working on your extension
        </p>
        <div>
          <a
            href="https://tally.so/r/w7XdER"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue active:ring text-skyblue font-bold py-2 px-6 rounded-lg text-xl"
          >
            Report
          </a>
        </div>
      </div>
    </div>
  );
};

export default Love;
