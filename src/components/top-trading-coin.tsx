import axios from "axios";
import { ChevronDown, ChevronUp, TrendingDown, TrendingUp } from "lucide-react";
import React, { useEffect, useState } from "react";

function TopTradingCoin() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3//search/trending?x_cg_demo_api_key=CG-5ePeUjZUKLcVM3XXRtWdGqW2`
      )
      .then((res) => {
        let coins = res.data.coins;
        setData(coins.slice(0, 3));
      });
  }, []);
  return (
    <>
      <div className="flex flex-col mt-6 p-6 text-base font-medium bg-white rounded-lg w-full">
        <div className="text-2xl font-semibold leading-7 text-slate-900">
          Trending Coins (24h)
        </div>
        {data?.map((coin: any) => {
          return (
            <>
              <div className="flex gap-5 justify-between mt-6 w-full whitespace-nowrap">
                <div className="flex gap-1.5 my-auto leading-[150%] text-slate-900">
                  <img
                    loading="lazy"
                    src={coin.item.thumb}
                    className="w-6 aspect-square rounded-full"
                  />
                  <div className="grow">{coin.item.name.slice(0, 25)}</div>
                </div>
                {coin.item.data.price_change_percentage_24h.aed > 0 && (
                  <div className="flex gap-2 justify-between px-2.5 py-1.5 text-center text-emerald-500 bg-emerald-50 rounded">
                   <TrendingUp/>
                    <div>{Math.round(coin.item.data.price_change_percentage_24h.aed*100)/100}</div>
                  </div>
                )}
                {coin.item.data.price_change_percentage_24h.aed < 0 && (
                  <div className="flex gap-2 justify-between px-2.5 py-1.5 text-center text-red-500 bg-red-50 rounded">
                    {<TrendingDown/>}
                    <div>{Math.round(coin.item.data.price_change_percentage_24h.aed*100)/100}</div>
                  </div>
                )}
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default TopTradingCoin;
