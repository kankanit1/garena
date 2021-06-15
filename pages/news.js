import React from "react";
import Layout from "../components/Layouts/layout";
import NewsDropdown from '../components/Dropdowns/newsDropdown'
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import Error from "next/error";

const News = ({ loaderImg, news, error }) => {
  if (error) {
    return (
      <>
        <div> An error occcured {error.message} </div>
        <Error statusCode={404} />;
      </>
    );
  }
  return (
    <>
      <Layout>
        <div className="page-header item-header py-5">
          <h1 className="text-center bold page-header-title w-100">News</h1>
        </div>
        <div className="container">
          <div className="w-100 p-3">
            <div className="w-100">
              <div className="row justify-content-center">
                <div className="col-lg-10 col-md-10 col-12">
                  <nav className="nav nav-pills nav-pills-dark nav-pills-icon nav-justified mb-3">
                    <Link href="/news">
                      <a className="nav-item nav-link py-3 active">
                        <span className="d-none d-sm-block mt-2">ข่าวสาร</span>
                      </a>
                    </Link>
                    <Link href="/item">
                      <a className="nav-item nav-link py-3 ">
                        <span className="d-none d-sm-block mt-2">
                          ร้านค้าภายในเกม
                        </span>
                      </a>
                    </Link>
                  </nav>
                  <div className="w-100">
                    <div className="row justify-content-center">
                      <div className="col-lg-12 col-md-12 col-12">
                        <div className="row">
                          <div className="col-3">
                            <NewsDropdown/>
                          </div>
                          <div className="col-9">
                            <div class="form-group">
                              <div class="input-group">
                                <input
                                  type="text"
                                  class="form-control form-control-dark"
                                  placeholder="Pleach enter your search ... "
                                  aria-label=""
                                />
                                <div class="input-group-append">
                                  <button
                                    class="btn btn-outline-dark"
                                    type="button"
                                    id="button-addon2"
                                  >
                                    <i class="fas fa-search"></i>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-100 py-3">
                    <ul className="news-list">
                      {news.map((newss) => (
                        <li key={newss.id} className="news-list-row">
                          <Link
                            href={{
                              pathname: "/newsdetail",
                              query: { id: newss.id, userId: newss.id }, 
                            }}
                            as={'/news/' + newss.id}
                          >
                            <a className="card">
                              <div className="card-header py-3">
                                <div className="d-flex align-items-center justify-content-between">
                                  <div className="">
                                    <div className="icon-text pl-2">
                                      <h6 className="text-sm font-weight-bold mb-0 ">
                                        <i className="fas fa-bullhorn mx-3 text-primary"></i>{" "}
                                        ITEM SHOP มิถุนายน 2021
                                      </h6>
                                    </div>
                                  </div>
                                  <div className="icon-text pl-2">
                                    <h6 className="text-sm font-weight-bold mb-0">
                                      {new Date().toDateString()}
                                    </h6>
                                  </div>
                                </div>
                              </div>
                              <div className="card-body">
                                <div className="d-flex align-items-top">
                                  <div className="mr-3">
                                    <Image
                                      loader={loaderImg}
                                      src="/images/news/1.png"
                                      alt="garena"
                                      className="img-fluid img-center"
                                      width={241}
                                      height={134}
                                    />
                                  </div>
                                  <div className="avatar-content">
                                    <div className="h6 mb-0 py-3">
                                      {newss.title}
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="card-footer">
                                <div className="row align-items-center">
                                  <div className="col">
                                    <span className="avatar avatar-sm bg-primary rounded-circle">
                                      AD
                                    </span>
                                    <span className="h6 mb-0 avatar-content">
                                      Admin {newss.userId}
                                    </span>
                                  </div>
                                  <div className="col text-right text-right">
                                    <div className="actions">
                                      <div className="action-item">
                                        <i className="fas fa-heart mr-1"></i> 50
                                      </div>
                                      <div className="action-item">
                                        <i className="fas fa-eye mr-1"></i> 250
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};
export default News;

News.getInitialProps = async ({ ctx }) => {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts/");
    const news = res.data;
    // console.log(news);
    return { news };
  } catch (error) {
    return { error };
  }
};
