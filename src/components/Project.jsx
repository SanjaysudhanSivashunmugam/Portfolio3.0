import p1 from '../assets/p1.png';

export default function Project() {
    return (
        <div className="text-light" style={{ backgroundColor: "#111827" }}>
            <div className="container">
                <div className="d-flex flex-column align-items-center">
                    <span className="px-4 py-1 rounded-pill text-light mt-4 mb-3" style={{ backgroundColor: "#374151" }}>
                        Projects
                    </span>
                    <p className="fs-5 text-center">Some of the noteworthy projects I have built:</p>
                </div>

                {/* Project 1 */}
                <div className="d-flex flex-column flex-lg-row mb-5">
                    <div className="col-lg-6 p-4 rounded-start-4" style={{ backgroundColor: "#374151" }}>
                        <img src={p1} alt="Project Screenshot" width="100%" className="rounded-4" />
                    </div>
                    <div className="col-lg-6 p-4 rounded-end-4" style={{ backgroundColor: "#1F2937" }}>
                        <h2>Project Title</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium expedita repellat corrupti
                            quam quo, animi commodi tenetur debitis officiis minus.
                        </p>
                        <div className="d-flex flex-wrap gap-2 mb-3">
                            {Array(6).fill("Skill").map((skill, i) => (
                                <span key={i} className="px-3 py-1 rounded-pill text-light" style={{ backgroundColor: "#374151" }}>
                                    {skill}
                                </span>
                            ))}
                        </div>
                        <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Visit Project">
                            <svg xmlns="http://www.w3.org/2000/svg" color="white" width="25" height="25" fill="currentColor" className="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5" />
                                <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Project 2 (Reversed Layout on Large Screens) */}
                <div className="d-flex flex-column flex-lg-row-reverse mb-5">
                    <div className="col-lg-6 p-4 rounded-start-4" style={{ backgroundColor: "#374151" }}>
                        <img src={p1} alt="Project Screenshot" width="100%" className="rounded-4" />
                    </div>
                    <div className="col-lg-6 p-4 rounded-end-4" style={{ backgroundColor: "#1F2937" }}>
                        <h2>Project Title</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium expedita repellat corrupti
                            quam quo, animi commodi tenetur debitis officiis minus.
                        </p>
                        <div className="d-flex flex-wrap gap-2 mb-3">
                            {Array(6).fill("Skill").map((skill, i) => (
                                <span key={i} className="px-3 py-1 rounded-pill text-light" style={{ backgroundColor: "#374151" }}>
                                    {skill}
                                </span>
                            ))}
                        </div>
                        <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Visit Project">
                            <svg xmlns="http://www.w3.org/2000/svg" color="white" width="25" height="25" fill="currentColor" className="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5" />
                                <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Add more projects below in the same pattern */}
            </div>
        </div>
    );
}