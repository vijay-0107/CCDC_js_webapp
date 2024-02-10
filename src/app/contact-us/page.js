import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

export default function Contact() {
    return <main className>
        <Navbar />
        <div className="wrap">
            <div className="grid-container">
                <div className="grid-80">
                    <div className="grid-block">
                        <div className="index-intro-text">
                            <h1>Contact Us</h1>
                            <p>Training and placement cell (TPC) of the institute handles all aspects of placements at IIT
                                Patna for the graduating students of all departments. Right from contacting companies to
                                managing all logistics of arranging for tests, pre placement talks and conducting final
                                interviews the Training and Placement Cell officials and volunteers provide their best
                                possible assistance to the recruiters.</p>

                            <p>Interested companies can directly contact through email: <span
                                style={{ color: '#0000FF', fontWeight: 'bold' }}>tpc@iitp.ac.in</span> & <span
                                    style={{ color: '#0000FF', fontWeight: 'bold' }}>pic_tnp@iitp.ac.in</span><br /> Please feel free
                                to contact us at +91-6115-233 091/083 and +91-8102917501
                            </p>
                            <h2><u>Professor In-charge</u></h2>
                            <div className="grid-container">
                                <div className="grid-item">
                                    <img style={{ height: '100px', width: '90px' }} className="facimage"
                                        src="https://www.iitp.ac.in/images/faculty_profile/cbe/Ashwani_Assam.jpeg" />
                                    <div className="facinfo">
                                        <b>Dr. Ashwani Assam</b><br />
                                        Phone No.: +91-6115-233829<br />
                                        Email: pic_tnp@iitp.ac.in, tpc@iitp.ac.in
                                    </div>
                                </div>
                            </div>
                            <h2><u>Team</u></h2>
                            <div className="grid-container">
                                <div className="grid-item">
                                    <img className="facimage"
                                        src="https://www.iitp.ac.in/images/photo/Ajay_Kumar_Kalyanii.jpg" />
                                    <div className="facinfo">
                                        <b>Dr. Ajay Kumar Kalyani</b><br />
                                    </div>
                                </div>
                                <div className="grid-item">
                                    <img className="facimage"
                                        src="https://www.iitp.ac.in/images/faculty_profile/cse/Mayank_Agarwal.jpg" />
                                    <div className="facinfo">
                                        <b>Dr. Mayank Agarwal</b><br />
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <h2><u>TPC Officials</u></h2>
                            <div className="grid-container">
                                <div className="grid-item">
                                    <img className="facimage" style={{ height: '90px' }}
                                        src="https://www.iitp.ac.in/images/staff/Kripa_Shankar.jpg" />
                                    <div className="facinfo">
                                        <b>Mr. Kripa Shankar Singh</b><br />
                                        Training and placement Officer (TPO)<br />
                                        Phone No: +91-6115-233091<br />
                                        Mobile : +91-8102917501<br />
                                        Email : kripa@iitp.ac.in | tpc@iitp.ac.in
                                    </div>
                                </div>
                                <div className="grid-item">
                                    <img className="facimage" style={{ height: '100px', width: '90px' }}
                                        src="https://www.iitp.ac.in/images/staff/aksingh.jpg" />
                                    <div className="facinfo">
                                        <b>Mr. Amit Kumar Singh</b><br />
                                        Jr. Assistant<br />
                                        Phone no : +91-6115-233083<br />
                                        Email : aksingh@iitp.ac.in
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <p><b>Address</b><br />
                                Training and Placement Cell,<br />
                                IIT Patna, Bihta Campus,<br />
                                Bihta Kanpa Road, Bihta,<br />
                                Bihar Pin - 801106, India.<br />
                            </p>
                            <hr />
                        </div>
                    </div>
                </div>
                <div className="grid-20">
                    <div className="side-bar">
                        <div className="panel">
                            <div className="panel-head ">
                                <div className="panel-tab panel-tab-full">
                                    Recruiters
                                </div>
                            </div>
                            <div className="panel-content">
                                <p id="rmessage"><label htmlFor='registr'>Kindly fill-in the form to start the process to
                                    recruit students for summer internships
                                    and full time role at IIT Patna in academic year 2022-23.</label><a
                                        href="https://forms.gle/FdDpWF3dgKx9iQLB6" target="_blank"><button id='registr'
                                            className='btn-reg'>
                                            <div className="blink_me">REGISTER</div>
                                        </button></a></p>
                            </div>
                        </div>
                        <div className="panel">
                            <div className="panel-head ">
                                <div className="panel-tab panel-tab-full">
                                    News & Events
                                </div>
                            </div>
                            <div className="panel-content">
                                <p><a href="downloads/files/TPC_IITP_past-recruiters_2022.pdf">Past Recruiters <img
                                    src="downloads/new.gif" /></a></p>
                                <p><a href="downloads/Placement Brochure.pdf">Placements Brochure 2023-24<img
                                    src="downloads/new.gif" /></a></p>
                                <p><a href="Programmes.php">Branch-wise Brochure 2022-23</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </main>;
}
