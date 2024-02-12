import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles["footer-links"]}>
                <ul>
                    <li>
                        <p className={styles.category}>About IITP</p>
                        <br />
                        <ul>
                            <li>
                                <a href="index.php">T&amp;P Cell</a>
                            </li>
                            <li>
                                <a href="message.php">Message</a>
                            </li>
                            <li>
                                <a href="acadtieups.php">Academic Tieups</a>
                            </li>
                            <li>
                                <a href="tour.php">Campus Tour</a>
                            </li>
                            <li>
                                <a href="activities.php">Activities</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <p className={styles.category}>For Recruiters</p>
                        <br />
                        <ul>
                            <li>
                                <a href="procedure.php">Placement Procedure</a>
                            </li>
                            <li>
                                <a href="demographics.php">Demographics</a>
                            </li>
                            <li>
                                <a href="fac.php">Facilities</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <p className={styles.category}>Academics (UG)</p>
                        <br />
                        <ul>
                            <li>
                                <a href="http://www.iitp.ac.in/index.php/academics/programmes/undergraduate/undergraduate.html">
                                    Departments
                                </a>
                            </li>
                            <li>
                                <a href="http://www.iitp.ac.in/index.php/academics/programmes/undergraduate/course-curriculum.html">
                                    Course Curriculum
                                </a>
                            </li>
                            <li>
                                <a href="http://www.iitp.ac.in/index.php/academics/programmes/undergraduate/syllabus.html">
                                    Syllabus
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <p className={styles.category}>Aacdemics (PG)</p>
                        <br />
                        <ul>
                            <li>
                                <a href="http://www.iitp.ac.in/index.php/academics/programmes/mtech-postgraduate/mtech-programme-overview.html">
                                    Departments
                                </a>
                            </li>
                            <li>
                                <a href="http://www.iitp.ac.in/index.php/academics/programmes/mtech-postgraduate/course-curriculum.html">
                                    Course Curriculum
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <p className={styles.category}>T&amp;P Summary</p>

                        <br />
                        <ul>
                            <li>
                                <a href="pastRec.php">Past Recruiters</a>
                            </li>
                            <li>
                                <a href="placementsumm.php">
                                    Placement Summary
                                </a>
                            </li>
                            <li>
                                <a href="trainingsumm.php">Training Summary</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <p className={styles.category}>Contact Us</p>

                        <br />
                        <ul>
                            <li>
                                <a href="howtoreach.php">Reaching IITP</a>
                            </li>
                            <li>
                                <a href="contactus.php">Representatives</a>
                            </li>
                        </ul>
                    </li>
                    <li style={{ width: "20px" }}>
                        <div
                            className={styles["fb-like"]}
                            style={{ float: "right" }}
                            data-href="https://www.facebook.com/iitpatna.tpc"
                            data-layout="box_count"
                            data-action="like"
                            data-show-faces="false"
                            data-share="false"
                        ></div>
                    </li>
                </ul>
            </div>

            <div className={styles["footer-copy"]}>
                Copyright &copy; Indian Institute of Technology Patna
            </div>
        </div>
    );
}
