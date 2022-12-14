import Head from "next/head";
import Image from "next/image";
import KeyBoardIcon from "../components/KeyBoardIcon";
import keyboardIcon from "../public/keyboard-icon.svg"
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-screen bg-ray-dark">
      <Head>
        <title>RaySo Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* TODO: Add Main component */}
      <div className="text-white w-full h-[88px] px-[40px] pt-[30px] ">
        <div>
          <div className="flex  h-[58px] w-[190px] items-center">
          <button className="w-[180px] h-[34px] flex mr-[10px] justify-center flex-wrap items-center gap-2 rounded-md px-4 py-2 text-[13px] color-white font-inter bg-[#2b2b2b] hover:bg-[#424242]">
              <Image width={18} height={17} src={keyboardIcon} alt="keyboard" />
            Keyboard shortcuts
          </button>
          </div>
        </div>
      </div>
      <div className="w-full my-8 h-[590px]"></div>

      {/* TODO: Add Footer */}
    </div>
  );
}
