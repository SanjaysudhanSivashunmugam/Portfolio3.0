import Picture from '../assets/About.png'
export default function About() {
    return (
        <div style={{ backgroundColor: "#111827" }} id="about">
            <div className="container d-flex flex-column align-items-center text-light" >
                <span className="px-4 py-1 rounded-pill text-light my-3" style={{ backgroundColor: "#374151" }}>About me</span>
                <div className="d-lg-flex ">
                    <div className="col-12 col-lg-6 mb-5 d-flex justify-content-center align-items-center">
                        <img src={Picture} alt="" className='rounded' width='400px' height={"600px"}/>
                    </div>
                    <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center">
                        <p className='lh-lg' style={{ textAlign: "justify" }}>I’m a Mechanical Engineering student with a deep-rooted passion for coding, programming, and modern technology. Driven by curiosity and a desire to innovate, I actively bridge the gap between mechanical systems and software development to create meaningful, real-world solutions. My journey in tech is powered by a strong foundation in engineering principles and a growing expertise in web development, software design, and automation. Whether it's developing scalable web applications or exploring the intersection of hardware and code, I’m constantly learning and applying my skills to solve complex challenges. I'm actively seeking opportunities—internships, freelance projects, and collaborations—where I can contribute, grow, and make a lasting impact in the evolving tech landscape. Let’s connect to build something innovative at the crossroads of mechanical engineering and technology</p>
                    </div>
                </div>
            </div>
        </div>
    )
}