import React from "react";
import Link from "next/link";
import Image from "next/image";



const IndexNavbar = ({ loaderImg }) => {
    return (
        <>
            <header className="header-main" id="header-main">
                <div id="navbar-top-main" className="navbar-top navbar-dark bg-dark ">
                    <div className="container px-0">
                        <div className="navbar-nav align-items-center">
                            <div className="ml-auto">
                                <ul className="nav">
                                    <li className="nav-item">
                                        <Link href="/">
                                            <a className="nav-link">
                                                <i className="fab fa-facebook-f"></i>
                                            </a>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/">
                                            <a className="nav-link">
                                                <i className="fab fa-youtube"></i>
                                            </a>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/">
                                            <a className="nav-link">
                                                <i className="fas fa-users"></i>
                                            </a>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/">
                                            <a
                                                target="_blank"
                                                className="btn btn-sm btn-green rounded-pill btn-icon rounded-pill d-none d-lg-inline-flex"
                                            >
                                                <span className="btn-inner--text">ลงทะเบียน</span>
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="navbar-bottom-main bg-dark">
                    <div className="navbar-wrapper w-100 px-0">
                        <ul className="main-navbar navbar-left">
                            <li>
                                <Link href="/">
                                    <a className=""><p>ข้อมูลพื้นฐาน</p></a>
                                </Link>
                                <ul className="main-navbar-child">
                                    <li><a href="/brandsite"><p>จุดเด่น</p></a></li>
                                    <li><a href="/guide/basicControl"><p>คู่มือการเล่น</p></a></li>
                                    <li><a href="/class"><p>คลาสนักเตะ</p></a></li>
                                    <li><a href="https://events.fo4.garena.in.th/nextfieldupdate" target="_blank"><p>NEXT FIELD</p></a></li>
                                    <li><a href="https://fo4icon.fo4.garena.in.th/"><p>ICONS</p></a></li>
                                    <li><a href="/"><p>Super League</p></a></li>
                                    <li><a href="/"><p>University Tour</p></a></li>
                                </ul>
                            </li>
                            <li>
                                <Link href="/news">
                                    <a className=""><p>ข่าวสาร</p></a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/item">
                                    <a className=""><p>ร้านค้า</p></a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <a className=""><p>คอมมูนิตี้</p></a>
                                </Link>
                                <ul className="main-navbar-child">
                                    <li>
                                        <Link
                                            href="/"
                                        >
                                            <a className="" target="_blank"><p>Facebook</p></a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/"
                                        >
                                            <a className="" target="_blank"><p>Youtube</p></a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/"
                                        >
                                            <a className="" target="_blank"><p>Club</p></a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/"
                                        >
                                            <a className="" target="_blank"><p>Cafe Tour</p></a>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <div className="navbar-logo">
                            <Link href="/" >
                                <a className="">
                                    <Image 
                                        loader={loaderImg}
                                        src="/images/brand/logo_new.png"
                                        alt="EA SPORTS™ FIFA Online 4 เกมฟุตบอลออนไลน์ เล่นฟรี"
                                        className="img-fluid img-center"
                                        width={117}
                                        height={104}
                                    />
                                </a>
                            </Link>
                        </div>
                        <ul className="main-navbar navbar-right">
                            <li>
                                <Link href="/">
                                    <a className=""><p>กิจกรรม</p></a>
                                </Link>
                            </li>
                            <li>
                                <Link href="https://termgame.com/app" >
                                    <a className="" target="_blank" ><p>เติมเงิน</p></a>
                                </Link>
                            </li>
                            <li>
                                <Link href="https://redeem.fo4.garena.in.th/" >
                                    <a className="" target="_blank"><p>เติมโค้ด</p></a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <a className=""><p>ดาวน์โหลด</p></a>
                                </Link>
                                <ul className="main-navbar-child">
                                    <li>
                                        <Link
                                            href="/download/pc"
                                        >
                                            <a className=""><p>Pc</p></a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/download/mobile"
                                        >
                                            <a className=""><p>Mobile</p></a>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link href="/">
                                    <a className=""><p>บริการลูกค้า</p></a>
                                </Link>
                                <ul className="main-navbar-child">
                                    <li>
                                        <Link
                                            href="https://support.garena.in.th/new/games/report/21/fifa-online-4"
                                        >
                                            <a className="" target="_blank"><p>บริการลูกค้า</p></a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="https://support.garena.in.th/new/games/faqs/21/fifa-online-4"
                                        >
                                            <a className="" target="_blank"><p>ปัญหาที่พบบ่อย</p></a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/reset2ndpass"
                                        >
                                            <a className=""><p>รีเซตรหัสผ่าน 4 หลัก</p></a>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    );
};
export default IndexNavbar;
