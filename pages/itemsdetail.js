import React from "react";
import Layout from "../components/Layouts/layout";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";

const itemsDetail = ({ itemsDetail, error, loaderImg }) => {
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
          <h1 className="text-center bold page-header-title">News</h1>
        </div>
        <div className="container">
          <div className="w-100 p-3">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb mb-3">
                <li class="breadcrumb-item">
                  <Link href="/">
                    <a className="" title="">
                      หน้าหลัก
                    </a>
                  </Link>
                </li>
                <li class="breadcrumb-item">
                  <Link href="/item">
                    <a className="" title="">
                       ร้านค้า
                    </a>
                  </Link>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  {itemsDetail.title}
                </li>
              </ol>
            </nav>
            <div className="w-100">
              <div className="card">
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
                  <div className="d-block text-center align-items-top">
                    <div className="mr-3">
                      <Image
                        loader={loaderImg}
                        src="/images/news/2.png"
                        alt="garena"
                        className="img-fluid img-center mb-3"
                        width={900}
                        height={500}
                      />
                    </div>
                    <div class="row justify-content-md-center">
                      <div class="col-12 col-lg-8">
                        <div className="h6 mb-0 py-3">{itemsDetail.title}</div>
                        <p>{itemsDetail.body}</p>
                        <span>Variable width content</span>
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
                        Admin {itemsDetail.userId}
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
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default itemsDetail;

itemsDetail.getInitialProps = async ({ query }) => {
  const { id } = query;

  try {
    const res = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/" + id
    );
    const itemsDetail = res.data;
    // console.log(itemsDetail);
    return { itemsDetail };
  } catch (error) {
    return { error };
  }
};
