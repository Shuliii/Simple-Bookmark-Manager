import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BlueButton from "./UI/BlueButton";
import styles from "./SectionFaq.module.css";
import Arrow from "../assets/icon-arrow.svg";

const SectionFaq = () => {
  const [isExpand, setIsExpand] = useState(null);
  const toggleState = (e) => {
    const attr = +e.target.closest("div").getAttribute("data-item");
    if (isExpand === attr) {
      setIsExpand(null);
    } else {
      setIsExpand(attr);
    }
  };
  return (
    <section className={styles.faq}>
      <div className={`${styles.container} ${styles.flow}`}>
        <div className={styles.faqDescription}>
          <h2>Frequently Asked Questions</h2>
          <p>
            Here are some of our FAQs. If you have any other questions you'd
            like answered please feel free to email us.
          </p>
        </div>
        <div className={styles.faqQuestions}>
          <ul>
            <li>
              <div data-item="1" onClick={toggleState}>
                <h3>What is Bookmark?</h3>
                <AnimatePresence>
                  {isExpand === 1 ? (
                    <motion.img
                      initial={{ rotateX: 0 }}
                      animate={{ rotateX: 180 }}
                      exit={{ rotateX: 0 }}
                      transition={{ type: "spring" }}
                      src={Arrow}
                    />
                  ) : (
                    <img src={Arrow} alt="" />
                  )}
                </AnimatePresence>
              </div>
              <AnimatePresence>
                {isExpand === 1 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 0.75, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce tincidunt justo eget ultricies fringilla. Phasellus
                    blandit ipsum quis quam ornare mattis.
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
            <li>
              <div data-item="2" onClick={toggleState}>
                <h3>How can I request a new browser?</h3>
                <AnimatePresence>
                  {isExpand === 2 ? (
                    <motion.img
                      initial={{ rotateX: 0 }}
                      animate={{ rotateX: 180 }}
                      exit={{ rotateX: 0 }}
                      transition={{ type: "spring" }}
                      src={Arrow}
                    />
                  ) : (
                    <img src={Arrow} alt="" />
                  )}
                </AnimatePresence>
              </div>
              <AnimatePresence>
                {isExpand === 2 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 0.75, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    Vivamus luctus eros aliquet convallis ultricies. Mauris
                    augue massa, ultricies non ligula. Suspendisse imperdiet.
                    Vivamus luctus eros aliquet convallis ultricies. Mauris
                    augue massa, ultricies non ligula. Suspendisse imperdie
                    tVivamus luctus eros aliquet convallis ultricies. Mauris
                    augue massa, ultricies non ligula. Suspendisse imperdiet.
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
            <li>
              <div data-item="3" onClick={toggleState}>
                <h3>Is there a mobile app?</h3>
                <AnimatePresence>
                  {isExpand === 3 ? (
                    <motion.img
                      initial={{ rotateX: 0 }}
                      animate={{ rotateX: 180 }}
                      exit={{ rotateX: 0 }}
                      transition={{ type: "spring" }}
                      src={Arrow}
                    />
                  ) : (
                    <img src={Arrow} alt="" />
                  )}
                </AnimatePresence>
              </div>
              <AnimatePresence>
                {isExpand === 3 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 0.75, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    Sed consectetur quam id neque fermentum accumsan. Praesent
                    luctus vestibulum dolor, ut condimentum urna vulputate eget.
                    Cras in ligula quis est pharetra mattis sit amet pharetra
                    purus. Sed sollicitudin ex et ultricies bibendum.
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
            <li>
              <div data-item="4" onClick={toggleState}>
                <h3>What about other Chromium browsers?</h3>
                <AnimatePresence>
                  {isExpand === 4 ? (
                    <motion.img
                      initial={{ rotateX: 0 }}
                      animate={{ rotateX: 180 }}
                      exit={{ rotateX: 0 }}
                      transition={{ type: "spring" }}
                      src={Arrow}
                    />
                  ) : (
                    <img src={Arrow} alt="" />
                  )}
                </AnimatePresence>
              </div>
              <AnimatePresence>
                {isExpand === 4 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 0.75, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    Integer condimentum ipsum id imperdiet finibus. Vivamus in
                    placerat mi, at euismod dui. Aliquam vitae neque eget nisl
                    gravida pellentesque non ut velit.
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          </ul>
        </div>
        <BlueButton
          style={{
            paddingBlock: "10px",
            paddingInline: "24px",
            fontSize: "14px",
            lineHeight: "28px",
            letterSpacing: "0.25px",
            fontWeight: "500",
          }}
        >
          More Info
        </BlueButton>
      </div>
    </section>
  );
};

export default SectionFaq;
