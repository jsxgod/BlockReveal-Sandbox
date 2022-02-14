import { useState } from "react";
import { motion } from "framer-motion";

const BlockReveal = ({
  children,
  start = true,
  direction = "up",
  color = "black",
  delay = false
}) => {
  const [hideBlock, setHideBlock] = useState(false);

  const switchAnimation = () => {
    setHideBlock(true);
  };

  const determineCoordinates = () => {
    const result = {
      startTop: "100%",
      showTop: "0%",
      hideTop: "-100%",
      startLeft: "0%",
      showLeft: "0%",
      hideLeft: "0%"
    };
    switch (direction) {
      case "up":
        break;
      case "down":
        result.startTop = "-100%";
        result.showTop = "0%";
        result.hideTop = "100%";
        break;
      case "left":
        result.startLeft = "100%";
        result.showLeft = "0%";
        result.hideLeft = "-100%";
        result.startTop = "0%";
        result.showTop = "0%";
        result.hideTop = "0%";
        break;
      case "right":
        result.startLeft = "-100%";
        result.showLeft = "0%";
        result.hideLeft = "100%";
        result.startTop = "0%";
        result.showTop = "0%";
        result.hideTop = "0%";
        break;
      default:
        break;
    }
    return result;
  };

  const coordinates = determineCoordinates();

  const blockRevealVariants = {
    initial: {
      top: coordinates.startTop,
      left: coordinates.startLeft
    },
    show: {
      top: coordinates.showTop,
      left: coordinates.showLeft,
      transition: {
        ease: "circOut",
        duration: 0.4,
        delay: delay === true ? 1 : 0
      }
    },
    hide: {
      top: coordinates.hideTop,
      left: coordinates.hideLeft,
      transition: { ease: "circOut", duration: 0.4, delay: 0.15 }
    }
  };
  return (
    <div className="block-reveal-wrapper">
      {start && (
        <motion.div
          variants={blockRevealVariants}
          initial={"initial"}
          animate={hideBlock === false ? "show" : "hide"}
          onAnimationComplete={() => switchAnimation()}
          className="block-reveal"
          style={{ backgroundColor: color }}
        ></motion.div>
      )}{" "}
      <div className={`curtain ${hideBlock && "reveal"}`}>{children}</div>
    </div>
  );
};

export default BlockReveal;
