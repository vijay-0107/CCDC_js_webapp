import styles from "./Navbar.module.css"; // Import Navbar CSS module
import iitplogo from "../../assets/iitp2.png";
import Image from 'next/image';

export default function Navbar() {
    return (
        <div className={styles.header}> {/* Apply combined class names */}
            <a href="http://www.iitp.ac.in/placement/">
                <div className={styles.collegeLogo}>
                <Image
                    src={iitplogo}
                    alt="IITP Logo"
                    width={50} // Specify width
                    height={50} // Specify height
                    style={{ marginRight: '10px' }}
                />
                    <div className={styles.collegeText}>
                        <span style={{ fontSize: "18pt" }}>
                            Training and Placement Cell
                        </span>
                        <br />
                        <span style={{ fontSize: "22pt" }}>
                            प्रशिक्षण एवं स्थानन प्रकोष्ठ
                        </span>
                        <br />
                        <br />
                        <h3>
                            Indian Institute of Technology Patna
                            <br />
                            <span style={{ fontSize: "18pt" }}>
                                भारतीय प्रौद्योगिकी संस्थान पटना
                            </span>
                        </h3>
                    </div>
                </div>
            </a>
            <div
                className={`${styles.navbarCollapse} ${styles.scrollspy} ${styles.smoothScroll} ${styles.collapse}`} // Apply combined class names
                id="nav"
            >
                <ul>
                    <li>
                        <a href="/">About Us</a>
                        <ul>
                            <li>
                                <a href="index.php">TPC Cell</a>
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
                        <a href="procedure.php">For Recruiters</a>
                        <ul>
                            <li>
                                <a href="fac.php">Facilities</a>
                            </li>
                            <li>
                                <a href="procedure.php">Placement Procedure</a>
                            </li>
                            <li>
                                <a href="downloads/files/TPC_Policy_for_recruiters.pdf">
                                    TPC Policy for recruiters
                                </a>
                            </li>
                            <li>
                                <a href="Programmes.php">Programmes</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="https://www.iitp.ac.in/acad/">Academics</a>
                    </li>

                    <li>
                        <a href="pastRec.php">Placement</a>

                        <ul>
                            <li>
                                <a href="pastRec.php">Recruiters</a>
                            </li>
                            <li>
                                <a href="placementsumm.php">
                                    Placement Statistics
                                </a>
                            </li>
                            <li>
                                <a href="trainingsumm.php">
                                    Internship provider
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="/contact-us">Contact Us</a>
                        <ul>
                            <li>
                                <a href="contactus.php">Representatives</a>
                            </li>
                            <li>
                                <a href="howtoreach.php">Reaching IITP</a>
                            </li>
                            <li>
                                <a href="hotels.php">Nearby Hotels</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
}
