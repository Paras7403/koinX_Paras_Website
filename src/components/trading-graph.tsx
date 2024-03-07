// TradingViewWidget.jsx
"use strict";
import axios from "axios";
import { TrendingDown, TrendingUp } from "lucide-react";
import React, { useEffect, useRef, memo, useState } from "react";

function TradingViewWidget({ id }: any) {
  const container: any = useRef();

  const [bitCoin, setBitCoin] = useState<any>();
  const [bitCoinChange, setBitCoinChange] = useState<any>();
  console.log(id);

  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/${id?id:"bitcoin"}?x_cg_demo_api_key=CG-5ePeUjZUKLcVM3XXRtWdGqW2`
      )
      .then((res) => {
        setBitCoin(res.data);
      });
    axios
      .get(
        `https://api.coingecko.com/api/v3/simple/price?x_cg_demo_api_key=CG-5ePeUjZUKLcVM3XXRtWdGqW2&ids=${id?id:"bitcoin"}&vs_currencies=usd,inr&include_24hr_change=true`
      )
      .then((res) => {
        setBitCoinChange(res.data);
      });
  }, [id]);
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
        {
          "autosize": true,
          "symbol": "${bitCoin?.symbol ? bitCoin.symbol : "btc"}",
          "interval": "W",
          "timezone": "Etc/UTC",
          "theme": "light",
          "style": "1",
          "locale": "en",
          "enable_publishing": false,
          "allow_symbol_change": true,
          "calendar": true,
          "support_host": "https://www.tradingview.com"
        }`;
    container.current.appendChild(script);
  }, [bitCoin]);

  return (
    <>
      <div className="py-6 px-4 rounded-lg bg-white">
        <div className="flex gap-2 items-center">
          <img
            src={bitCoin?.image?.small}
            className="h-10 w-10 rounded-full"
            alt=""
          />
          <span className="text-xl font-medium">{bitCoin?.name}</span>
          <span>{id ? bitCoin?.symbol : "BTC"}</span>
        </div>
        <div className="mt-2 flex flex-col">
          <div className="flex gap-4 items-center">
            {" "}
            <span className="text-2xl font-medium">
              ${bitCoinChange?.bitcoin?.usd}{" "}
            </span>
            {bitCoinChange?.bitcoin?.usd_24h_change > 0 && (
              <div className="px-2 text-sm py-2 bg-green-300 rounded-lg flex fap-2">
                <TrendingUp className="h-4 w-4" />
                {Math.round(bitCoinChange?.bitcoin?.usd_24h_change * 100) / 100}
                %
              </div>
            )}
            {bitCoinChange?.bitcoin?.usd_24h_change < 0 && (
              <div className="px-2 text-sm py-2 bg-red-300 rounded-lg flex gap-2">
                <TrendingDown className="h-4 w-4" />
                {Math.round(bitCoinChange?.bitcoin?.usd_24h_change * 100) / 100}
                %
              </div>
            )}
            <span className="text-xm text-gray-600">(24H)</span>
          </div>
          <span className="text-sm font-medium">
            ₹{bitCoinChange?.bitcoin?.inr}
          </span>
        </div>
      </div>
      <div className="w-full h-[60vh] overflow-hidden" ref={container}>
        <a
          href="https://www.tradingview.com/"
          rel="noopener nofollow"
          target="_blank"
        ></a>
      </div>
    </>
  );
}

export default TradingViewWidget;
