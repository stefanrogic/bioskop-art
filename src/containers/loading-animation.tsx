import { motion } from "framer-motion";

function LoadingAnimation(): JSX.Element {
  return (
    <>
      <motion.div
        key={0}
        className="fixed z-[99] bg-slate-300 h-[100vh] w-[100%]"
        initial={{ height: "100vh" }}
        animate={{
          height: 0,
          transitionEnd: {
            display: "none",
          },
        }}
        transition={{ duration: 1, delay: 3.5 }}
      ></motion.div>
      <motion.div
        key={1}
        className="fixed z-[100] flex flex-col justify-center items-center gap-10 bg-[#db0b0b] h-[100vh] w-[100%]"
        initial={{ height: "100vh" }}
        animate={{
          height: 0,
          transitionEnd: {
            display: "none",
          },
        }}
        transition={{ duration: 1, delay: 3 }}
      >
        <motion.h1 className="text-7xl font-light text-white" initial={{ opacity: 1 }} animate={{ opacity: 0 }} transition={{ duration: 1, delay: 2 }}>
          <span className="font-bold">CINEMA CITY</span> UŽICE
        </motion.h1>
        <motion.div
          className="w-[60%] p-2 min-h-20 border-4 border-white"
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transitionEnd: {
              display: "none",
            },
          }}
          transition={{ duration: 1, delay: 2 }}
        >
          <motion.div
            className="bg-white h-full"
            initial={{ width: 0 }}
            animate={{
              width: "100%",
              transitionEnd: {
                display: "none",
              },
            }}
            transition={{ duration: 2 }}
          ></motion.div>
        </motion.div>
      </motion.div>
    </>
  );
}

export { LoadingAnimation };
