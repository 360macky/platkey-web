import React, { useEffect } from "react";
import logo from "./assets/platkey-logo.svg";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import "./App.css";

import chrome from "./assets/chrome.png";
import edge from "./assets/edge.png";
import brave from "./assets/brave.png";
import safari from "./assets/safari.png";
import firefox from "./assets/firefox.png";
import platkeyinterface from "./assets/interface.webp";

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
}

type PlatKeyUIProps = {
  message: string;
}

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
      <img src={platkeyinterface} alt="Interface of PlatKey" className="w-10/12 lg:w-[24rem] platkey-interface tracking-widest
" />
      <div className="absolute flex flex-col justify-center items-center">
        <h2 className="text-white font-bold	text-3xl lg:text-[7rem] drop-shadow-xl">{props.message}</h2>
      </div>
    </motion.div>
  )
}

function App() {
  const { t } = useTranslation();
  const handleInstall = () => {
    // TODO: Update isMac to isSafari browser.
    const isMac = window.navigator.userAgent.indexOf("Mac") !== -1;
    if (isMac) {
      window.open("https://www.apple.com/app-store/", "_blank");
    } else {
      window.open(
        "https://chrome.google.com/webstore/detail/platkey/bdjedpeffgjikndcihipemgdinpcmpcf",
        "_blank"
      );
    }
  };
  const featureClassNames =
    "flex flex-col justify-center items-center min-h-auto";

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
            <h2 className="text-green text-4xl font-semibold lg:pt-3 text-center lg:text-left pt-4">
              PlatKey <span className="font-light hidden sm:inline">3.0</span>
            </h2>
          </div>
        </div>
        <div className="flex flex-col w-full px-4 gap-y-4 lg:flex-row-reverse lg:gap-x-4 lg:justify-center lg:pt-8">
          <a
            href="/"
            className="bg-skyblue text-blue text-3xl text-center justify-center rounded-lg py-2 font-bold active:ring lg:px-12 flex"
            onClick={handleInstall}
          >
            Install
          </a>
          <a
            href="/"
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
              alt=""
              className="w-12 transition hover:scale-110"
            />
            <img
              src={edge}
              alt=""
              className="w-12 transition hover:scale-110"
            />
            <img
              src={brave}
              alt=""
              className="w-12 transition hover:scale-110"
            />
            <img
              src={safari}
              alt=""
              className="w-12 transition hover:scale-110"
            />
            <img
              src={firefox}
              alt=""
              className="w-12 transition hover:scale-110"
            />
          </div>
        </div>
      </div>
      {/*  */}
      <div className="min-h-screen bg-darkblue px-4 flex justify-center">
        <div className="flex flex-col gap-y-[16vh] py-[16vh] lg:pt-[2vh] lg:pb-[26vh]">
          <PlatKeyUI message={t("hero.message.big")} />
          <div className={featureClassNames}>
            <h2 className="text-green font-semibold text-3xl lg:text-4xl text-center">
              {t("feature.shortcuts.title")}
            </h2>
            <div className="flex flex-col gap-y-5 py-10">
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
            </div>
          </div>
          <div className={featureClassNames}>
            <h2 className="text-green font-semibold text-3xl lg:text-4xl text-center">
              {t("feature.greenboard.title")}
            </h2>
            <div className="flex flex-col gap-y-5 py-10">
              <p className="text-white inline text-2xl text-center">
                {t("feature.greenboard.message")}{" "}
                <span className="underline decoration-green decoration-3 underline-offset-4">
                  Greenboard
                </span>
                . {t("feature.greenboard.instruction.01")}
              </p>
            </div>
          </div>
          <div className={featureClassNames}>
            <h2 className="text-green font-semibold text-3xl lg:text-4xl text-center">
              {t("feature.spotlight.title")}
            </h2>
            <div className="flex flex-col gap-y-5 py-10">
              <p className="text-white inline text-2xl text-center">
                {t("feature.spotlight.instruction.01")} <Key>Ctrl</Key>+
                <Key>K</Key> {t("feature.spotlight.instruction.02")}{" "}
                <Key>Cmd</Key>+<Key>K</Key>{" "}
                {t("feature.spotlight.instruction.03")}
              </p>
            </div>
          </div>
          <div className={featureClassNames}>
            <h2 className="text-green font-semibold text-3xl lg:text-4xl text-center">
              {t("feature.classes.title")}
            </h2>
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
            <h2 className="text-green font-semibold text-3xl lg:text-4xl text-center">
              {t("feature.mode.title")}
            </h2>
            <div className="flex flex-col gap-y-5 py-10">
              <p className="text-white inline text-2xl text-center">
                {t("feature.mode.message")}
              </p>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-black p-4">
        <div className="flex flex-row justify-center gap-x-[2rem]">
          <a
            className="text-green hover:underline"
            href="https://github.com/360macky/platzikey"
          >
            {t("footer.githubrepository")}
          </a>
          <a
            className="text-green hover:underline"
            href="https://github.com/360macky/platzikey/issues"
          >
            {t("footer.issues")}
          </a>
          <a
            className="text-green hover:underline"
            href="https://github.com/360macky/platzikey#-contributing"
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
