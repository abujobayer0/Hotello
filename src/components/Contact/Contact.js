import React from "react";
import TypewriterComponent from "typewriter-effect";
import Footer from "../Home/Shared/Footer/Footer";

const Contact = () => {
  return (
    <div>
      <div className="bgRoom w-full">
        <div className="w-full flex h-80 justify-center pt-12 lg:pt-20 md:pt-20 items-center ">
          <h1 className="text-4xl px-12 text-center text-white font-semibold">
            {" "}
            <TypewriterComponent
              onInit={(typewriter) => {
                typewriter
                  .typeString("Get In Our Touch ")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Contact Us")
                  .start();
              }}
            />
          </h1>
        </div>
        {/* --------- */}
        <div className="bg-white w-full px-2 justify-start md:justify-start lg:justify-center  gap-12  md:gap-12 lg:gap-16 flex-wrap py-8 flex min-h-fit">
          <div className="text-center">
            <h1
              className="
            uppercase text-[22px]  text-[#3a3534]"
            >
              we work on the forefront
            </h1>
            <p className="text-[20px] text-[rgba(34,34,34,.7)]">
              To learn more about our service offerings and industry expertise
              or to have an <br /> Consulting professional contact you directly,
              please fill out the form below or <br /> submit an email.
            </p>
          </div>

          <div className="">
            <div className="flex m-8 gap-8">
              <img
                className="rounded-full w-16"
                src="https://hotello.stylemixthemes.com/esperanza/wp-content/uploads/sites/6/2018/06/img1-80x80.jpg"
                alt=""
              />
              <div>
                <h1 className="text-[20px] text-[#3a3534]">Sarah Milovsky</h1>{" "}
                <p className="text-[12px] text-[rgba(34,34,34,.7)]">
                  ADMINISTRATOR
                </p>
                <p className="text-orange-400">(33) 745 128 9714</p>
              </div>
            </div>
            <div className="flex m-8 gap-8">
              <img
                className="rounded-full w-16"
                src="https://hotello.stylemixthemes.com/esperanza/wp-content/uploads/sites/6/2018/06/testimonial-author3-80x80.jpg"
                alt=""
              />{" "}
              <div>
                <h1 className="text-[20px] text-[#3a3534]">Johnson Doe </h1>{" "}
                <p
                  className="
                text-[12px] text-[rgba(34,34,34,.7)]"
                >
                  CHEF
                </p>{" "}
                <p className="text-orange-400">(33)745 128 9715</p>
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Contact;
