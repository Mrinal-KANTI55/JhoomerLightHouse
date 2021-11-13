import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
library.add(fab, faCoffee);

const Footer = () => {
    const facebook = <FontAwesomeIcon icon={['fab', 'facebook']} />
    const Google = <FontAwesomeIcon icon={['fab', 'google']} />
    const Github = <FontAwesomeIcon icon={['fab', 'github']} />
    return (
        <div>
            <div className="">
                <footer
                    className="text-center text-lg-start text-white"
                    style={{ backgroundColor: '#929fba' }}
                >
                    <div className="container p-4 pb-0">
                        <section >
                            <div className="row">
                                <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 mx-auto mt-3">
                                    <h6 className="text-uppercase mb-4 font-weight-bold">
                                        Light House
                                    </h6>
                                    <p>
                                        Jhoomar closely resembles classical medieval chandeliers, which are grand, luxurious and multi-layered light fixtures often displayed in grand ball rooms and church halls.
                                    </p>
                                </div>

                                <hr className="w-100 clearfix d-md-none" />

                                <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 mx-auto mt-3">
                                    <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                                    <p><i className="fas fa-home mr-3"></i> House #20 (6rd Floor) Road # 19, Nikunjia-2 Dhaka,</p>
                                    <p><i className="fas fa-envelope mr-3"></i> Light@House.com</p>
                                    <p><i className="fas fa-phone mr-3"></i> + 880 1577228889</p>
                                    <p><i className="fas fa-print mr-3"></i> + 880 19208623339</p>
                                </div>

                                <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 mx-auto mt-3">
                                    <h6 className="text-uppercase mb-4 font-weight-bold">Follow us</h6>


                                    <Link
                                        className="btn btn-primary btn-floating m-1"
                                        style={{ backgroundColor: "#3b5998" }}
                                        to="#!"

                                    >{facebook}
                                    </Link>


                                    <Link
                                        className="btn btn-primary btn-floating m-1"
                                        style={{ backgroundColor: '#dd4b39' }}
                                        to="#!"

                                    >{Google}</Link>

                                    <Link
                                        className="btn btn-primary btn-floating m-1"
                                        style={{ backgroundColor: '#333333' }}
                                        to="#!"

                                    >{Github}</Link>
                                </div>
                            </div>

                        </section>

                    </div>
                    <div
                        className="text-center p-3"
                        style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                        © 2020 Copyright:
                        <Link className="text-decoration-none text-white" to="https://mdbootstrap.com/"
                        >Light-House.com</Link>
                    </div>

                </footer>

            </div>

        </div>
    );
};

export default Footer;