import React from 'react';
import Image from 'next/image';
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import styles from "./page.module.css"; // Import CSS module
import iitp_building from "./iitp_building.png";
import directoriitp from "./directoriitp.jpg";

const Home = () => {
  return (
    <>
      <Navbar/>
      {/*<div className={styles.wrap} style={{ background: 'rgba(238,174,202)', background: 'linear-gradient(0deg, rgba(238,174,202,1) 0%, rgba(148,187,233,0) 100%)' }}>
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
                <p> The Indian Institute of Technology Patna epitomizes and reveres this limitless power in every way of its life and functioning. Established as an institute of national importance through an act of parliament in 2008, IIT Patna strives to provide world class education and an intellectually stimulating environment in an endeavor to develop well rounded individuals with technical and professional competence of the highest degree.
                </p>
                <p> The Training and Placement Cell of the institute handles all aspects of placements at IIT Patna for the graduating students of all departments. Right from contacting companies to managing all logistics of arranging for tests, pre-placement talks and conducting final interviews the Training and Placement Cell officials and volunteers provide their best possible assistance to the recruiters.
                </p>
              </div>
            </div>
            <div className={styles.indexDirmsg}>
              <h1>Director's Message</h1>
              <p>The Indian Institute of Technology Patna is one of the new IITs established by an Act of the Indian Parliament on August 6, 2008 and is recognized as an Institute of National Importance by the Government of India. Currently, IIT Patna has ten departments which offer B.Tech., M.Tech., M.Sc., and Ph.D. programs. Since its inception, IIT Patna has pursued excellence with steadfast determination. The Institute has developed modern facilities that are fully equipped with state-of-the-art facilities that are routinely used to train and educate students. Also, we keep our curriculum updated and provide ample extra-curricular opportunities for the students. As a result, our students excel both in knowledge and leadership skills.
              </p>
              <a href="message.php">Read More</a>
            </div>
          </div>
          <div className={styles.grid20}>
            <div className={styles.sideBar}>

              <div className={styles.panel}>
                <div className={styles.panelHead }>
                  <div className={styles.panelTab + " " + styles.panelTabFull}>
                    Recruiters
                  </div>
                </div>
                <div className={styles.panelContent}>
                  <p id="rmessage"><label htmlFor='registr'>Kindly fill-in the form to start the process to recruit students for summer internships and full time role at IIT Patna in academic year 2022-23.</label><a href="https://forms.gle/FdDpWF3dgKx9iQLB6" target="_blank"><button id='registr' className={styles.btnReg}><div className={styles.blinkMe}>REGISTER</div></button></a></p>
                </div>
              </div>
              <div className={styles.panel}>
                <div className={styles.panelHead }>
                  <div className={styles.panelTab + " " + styles.panelTabFull}>
                    News & Events
                  </div>
                </div>
                <div className={styles.panelContent}>
                  <p><a href="downloads/files/TPC_IITP_past-recruiters_2022.pdf">Past Recruiters <img src="downloads/new.gif" /></a></p>
                  <p><a href="downloads/Placement Brochure.pdf">Placements Brochure 2023-24<img src="downloads/new.gif" /></a></p>
                  <p><a href="Programmes.php">Branch-wise Brochure 2022-23</a></p>

                </div>
              </div>
            </div>
          </div>
        </div>
  </div>*/}
  <div className={styles.external}>
    
    <div className={styles.bggrid}>
        <div className={styles.aboutContent}>
          <div className={styles.instiImage}>
          <Image
                    src={iitp_building}
                    alt="IITP Logo"
                />
          </div>
                <div>
                  <h1 >
                    <p className={styles.titleContent}>About Us</p>
                  </h1>
                  <br />
                  <p>
                  The Indian Institute of Technology Patna epitomizes and reveres this limitless power in every way of its life and functioning. Established as an institute of national importance through an act of parliament in 2008, IIT Patna strives to provide world class education and an intellectually stimulating environment in an endeavor to develop well rounded individuals with technical and professional competence of the highest degree.
                  </p>
                  <br />
                  <p>
                    The Training and Placement Cell of the institute handles all aspects of placements at IIT Patna for the graduating students of all departments. Right from contacting companies to managing all logistics of arranging for tests, pre-placement talks and conducting final interviews the Training and Placement Cell officials and volunteers provide their best possible assistance to the recruiters.
                  </p>      
                  <br />            
                </div>
                
                <div className={styles.container}>
  <div className={styles.content}>
  <div>
                  <h1 >
                    <p className={styles.titleContent}>Director's Message</p>
                  </h1>
                  <br />
                  <p>
                  The Indian Institute of Technology Patna is one of the new IITs established by an Act of the Indian Parliament on August 6, 2008 and is recognized as an Institute of National Importance by the Government of India. Currently, IIT Patna has ten departments which offer B.Tech., M.Tech., M.Sc., and Ph.D. programs. Since its inception, IIT Patna has pursued excellence with steadfast determination. The Institute has developed modern facilities that are fully equipped with state-of-the-art facilities that are routinely used to train and educate students. Also, we keep our curriculum updated and provide ample extra-curricular opportunities for the students. As a result, our students excel both in knowledge and leadership skills.</p> 
                  <br />
                  <p>Patna has been a center of knowledge and a land of visionaries since long and has been attracting visitors and scholars from many parts of the world. Some of the legends from this region include Lord Gautam Buddha, Lord Mahavir, Guru Gobind Singh, the famous astronomer Aryabhatta, and the first President of India, Dr. Rajendra Prasad. IIT Patna strives to carry the baton passed through these visionaries to become a beacon of knowledge and wisdom.</p>  
                  <br />
                  <p>IIT Patna invites the recruiters to the Campus Recruitment Program for 2022-23 Batch, to give this batch of graduating students an opportunity to prove themselves and to add value to the organizations they join. We assure you that this will be a positive experience for the recruiters and a step forward in improving upon past relations and building new ones.</p>
                  <br />
                  <p>I welcome you to become a part of our story and to form a long-lasting association with the institute.</p>
                  <br />
                  <p>Prof. T.N. Singh,</p>
                  <p>Director, Indian Institute of Technology Patna
</p>                <br />
                </div>
  </div>
  <div className={styles.image}>
  <Image
                    src={directoriitp}
                    alt="IITP Logo"
                />
  </div>
</div>

                {/*<div>
                  <h1>Message from Faculty In Charge</h1>
                  <br />
                    <p>I welcome you to the 2022-23 campus placement season at the Indian Institute of Technology Patna. The Training and Placement Cell (TPC) is proud to support your recruitment processes both in physical and online modes. Students are the backbone and pride of our institute. This year, we have a pool of around 520 students completing their B.Tech., M.Tech., and M.Sc., eagerly waiting to make their mark in the corporate world. Our students actively participate in several national and international technical, cultural, and sports events. Apart from academics, student bodies run about a dozen clubs on campus, each focusing on different competencies ranging from public speaking to competitive coding.</p>
                    <br />
                    <p>
                    IIT Patna has six engineering departments, three science departments, and a Humanities and Social Sciences department. The institute offers 6 B.Tech. programs, 8 M.Tech. programs, and 3 M.Sc. programs. In addition, all departments offer doctoral studies and lead cutting-edge research in their respective specialization. This year, the total student strength on campus has surpassed 2000.
                    </p>
                    <br />
                    <p>
                    As an institute of higher education, we yearn to trigger the creativity and intellect of students, along with imparting soft skills such as teamwork and communication. The student clubs and the student administrative bodies organize several events throughout the year to ensure everyone receives ample chances to nurture their talents and gain experience.
                    </p>
                    <br />
                    <p>
                    TPC welcomes you to visit our campus, physically or virtually, for full-time employment and internship recruitments. We promise our support and dedication in choosing your future employees and collaborators. Our representatives can assist you in the smooth conduct of the recruitment processes, including pre-placement talks, screening tests, interviews, and any other relevant selection processes. We follow transparent placement policies and procedures to benefit both students and recruiters.
                    </p>
                    <br />
                    <p>
                    I humbly request you to consider our students as potential employees of your organization. Kindly feel free to get in touch with us for any clarification and support.
                    </p>
                    <br />
                    <p>
                    Looking forward to meeting your recruitment team on our campus.
                    </p>
                    <br />
                    <p>
                    Dr. Jose V Parambil,
                    </p>
                    <p>
                    Professor In charge, Training and Placement Cell,
                    </p>
                    <p>
                    IIT Patna.
                    </p>
                  <br />
</div>*/}
        </div>
        
    </div>
  </div>
      <Footer/>
    </>
  );
}

export default Home;
