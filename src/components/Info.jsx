export default function Info() {
    return (
        <div style={{ backgroundColor: "#030712" }} id="contact">
            <div className="container py-5 text-light">
                <div className="d-flex flex-column align-items-center">
                    {/* Header Section */}
                    <div className="text-center mb-5">
                        <span className="px-4 py-2 rounded-pill d-inline-block mb-3"
                            style={{
                                backgroundColor: "#374151",
                                fontSize: "1.1rem",
                                letterSpacing: "1px"
                            }}>
                            Get in touch
                        </span>
                        <h2 className="display-5 fw-bold mb-3">Let's Build Something Amazing</h2>
                        <p className="fs-5 text-center mb-0" style={{ maxWidth: "600px" }}>
                            What's next? Feel free to reach out if you have a project in mind, need a developer,
                            or just want to chat about technology and innovation.
                        </p>
                    </div>

                    <div className="row g-4 w-100 justify-content-center">
                        {/* Contact Info Section */}
                        <div className="col-12 col-md-6 col-lg-5">
                            <div className="p-4 p-lg-5 rounded" style={{
                                backgroundColor: "#111827",
                                height: "100%",
                                border: "1px solid #1f2937"
                            }}>
                                <div className="mb-5">
                                    <h3 className="fs-4 mb-4" style={{ color: "red" }}>Contact Information</h3>

                                    <div className="d-flex align-items-center gap-3 mb-4 p-3 rounded" style={{ backgroundColor: "#1f2937" }}>
                                        <div style={{
                                            width: "50px",
                                            height: "50px",
                                            borderRadius: "50%",
                                            backgroundColor: "#374151",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center"
                                        }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="red" viewBox="0 0 16 16">
                                                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                                            </svg>
                                        </div>
                                        <div className="overflow-auto">
                                            <p className="mb-0" style={{ fontSize: "1.05rem" }}>sanjaysudhan.sivashunmugam@gmail.com</p>
                                        </div>
                                    </div>

                                    <div className="d-flex align-items-center gap-3 mb-4 p-3 rounded" style={{ backgroundColor: "#1f2937" }}>
                                        <div style={{
                                            width: "50px",
                                            height: "50px",
                                            borderRadius: "50%",
                                            backgroundColor: "#374151",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center"
                                        }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="red" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="mb-0" style={{ fontSize: "1.05rem" }}>+91 77085 98488</p>
                                        </div>
                                    </div>

                                    <div className="mt-5">
                                        <h4 className="fs-5 mb-4">Find me on social media</h4>
                                        <div className="d-flex gap-3">
                                            <a href="https://github.com/SanjaysudhanSivashunmugam/" className="social-icon" style={{
                                                width: "45px",
                                                height: "45px",
                                                borderRadius: "50%",
                                                backgroundColor: "#1f2937",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                transition: "all 0.3s ease"
                                            }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="red" viewBox="0 0 16 16">
                                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                                                </svg>
                                            </a>
                                            <a href="https://www.linkedin.com/in/sanjaysudhan-sivashunmugam-a5a901255/" className="social-icon" style={{
                                                width: "45px",
                                                height: "45px",
                                                borderRadius: "50%",
                                                backgroundColor: "#1f2937",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                transition: "all 0.3s ease"
                                            }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="red" viewBox="0 0 16 16">
                                                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                                                </svg>
                                            </a>
                                            <a href="#" className="social-icon" style={{
                                                width: "45px",
                                                height: "45px",
                                                borderRadius: "50%",
                                                backgroundColor: "#1f2937",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                transition: "all 0.3s ease"
                                            }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="red" viewBox="0 0 16 16">
                                                    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form Section */}
                        <div className="col-12 col-md-6 col-lg-7">
                            <div className="p-4 p-lg-5 rounded" style={{
                                backgroundColor: "#111827",
                                border: "1px solid #1f2937"
                            }}>
                                <h3 className="fs-4 mb-4" style={{ color: "red" }}>Send me a message</h3>
                                <form action="https://api.web3forms.com/submit" method="POST">
                                    <input type="hidden" name="access_key" value="a381985b-7796-4a3a-9973-d4a01c7f7a82" />

                                    <div className="mb-4">
                                        <label htmlFor="inputName" className="form-label" style={{ color: "#fff" }}>Name</label>
                                        <input type="text" id="inputName" name="name"
                                            className="form-control py-3 border-0"
                                            style={{
                                                backgroundColor: "#1f2937",
                                                color: "#fff",
                                            }}
                                            required />
                                    </div>

                                    <div className="mb-4">
                                        <label htmlFor="inputEmail" className="form-label" style={{ color: "#fff" }}>Email</label>
                                        <input type="email" id="inputEmail" name="email"
                                            className="form-control py-3 border-0"
                                            style={{
                                                backgroundColor: "#1f2937",
                                                color: "#fff",
                                            }}
                                            required />
                                    </div>

                                    <div className="mb-4">
                                        <label htmlFor="inputMobile" className="form-label" style={{ color: "#fff" }}>Contact Number</label>
                                        <input type="number" id="inputMobile" name="mobile"
                                            className="form-control py-3 border-0"
                                            style={{
                                                backgroundColor: "#1f2937",
                                                color: "#fff",
                                            }}
                                            required />
                                    </div>

                                    <div className="mb-4">
                                        <label htmlFor="inputMessage" className="form-label" style={{ color: "#fff" }}>Message</label>
                                        <textarea id="inputMessage" name="message" rows="5"
                                            className="form-control border-0"
                                            style={{
                                                backgroundColor: "#1f2937",
                                                color: "#fff",
                                            }}></textarea>
                                    </div>

                                    <button type="submit"
                                        className="btn w-100 py-3 fw-bold mt-3"
                                        style={{
                                            backgroundColor: "red",
                                            color: "#fff",
                                            transition: "all 0.3s ease",
                                            border: "none"
                                        }}
                                       >
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}