import React, { useEffect, useState } from "react";
import logo from "./assets/platkey-logo.svg";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import Lottie from "lottie-react-web";
import classnames from "classnames";
import "./App.css";

import chrome from "./assets/chrome.png";
import edge from "./assets/edge.png";
import brave from "./assets/brave.png";
import safari from "./assets/safari.png";
import platkeyinterface from "./assets/interface.webp";
import platkeyssh from "./assets/ssh.webp";
import searchAnimation from "./assets/search-animation.json";
import greenboardAnimation from "./assets/greenboard-animation.json";

const Key = ({ children }: any) => {
  return (
    <>
      &nbsp;
      <div className="inline bg-blue border border-b-2 border-black py-1 px-2 rounded-md font-mono cursor-pointer">
        {children}
      </div>
      &nbsp;
    </>
  );
};

const extensionVariant = {
  visible: { opacity: 1, scale: 1 },
  hidden: { opacity: 0, scale: 0 },
};

type PlatKeyUIProps = {
  message: string;
};

const PlatKeyUI = (props: PlatKeyUIProps) => {
  const [interfaceRef, inView] = useInView();
  const control = useAnimation();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);
  return (
    <motion.div
      ref={interfaceRef}
      className="flex justify-center items-center platkey-interface-container"
      variants={extensionVariant}
      initial="hidden"
      animate={control}
    >
      <img
        src={platkeyinterface}
        alt="Interface of PlatKey"
        className="w-10/12 lg:w-[24rem] platkey-interface tracking-widest"
      />
      <div className="absolute flex flex-col justify-center items-center">
        <h3 className="text-white font-bold	text-3xl lg:text-[7rem] drop-shadow-xl">
          {props.message}
        </h3>
      </div>
    </motion.div>
  );
};

const APP_STORE_LINK = "https://apps.apple.com/app/platkey/id1659587636 ";
const CHROME_STORE_LINK =
  "https://chrome.google.com/webstore/detail/platkey/bdjedpeffgjikndcihipemgdinpcmpcf";

