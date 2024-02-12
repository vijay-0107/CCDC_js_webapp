import styles from "./page.module.css";

export default function Home() {
    return (                
                    <div className={`${styles.grid} ${styles.grid20}`}>
                        <div className={styles.sideBar}>
                            <div className={styles.panel}>
                                {/* Recruiter Panel */}
                                <h3>Recruiters</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Sed aliquet eleifend ipsum,
                                    at varius justo gravida sit amet.
                                </p>
                                <button className={styles.btnReg}>
                                    Register Now
                                </button>
                            </div>
                            <div className={styles.panel}>
                                {/* News & Events Panel */}
                                <h3>News & Events</h3>
                                <ul>
                                    <li>
                                        <a href="#">Past Recruiters</a>
                                    </li>
                                    <li>
                                        <a href="#">Placement Brochure</a>
                                    </li>
                                    <li>
                                        <a href="#">Branch-wise Brochure</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
        
    );
}
