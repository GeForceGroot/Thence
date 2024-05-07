import React, {useEffect} from 'react'
import ask from '../images/ask.png'
import bgA from '../images/Union.png'
import '../style/faq.css'

const Faq = () => {
    useEffect(() => {
        const items = document.querySelectorAll(".accordion button");

        function toggleAccordion() {
            const itemToggle = this.getAttribute('aria-expanded');

            items.forEach(item => {
                item.setAttribute('aria-expanded', 'false');
            });

            if (itemToggle === 'false') {
                this.setAttribute('aria-expanded', 'true');
            }
        }

        items.forEach(item => item.addEventListener('click', toggleAccordion));

        // Cleanup function
        return () => {
            items.forEach(item => item.removeEventListener('click', toggleAccordion));
        };
    }, []);
    return (
        <>
            <div className='container' style={{ marginTop: '50px', backgroundColor: "#E8EEE7", borderRadius: "40px    " }}>
                <div className='row'>
                    <div className='col'>
                        <img src={ask} style={{ marginTop: '50px', marginLeft: '50px' }} width={"405px"} height={'111px'} alt="ask" />
                        <img src={bgA} style={{ marginTop: '50px' }} width={"491px"} height={'314.61px'} alt="ask" />
                    </div>
                    <div className='col'>
                        <div className="accordion" style={{ marginTop: "125px" }}>
                            <div className="accordion-item">
                                <button id="accordion-button-1" aria-expanded="false"><span className="accordion-title">Do you offer freelancers?</span><span className="icon" aria-hidden="true"></span></button>
                                <div className="accordion-content">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.</p>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <button id="accordion-button-2" aria-expanded="false"><span className="accordion-title">What’s the guarantee that I will be satisfied
                                    with the hired talent?</span><span className="icon" aria-hidden="true"></span></button>
                                <div className="accordion-content">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.</p>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <button id="accordion-button-3" aria-expanded="false"><span className="accordion-title">Can I hire multiple talents at once?</span><span className="icon" aria-hidden="true"></span></button>
                                <div className="accordion-content">
                                    <p>If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution.</p>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <button id="accordion-button-4" aria-expanded="false"><span className="accordion-title">Why should I not go to an agency directly?</span><span className="icon" aria-hidden="true"></span></button>
                                <div className="accordion-content">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.</p>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <button id="accordion-button-5" aria-expanded="false"><span className="accordion-title">Who can help me pick a right skillset and duration for me?</span><span className="icon" aria-hidden="true"></span></button>
                                <div className="accordion-content">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Faq
