"use client";
import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimate, AnimatePresence } from "framer-motion";
import MoreIcon from "@/public/assets/icons/more.svg";

const FloatingPlusBtn = ({ title }) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    amount: "all",
  });
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (!isInView) return;

    const animateButton = async () => {
      await animate(
        "button",
        { borderWidth: "20px" },
        { transition: { delay: 1 } }
      );
      animate("button", { borderWidth: "0px" });
    };
    animateButton();
  }, [isInView]);

  return (
    <div
      className="sticky bottom-0 flex justify-center items-center h-40 z-10"
      ref={sectionRef}
    >
      <div ref={scope}>
        <AnimatePresence>
          {isInView && (
            <motion.button
              className="backdrop-effect rounded-full border-[#016dda]"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                backgroundColor: "rgb(66 66 69/70%)",
                transition: {
                  opacity: {
                    duration: 1,
                    delay: 0,
                  },
                },
              }}
              exit={{
                opacity: 0,
                backgroundColor: "rgb(66 66 69/70%)",
                transition: {
                  opacity: {
                    duration: 0.3,
                    delay: 0.3,
                  },
                },
              }}
            >
              <div className="flex items-center p-2.5 min-h-[56px] min-w-[56px]">
                <motion.span
                  className="text-white overflow-hidden whitespace-nowrap font-semibold text-sm"
                  initial={{
                    opacity: 0,
                    width: 0,
                    marginInlineStart: "0px",
                    marginInlineEnd: "0px",
                  }}
                  animate={{
                    opacity: 1,
                    width: "auto",
                    marginInlineStart: "8px",
                    marginInlineEnd: "12px",
                    transition: {
                      delay: 1,
                    },
                  }}
                  exit={{
                    opacity: 0,
                    width: 0,
                    marginInlineStart: "0px",
                    marginInlineEnd: "0px",
                    transition: {
                      delay: 0,
                    },
                  }}
                >
                  {title}
                </motion.span>
                <motion.span
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{
                    scale: 1,
                    opacity: 1,
                    transition: {
                      duration: 0.3,
                      delay: 0.5,
                    },
                  }}
                  exit={{
                    scale: 0,
                    opacity: 0,
                    transition: {
                      duration: 0,
                      delay: 0,
                    },
                  }}
                  className=" bg-[#0071e3] rounded-full flex justify-center items-center text-white"
                >
                  <MoreIcon />
                </motion.span>
              </div>
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default FloatingPlusBtn;
