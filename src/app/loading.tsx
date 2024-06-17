"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const variants = { show: { height: "100vh" }, hide: { height: 0, transition: { height: { duration: 1, delay: 1 } } } };

export default function Loading(): JSX.Element {
  return (
    <>
      <motion.div key={1} className="fixed z-[100] inset-x-0 mx-auto top-0 h-[100vh] w-[100vw] flex flex-col justify-center items-center gap-10 bg-[#db0b0b]" variants={variants} initial="show" animate="hide" exit="hide">
        <motion.svg
          width="100"
          height="100"
          fill="white"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { opacity: { duration: 1, delay: 0.5 } },
          }}
        >
          <path d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z">
            <animateTransform attributeName="transform" type="rotate" dur="0.75s" values="0 12 12;360 12 12" repeatCount="indefinite" />
          </path>
        </motion.svg>
      </motion.div>
      <motion.div key={0} className="fixed z-[99] inset-x-0 mx-auto top-0 h-[100vh] w-[100vw] bg-slate-300 " variants={variants} initial="show" animate="hide" exit="hide" transition={{ duration: 1, delay: 0.7 }}></motion.div>
    </>
  );
}
