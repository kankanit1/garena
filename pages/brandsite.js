import React from "react";
import Layout from "../components/Layouts/layout";

const Brandsite = () => {
  return (
    <>
      <Layout>
        <div className="section-layout">
          <div className="container">
            <div className="d-flex d-flex-reverse">
              <div className="section-content text-left w-100">
                <div className="h-100 d-flex align-items-center justify-content-start">
                  <div className="content text-center">
                    <h3 className="text-white mb-3 content-title-large">MORE THAN A GAME</h3>
                    <button type="button" class="btn btn-primary">
                      คลิกเพื่อชมวิดีโอ
                    </button>
                  </div>
                </div>
              </div>
              <div className="section-img w-100">
                <img src="https://cdngarenanow-a.akamaihd.net/webth/cdn/IT-Development-BE/fo4brandsite/img-144461932288437.png" />
              </div>
            </div>
          </div>
        </div>
        <div className="section-layout-brandsite">
            <div className="text-center p-5">
                <img src="https://static2.garena.in.th/data/fo4/mainsite/page//501da78993a75a8c3cb383372d44fe10.png" className="w-100" />
            </div>
        </div>
        <div className="section-layout-brandsite1">
            <div className="text-center p-5">
                <img src="https://static2.garena.in.th/data/fo4/mainsite/page//ca135cfc8ab20b63acf5f3753469084e.png" className="w-100" />
            </div>
        </div>
      </Layout>
    </>
  );
};

export default Brandsite;
