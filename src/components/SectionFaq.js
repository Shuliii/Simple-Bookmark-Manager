import styles from "./SectionFaq.module.css";

const SectionFaq = () => {
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
              <div>What is Bookmark?</div>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                tincidunt justo eget ultricies fringilla. Phasellus blandit
                ipsum quis quam ornare mattis.
              </div>
            </li>
            <li>
              <div> How can I request a new browser?</div>
              <div>
                Vivamus luctus eros aliquet convallis ultricies. Mauris augue
                massa, ultricies non ligula. Suspendisse imperdiet. Vivamus
                luctus eros aliquet convallis ultricies. Mauris augue massa,
                ultricies non ligula. Suspendisse imperdie tVivamus luctus eros
                aliquet convallis ultricies. Mauris augue massa, ultricies non
                ligula. Suspendisse imperdiet.
              </div>
            </li>
            <li>
              <div>Is there a mobile app?</div>
              <div>
                Sed consectetur quam id neque fermentum accumsan. Praesent
                luctus vestibulum dolor, ut condimentum urna vulputate eget.
                Cras in ligula quis est pharetra mattis sit amet pharetra purus.
                Sed sollicitudin ex et ultricies bibendum.
              </div>
            </li>
            <li>
              <div>What about other Chromium browsers?</div>
              <div>
                Integer condimentum ipsum id imperdiet finibus. Vivamus in
                placerat mi, at euismod dui. Aliquam vitae neque eget nisl
                gravida pellentesque non ut velit.
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SectionFaq;