function App() {
  const { t } = useTranslation();
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  const featureClassNames =
    "flex flex-col justify-center items-center min-h-auto";

  const [keyPressed, setKeyPressed] = useState<string>("");

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();
      // If key pressed from a to e and from 1 to 5 set key pressed state to that key:
      if (key.match(/^[a-e1-5]$/)) {
        setKeyPressed(key);
      }
      // OR symbol: |
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div>
      <div className="min-h-screen w-full bg-gradient-to-b from-black to-darkblue flex flex-col items-center gap-y-5 justify-center">
        <div className="flex flex-col items-center lg:flex-row lg:gap-x-8">
          <div>
            <img
              src={logo}
              alt="Platkey logo"
              className="w-auto transition active:translate-y-1 cursor-pointer platkey-logo"
            />
          </div>
          <div className="flex flex-col px-4">
            <h1 className="text-white text-4xl text-center font-bold lg:text-left lg:w-[32rem] lg:text-5xl">
              {t("hero.message.normal")}
              <span className="underline decoration-green decoration-3 underline-offset-4">
                {t("hero.message.underline")}
              </span>
            </h1>
            <h3 className="text-green text-4xl font-semibold lg:pt-3 text-center lg:text-left pt-4">
              PlatKey <span className="font-light hidden sm:inline">3.0</span>
            </h3>
          </div>
        </div>
        <div className="flex flex-col w-full px-4 gap-y-4 lg:flex-row-reverse lg:gap-x-4 lg:justify-center lg:pt-8">
          <a
            href={isSafari ? APP_STORE_LINK : CHROME_STORE_LINK}
            target="_blank"
            rel="noreferrer"
            className="bg-skyblue text-blue text-3xl text-center justify-center rounded-lg py-2 font-bold active:ring lg:px-12 flex"
          >
            {t("hero.message.install")}
          </a>
          <a
            href="#getting-started"
            className="border border-skyblue bg-darkblue text-skyblue text-2xl text-center rounded-lg py-2 lg:px-8 active:ring"
          >
            {t("hero.message.howitworks")}
          </a>
        </div>
        <div className="hidden lg:flex lg:flex-col items-center pt-6 gap-y-5">
          <p className="text-white text-xl">{t("hero.message.available")}</p>
          <div className="flex gap-x-8">
            <img
              src={chrome}
              alt="Google Chrome"
              className="w-12 transition hover:scale-110"
            />
            <img
              src={edge}
              alt="Microsoft Edge"
              className="w-12 transition hover:scale-110"
            />
            <img
              src={brave}
              alt="Brave"
              className="w-12 transition hover:scale-110"
            />
            <img
              src={safari}
              alt="Apple Safari"
              className="w-12 transition hover:scale-110"
            />
          </div>
        </div>
      </div>
      {/*  */}
      <div className="min-h-screen bg-darkblue px-4 flex justify-center">
        <div className="flex flex-col gap-y-[16vh] py-[16vh] lg:pt-[2vh] lg:pb-[26vh]">
          <PlatKeyUI message={t("hero.message.big")} />
          <div className="">
            <h2
              className="text-white font-bold text-4xl lg:text-6xl text-center lg:pt-24"
              id="getting-started"
            >
              {t("hero.message.howitworks")}
            </h2>
          </div>
          <div className={featureClassNames}>
            <h3 className="text-green font-semibold text-3xl lg:text-4xl text-center">
              {t("feature.shortcuts.title")}
            </h3>
            <div className="flex flex-col gap-y-5 py-10 items-center">
              <p className="text-white inline text-2xl text-center">
                {t("feature.shortcuts.message")}
              </p>
              <p className="text-white inline text-2xl text-center">
                {t("feature.shortcuts.instruction.01")} <Key>1</Key>{" "}
                {t("feature.shortcuts.instruction.02")} <Key>2</Key>{" "}
                {t("feature.shortcuts.instruction.03")} <Key>3</Key>,{" "}
                <Key>4</Key> {t("feature.shortcuts.instruction.04")}{" "}
                <Key>5</Key>...
              </p>
              <p className="text-white inline text-2xl text-center">
                {t("feature.shortcuts.instruction.05")} <Key>a</Key>,{" "}
                <Key>b</Key>, <Key>c</Key>, <Key>d</Key>, <Key>e</Key>.
              </p>
              <div className="flex flex-col gap-y-3 w-full text-xl">
                <div className="rounded-lg flex text-white border border-[#637b9d]">
                  <div
                    className={classnames("rounded-l-lg p-3", {
                      "bg-skyblue text-[#24385b]":
                        keyPressed === "a" || keyPressed === "1",
                      "bg-[#24385b]": keyPressed !== "a" && keyPressed !== "1",
                    })}
                  >
                    <p>a</p>
                  </div>
                  <div className="p-2 pl-6 flex items-center">
                    <p>Try press A, B or C right now</p>
                  </div>
                </div>
                <div className="rounded-lg flex text-white border border-[#637b9d]">
                  <div
                    className={classnames("rounded-l-lg p-3", {
                      "bg-skyblue text-[#24385b]":
                        keyPressed === "b" || keyPressed === "2",
                      "bg-[#24385b]": keyPressed !== "b" && keyPressed !== "2",
                    })}
                  >
                    <p>b</p>
                  </div>
                  <div className="p-2 pl-6 flex items-center">
                    <p>Intenta y presiona A, B o C ahora mismo</p>
                  </div>
                </div>
                <div className="rounded-lg flex text-white border border-[#637b9d]">
                  <div
                    className={classnames("rounded-l-lg p-3", {
                      "bg-skyblue text-[#24385b]":
                        keyPressed === "c" || keyPressed === "3",
                      "bg-[#24385b]": keyPressed !== "c" && keyPressed !== "3",
                    })}
                  >
                    <p>c</p>
                  </div>
                  <div className="p-2 pl-6 flex items-center">
                    <p>This is how the options look like</p>
                  </div>
                </div>
                <div className="rounded-lg flex text-white border border-[#637b9d]">
                  <div
                    className={classnames("rounded-l-lg p-3", {
                      "bg-skyblue text-[#24385b]":
                        keyPressed === "d" || keyPressed === "4",
                      "bg-[#24385b]": keyPressed !== "d" && keyPressed !== "4",
                    })}
                  >
                    <p>d</p>
                  </div>
                  <div className="p-2 pl-6 flex items-center">
                    <p>Así lucen las opciones</p>
                  </div>
                </div>
                <div className="rounded-lg flex text-white border border-[#637b9d]">
                  <div
                    className={classnames("rounded-l-lg p-3", {
                      "bg-skyblue text-[#24385b]":
                        keyPressed === "e" || keyPressed === "5",
                      "bg-[#24385b]": keyPressed !== "e" && keyPressed !== "5",
                    })}
                  >
                    <p>e</p>
                  </div>
                  <div className="p-2 pl-6 flex items-center">
                    <p>Is it awesome?</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={featureClassNames}>
            <h3 className="text-green font-semibold text-3xl lg:text-4xl text-center">
              {t("feature.greenboard.title")}
            </h3>
            <div className="flex flex-col gap-y-5 py-10">
              <p className="text-white inline text-2xl text-center">
                {t("feature.greenboard.message")}{" "}
                <span className="underline decoration-green decoration-3 underline-offset-4">
                  Greenboard
                </span>
                . {t("feature.greenboard.instruction.01")}
              </p>
              <Lottie
                options={{
                  animationData: greenboardAnimation,
                }}
              />
            </div>
          </div>
          <div className={featureClassNames}>
            <h3 className="text-green font-semibold text-3xl lg:text-4xl text-center">
              {t("feature.spotlight.title")}
            </h3>
            <div className="flex flex-col gap-y-5 py-10">
              <p className="text-white inline text-2xl text-center">
                {t("feature.spotlight.message")}
              </p>
              <Lottie
                options={{
                  animationData: searchAnimation,
                }}
              />
              <p className="text-white inline text-2xl text-center">
                {t("feature.spotlight.instruction.01")} <Key>Ctrl</Key>+
                <Key>K</Key> {t("feature.spotlight.instruction.02")}{" "}
                <Key>Cmd</Key>+<Key>K</Key>{" "}
                {t("feature.spotlight.instruction.03")}
              </p>
            </div>
          </div>
          <div className={featureClassNames}>
            <h3 className="text-green font-semibold text-3xl lg:text-4xl text-center">
              {t("feature.classes.title")}
            </h3>
            <div className="flex flex-col gap-y-5 py-10">
              <p className="text-white inline text-2xl text-center">
                {t("feature.classes.instruction.01")} <Key>Ctrl</Key>+
                <Key>B</Key> o <Key>Cmd</Key>+<Key>B</Key>{" "}
                {t("feature.classes.instruction.03")}
              </p>
              <p className="text-white inline text-2xl text-center">
                {t("feature.classes.instruction.01")} <Key>Shift</Key>
                <Key>⬅</Key> {t("feature.classes.instruction.04")}
              </p>
              <p className="text-white inline text-2xl text-center">
                {t("feature.classes.instruction.01")} <Key>Shift</Key>
                <Key>➡️</Key> {t("feature.classes.instruction.05")}
              </p>
            </div>
          </div>
          <div className={featureClassNames}>
            <h3 className="text-green font-semibold text-3xl lg:text-4xl text-center">
              {t("feature.mode.title")}
            </h3>
            <div className="flex flex-col gap-y-5 py-10">
              <p className="text-white inline text-2xl text-center">
                {t("feature.mode.message")}
              </p>
              <img
                src={platkeyssh}
                alt="Interface of PlatKey SSH mode"
                className="rounded-lg lg:w-[60rem]"
              />
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-black p-4">
        <div className="flex flex-row justify-center gap-x-[2rem]">
          <a
            className="text-green hover:underline"
            href="https://github.com/360macky/platkey"
          >
            {t("footer.githubrepository")}
          </a>
          <a
            className="text-green hover:underline"
            href="https://github.com/360macky/platkey/issues"
          >
            {t("footer.issues")}
          </a>
          <a
            className="text-green hover:underline"
            href="https://github.com/360macky/platkey#-contributing"
          >
            {t("footer.contributions")}
          </a>
        </div>
        <div className="flex flex-row p-4 justify-center">
          <p className="text-white text-center max-w-[42rem]">
            {t("footer.disclaimer")}
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
