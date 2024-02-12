import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import styles from "./page.module.css"; // Import CSS module

const Home = () => {
    return (
        <>
            <Navbar />
            <div
                className={styles.wrap}
                style={{
                    background: "rgba(238,174,202)",
                    background:
                        "linear-gradient(0deg, rgba(238,174,202,1) 0%, rgba(148,187,233,0) 100%)"
                }}
            >
                <div className={styles.gridContainer}>
                    <div className={styles.grid80}>
                        <div className={styles.gridBlock}>
                            <div className={styles.homeCarousel}>
                                <div>
                                    <img src="images/slider/slider-1.png" />
                                </div>
                                <div>
                                    <img src="images/slider/slider-2.png" />
                                </div>
                                <div>
                                    <img src="images/slider/slider-3.png" />
                                </div>
                                <div>
                                    <img src="images/slider/p4.png" />
                                </div>
                                <div>
                                    <img src="images/slider/p5.jpg" />
                                </div>
                                <div>
                                    <img src="images/slider/p6.png" />
                                </div>
                                <div>
                                    <img src="images/slider/p7.png" />
                                </div>
                                <div>
                                    <img src="images/slider/p8.jpg" />
                                </div>
                                <div>
                                    <img src="images/slider/p9.jpg" />
                                </div>
                                <div>
                                    <img src="images/slider/slider-4.png" />
                                </div>
                                <div>
                                    <img src="images/slider/slider-5.png" />
                                </div>
                                <div>
                                    <img src="images/slider/slider-6.png" />
                                </div>
                            </div>
                            <div className={styles.indexIntroText}>
                                <h1>About Us</h1>
                                <p>
                                    {" "}
                                    The Indian Institute of Technology Patna
                                    epitomizes and reveres this limitless power
                                    in every way of its life and functioning.
                                    Established as an institute of national
                                    importance through an act of parliament in
                                    2008, IIT Patna strives to provide world
                                    class education and an intellectually
                                    stimulating environment in an endeavor to
                                    develop well rounded individuals with
                                    technical and professional competence of the
                                    highest degree.
                                </p>
                                <p>
                                    {" "}
                                    The Training and Placement Cell of the
                                    institute handles all aspects of placements
                                    at IIT Patna for the graduating students of
                                    all departments. Right from contacting
                                    companies to managing all logistics of
                                    arranging for tests, pre-placement talks and
                                    conducting final interviews the Training and
                                    Placement Cell officials and volunteers
                                    provide their best possible assistance to
                                    the recruiters.
                                </p>
                            </div>
                        </div>
                        <div className={styles.indexDirmsg}>
                            <h1>Director's Message</h1>
                            <p>
                                The Indian Institute of Technology Patna is one
                                of the new IITs established by an Act of the
                                Indian Parliament on August 6, 2008 and is
                                recognized as an Institute of National
                                Importance by the Government of India.
                                Currently, IIT Patna has ten departments which
                                offer B.Tech., M.Tech., M.Sc., and Ph.D.
                                programs. Since its inception, IIT Patna has
                                pursued excellence with steadfast determination.
                                The Institute has developed modern facilities
                                that are fully equipped with state-of-the-art
                                facilities that are routinely used to train and
                                educate students. Also, we keep our curriculum
                                updated and provide ample extra-curricular
                                opportunities for the students. As a result, our
                                students excel both in knowledge and leadership
                                skills.
                            </p>
                            <a href="message.php">Read More</a>
                        </div>
                    </div>
                    <div className={styles.grid20}>
                        <div className={styles.sideBar}>
                            <div className={styles.panel}>
                                <div className={styles.panelHead}>
                                    <div
                                        className={
                                            styles.panelTab +
                                            " " +
                                            styles.panelTabFull
                                        }
                                    >
                                        Recruiters
                                    </div>
                                </div>
                                <div className={styles.panelContent}>
                                    <p id="rmessage">
                                        <label htmlFor="registr">
                                            Kindly fill-in the form to start the
                                            process to recruit students for
                                            summer internships and full time
                                            role at IIT Patna in academic year
                                            2022-23.
                                        </label>
                                        <a
                                            href="https://forms.gle/FdDpWF3dgKx9iQLB6"
                                            target="_blank"
                                        >
                                            <button
                                                id="registr"
                                                className={styles.btnReg}
                                            >
                                                <div className={styles.blinkMe}>
                                                    REGISTER
                                                </div>
                                            </button>
                                        </a>
                                    </p>
                                </div>
                            </div>
                            <div className={styles.panel}>
                                <div className={styles.panelHead}>
                                    <div
                                        className={
                                            styles.panelTab +
                                            " " +
                                            styles.panelTabFull
                                        }
                                    >
                                        News & Events
                                    </div>
                                </div>
                                <div className={styles.panelContent}>
                                    <p>
                                        <a href="downloads/files/TPC_IITP_past-recruiters_2022.pdf">
                                            Past Recruiters{" "}
                                            <img src="downloads/new.gif" />
                                        </a>
                                    </p>
                                    <p>
                                        <a href="downloads/Placement Brochure.pdf">
                                            Placements Brochure 2023-24
                                            <img src="downloads/new.gif" />
                                        </a>
                                    </p>
                                    <p>
                                        <a href="Programmes.php">
                                            Branch-wise Brochure 2022-23
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Home;
