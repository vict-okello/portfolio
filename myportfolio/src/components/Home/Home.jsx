import React from 'react';
import { motion } from 'framer-motion';

function Home() {
  return (
    <motion.div
      className="p-4 relative container mx-auto h-screen flex justify-center items-center"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <div className="flex flex-col md:flex-row md:justify-between md:gap-8">
        <div className="flex flex-col gap-8">
          <h1 className="mt-8 ml-0 pl-0 text-3xl md:text-5xl text-left">
            <span className="text-5xl text-black/50 font-bold">Hello, Victor Here.</span>
            <span className="text-5xl text-slate-600 font-bold"> Front-end Developer</span>
          </h1>
          <p className="mt-0 block text-3xl text-zinc-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quae repudiandae unde voluptas fugit debitis quibusdam, modi voluptates, ratione nam explicabo sapiente repellat doloremque, atque fugiat laborum sint laudantium possimus.
          </p>
        </div>
        <img
          className="w-full md:w-1/2 lg:w-1/3 flex justify-center items-center object-cover rounded-sm shadow-lg"
          src="https://images.pexels.com/photos/4439410/pexels-photo-4439410.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
      </div>
    </motion.div>
  );
}

export default Home;