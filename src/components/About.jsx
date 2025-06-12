import Picture from '../assets/About.png';

export default function About() {
    return (
        <div style={{ backgroundColor: "#111827" }} id="about">
            <div className="container py-5 d-flex flex-column align-items-center text-light">
                {/* Section Title */}
                <span className="px-4 py-2 rounded-pill text-light mb-4 mb-md-5" 
                      style={{ 
                          backgroundColor: "#374151",
                          fontSize: "1.1rem"
                      }}>
                    About me
                </span>
                
                {/* Content Container */}
                <div className="row g-4 g-lg-5 justify-content-center align-items-center">
                    {/* Image Column - Now appears first on mobile */}
                    <div className="col-12 col-lg-6 order-1 order-lg-0">
                        <div className="d-flex justify-content-center">
                            <img 
                                src={Picture} 
                                alt="Profile" 
                                className='rounded img-fluid'
                                style={{
                                    maxWidth: "100%",
                                    height: "auto",
                                    maxHeight: "500px",
                                    objectFit: "cover"
                                }}
                            />
                        </div>
                    </div>
                    
                    {/* Text Column */}
                    <div className="col-12 col-lg-6 order-0 order-lg-1">
                        <div className="px-3 px-md-0">
                            <p className='lh-lg' style={{ 
                                textAlign: "justify",
                                fontSize: "1rem",
                                lineHeight: "1.7"
                            }}>
                                I'm a Mechanical Engineering student with a deep-rooted passion for coding, programming, and modern technology. Driven by curiosity and a desire to innovate, I actively bridge the gap between mechanical systems and software development to create meaningful, real-world solutions.
                                <br /><br />
                                My journey in tech is powered by a strong foundation in engineering principles and a growing expertise in web development, software design, and automation. Whether it's developing scalable web applications or exploring the intersection of hardware and code, I'm constantly learning and applying my skills to solve complex challenges.
                                <br /><br />
                                I'm actively seeking opportunities—internships, freelance projects, and collaborations—where I can contribute, grow, and make a lasting impact in the evolving tech landscape. Let's connect to build something innovative at the crossroads of mechanical engineering and technology.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}