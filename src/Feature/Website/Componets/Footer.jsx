import React from 'react'

function Footer() {
    return (
        <div>
            <footer>
                {/* Footer Start*/}
                <div className="footer-area footer-padding">
                    <div className="container-fluid ">
                        <div className="row d-flex justify-content-between">
                            <div className="col-xl-3 col-lg-3 col-md-8 col-sm-8">
                                <div className="single-footer-caption mb-50">
                                    <div className="single-footer-caption mb-30">
                                        {/* logo */}
                                        <div className="footer-logo mb-35">
                                            <a href="index.html"><img src="Website/img/logo/logo2_footer.png" alt /></a>
                                        </div>
                                        <div className="footer-tittle">
                                            <div className="footer-pera">
                                                <p>Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</p>
                                            </div>
                                        </div>
                                        {/* social */}
                                        <div className="footer-social">
                                            <a href="#"><i className="fab fa-twitter" /></a>
                                            <a href="https://bit.ly/sai4ull"><i className="fab fa-facebook-f" /></a>
                                            <a href="#"><i className="fab fa-pinterest-p" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4">
                                <div className="single-footer-caption mb-50">
                                    <div className="footer-tittle">
                                        <h4>Quick links</h4>
                                        <ul>
                                            <li><a href="#">Image Licensin</a></li>
                                            <li><a href="#">Style Guide</a></li>
                                            <li><a href="#">Privacy Policy</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4">
                                <div className="single-footer-caption mb-50">
                                    <div className="footer-tittle">
                                        <h4>Shop Category</h4>
                                        <ul>
                                            <li><a href="#">Image Licensin</a></li>
                                            <li><a href="#">Style Guide</a></li>
                                            <li><a href="#">Privacy Policy</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4">
                                <div className="single-footer-caption mb-50">
                                    <div className="footer-tittle">
                                        <h4>Pertners</h4>
                                        <ul>
                                            <li><a href="#">Image Licensin</a></li>
                                            <li><a href="#">Style Guide</a></li>
                                            <li><a href="#">Privacy Policy</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4">
                                <div className="single-footer-caption mb-50">
                                    <div className="footer-tittle">
                                        <h4>Get in touch</h4>
                                        <ul>
                                            <li><a href="#">(89) 982-278 356</a></li>
                                            <li><a href="#">demo@colorlib.com</a></li>
                                            <li><a href="#">67/A, Colorlib, Green road, NYC</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* footer-bottom area */}
                <div className="footer-bottom-area">
                    <div className="container">
                        <div className="footer-border">
                            <div className="row d-flex align-items-center">
                                <div className="col-xl-12 ">
                                    <div className="footer-copy-right text-center">
                                        <p>{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                                            Copyright © All rights reserved | This template is made with <i className="fa fa-heart" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                                            {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Footer End*/}
            </footer>
            <div>
                <div className="search-model-box">
                    <div className="h-100 d-flex align-items-center justify-content-center">
                        <div className="search-close-btn">+</div>
                        <form className="search-model-form">
                            <input type="text" id="search-input" placeholder="Searching key....." />
                        </form>
                    </div>
                </div>
                {/* Search model end */}
                {/* Scroll Up */}
                <div id="back-top">
                    <a title="Go to Top" href="#"> <i className="fas fa-level-up-alt" /></a>
                </div>
            </div>
        </div>
    )
}

export default Footer