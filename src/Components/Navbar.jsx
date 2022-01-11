import React from "react";
import mukesh from "../images/mukesh.jpg";
import syam from '../images/syam.jpg'
import statas from '../images/statas.jpg'
import mukesh3 from "../images/mukesh3.jpg";
import company1 from '../images/company1.jpg'
import company3 from '../images/company3.jpg'
import company4 from '../images/company4.jpg'
import company5 from '../images/company5.jpg'
import company7 from '../images/company7.jpg'
import company from '../images/company.jpg'
import pp from '../images/pp.jpg'
import seema from '../images/seema.jpg'
import {
    FaFacebookSquare, FaSkype, FaTwitterSquare, FaWhatsappSquare,
    FaGooglePlus, FaRocket, FaPencilAlt, FaUsers, FaRegEdit, FaTrophy, FaThumbsUp
} from "react-icons/fa";
import { MdOutlineComputer, MdOutlineSettingsSuggest, MdPhoneIphone, MdSupport } from "react-icons/md";
import CountUp from 'react-countup';
import Carousel from 'react-bootstrap/Carousel';


function Navbar() {
    return (
        <div>
            <nav className='navbar navbar-expand-lg navbar-light bg-light  fixed-top'>
                <div className='container'>
                    <a className='navbar-brand logo' href="/">
                        <img src={mukesh} height='60px' width='60px;' className='rounded-pill' alt='logo' />
                    </a>
                    <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                        aria-controls="navbarCollapse" aria-expanded="false">
                        <sapn className='navbar-toggler-icon'></sapn>
                    </button>
                    <div className="navbar-collapse collapse" id="navbarCollapse">
                        <ul className='navbar-nav ml-auto'>
                            <li className='nav-item'>
                                <a className='nav-link active' href='#home'>Home</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='#about'>About</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='#service'>Service</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='#portfolio'>Portfolio</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='#blog'>Blogs</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='#Contact Us'>Contact us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <section id="home">
                <div className="row justify-content-center">
                    <img src={company7} alt="company7"></img>
                </div>
            </section>
            <section id="about">
                <div className="container py-5">
                    <div className="row py-5">
                        <div className="col-lg-5 col-sm-12">
                            <div className="myimage">
                                <img src={mukesh} className="img-fluid" alt="mukesh" />
                            </div>
                        </div>
                        <div className="col-lg-7 col-sm-12">
                            <div className="about">
                                <h2>ABOUT ME.</h2>
                                <p>UI/UX Designer & Web Developer</p>
                                <p>I'm Kalvin Doe Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to specimen book.</p>
                                <p>It is a long established fact that a reader will be distracted by the readable content
                                    of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
                                    more-or-less normal distribution of letters,
                                    as opposed to using 'Content here, content here', making it look like readable English.
                                </p>
                            </div>
                            <div className="icons pt-4">
                                <i className="iconrefrence">
                                    <FaFacebookSquare className="mx-1" id="ic" />
                                    <FaSkype className="mx-1" id="ic" />
                                    <FaTwitterSquare className="mx-1" id="ic" />
                                    <FaWhatsappSquare className="mx-1" id="ic" />
                                    <FaGooglePlus className="mx-1" id="ic" />
                                </i>
                            </div>
                            <div className="pt-5">
                                <button type="button" className="dbutton">Download Cv</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="service" className="service">
                <div className="container py-4">
                    <div className="row py-5">
                        <div className="servicehead">
                            <h4 className="pt-5">SERVICE</h4>
                            <h1 className="py-2">WHAT I CAN DO</h1>
                        </div>
                        <div className="col-lg-4 col-sm-6 py-4">
                            <div>
                                <MdOutlineComputer className="web-design" />
                                <h3 className="py-4">WEB DESIGN</h3>
                                <p className="paragraph py-4"> Lorem Ipsum is simply dummy

                                    text of the Lorem has been the industry's standard dummy text ever.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 py-4">
                            <div>
                                <MdOutlineSettingsSuggest className="web-design" />
                                <h3 className="py-4">WEB DEVELOPMENT</h3>
                                <p className="paragraph py-4"> Lorem Ipsum is simply dummy
                                    text of the Lorem has been the industry's standard dummy text ever.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 py-4">
                            <div>
                                <MdPhoneIphone className="web-design " />
                                <h3 className="py-4">RESPONSIVE DESIGN</h3>
                                <p className="paragraph py-4"> Lorem Ipsum is simply dummy
                                    text of the Lorem has been the industry's standard dummy text ever.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 py-4">
                            <div>
                                <FaRocket className="web-design" />
                                <h3 className="py-4">BRANDING IDENTITY</h3>
                                <p className="paragraph py-4"> Lorem Ipsum is simply dummy text
                                    of the Lorem has been the industry's standard dummy text ever.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 py-4">
                            <div>
                                <FaPencilAlt className="web-design" />
                                <h3 className="py-4">CREATIVE DESIGN</h3>
                                <p className=" paragraph py-4"> Lorem Ipsum is simply dummy
                                    text of the Lorem has been the industry's standard dummy text ever.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 py-4">
                            <div>
                                <MdSupport className="web-design" />
                                <h3 className="py-4">SUPPORT</h3>
                                <p className="paragraph py-4"> Lorem Ipsum is simply dummy text of the Lorem
                                    has been the industry's standard dummy text ever.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="service" style={{
                backgroundImage: `url(${statas})`, backgroundSize: 'cover', position: 'relative',
                backgroundRepeat: "no-repeat", alignItems: "center", textAlign: "center", overflow: "hidden", color: "white", fontWeight: "800px", fontSize: "2rem"
            }}>
                <div className="container py-5">
                    <div className="row py-4" >
                        <div className="col-md-3 col-sm-12 py-5">
                            <FaUsers className="happy-client" />
                            <h2><CountUp start={10} end={250} duration={5} /></h2>
                            <h3>Happy Clients</h3>
                        </div>
                        <div className="col-md-3 col-sm-12 py-5">
                            <FaThumbsUp className="happy-client" />
                            <h2><CountUp start={10} end={750} duration={5} /></h2>
                            <h3>Projects Completed</h3>
                        </div>
                        <div className="col-md-3 col-sm-12 py-5">
                            <FaRegEdit className="happy-client" />
                            <h2><CountUp start={10} end={1100} duration={5} /></h2>
                            <h3>Lines Of Code</h3>
                        </div>
                        <div className="col-md-3 col-sm-12 py-5">
                            <FaTrophy className="happy-client" />
                            <h2><CountUp start={10} end={200} duration={5} /></h2>
                            <h3>Awards Achieved</h3>
                        </div>
                    </div>
                </div>
            </section>
            <section id="portfolio" className="py-5" style={{ backgroundColor: "white" }}>
                <div className="container py-5">
                    <div className="row justify-content-center" style={{ textAlign: "center", alignItems: "center", }}>
                        <div>
                            <p>PORTFOLIO</p>
                            <h1>WORK I HAVE DONE</h1>
                        </div>
                    </div>
                    <div className="row mb-2 py-5">
                        <div className="col-md-4 col-sm-12 pt-3">
                            <img src={company3} alt="company-3" className="img-fluid" ></img>
                        </div>
                        <div className="col-md-4 col-sm-1 pt-3">
                            <img src={company1} alt="company4" className="img-fluid" ></img>
                        </div>
                        <div className="col-md-4 col-sm-12 pt-3">
                            <img src={company4} alt="company4" className="img-fluid" ></img>
                        </div>
                        <div className="col-md-4 col-sm-12 pt-3">
                            <img src={company5} alt="company5" className="img-fluid" ></img>
                        </div>
                        <div className="col-md-4 col-sm-12 pt-3">
                            <img src={syam} alt="syam" className="img-fluid" ></img>
                        </div>
                        <div className="col-md-4 col-sm-12 pt-3">
                            <img src={mukesh3} alt="mukesh3" className="img-fluid"  ></img>
                        </div>
                    </div>
                </div>
            </section>
            <section id="blog" style={{ backgroundColor: '#f2f2f2' }}>
                <div className="container py-3">
                    <div className="row py-5">
                        <div style={{ textAlign: 'center' }}>
                            <p>BLOGS</p>
                            <h1>LATEST NEWS</h1>
                        </div>
                    </div>
                    <div className="row py-5 justify-content-center">
                        <div className="col-lg-4">
                            <div className="card" style={{ border: 'none', }}>
                                <img src={company5} alt="card1" className="img-fluid"></img>
                                <div className="container pt-5">
                                    <h4 className="py-3">The best of web design and web design inspiration</h4>
                                    <p className="py-4">All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first ...</p>
                                    <div className="row">
                                        <div className="col-6">
                                            <div><a href="/" type="link">Read more</a></div>
                                        </div>
                                        <div className="col-6" style={{ alignItems: 'end', textAlign: 'end' }}>
                                            <div><p>8/Jan/2022</p></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card" style={{ border: 'none', backgroundColor: 'white' }}>
                                <img src={company3} alt="card2" className="img-fluid"></img>
                                <div className="container pt-5">
                                    <h4 className="py-3">The best of web design and web design inspiration</h4>
                                    <p className="py-4">All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first ...</p>
                                    <div className="row">
                                        <div className="col-6">
                                            <div><a href="/" type="link">Read more</a></div>
                                        </div>
                                        <div className="col-6" style={{ alignItems: 'end', textAlign: 'end' }}>
                                            <div><p>8/Jan/2022</p></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card" style={{ border: 'none', backgroundColor: 'white' }}>
                                <img src={company4} alt="card3" className="img-fluid"></img>
                                <div className="container pt-5">
                                    <h4 className="py-3">The best of web design and web design inspiration</h4>
                                    <p className="py-4">All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first ...</p>
                                    <div className="row">
                                        <div className="col-6">
                                            <div><a href="/" type="link">Read more</a></div>
                                        </div>
                                        <div className="col-6" style={{ alignItems: 'end', textAlign: 'end' }}>
                                            <div><p>8/Jan/2022</p></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 py-5" style={{ textAlign: 'center', alignItems: 'center' }}><button type="button" style={{ backgroundColor: 'black', color: 'white', width: '120px', height: '40px', borderRadius: '5px', border: 'none' }}>View More</button></div>
                    </div>
                </div>
            </section >
            <section className=' py-5' style={{ backgroundImage: `url(${company})` }} >
                <div className="container py-5">
                    <div className="row py-5" style={{ textAlign: 'center', alignItems: 'center', position: 'relative', color: 'white', fontWeight: "300px", backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundAttachment: "fixed", overflow: 'hidden' }}>
                        <Carousel className="py-5">
                            <Carousel.Item className="py-5">
                                <img src={mukesh} alt="mukesh-carousel" className="rounded-pill" style={{ width: "130px", height: '130px' }}></img>
                                <h3>Mr Mukesh Verma</h3>
                                <p>Creative Designer and Devloper</p>
                                <p>Dolor facilis veritatis doloremque dicta eos Voluptate earum nulla ad
                                    et esse Saepe asperiores nisi facere ipsam corporis. Dolorem praesentium
                                    tenetur tempore dolorem illum autem? Veritatis fuga quasi sunt tenetur. Expedita
                                    id eaque incidunt beatae nesciunt! In similique exercitationem
                                    tempore excepturi placeat Nostrum ducimus dicta temporibus quas!
                                </p>
                            </Carousel.Item>
                            <Carousel.Item className="py-5">
                                <img src={seema} alt="mukesh-carousel" className="rounded-pill" style={{ width: "130px", height: '130px' }}></img>
                                <h3>Miss Seema </h3>
                                <p>Creative Designer and Devloper</p>
                                <p>Dolor facilis veritatis doloremque dicta eos Voluptate earum nulla ad
                                    et esse Saepe asperiores nisi facere ipsam corporis. Dolorem praesentium
                                    tenetur tempore dolorem illum autem? Veritatis fuga quasi sunt tenetur. Expedita
                                    id eaque incidunt beatae nesciunt! In similique exercitationem
                                    tempore excepturi placeat Nostrum ducimus dicta temporibus quas!
                                </p>
                            </Carousel.Item>
                            <Carousel.Item className="py-5">
                                <img src={pp} alt="mukesh-carousel" className="rounded-pill" style={{ width: "130px", height: '130px' }}></img>
                                <h3>Mr Md Rizwan</h3>
                                <p>Creative Designer and Devloper</p>
                                <p>Dolor facilis veritatis doloremque dicta eos Voluptate earum nulla ad
                                    et esse Saepe asperiores nisi facere ipsam corporis. Dolorem praesentium
                                    tenetur tempore dolorem illum autem? Veritatis fuga quasi sunt tenetur. Expedita
                                    id eaque incidunt beatae nesciunt! In similique exercitationem
                                    tempore excepturi placeat Nostrum ducimus dicta temporibus quas!
                                </p>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </section>
            <section id="Contact Us" className="py-5">
                <div className="container py-5">
                    <div className="row py-5">
                        <div className="pb-5" style={{ textAlign: 'center', alignItems: 'center', fontWeight: "250x" }}>
                            <p>CONTACT</p>
                            <h1>GET IN TOUCH</h1>
                        </div>
                        <div className="col-lg-6">
                            <div className="form-group" style={{ boxShadow: "none" }}>
                                <label>Name...</label>
                                <input type="Name" className="form-control" style={{ border: "none", borderBottom: "2px solid black", borderRadius: "0px", boxShadow: "none" }} />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="form-group">
                                <label>Email...</label>
                                <input type="Email" className="form-control" style={{ border: "none", borderBottom: "2px solid black", borderRadius: "0px", boxShadow: "none" }} />
                            </div>
                        </div>
                        <div className="col-lg-12 py-4">
                            <div className="form-group">
                                <label>How can we help you.....</label>
                                <input type="text" className="form-control"  style={{ border: "none",height:"100px", borderBottom: "2px solid black", borderRadius: "0px", boxShadow: "none" }} />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div style={{ textAlign: 'center', alignItems: 'center', fontWeight: "250x", border:'none' }}>
                            <button type="button" style={{ textAlign: 'center',  border:'none', backgroundColor:'black',color:'white',height:'50px',width:'150px' }} >SEND MESSAGE</button>
                        </div>
                    </div>
                </div>
            </section>
            <section id='footer' className="pt-5 bg-dark" style={{color:'white'}}>
                <div className="container pt-5">
                    <div className="row py-3" style={{textAlign:'center', borderBottom:"1px solid "}}>
                        <div className="col-lg-3">
                            <h5>MUKESH KUMNAR</h5>
                            <p>Web Devloper and Designer</p>
                        </div>
                        <div className="col-lg-3">
                        <h5>PHONE NO.</h5>
                        <p>(+91)9729739811</p>
                        </div>
                      
                        <div className="col-lg-3">
                            <h5>EMAIL</h5>
                            <p>mkverma97297@gmail.com</p>
                        </div>
                        <div className="col-lg-3">
                            <h5>ADDRESS</h5>
                            <p>Gill Telecom Service Hisar Haryana India</p>
                        </div>
                    </div>
                    <div className="row pt-5" style={{textAlign:'center',alignItems:'center'}}>
                      <div className="container pt-5">
                      <p>Mukesh © 2021. All Right Reserved, Designed By Mukesh-verma.</p>
                      </div>
                    </div>
                </div>
            </section>
        </div >
    );
}
export default Navbar;
