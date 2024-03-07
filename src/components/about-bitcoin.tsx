import { ArrowRight } from "lucide-react";
import React from "react";
// import card1 from "@/"
function AboutBitcoin() {
  return (
    <div className="flex flex-col px-6 pt-7 bg-white rounded-lg w-full max-md:px-5">
      <div className="text-2xl font-semibold leading-7 text-slate-900 max-md:max-w-full">
        About Bitcoin
      </div>
      <div className="mt-8 text-lg font-bold leading-5 text-slate-900 max-md:max-w-full">
        What is Bitcoin?
      </div>
      <div className="mt-2.5 text-base font-medium leading-7 text-zinc-700 max-md:max-w-full">
        Bitcoin’s price today is US$16,951.82, with a 24-hour trading volume of
        $19.14 B. BTC is +0.36% in the last 24 hours. It is currently -7.70%
        from its 7-day all-time high of $18,366.66, and 3.40% from its 7-day
        all-time low of $16,394.75. BTC has a circulating supply of 19.24 M BTC
        and a max supply of 21 M BTC.
      </div>
      <div className="shrink-0 mt-4 h-px border-b border-solid border-b-slate-300 border-b-opacity-60 max-md:max-w-full" />
      <div className="mt-4 text-lg font-bold leading-5 text-slate-900 max-md:max-w-full">
        Lorem ipsum dolor sit amet
      </div>
      <div className="mt-2.5 text-base font-medium leading-7 text-zinc-700 max-md:max-w-full">
        Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis
        tristique pharetra. Diam id et lectus urna et tellus aliquam dictum at.
        Viverra diam suspendisse enim facilisi diam ut sed. Quam scelerisque
        fermentum sapien morbi sodales odio sed rhoncus. Ultricies urna volutpat
        pendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien
        morbi sodales odio sed rhoncus. <br />
        <br />
        Diam praesent massa dapibus magna aliquam a dictumst volutpat. Egestas
        vitae pellentesque auctor amet. Nunc sagittis libero adipiscing cursus
        felis pellentesque interdum. Odio cursus phasellus velit in senectus
        enim dui. Turpis tristique placerat interdum sed volutpat. Id imperdiet
        magna eget eros donec cursus nunc. Mauris faucibus diam mi nunc praesent
        massa turpis a. Integer dignissim augue viverra nulla et quis lobortis
        phasellus. Integer pellentesque enim convallis ultricies at.
        <br />
        <br />
        Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa
        vel convallis duis ac. Mi adipiscing semper scelerisque porttitor
        pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum
        fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper
        dui
      </div>
      <div className="shrink-0 mt-4 h-px border-b border-solid border-b-slate-300 border-b-opacity-60 max-md:max-w-full" />
      <div className="mt-4 text-2xl font-semibold leading-7 text-slate-900 max-md:max-w-full">
        Already Holding Bitcoin?
      </div>
      <div className="mt-2 w-full">
        <div className="flex flex-col md:flex-row gap-5  ">
          <div className="px-3 bg-gradient-to-r from-[#79F1A4] to-[#0E5CAD] rounded-lg flex items-center w-full py-3 h-auto ">
            <img src="./card1.jpeg" className="h-24 w-24" alt="" />
            <div className="flex justify-start w-full   items-start flex-col pl-6">
              <h1 className="text-xl font-bold mb-3 text-white">
                Calculate your profit
              </h1>
              <button className="px-2 flex py-2 bg-white rounded-md">
                Check Now <ArrowRight className="ml-2" />
              </button>
            </div>
          </div>
          <div className="px-3 bg-gradient-to-r from-[#FF9865] to-[#EF3031] rounded-lg flex items-center w-full py-3 h-auto ">
            <img src="./card2.jpeg" className="h-24 w-24" alt="" />
            <div className="flex justify-start w-full   items-start flex-col pl-6">
              <h1 className="text-xl font-bold mb-3 text-white">
                Calculate your tax liability
              </h1>
              <button className="px-2 flex py-2 bg-white rounded-md">
                Check Now <ArrowRight className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="shrink-0 mt-4 h-px border-b border-solid border-b-slate-300 border-b-opacity-60 max-md:max-w-full" />
      <div className="mt-4 text-base font-medium leading-7 text-zinc-700 max-md:max-w-full">
        Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa
        vel convallis duis ac. Mi adipiscing semper scelerisque porttitor
        pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum
        fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper
        dui
        <br />
        <br />
      </div>
    </div>
  );
}

export default AboutBitcoin;
