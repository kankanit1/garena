import Layout from '../components/Layouts/layout'
import Image from 'next/image'
import Link from 'next/link'
import IndexSlider from '../components/Sliders/indexSlider'

export default function Index({ loaderImg }) {
  return (
    <>
      <Layout>
        <div>
          <section className="section-home-title">
            <div className="video-wrapper">
              <video
                className="video-wrapper__vdo"
                autoplay=""
                width="100%"
                height="1080"
                loop
                muted
              >
                <source
                  src="/images/video/section1_vdo.webm"
                  type="video/webm"
                />
              </video>
            </div>
            <div className="content-sticky">
              <picture>
                <source
                  media="(min-width:650px)"
                  srcset="/images/logo/logo_reskin.png"
                />
                <source
                  media="(min-width:465px)"
                  srcset="/images/logo/logo_reskin.png"
                />
                <Image
                  loader={loaderImg}
                  src="/images/logo/logo_reskin.png"
                  alt="garena"
                  className="img-fluid img-center"
                  width={461}
                  height={168}
                />
              </picture>
              <div className="btn-group">
                <Link href="/download/pc">
                  <a className="btn btn-primary rounded-pill btn-lg btn-icon hover-translate-y-n3 mx-1 mb-2">
                    ดาวน์โหลด FO4{" "}
                    <i className="fas fa-desktop mx-2 text-white"></i>
                  </a>
                </Link>
                <Link href="/download/mobile">
                  <a className="btn btn-white rounded-pill btn-outline-primary btn-lg btn-icon hover-translate-y-n3 mx-1 mb-2">
                    ดาวน์โหลด FO4{" "}
                    <i className="fas fa-mobile-alt mx-2 text-primary"></i>
                  </a>
                </Link>
              </div>
            </div>
          </section>
          <section className="section-home-content">
            <div class="video-wrapper">
              <video
                class="video-wrapper__vdo"
                autoplay=""
                width="1920"
                height="1080"
                loop
                muted
              >
                <source
                  src="/images/video/section2_vdo.webm"
                  type="video/webm"
                />
              </video>
            </div>
            <div id="event_section" className="content-wrapper">
              <div className="content-slider">
                <IndexSlider />
              </div>
              <div className="content-banner">
                <div className="content-banner-event">
                  <Link href="/item">
                    <a className="" target="_blank">
                      <Image
                        loader={loaderImg}
                        src="/images/newsbanner/newsbanner-1.png"
                        alt="garena"
                        className="img-fluid img-center"
                        width={362}
                        height={245}
                      />
                    </a>
                  </Link>
                </div>
                <div className="content-banner-event">
                  <Link href="/item">
                    <a className="" target="_blank">
                      <Image
                        loader={loaderImg}
                        src="/images/newsbanner/newsbanner-2.jpeg"
                        alt="garena"
                        className="img-fluid img-center"
                        width={362}
                        height={245}
                      />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}
