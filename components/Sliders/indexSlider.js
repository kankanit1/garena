import React from 'react'
import Slider from 'react-slick'
import Image from 'next/image'

const IndexSlider = ({ loaderImg }) => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay:true,
        slidesToShow: 3,
        slidesToScroll: 1
    };
    return (
        <Slider {...settings}>
            <div className="content-wrapper-event">
                <Image
                  loader={loaderImg}
                  src="/images/banner/banner-1.png"
                  alt="garena"
                  className="img-fluid img-center"
                  width={298}
                  height={504}
                />
            </div>
            <div className="content-wrapper-event">
                <Image
                  loader={loaderImg}
                  src="/images/banner/banner-3.jpeg"
                  alt="garena"
                  className="img-fluid img-center"
                  width={298}
                  height={504}
                />
            </div>
            <div className="content-wrapper-event">
                <Image
                  loader={loaderImg}
                  src="/images/banner/banner-4.jpeg"
                  alt="garena"
                  className="img-fluid img-center"
                  width={298}
                  height={504}
                />
            </div>
            <div className="content-wrapper-event">
                <Image
                  loader={loaderImg}
                  src="/images/banner/banner-5.jpeg"
                  alt="garena"
                  className="img-fluid img-center"
                  width={298}
                  height={504}
                />
            </div>
            <div className="content-wrapper-event">
                <Image
                  loader={loaderImg}
                  src="/images/banner/banner-6.png"
                  alt="garena"
                  className="img-fluid img-center"
                  width={298}
                  height={504}
                />
            </div>
            <div className="content-wrapper-event">
                <Image
                  loader={loaderImg}
                  src="/images/banner/banner-7.png"
                  alt="garena"
                  className="img-fluid img-center"
                  width={298}
                  height={504}
                />
            </div>
            <div className="content-wrapper-event">
                <Image
                  loader={loaderImg}
                  src="/images/banner/banner-8.png"
                  alt="garena"
                  className="img-fluid img-center"
                  width={298}
                  height={504}
                />
            </div>
        </Slider>
    );
}

export default IndexSlider;