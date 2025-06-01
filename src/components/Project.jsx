import p1 from '../assets/p1.png';
import p2 from '../assets/p2.png';
import p3 from '../assets/p3.png';
import p4 from '../assets/p4.png';

export default function Project() {
    return (
        <div className="text-light" style={{ backgroundColor: "#111827" }}>
            <div className="container pb-5">
                <div className="d-flex flex-column align-items-center">
                    <span className="px-4 py-1 rounded-pill text-light mt-4 mb-3" style={{ backgroundColor: "#374151" }}>
                        Projects
                    </span>
                    <p className="fs-5 text-center">Some of the noteworthy projects I have built:</p>
                </div>

                {/* Project 1 */}
                <div className="d-flex flex-column flex-lg-row mb-5">
                    <div className="col-lg-6 p-4" style={{ backgroundColor: "#374151" }}>
                        <img src={p1} alt="Project Screenshot" width="100%" className="rounded-4" />
                    </div>
                    <div className="col-lg-6 p-4" style={{ backgroundColor: "#1F2937" }}>
                        <h2>Health Track - IOT Based health monitoring system</h2>
                        <p style={{textAlign:"justify"}}>
                            Designed and developed a health monitoring system using an IoT device housed in a 3D-printed enclosure. The device captures real-time health metrics (like heart rate and temperature) and syncs data to a Firebase Realtime Database. Built a responsive web dashboard to display live readings for remote health monitoring.
                        </p>
                        <div className="d-flex flex-wrap gap-2 mb-3">
                            <span className="px-3 py-1 rounded-pill text-light" style={{ backgroundColor: "#374151" }}>HTML</span>
                            <span className="px-3 py-1 rounded-pill text-light" style={{ backgroundColor: "#374151" }}>CSS</span>
                            <span className="px-3 py-1 rounded-pill text-light" style={{ backgroundColor: "#374151" }}>Tailwind CSS</span>
                            <span className="px-3 py-1 rounded-pill text-light" style={{ backgroundColor: "#374151" }}>Javascript</span>
                            <span className="px-3 py-1 rounded-pill text-light" style={{ backgroundColor: "#374151" }}>React JS</span>
                            <span className="px-3 py-1 rounded-pill text-light" style={{ backgroundColor: "#374151" }}>Node JS</span>
                            <span className="px-3 py-1 rounded-pill text-light" style={{ backgroundColor: "#374151" }}>Express JS</span>
                            <span className="px-3 py-1 rounded-pill text-light" style={{ backgroundColor: "#374151" }}>Firebase</span>
                        </div>
                        <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Visit Project">
                            <svg xmlns="http://www.w3.org/2000/svg" color="white" width="25" height="25" fill="currentColor" className="skill-icon bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5" />
                                <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Project 2 */}
                <div className="d-flex flex-column flex-lg-row-reverse mb-5">
                    <div className="col-lg-6 p-4" style={{ backgroundColor: "#374151" }}>
                        <img src={p2} alt="Project Screenshot" width="100%" className="rounded-4" />
                    </div>
                    <div className="col-lg-6 p-4" style={{ backgroundColor: "#1F2937" }}>
                        <h2>IoT-based Smart Parking System</h2>
                        <p style={{textAlign:"justify"}}>
                            The IoT-based Smart Parking System monitors and displays real-time parking slot availability in malls. Sensors detect vehicle presence and update status in Firebase Realtime Database. A React web app built with HTML, CSS, and JavaScript shows live availability. Node.js and Express.js handle backend communication. This system improves parking efficiency and reduces congestion.
                        </p>
                        <div className="d-flex flex-wrap gap-2 mb-3">
                            <span className="px-3 py-1 rounded-pill text-light" style={{ backgroundColor: "#374151" }}>HTML</span>
                            <span className="px-3 py-1 rounded-pill text-light" style={{ backgroundColor: "#374151" }}>CSS</span>
                            <span className="px-3 py-1 rounded-pill text-light" style={{ backgroundColor: "#374151" }}>Tailwind CSS</span>
                            <span className="px-3 py-1 rounded-pill text-light" style={{ backgroundColor: "#374151" }}>Javascript</span>
                            <span className="px-3 py-1 rounded-pill text-light" style={{ backgroundColor: "#374151" }}>React JS</span>
                            <span className="px-3 py-1 rounded-pill text-light" style={{ backgroundColor: "#374151" }}>Node JS</span>
                            <span className="px-3 py-1 rounded-pill text-light" style={{ backgroundColor: "#374151" }}>Express JS</span>
                            <span className="px-3 py-1 rounded-pill text-light" style={{ backgroundColor: "#374151" }}>Firebase</span>
                        </div>
                        <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Visit Project">
                            <svg xmlns="http://www.w3.org/2000/svg" color="white" width="25" height="25" fill="currentColor" className="bi bi-box-arrow-up-right skill-icon" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5" />
                                <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="d-flex flex-column flex-lg-row mb-5">
                    <div className="col-lg-6 p-4" style={{ backgroundColor: "#374151" }}>
                        <img src={p3} alt="Project Screenshot" width="100%" className="rounded-4" />
                    </div>
                    <div className="col-lg-6 p-4" style={{ backgroundColor: "#1F2937" }}>
                        <h2>Devorhythm-Edtech Platform Landing Page</h2>
                        <p style={{textAlign:"justify"}}>
                            Developed a modern, mobile-responsive landing page for Devorhythm, an innovative EdTech startup, using React.js. Focused on delivering a smooth user experience and dynamic design to effectively present their vision, services, and educational impact.
                        </p>
                        <div className="d-flex flex-wrap gap-2 mb-3">
                            <span className="px-3 py-1 rounded-pill text-light" style={{ backgroundColor: "#374151" }}>HTML</span>
                            <span className="px-3 py-1 rounded-pill text-light" style={{ backgroundColor: "#374151" }}>CSS</span>
                            <span className="px-3 py-1 rounded-pill text-light" style={{ backgroundColor: "#374151" }}>Tailwind CSS</span>
                            <span className="px-3 py-1 rounded-pill text-light" style={{ backgroundColor: "#374151" }}>React JS</span>
                        </div>
                        <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Visit Project">
                            <svg xmlns="http://www.w3.org/2000/svg" color="white" width="25" height="25" fill="currentColor" className="skill-icon bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5" />
                                <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="d-flex flex-column flex-lg-row-reverse">
                    <div className="col-lg-6 p-4" style={{ backgroundColor: "#374151" }}>
                        <img src={p4} alt="Project Screenshot" width="100%" className="rounded-4" />
                    </div>
                    <div className="col-lg-6 p-4" style={{ backgroundColor: "#1F2937" }}>
                        <h2>Amazon Clone</h2>
                        <p style={{textAlign:"justify"}}>
                            Developed an Amazon-inspired e-commerce website using HTML, CSS, and JavaScript, replicating key UI components such as the header, image slider, product cards, scrolling product sections, and footer. The project focuses on frontend design, layout structuring, and enhancing user interface development skills by mimicking the look and feel of the original platform.
                        </p>
                        <div className="d-flex flex-wrap gap-2 mb-3">
                            <span className="px-3 py-1 rounded-pill text-light" style={{ backgroundColor: "#374151" }}>HTML</span>
                            <span className="px-3 py-1 rounded-pill text-light" style={{ backgroundColor: "#374151" }}>CSS</span>
                            <span className="px-3 py-1 rounded-pill text-light" style={{ backgroundColor: "#374151" }}>Javascript</span>
                        </div>
                        <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Visit Project">
                            <svg xmlns="http://www.w3.org/2000/svg" color="white" width="25" height="25" fill="currentColor" className="bi bi-box-arrow-up-right skill-icon" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5" />
                                <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}