import React from "react";
import styles from "./Newsletter.module.css";

function Newsletter() {
  return (
    <div className={styles.newsletterSection}>
      <div className={styles.newsletterContent}>
        <div className="container">
          <div className="row align-items-center justify-content-evenly">
            <div className={`col-md-6 ${styles.newsletterLeft}`}>
              <h2 className={`${styles.newsletterTitle} mb-3`}>
                Join Our Newsletter
              </h2>
              <p className="mb-4">
                Subscribe to our newsletter to get our latest updates & news.
              </p>
            </div>
            <div className={`col-md-5 ${styles.newsletterRight}`}>
              <div className="position-relative">
                <input
                  type="email"
                  className={`form-control ${styles.customInput}`}
                  placeholder="Enter Your Email"
                />
                <button type="submit" className={styles.btnSubscribe}>
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
