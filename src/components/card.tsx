import React from 'react'

function Card() {
  return (
    <div className="flex flex-col items-center  pt-8 pb-12 bg-blue-600 rounded-lg w-full">
      <div className="text-2xl font-bold leading-10 text-center text-white w-[268px]">
        Get Started with KoinX for FREE
      </div>
      <div className="self-stretch mt-3.5 text-sm font-medium leading-6 text-center text-zinc-100">
        With our range of features that you can equip for free, KoinX allows you
        to be more educated and aware of your tax reports.
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/5a9a9a94706a4828b96c3e4e76606bf3b05128e4de8b8d387a7d9c9ff3d9a7a6?"
        className="mt-10 max-w-full aspect-[1.08] w-[178px]"
      />
      <div className="flex flex-col justify-center px-6 py-2.5 mt-5 max-w-full text-base font-semibold leading-7 whitespace-nowrap bg-white rounded-lg text-slate-900 w-[237px]">
        <div className="flex gap-1.5 justify-between">
          <div className="grow">Get Started for FREE</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/78dc5afa5d7dfdc8c9e6cbca0331dad3e5fd80b43458ca9467625ec7cc34bc10?"
            className="my-auto w-5 aspect-square"
          />
        </div>
      </div>
    </div>
  )
}

export default Card