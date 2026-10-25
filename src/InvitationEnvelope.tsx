import { useState } from "react";
import { motion } from "motion/react";
import "./InvitationEnvelope.css";

interface InvitationEnvelopeProps {
  onOpen: () => void;
}

function InvitationEnvelope({ onOpen }: InvitationEnvelopeProps) {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpen = () => {
    if (isOpening) return;

    setIsOpening(true);

    window.setTimeout(() => {
      onOpen();
    }, 1500);
  };

  return (
    <motion.main
      className="envelope-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="cover-frame">
        {/* Left floral panel */}
        <motion.div
          className="invitation-panel invitation-panel-left"
          animate={isOpening ? { x: "-105%" } : { x: 0 }}
          transition={{
            duration: 1.05,
            delay: isOpening ? 0.45 : 0,
            ease: [0.76, 0, 0.24, 1],
          }}
        >
          <img src="/images/invitation-left.png" alt="" draggable="false" />
        </motion.div>

        {/* Right floral panel */}
        <motion.div
          className="invitation-panel invitation-panel-right"
          animate={isOpening ? { x: "105%" } : { x: 0 }}
          transition={{
            duration: 1.05,
            delay: isOpening ? 0.45 : 0,
            ease: [0.76, 0, 0.24, 1],
          }}
        >
          <img src="/images/invitation-right.png" alt="" draggable="false" />
        </motion.div>

        {/* The ribbon and bow */}
        <div className="ribbon-layer">
          <div
            className={`ribbon-band ${isOpening ? "ribbon-band-falling" : ""}`}
          />

          <motion.button
            type="button"
            className="bow-button"
            onClick={handleOpen}
            disabled={isOpening}
            aria-label="Open Anjali and Kunal's wedding invitation"
            animate={
              isOpening
                ? {
                    x: 0,
                    y: 180,
                    opacity: 0,
                    rotate: 8,
                  }
                : {
                    x: 0,
                    y: 0,
                    opacity: 1,
                    rotate: 0,
                  }
            }
            transition={{
              duration: 0.65,
              ease: [0.65, 0, 0.35, 1],
            }}
            whileHover={!isOpening ? { scale: 1.04 } : undefined}
            whileTap={!isOpening ? { scale: 0.97 } : undefined}
          >
            <img src="/images/satin-bow.png" alt="" draggable="false" />
          </motion.button>
        </div>
      </div>
    </motion.main>
  );
}

export default InvitationEnvelope;
