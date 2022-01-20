import React from "react";
import mukesh from "../images/mukesh.jpg";
import company3 from '../images/company3.jpg'
import company4 from '../images/company4.jpg'
import company5 from '../images/company5.jpg'
import pp from '../images/pp.jpg'
import seema from '../images/seema.jpg'
import mk from'../images/mk.jpg'
import mks3 from'../images/mks3.jpg'
import work from '../images/work.jpg'
import sk from '../images/sk.jpg';
import sk1 from '../images/sk1.jpg';
import sk5 from '../images/sk5.jpg';
import mukesh1 from '../images/mukesh1.jpg'
import CountUp from 'react-countup';
import Carousel from 'react-bootstrap/Carousel';


function Navbar() {
    return (
        <div className="bg-light">
            <section>
                <nav className='navbar navbar-expand-lg fixed-top navbar-light bg-light ' style={{color:"blue"}}>
                    <div className='container'>
                        <a className='navbar-brand logo' href="/">
                            <img src={mukesh} height='60px' width='60px;' className='rounded-pill' alt='logo' />
                        </a>
                        <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                        >
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
            </section>
            <section id="home">
                <div className="container-fluid pt-5">
                    <div className="row pt-3">
                        <img src={work} alt="company7" backgroundSize="cover" position="absolute"></img>
                    </div>
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
                                <p>Hello! I’m Mukesh Verma from Hisar, India. I code and create web elements
                                    for amazing people around the world. I like work with new people.
                                    New people are new experiences. Web Developer with over 1 years of experience.
                                    Experienced with all stages of the development cycle for dynamic web projects.
                                    Having an in-depth knowledge including advanced HTML5, CSS3, Bootstrap5, React,
                                    JavaScript I aim to make a difference through my creative solution.
                                </p>

                                <p>
                                    Now, I’m working on a professional, visually sophisticated and technologically proficient,
                                    responsive and multi-functional react
                                    theme. If you are interested to work with me,
                                    click below button and contact with me right now, so we can talk about your project.
                                </p>

                            </div>
                            <div className="icons pt-4">
                           
                                <a href="/" className="iconrefrence"> <i class="fab fa-facebook-f"></i></a>
                                <a href="/" className="iconrefrence ml-5"><i className="fab fa-twitter"></i></a>
                                <a href="/" className="iconrefrence ml-5"><i className="fab fa-whatsapp"></i></a>
                                <a href="/" className="iconrefrence ml-5"><i className="fab fa-google-plus-g"></i></a>
                                <a href="/" className="iconrefrence ml-5"><i className="fab fa-linkedin-in"></i></a>
                                
                            </div>
                            <div className="pt-4">
                                <a href="#Contact Us" type="button" className="dbutton">Contact Me</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="service" className="service">
                <div className="container py-4">
                    <div className="row py-5">
                        <div className="servicehead">
                            <h5 className="pt-5">SERVICE</h5>
                            <h1 className="py-2">WHAT I CAN DO</h1>
                        </div>
                        <div className="col-lg-4 col-sm-6 py-4">
                            <div>
                                <a href="/" ><i className="fas fa-laptop" id="web-design"></i></a>
                                <h3 className="py-4">Web Design</h3>
                                <p className="paragraph py-4">"A designer knows he has achieved perfection
                                 not when there is nothing left to add, but when there is nothing left to take away.
                                 " -- Mr Mukesh, developer and designer</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 py-4">
                            <div>
                                <a href="/" ><i className="fas fa-cogs" id="web-design"></i></a>
                                <h3 className="py-4">Web development</h3>
                                <p className="paragraph py-4">“As the web development industry has become so
                                 huge in the last two decades, it has brought the attention of
                                  many people who are constantly sharing their own opinion.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 py-4">
                            <div>
                              
                                <a href="/" ><i className="fas fa-mobile-alt"id="web-design"></i></a>
                                <h3 className="py-4">Responsive Design</h3>
                                <p className="paragraph py-4"> “The public is more familiar with bad design than good design. It is,
                                 in effect, conditioned to prefer bad design, because that is what it lives with. The new becomes
                                  threatening, the old reassuring.”</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 py-4">
                            <div>
                                <a href="/"><i className="fas fa-rocket" id="web-design"></i></a>
                                <h3 className="py-4">Branding Identity</h3>
                                <p className="paragraph py-4">“ A brand for a company is like a reputation for a person.
                                 You earn reputation by trying to do hard things well ” ... Md Rizwan Web developer And Designer</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 py-4">
                            <div>
                                <a href="/" ><i className="fas fa-pencil-alt" id="web-design"></i></a>
                                <h3 className="py-4">Creative Design</h3>
                                <p className=" paragraph py-4">“ Where do new ideas come from? The answer is simple: differences.
                                 Creativity comes from unlikely juxtapositions.
                                 ”Miss Seema</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 py-4">
                            <div>
                                <a href="/"><i className="far fa-life-ring" id="web-design"></i></a>
                                <h3 className="py-4">Support</h3>
                                <p className="paragraph py-4">“To give real service you must add something which 
                                cannot be bought or measured with money,
                                 and that is sincerity and integrity.”</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="service" style={{
                backgroundImage: `url(${mk})`, backgroundSize: 'cover', position: 'relative',
                backgroundRepeat: "no-repeat", alignItems: "center", textAlign: "center", overflow: "hidden", color: "white", fontWeight: "800px", fontSize: "2rem"
            }}>
                <div className="container py-5">
                    <div className="row py-4" >
                        <div className="col-md-3 col-sm-12 py-5">
                            <a href="/"><i className="fas fa-users" id="happy-client"></i></a>
                            <h2><CountUp start={10} end={250} duration={5} /></h2>
                            <h3>Happy Clients</h3>
                        </div>
                        <div className="col-md-3 col-sm-12 py-5">
                            <a href="/"><i className="fas fa-thumbs-up" id="happy-client"></i></a>
                            <h2><CountUp start={10} end={750} duration={5} /></h2>
                            <h3>Projects Completed</h3>
                        </div>
                        <div className="col-md-3 col-sm-12 py-5">
                            <a href="/"><i class="fas fa-edit" id="happy-client"></i></a>
                            <h2><CountUp start={10} end={1100} duration={5} /></h2>
                            <h3>Lines Of Code</h3>
                        </div>
                        <div className="col-md-3 col-sm-12 py-5">
                            <a href="/"><i class="fas fa-trophy" id="happy-client"></i></a>
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
                            <h5>PORTFOLIO</h5>
                            <h1>WORK I HAVE DONE</h1>
                        </div>
                    </div>
                    <div className="row mb-2 py-5">
                        <div className="col-md-4 col-sm-12 pt-3">
                            <img src={pp} alt="company-3" className="img-fluid" ></img>
                        </div>
                        <div className="col-md-4 col-sm-1 pt-3">
                            <img src={mukesh} alt="company4" className="img-fluid" ></img>
                        </div>
                        <div className="col-md-4 col-sm-12 pt-3">
                            <img src={mukesh1} alt="company4" className="img-fluid" ></img>
                        </div>
                        <div className="col-md-4 col-sm-12 pt-3">
                            <img src={sk} alt="company5" className="img-fluid" ></img>
                        </div>
                        <div className="col-md-4 col-sm-12 pt-3">
                            <img src={sk1} alt="syam" className="img-fluid"></img>
                        </div>
                        <div className="col-md-4 col-sm-12 pt-3">
                            <img src={sk5} alt="mukesh3" className="img-fluid"  ></img>
                        </div>
                    </div>
                </div>
            </section>
            <section id="blog" style={{ backgroundColor: '#f2f2f2' }}>
                <div className="container py-3">
                    <div className="row py-5">
                        <div style={{ textAlign: 'center' }}>
                            <h5>BLOGS</h5>
                            <h1>LATEST NEWS</h1>
                        </div>
                    </div>
                    <div className="row py-5 justify-content-center">
                        <div className="col-lg-4">
                            <div className="card mb-5" style={{ border: 'none', }}>
                                <img src={company5} alt="card1" className="img-fluid"></img>
                                <div className="container pt-5">
                                    <h4 className="py-3">The best of web design and web design inspiration</h4>
                                    <p className="py-4">Having an in-depth knowledge including advanced HTML5, CSS3, Bootstrap5, React,
                                    JavaScript I aim to make a difference through my creative solution...</p>
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
                            <div className="card mb-5" style={{ border: 'none', backgroundColor: 'white' }}>
                                <img src={company3} alt="card2" className="img-fluid"></img>
                                <div className="container pt-5">
                                    <h4 className="py-3">The best of web design and web design inspiration</h4>
                                    <p className="py-4">Having an in-depth knowledge including advanced HTML5, CSS3, Bootstrap5, React,
                                    JavaScript I aim to make a difference through my creative solution...</p>
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
                            <div className="card mb-5" style={{ border: 'none', backgroundColor: 'white' }}>
                                <img src={company4} alt="card3" className="img-fluid"></img>
                                <div className="container pt-5">
                                    <h4 className="py-3">The best of web design and web design inspiration</h4>
                                    <p className="py-4">Having an in-depth knowledge including advanced HTML5, CSS3, Bootstrap5, React,
                                    JavaScript I aim to make a difference through my creative solution...</p>
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
            <section className='' style={{ backgroundImage: `url(${mks3})`,backgroundRepeat:"no-repeat", backgroundSize:'cover',textAlign:'center',alignItems:'center' }} >
                <div className="container">
                    <div className="row " style={{ textAlign: 'center', alignItems: 'center', position: 'relative', color: 'white', fontWeight: "800px",fontSize:"20px", backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundAttachment: "fixed", overflow: 'hidden' }}>
                        <Carousel className="py-5">
                            <Carousel.Item className="py-5">
                                <img src={mukesh} alt="mukesh-carousel" className="rounded-pill" style={{ width: "130px", height: '130px' }}></img>
                                <h3>Mr Mukesh Verma</h3>
                                <p>UI/UX Designer and developer</p>
                                <p>Hello! I’m Mukesh Verma from Hisar, India. I code and create web elements
                                    for amazing people around the world. I like work with new people.
                                    New people are new experiences. Web Developer with over 1 years of experience.
                                    Experienced with all stages of the development cycle for dynamic web projects.
                                    Having an in-depth knowledge including advanced HTML5, CSS3, Bootstrap5, React,
                                    JavaScript I aim to make a difference through my creative solution.
                                </p>
                            </Carousel.Item>
                            <Carousel.Item className="py-5">
                                <img src={seema} alt="mukesh-carousel" className="rounded-pill" style={{ width: "130px", height: '130px' }}></img>
                                <h3>Miss Seema </h3>
                                <p>UI/UX Designer and developer</p>
                                <p>Hello! I’m Seema from Hisar, India. I code and create web elements
                                    for amazing people around the world. I like work with new people.
                                    New people are new experiences. Web Developer with over 1 years of experience.
                                    Experienced with all stages of the development cycle for dynamic web projects.
                                    Having an in-depth knowledge including advanced HTML5, CSS3, Bootstrap5, React,
                                    JavaScript I aim to make a difference through my creative solution.
                                </p>
                            </Carousel.Item>
                            <Carousel.Item className="py-5">
                                <img src={pp} alt="mukesh-carousel" className="rounded-pill" style={{ width: "130px", height: '130px' }}></img>
                                <h3>Mr Md Rizwan</h3>
                                <p>UI/UX Designer and developer</p>
                                <p>Hello! I’m Md Rizwan from Hisar, India. I code and create web elements
                                    for amazing people around the world. I like work with new people.
                                    New people are new experiences. Web Developer with over 1 years of experience.
                                    Experienced with all stages of the development cycle for dynamic web projects.
                                    Having an in-depth knowledge including advanced HTML5, CSS3, Bootstrap5, React,
                                    JavaScript I aim to make a difference through my creative solution.
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
                            <h5>CONTACT</h5>
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
                                <input type="text" className="form-control" style={{ border: "none", height: "100px", borderBottom: "2px solid black", borderRadius: "0px", boxShadow: "none" }} />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div style={{ textAlign: 'center', alignItems: 'center', fontWeight: "250x", border: 'none' }}>
                            <button type="button" style={{ textAlign: 'center', border: 'none', backgroundColor: 'black', color: 'white', height: '50px', width: '150px' }} >SEND MESSAGE</button>
                        </div>
                    </div>
                </div>
            </section>
            <section id='footer' className="pt-5 bg-dark" style={{ color: 'white' }}>
                <div className="container pt-5">
                    <div className="row py-3" style={{ textAlign: 'center', borderBottom: "1px solid " }}>
                        <div className="col-lg-3">
                            <h5>Mukesh Kumar</h5>
                            <p>Web developer and Designer</p>
                        </div>
                        <div className="col-lg-3">
                            <h5>Phone No.</h5>
                            <p>(+91)9729739811</p>
                        </div>

                        <div className="col-lg-3">
                            <h5>Email</h5>
                            <p>mkverma97297@gmail.com</p>
                        </div>
                        <div className="col-lg-3">
                            <h5>Address</h5>
                            <p>Gill Telecom Service Hisar Haryana India</p>
                        </div>
                    </div>
                    <div className="row pt-5" style={{ textAlign: 'center', alignItems: 'center' }}>
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
