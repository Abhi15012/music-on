'use client'
import Link from "next/link"
import { Spotlight } from "./ui/Spotlight"
import { Button } from "./ui/moving-border"
const Hero = () => {
  return (
    <div className="h-auto md:h-[40rem] text-white w-full rounded-md flex flex-col justify-center items-center mx-auto  relative py-10 md:py-0 ">
    <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-30"
        fill="white"
      />
      <div>
        <div><h2 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">Master the art of Music</h2></div>
        <div><p  className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto"> Dive into our comprehensive music courses and transform your musical journey today. Whether you're a beginner or looking to refine your skills, join us to unlock your true potential.</p></div>
      </div>
      <div><Link href="/"><Button borderRadius="1.75rem"  className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800  "> exprole courses</Button></Link></div>
    </div>
  )
}

export default Hero
