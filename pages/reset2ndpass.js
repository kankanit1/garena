import React from "react";
import Layout from "../components/Layouts/layout";
import Link from "next/link";

const Reset2ndpass = () => {
  return (
    <>
      <Layout>
        <section className="section-secondpass py-5">
          <div className="container">
            <div className="d-block text-center">
              <h2 className="text-danger">กรุณาล็อกอินเพื่อเข้าสู่ระบบ</h2>
              <span className="text-danger">
                รีเซ็ตรหัสผ่านที่ 2 / รหัสล็อกนักเตะ
              </span>
              <div className="my-2 mb-5 mt-5">
                <Link href="/">
                  <a className="btn btn-outline-danger text-danger btn-icon btn-lg hover-translate-y-n3 mx-1 mb-2 px-7">
                    เข้าสู่ระบบ
                  </a>
                </Link>
              </div>

              <div class="container">
                <div class="row justify-content-center">
                  <div class="col-lg-5 col-md-8 col-12">
                    <div class="secondpass-detail text-left">
                      <p>
                        - คุณสามารถยืนยันตัวตนเพื่อขอรีเซ็ตรหัสผ่านที่ 2 ได้ 2
                        วิธี
                      </p>
                      <ol className="mb-5">
                        <li>
                          ตอบคำถามยืนยันตัวตนที่ตั้งค่าไว้ในเกมให้ถูกต้อง
                          (ตอบผิดได้ 3 ครั้ง) หรือ
                        </li>
                        <li>
                          ยืนยันผ่านลิงก์ที่ส่งเข้า Email ที่ใช้ยืนยัน Garena ID
                          ไว้
                        </li>
                      </ol>
                      <p>
                        - คุณสามารถยืนยันตัวเพื่อขอรีเซ็ตรหัสผ่านล็อกนักเตะ
                        ด้วยวิธี
                      </p>
                      <ol className="mb-5">
                        <li>
                          ยืนยันผ่านลิงก์ที่ส่งเข้า Email ที่ใช้ยืนยัน Garena ID
                          ไว้
                        </li>
                      </ol>
                      <p>
                        - สอบถามปัญหาเพิ่มเติมได้ที่ส่วน "บริการลูกค้า"
                        ที่เมนูด้านบน
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};
export default Reset2ndpass;
