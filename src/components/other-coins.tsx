"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, History } from "swiper/modules";
import { SwiperSlide } from "swiper/react";
import { Swiper } from "swiper/react";

function OtherCoins() {
  const [data, setData] = useState<any>([]);
  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3//search/trending?x_cg_demo_api_key=CG-5ePeUjZUKLcVM3XXRtWdGqW2`
      )
      .then((res) => {
        let coins = res.data.coins;
        setData(coins);
      });
  }, []);
  return (
    <>
      {/* {data.length} */}
      <div className="flex flex-col py-6 pb-8">
        <div className=" text-2xl font-semibold leading-9 text-neutral-800 w-full">
          You May Also Like
        </div>
        <div className="flex  px-5 mt-5 gap-4 max-md:flex-wrap w-full">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            navigation={true}
            pagination={true}
            breakpoints={{
              600: { slidesPerView: 2 },
              850: { slidesPerView: 3 },
              900: { slidesPerView: 5 },
            }}
            modules={[Navigation, Pagination, History]}
            className="mySwiper"
          >
            {data?.map((coin: any) => {
              return (
                <>
                  <SwiperSlide>
                    <div className="flex gap-1.5 justify-between py-4 pr-4 rounded-xl border border-solid border-gray-100 w-12/12">
                      <div className="flex flex-col px-2 w-full py-0.5">
                        <div className="flex gap-2 items-center w-2/12">
                          <img src={coin.item.thumb} height={10} alt="" />
                          <h1>{coin.item.name.slice(0, 15)}</h1>
                          {coin.item.data.price_change_percentage_24h.aed <
                            0 && (
                            <div className="px-3 rounded-lg py-1 bg-red-400 text-sm text-white">
                              {Math.round(
                                coin.item.data.price_change_percentage_24h.aed *
                                  100
                              ) / 100}
                              %
                            </div>
                          )}
                          {coin.item.data.price_change_percentage_24h.aed >
                            0 && (
                            <div className="px-3 rounded-lg py-1 bg-green-400 text-sm text-white">
                              {Math.round(
                                coin.item.data.price_change_percentage_24h.aed *
                                  100
                              ) / 100}
                              %
                            </div>
                          )}
                        </div>
                        <div className="mt-3 text-xl font-medium leading-6 text-neutral-900 text-start">
                          {coin.item.data.price}
                        </div>
                        <img
                          src={`${coin.item.data.sparkline}`}
                          className="self-center max-w-full aspect-[2.33] w-full"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                </>
              );
            })}
          </Swiper>
        </div>
        <div className=" text-2xl font-semibold leading-9 text-neutral-800 mt-6 w-full">
          Trending Coins
        </div>
        <div className="flex  px-5 mt-5 gap-4 max-md:flex-wrap w-full">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            navigation={true}
            pagination={true}
            breakpoints={{
              600: { slidesPerView: 2 },
              850: { slidesPerView: 3 },
              900: { slidesPerView: 5 },
            }}
            modules={[Navigation, Pagination, History]}
            className="mySwiper"
          >
            {data?.slice(5)?.map((coin: any) => {
              return (
                <>
                  <SwiperSlide>
                    <div className="flex gap-1.5 justify-between py-4 pr-4 rounded-xl border border-solid border-gray-100 w-12/12">
                      <div className="flex flex-col px-2 w-full py-0.5">
                        <div className="flex gap-2 items-center w-2/12">
                          <img src={coin.item.thumb} height={10} alt="" />
                          <h1 className="w-28">
                            {coin.item.name.slice(0, 15)}
                          </h1>
                          {coin.item.data.price_change_percentage_24h.aed <
                            0 && (
                            <div className="px-3 rounded-lg py-1 bg-red-400 text-sm text-white">
                              {Math.round(
                                coin.item.data.price_change_percentage_24h.aed *
                                  100
                              ) / 100}
                              %
                            </div>
                          )}
                          {coin.item.data.price_change_percentage_24h.aed >
                            0 && (
                            <div className="px-3 rounded-lg py-1 bg-green-400 text-sm text-white">
                              {Math.round(
                                coin.item.data.price_change_percentage_24h.aed *
                                  100
                              ) / 100}
                              %
                            </div>
                          )}
                        </div>
                        <div className="mt-3 text-xl font-medium leading-6 text-neutral-900 text-start">
                          {coin.item.data.price}
                        </div>
                        <img
                          src={`${coin.item.data.sparkline}`}
                          className="self-center max-w-full aspect-[2.33] w-full"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                </>
              );
            })}
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default OtherCoins;
