import styles from "./page.module.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

export default function Home() {
    return (
        <>
            <Navbar />
            <main>
                <div className={styles.gridContainer}>
                    <div className={`${styles.grid} ${styles.grid80}`}>
                        <div className={styles.gridBlock}>
                            <div className={styles.homeCarousel}>
                                {/* Carousel Images */}
                                <img
                                    src="carousel-placeholder.jpg"
                                    alt="Carousel Placeholder"
                                />
                                <img
                                    src="carousel-placeholder.jpg"
                                    alt="Carousel Placeholder"
                                />
                                <img
                                    src="carousel-placeholder.jpg"
                                    alt="Carousel Placeholder"
                                />
                            </div>
                            <div className={styles.indexIntroText}>
                                {/* Intro Text */}
                                <h1>Welcome to our website</h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Sed aliquet eleifend ipsum,
                                    at varius justo gravida sit amet. Donec
                                    vitae orci consequat, ultricies libero vel,
                                    ultrices velit. Integer dapibus ut risus ac
                                    fermentum.
                                </p>
                                <p>
                                    Nam quis luctus est. Pellentesque vulputate,
                                    lacus vel tristique dapibus, mauris nunc
                                    rutrum ex, et fermentum dui mauris non sem.
                                    Pellentesque habitant morbi tristique
                                    senectus et netus et malesuada fames ac
                                    turpis egestas.
                                </p>
                            </div>
                            <div className={styles.indexDirMsg}>
                                {/* Director's Message */}
                                <h2>Director's Message</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Sed aliquet eleifend ipsum,
                                    at varius justo gravida sit amet.
                                </p>
                                <p>
                                    Nam quis luctus est. Pellentesque vulputate,
                                    lacus vel tristique dapibus, mauris nunc
                                    rutrum ex, et fermentum dui mauris non sem.
                                </p>
                            </div>
                        </div>
                    </div>
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
                                <button className={styles.btnRegister}>
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
                </div>
            </main>
            <Footer />
        </>
    );
}
