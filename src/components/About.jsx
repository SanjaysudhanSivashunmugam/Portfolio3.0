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
                            <p
                                className="lh-lg"
                                style={{
                                    textAlign: "justify",
                                    fontSize: "1rem"
                                }}
                            >
                                <strong>My name is Sanjaysudhan Sivashanmugam</strong>, and I am a Mechanical Engineering student with a deep-rooted passion for coding, programming, and modern technology. Driven by curiosity and a desire to innovate, I actively bridge the gap between mechanical engineering systems and software development to create meaningful, real-world solutions.
                                <br /><br />

                                My journey in technology is built on a strong foundation in engineering principles, combined with growing expertise in software development, web development, automation, and programming. Whether it’s developing scalable web applications or exploring the intersection of hardware, mechanical systems, and code, I am constantly learning and applying my skills to solve complex technical challenges.
                                <br /><br />

                                I am actively seeking opportunities such as internships, freelance projects, and technical collaborations where I can contribute, grow, and create impact in the evolving tech industry. Let’s connect to build innovative solutions at the intersection of mechanical engineering and modern technology.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}