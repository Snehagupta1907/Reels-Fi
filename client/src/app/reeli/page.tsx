"use client";
import React from 'react'
import ReelsVideoCard from "@/components/ReelsPlayerCard/index";
import { reelsData } from "@/utils/reelsData";
import { motion } from "framer-motion";

const ReeliPage = () => {
  return (
    <>
   <div className='min-h-screen bg-dark-3 w-full'> <motion.div>
      <div className="lg:max-w-4xl min-h-screen bg-dark-3 space-y-10 md:p-3 lg:mx-auto mb-8">
        <div className="h-full w-full bg-transparent flex items-center justify-center">
          <div className="max-w-[400px] h-full md:h-auto w-full overflow-y-scroll snap-y aspect-[9/16] shadow-lg md:rounded">
            {reelsData?.map((video) => (
              <ReelsVideoCard key={video?.id} video={video} />
            ))}
          </div>
        </div>
      </div>
    </motion.div></div>
    
    </>
  )
}

export default ReeliPage