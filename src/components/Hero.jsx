import dp from '../assets/Dp.png'
import '../css/index.css'
import { Typewriter } from 'react-simple-typewriter';

export default function Hero() {
    return (
        <div className="bg">
            <div className='container py-4 py-md-5'>
                <div className="row justify-content-center">
                    <div className="col-12 col-md-10 col-lg-8 d-flex flex-column align-items-center text-center">
                        {/* Profile Image */}
                        <div className="my-4 my-md-5">
                            <img 
                                src={dp} 
                                className="rounded-circle dp" 
                                style={{
                                    width: '180px',
                                    height: '180px',
                                    objectFit: 'cover',
                                    border: '3px solid #ffffff20'
                                }} 
                                alt="Sanjaysudhan Profile" 
                            />
                        </div>

                        {/* Heading and Typewriter */}
                        <h4 className='mb-3 mb-md-4'>Hi, I am Sanjaysudhan Sivashunmugam</h4>
                        <h1 className='mb-3 mb-md-4' style={{ fontSize: 'clamp(1.5rem, 5vw, 2.2rem)' }}>
                            I am a{' '}
                            <span style={{ color: 'red', fontWeight: 'bold' }}>
                                <Typewriter
                                    words={['Aspiring Software Developer', 'Freelance Web Developer', 'Problem Solver', 'Leader']}
                                    loop={Infinity}
                                    cursor
                                    cursorStyle='|'
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1100}
                                />
                            </span>
                        </h1>

                        {/* Description */}
                        <p className='fs-5 mb-4 mb-md-5 px-2 px-md-0' style={{ 
                            textAlign: "center",
                            lineHeight: '1.6'
                        }}>
                            Focused on building real-world projects that scale, crafting industry-grade software solutions, and delivering modern web applications using the latest technologies with a problem-solving and leadership-driven mindset.
                        </p>

                        {/* Buttons */}
                        <div className="d-flex flex-wrap gap-3 justify-content-center mt-2 mb-4 mb-md-5">
                            <a href='#contact' className="btn btn-light px-4 py-2 d-flex align-items-center gap-2">
                                Contact Me 
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                                </svg>
                            </a>
                            <a href='https://github.com/SanjaysudhanSivashunmugam' className="btn btn-light px-4 py-2 d-flex align-items-center gap-2">
                                Github
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}