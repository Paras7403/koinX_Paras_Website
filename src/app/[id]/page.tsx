"use client";
import AboutBitcoin from "@/components/about-bitcoin";
import TopBar from "@/components/navbar";
import OtherCoins from "@/components/other-coins";
import Performance from "@/components/performance";
import Sentiment from "@/components/sentiment";
import Teams from "@/components/teams";
import Tokenomics from "@/components/tokenomics";
import TopTradingCoin from "@/components/top-trading-coin";
import TradingGraph from "@/components/trading-graph";
import { Card } from "@nextui-org/react";
import React from "react";

function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  return (
    <>
      <TopBar />
      <h1 className="text-center text-xl font-bold mt-5">
        Created by -{" "}
        <a className="text-blue-600" href="https://t.me/Oahelp4all">
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
            <TradingGraph id={id} />
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

export default Page;
