import React from 'react';
import styles from './FooterPage.module.css';

const FooterPage = () => {
  return (
    <div className={styles.container_footer}>
      <div className={styles.inner_container}>
        <div className={styles.right_part}>
          <h2>The Leo</h2>
          <p>Stay in the know on product releases, founder news, and all things Atoms.</p>
          <span>Email : Support@TheAurous.com</span>
        </div>
        <div className={styles.left_part}>
          <p><b>Contact us</b>: 932 946 4968 (Mon to Sat - 11:00 AM to 7:00 PM)</p>
          <h2>Stay Connected</h2>
        </div>
      </div>
    </div>
  );
}

export default FooterPage;
