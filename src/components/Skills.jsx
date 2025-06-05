import java from '../assets/java.png'
import html from '../assets/html.png'
import css from '../assets/css.png'
import js from '../assets/javascript.png'
import react from '../assets/reactjs.png'
import bootstrap from '../assets/bootstrap.png'
import tailwind from '../assets/tailwind.png'
import node from '../assets/node.png'
import express from '../assets/express.png'
import firebase from '../assets/firebase.png'
import mysql from '../assets/mysql.png'
import '../css/index.css'
export default function Skills() {
    return (
        <div className="bg" id='skill'>
            <div className="container text-light" >
                <div className="d-flex align-items-center flex-column">
                    <span className="px-4 py-1 rounded-pill text-light mt-4 mb-3" style={{ backgroundColor: "#374151" }}>Skills</span>
                    <p className='fs-5'>The skills, tools and technologies I am really good at:</p>
                </div>
                <div className="row d-flex justify-content-around mb-4">
                    <div className="col-6 col-md-4 col-lg-2 d-flex flex-column align-items-center skill-icon">
                        <img src={java} width={"100px"} height={"100px"} alt="" />
                        <p className=''>Java</p>
                    </div>
                    <div className="col-6 col-md-4 col-lg-2 d-flex flex-column align-items-center skill-icon">
                        <img src={html} width={"100px"} height={"100px"} alt="" />
                        <p>HTML</p>
                    </div>
                    <div className="col-6 col-md-4 col-lg-2 d-flex flex-column align-items-center skill-icon">
                        <img src={css} width={"100px"} height={"100px"} alt="" />
                        <p>CSS</p>
                    </div>
                    <div className="col-6 col-md-4 col-lg-2 d-flex flex-column align-items-center skill-icon">
                        <img src={js} width={"100px"} height={"100px"} alt="" />
                        <p>Javascript</p>
                    </div>
                    <div className="col-6 col-md-4 col-lg-2 d-flex flex-column align-items-center skill-icon">
                        <img src={react} width={"100px"} height={"100px"} alt="" />
                        <p>React JS</p>
                    </div>
                    <div className="col-6 col-md-4 col-lg-2 d-flex flex-column align-items-center skill-icon">
                        <img src={bootstrap} width={"100px"} height={"100px"} alt="" />
                        <p>Bootstrap</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 col-md-4 col-lg-2 d-flex flex-column align-items-center skill-icon">
                        <img src={tailwind} width={"100px"} height={"100px"} alt="" />
                        <p>Tailwind CSS</p>
                    </div>
                    <div className="col-6 col-md-4 col-lg-2 d-flex flex-column align-items-center skill-icon">
                        <img src={node} width={"100px"} height={"100px"} alt="" />
                        <p>Node JS</p>
                    </div>
                    <div className="col-6 col-md-4 col-lg-2 d-flex flex-column align-items-center skill-icon">
                        <img src={express} width={"100px"} height={"100px"} alt="" />
                        <p>Express JS</p>
                    </div>
                    <div className="col-6 col-md-4 col-lg-2 d-flex flex-column align-items-center skill-icon">
                        <img src={firebase} width={"100px"} height={"100px"} alt="" />
                        <p>Firebase</p>
                    </div>
                    <div className="col-6 col-md-4 col-lg-2 d-flex flex-column align-items-center skill-icon">
                        <img src={mysql} width={"100px"} height={"100px"} alt="" />
                        <p>MYSQL</p>
                    </div>
                    <div className="col-6 col-md-4 col-lg-2 d-flex flex-column align-items-center skill-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                        </svg>
                        <p>Github</p>
                    </div>
                </div>
            </div>
        </div>
    )
}