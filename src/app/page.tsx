"use client";
import AboutBitcoin from "@/components/about-bitcoin";
import Card from "@/components/card";
import TopBar from "@/components/navbar";
import OtherCoins from "@/components/other-coins";
import Performance from "@/components/performance";
import Sentiment from "@/components/sentiment";
import Teams from "@/components/teams";
import Tokenomics from "@/components/tokenomics";
import TopTradingCoin from "@/components/top-trading-coin";
import TradingGraph from "@/components/trading-graph";
import { Button } from "@nextui-org/react";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <TopBar />
      <h1 className="text-center text-xl font-bold mt-5">
        Created by -{" "}
        <a className="text-blue-600" href="https://paras7403.netlify.app/">
          Click Here
        </a>{" "}
      </h1>
      <div className="w-11/12  gap-3 mx-auto  my-6">
        <p className="flex my-6">
          Cryptocurrencies &gt;&gt;{" "}
          <span className="font-bold text-black">Bicoin</span>
        </p>
        <div className="w-full flex gap-4">
          <div className="lg:w-9/12 w-full  ">
            <TradingGraph />
            <Performance />
            <Sentiment />
            <AboutBitcoin />
            <Tokenomics />
            <Teams />
          </div>
          <div className="hidden lg:block lg:w-3/12  ">
            <Card />
            <TopTradingCoin />
          </div>
        </div>
      </div>
      <div className="w-full my-2 bg-white">
        <div className="w-11/12 mx-auto mt-6">
          <OtherCoins />
        </div>
      </div>
    </>
  );
}
