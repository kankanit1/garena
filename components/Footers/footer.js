import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = ({ loaderImg }) => {
    return (
        <>
            <footer>
                <div className="footer footer-dark bg-dark">
                    <div className="container">
                        <div className="row align-items-center justify-content-md-between py-4 delimiter-top">
                            <div className="col-md-12">
                                <ul className="nav justify-content-center justify-content-md-center mt-3 mt-md-0">
                                    <li className="nav-item">
                                        <Link
                                            href="/"
                                        >
                                            <a
                                                className="nav-link p-0"
                                                href="https://dribbble.com/webpixels"
                                                target="_blank"
                                            >
                                                <Image
                                                    loader={loaderImg}
                                                    src="/images/logo/logo_garena.png"
                                                    alt="garena"
                                                    className="img-fluid img-center"
                                                    width={170}
                                                    height={51}
                                                />
                                            </a>
                                        </Link>
                                    </li>
                                    <li className="nav-item p-0">
                                        <Link
                                            href="/"
                                        >
                                            <a
                                                className="nav-link"
                                                href="https://www.instagram.com/webpixelsofficial"
                                                target="_blank"
                                            >
                                                <Image
                                                    loader={loaderImg}
                                                    src="/images/logo/logo_ea.png"
                                                    alt="ea"
                                                    className="img-fluid img-center"
                                                    width={51}
                                                    height={31}
                                                />
                                            </a>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            href="/"
                                        >
                                            <a
                                                className="nav-link"
                                                href="https://github.com/webpixels"
                                                target="_blank"
                                            >
                                                <Image
                                                    loader={loaderImg}
                                                    src="/images/logo/logo_fifa.png"
                                                    alt="ea"
                                                    className="img-fluid img-center"
                                                    width={220}
                                                    height={35}
                                                />
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-12">
                                <div class="row justify-content-center mt-4">
                                    <div class="col-lg-8">
                                        <div className="copyright text-sm font-weight-bold text-center text-md-center">
                                            © {new Date().toISOString().substr(0, 4)}
                                            Electronic Arts Inc. EA, EA SPORTS, and the EA SPORTS logo are trademarks of Electronic Arts Inc. 
                                            Official FIFA licensed product. © FIFA and FIFA's Official Licensed Product Logo are copyrights and/or trademarks of FIFA. 
                                            All rights reserved. Manufactured under license by Electronic Arts Inc.
                                        </div>
                                        <div className="d-flex align-items-center justify-content-center">
                                            <Link
                                                href="/"
                                            >
                                                <a className="mx-2 text-white">TERMS of SERVICE</a>
                                            </Link>
                                            | 
                                            <Link
                                                href="/"
                                            >
                                                <a className="mx-2 text-white">PRIVACY POLICY</a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;