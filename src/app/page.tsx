'use client'
import React from "react";

import Image from "next/image";
import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import { FaStar } from "react-icons/fa";


export default function Home() {
  return (
    <div>
      {/* Fixed Top Black Banner */}
      <div className="w-full h-[38px] bg-black fixed top-0 left-0 z-50">
        <p className="text-center pt-[0.5rem] text-white">
          Sign up and get 20% off to your first order.
          <Link href={"#"} className="font-[500]">
            Sign Up Now
          </Link>
        </p>
      </div>

      {/* Fixed Navbar */}
      <div className="w-[70%] h-[41px] mx-auto mt-6 flex items-center justify-between fixed top-[38px] left-0 right-0 z-50">
        <div className="font-extrabold text-[32px]">SHOP.CO</div>
        <div className="flex justify-center items-center gap-[32px]">
          <Link href={"#"}>Shop</Link>
          <Link href={"#"}>On Sale</Link>
          <Link href={"#"}>New Arrivals</Link>
          <Link href={"#"}>Brand</Link>
        </div>
        <div>
          <input
            className="h-[48px] bg-[#F0F0F0] rounded-3xl w-[500px] px-7"
            type="text"
            placeholder="Search for Products"
          />
        </div>
        <div className="flex items-center justify-between gap-[14px]">
          <FiShoppingCart className="w-[24px] h-[24px]" />
          <FaRegUserCircle className="w-[24px] h-[24px]" />
        </div>
      </div>

      {/* Hero Section */}
      <div className="w-full bg-green-200 mt-[140px] h-[663px] bg-[url('/hero.png')] bg-cover bg-center pt-24">
        <div className="w-[85%] mx-auto flex justify-between">
          <div>
            <h1 className="font-extrabold text-[64px] w-[577px] leading-[64px]">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h1>

            <div className="flex justify-between items-center w-[740px] ">
              <p className=" w-[560px] opacity-[60%] mt-6 text-[16px]">
                Browse through our diverse range of meticulously crafted
                garments, designed to bring out your individuality and cater to
                your sense of style.
              </p>

              <Image
                src={"/star2.png"}
                alt="star"
                height={400}
                width={400}
                className="w-[56px] h-[56px]"
              ></Image>
            </div>

            <button className="mt-6 w-[200px] h-[52px] bg-black rounded-full text-white font-bold flex items-center justify-center">
              Shop Now
            </button>
          </div>

          <div>
            <Image
              src={"/star1.png"}
              alt="star1"
              width={400}
              height={400}
              className="w-[104px] h-[104px]"
            ></Image>
          </div>
        </div>
      </div>

      {/* Brands Logo */}
      <div className="h-[122px] bg-black flex items-center justify-center">
        <div className="flex items-center justify-between w-[85%] mx-auto">
          <Image
            src={"/Brand Logo/gucci-logo-1 1.png"}
            alt="logo"
            height={400}
            width={400}
            className="w-[156px] h-[32.29px]"
          ></Image>
          <Image
            src={"/Brand Logo/prada-logo-1 1.png"}
            alt="logo"
            height={400}
            width={400}
            className="w-[194px] h-[31.2px]"
          ></Image>
          <Image
            src={"/Brand Logo/Vector (2).png"}
            alt="logo"
            height={400}
            width={400}
            className="w-[166.48px] h-[31.16px]"
          ></Image>
          <Image
            src={"/Brand Logo/Vector.png"}
            alt="logo"
            height={400}
            width={400}
            className="w-[206.79px] h-[33.35px]"
          ></Image>
          <Image
            src={"/Brand Logo/zara-logo-1 1.png"}
            alt="logo"
            height={400}
            width={400}
            className="w-[91px] h-[37.98px]"
          ></Image>
        </div>
      </div>

      {/* New Arrival Section */}
      <div className="">
        <div className="text-center">
          <h1 className="font-extrabold text-[48px] mt-16">NEW ARRIVALS</h1>
        </div>

        <div className="w-[85%] mx-auto mt-12 flex items-center justify-between ">
          <div className="">
            <Image
              className="rounded-2xl w-[280px] h-[298px]"
              src={"/New Arrivals/1.png"}
              alt="bag image"
              width={400}
              height={400}
            />
            <p className="mt-3  font-semibold">T-SHIRT WITH TAPE DETAILS</p>
            <div className="flex  text-[#FFC633] gap-[5.31px] mt-3">
              <FaStar className=" w-[18.49px] h-[18.49px]" />
              <FaStar className=" w-[18.49px] h-[18.49px]" />
              <FaStar className=" w-[18.49px] h-[18.49px]" />
              <FaStar className=" w-[18.49px] h-[18.49px]" />
              <FaStar className=" w-[18.49px] h-[18.49px]" />

              <h3 className="text-gray-400 bg-white">(65)</h3>
            </div>
            <div className="flex gap-4  bg-white">
              <p className="text-black font-semibold bg-white text-[24px]">
                $960
              </p>
              <p className="text-black opacity-[40%] font-semibold bg-white text-[24px]">
                $960
              </p>
            </div>
              
          </div>

          <div className="">
            <Image
              className="rounded-2xl w-[280px] h-[298px]"
              src={"/New Arrivals/2.png"}
              alt="bag image"
              width={400}
              height={400}
            />
            <p className="mt-3  font-semibold">T-SHIRT WITH TAPE DETAILS</p>
            <div className="flex  text-[#FFC633] gap-[5.31px] mt-3">
              <FaStar className=" w-[18.49px] h-[18.49px]" />
              <FaStar className=" w-[18.49px] h-[18.49px]" />
              <FaStar className=" w-[18.49px] h-[18.49px]" />
              <FaStar className=" w-[18.49px] h-[18.49px]" />
              <FaStar className=" w-[18.49px] h-[18.49px]" />

              <h3 className="text-gray-400 bg-white">(65)</h3>
            </div>
            <div className="flex gap-4  bg-white">
              <p className="text-black font-semibold bg-white text-[24px]">
                $960
              </p>
              <p className="text-black opacity-[40%] font-semibold bg-white text-[24px]">
                $960
              </p>
            </div>
                    
          </div>

          <div className="">
            <Image
              className="rounded-2xl w-[280px] h-[298px]"
              src={"/New Arrivals/3.png"}
              alt="bag image"
              width={400}
              height={400}
            />
            <p className="mt-3 font-semibold">T-SHIRT WITH TAPE DETAILS</p>
            <div className="flex b text-[#FFC633] gap-[5.31px] mt-3">
              <FaStar className=" w-[18.49px] h-[18.49px]" />
              <FaStar className=" w-[18.49px] h-[18.49px]" />
              <FaStar className=" w-[18.49px] h-[18.49px]" />
              <FaStar className=" w-[18.49px] h-[18.49px]" />
              <FaStar className=" w-[18.49px] h-[18.49px]" />

              <h3 className="text-gray-400 bg-white">(65)</h3>
            </div>
            <div className="flex gap-4  ">
              <p className="text-black font-semibold  text-[24px]">$960</p>
              <p className="text-black opacity-[40%] font-semibold b text-[24px]">
                $960
              </p>
            </div>
                    
          </div>

          <div className="">
            <Image
              className="rounded-2xl w-[280px] h-[298px] "
              src={"/New Arrivals/4.png"}
              alt="bag image"
              width={400}
              height={400}
            />
            <p className="mt-3  font-semibold">T-SHIRT WITH TAPE DETAILS</p>
            <div className="flex  text-[#FFC633] gap-[5.31px] mt-3">
              <FaStar className=" w-[18.49px] h-[18.49px]" />
              <FaStar className=" w-[18.49px] h-[18.49px]" />
              <FaStar className=" w-[18.49px] h-[18.49px]" />
              <FaStar className=" w-[18.49px] h-[18.49px]" />
              <FaStar className=" w-[18.49px] h-[18.49px]" />

              <h3 className="text-gray-400 ">(65)</h3>
            </div>
            <div className="flex gap-4 ">
              <p className="text-black font-semibold text-[24px]">$960</p>
              <p className="text-black opacity-[40%] font-semibold text-[24px]">
                $960
              </p>
            </div>
                    
          </div>
        </div>

        <div className="flex items-center justify-center mt-12">
          <button className="w-[210px] h-[52px] text-[16px] text-black rounded-full font-bold flex items-center justify-center border-[2px] border-gray-200">
            View All
          </button>
        </div>

        <div className="w-[85%] h-[2px] bg-gray-200 mt-16 mb-10 mx-auto"></div>
      </div>

      {/* Top Selling Section */}
      <div className="">
        <div className="text-center">
          <h1 className="font-extrabold text-[48px] mt-16">TOP SELLING</h1>
        </div>

        <div className="w-[85%] mx-auto mt-12 flex items-center justify-between ">
          <div className="">
            <Image
              className="rounded-2xl w-[280px] h-[298px]"
              src={"/New Arrivals/1.png"}
              alt="bag image"
              width={400}
              height={400}
            />
            <p className="mt-3  font-semibold">T-SHIRT WITH TAPE DETAILS</p>
            <div className="flex  text-[#FFC633] gap-[5.31px] mt-3">
              <FaStar className=" w-[18.49px] h-[18.49px]" />
              <FaStar className=" w-[18.49px] h-[18.49px]" />
              <FaStar className=" w-[18.49px] h-[18.49px]" />
              <FaStar className=" w-[18.49px] h-[18.49px]" />
              <FaStar className=" w-[18.49px] h-[18.49px]" />

              <h3 className="text-gray-400 bg-white">(65)</h3>
            </div>
            <div className="flex gap-4  bg-white">
              <p className="text-black font-semibold bg-white text-[24px]">
                $960
              </p>
              <p className="text-black opacity-[40%] font-semibold bg-white text-[24px]">
                $960
              </p>
            </div>
              
          </div>

          <div className="">
            <Image
              className="rounded-2xl w-[280px] h-[298px]"
              src={"/New Arrivals/2.png"}
              alt="bag image"
              width={400}
              height={400}
            />
            <p className="mt-3  font-semibold">T-SHIRT WITH TAPE DETAILS</p>
            <div className="flex  text-[#FFC633] gap-[5.31px] mt-3">
              <FaStar className=" w-[18.49px] h-[18.49px]" />
              <FaStar className=" w-[18.49px] h-[18.49px]" />
              <FaStar className=" w-[18.49px] h-[18.49px]" />
              <FaStar className=" w-[18.49px] h-[18.49px]" />
              <FaStar className=" w-[18.49px] h-[18.49px]" />

              <h3 className="text-gray-400 bg-white">(65)</h3>
            </div>
            <div className="flex gap-4  bg-white">
              <p className="text-black font-semibold bg-white text-[24px]">
                $960
              </p>
              <p className="text-black opacity-[40%] font-semibold bg-white text-[24px]">
                $960
              </p>
            </div>
                    
          </div>

          <div className="">
            <Image
              className="rounded-2xl w-[280px] h-[298px]"
              src={"/New Arrivals/3.png"}
              alt="bag image"
              width={400}
              height={400}
            />
            <p className="mt-3 font-semibold">T-SHIRT WITH TAPE DETAILS</p>
            <div className="flex b text-[#FFC633] gap-[5.31px] mt-3">
              <FaStar className=" w-[18.49px] h-[18.49px]" />
              <FaStar className=" w-[18.49px] h-[18.49px]" />
              <FaStar className=" w-[18.49px] h-[18.49px]" />
              <FaStar className=" w-[18.49px] h-[18.49px]" />
              <FaStar className=" w-[18.49px] h-[18.49px]" />

              <h3 className="text-gray-400 bg-white">(65)</h3>
            </div>
            <div className="flex gap-4  ">
              <p className="text-black font-semibold  text-[24px]">$960</p>
              <p className="text-black opacity-[40%] font-semibold b text-[24px]">
                $960
              </p>
            </div>
                    
          </div>

          <div className="">
            <Image
              className="rounded-2xl w-[280px] h-[298px] "
              src={"/New Arrivals/4.png"}
              alt="bag image"
              width={400}
              height={400}
            />
            <p className="mt-3  font-semibold">T-SHIRT WITH TAPE DETAILS</p>
            <div className="flex  text-[#FFC633] gap-[5.31px] mt-3">
              <FaStar className=" w-[18.49px] h-[18.49px]" />
              <FaStar className=" w-[18.49px] h-[18.49px]" />
              <FaStar className=" w-[18.49px] h-[18.49px]" />
              <FaStar className=" w-[18.49px] h-[18.49px]" />
              <FaStar className=" w-[18.49px] h-[18.49px]" />

              <h3 className="text-gray-400 ">(65)</h3>
            </div>
            <div className="flex gap-4 ">
              <p className="text-black font-semibold text-[24px]">$960</p>
              <p className="text-black opacity-[40%] font-semibold text-[24px]">
                $960
              </p>
            </div>
                    
          </div>
        </div>

        <div className="flex items-center justify-center mt-12">
          <button className="w-[210px] h-[52px] text-[16px] text-black rounded-full font-bold flex items-center justify-center border-[2px] border-gray-200">
            View All
          </button>
        </div>
      </div>

      {/* Dress style section */}
      <div className="w-[85%] h-[866px] bg-[#F0F0F0] mx-auto rounded-3xl mt-20">
        <div className="text-center pt-12">
          <h1 className="font-extrabold text-[48px] mb-14">
            BROWSE BY DRESS STYLE
          </h1>
        </div>

        <div className="w-full flex items-center justify-center mx-auto gap-14 ">
          <div className="w-[407px] h-[289px] bg-[url('/a.png')] bg-cover bg-center rounded-xl"></div>

          <div className="w-[684px]  h-[289px] bg-[url('/b.png')] bg-cover bg-center rounded-xl "></div>
        </div>

        <div className="w-[90%] flex items-center justify-center mx-auto gap-14 mt-8">
          <div className="w-[684px] h-[289px] bg-[url('/c.png')] bg-cover bg-center rounded-xl "></div>

          <div className="w-[407px] h-[289px] bg-[url('/d.png')] bg-cover bg-center rounded-xl"></div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="w-[85%] mx-auto mt-12">
        <div className="pt-8">
          <h1 className="font-extrabold text-[48px] mb-14">
            OUR HAPPY CUSTOMERS
          </h1>
        </div>

        <div className="flex items-center justify-between">
          <div className="h-[240px] w-[400px] rounded-2xl px-10 py-6 border-[1.5px] border-gray-200">
            <div className="flex items-center text-[#FFC633] gap-[5.31px]">
              <FaStar className=" w-[18.49px] h-[18.49px]" />
              <FaStar className=" w-[18.49px] h-[18.49px]" />
              <FaStar className=" w-[18.49px] h-[18.49px]" />
              <FaStar className=" w-[18.49px] h-[18.49px]" />
              <FaStar className=" w-[18.49px] h-[18.49px]" />
            </div>

            <div className="flex items-center gap-2 mt-2">
              <h1 className=" text-[20px] font-semibold">Sarah M.</h1>
              <Image
                src={"/tick.png"}
                alt=""
                height={400}
                width={400}
                className="w-[19.5px] h-[19.5px]"
              ></Image>
            </div>
            <p className="w-[300px] text-[16px] mt-2">
              "I'm blown away by the quality and style of the clothes I received
              from Shop.co. From casual wear to elegant dresses, every piece
              I've bought has exceeded my expectations.”
            </p>
          </div>

          <div className="h-[240px] w-[400px] rounded-2xl px-10 py-6 border-[1.5px] border-gray-200">
            <div className="flex items-center text-[#FFC633] gap-[5.31px]">
              <FaStar className=" w-[18.49px] h-[18.49px]" />
              <FaStar className=" w-[18.49px] h-[18.49px]" />
              <FaStar className=" w-[18.49px] h-[18.49px]" />
              <FaStar className=" w-[18.49px] h-[18.49px]" />
              <FaStar className=" w-[18.49px] h-[18.49px]" />
            </div>

            <div className="flex items-center gap-2 mt-2">
              <h1 className=" text-[20px] font-semibold">Sarah M.</h1>
              <Image
                src={"/tick.png"}
                alt=""
                height={400}
                width={400}
                className="w-[19.5px] h-[19.5px]"
              ></Image>
            </div>
            <p className="w-[300px] text-[16px] mt-2">
              "I'm blown away by the quality and style of the clothes I received
              from Shop.co. From casual wear to elegant dresses, every piece
              I've bought has exceeded my expectations.”
            </p>
          </div>

          <div className="h-[240px] w-[400px] rounded-2xl px-10 py-6 border-[1.5px] border-gray-200">
            <div className="flex items-center text-[#FFC633] gap-[5.31px]">
              <FaStar className=" w-[18.49px] h-[18.49px]" />
              <FaStar className=" w-[18.49px] h-[18.49px]" />
              <FaStar className=" w-[18.49px] h-[18.49px]" />
              <FaStar className=" w-[18.49px] h-[18.49px]" />
              <FaStar className=" w-[18.49px] h-[18.49px]" />
            </div>

            <div className="flex items-center gap-2 mt-2">
              <h1 className=" text-[20px] font-semibold">Sarah M.</h1>
              <Image
                src={"/tick.png"}
                alt=""
                height={400}
                width={400}
                className="w-[19.5px] h-[19.5px]"
              ></Image>
            </div>
            <p className="w-[300px] text-[16px] mt-2">
              "I'm blown away by the quality and style of the clothes I received
              from Shop.co. From casual wear to elegant dresses, every piece
              I've bought has exceeded my expectations.”
            </p>
          </div>
        </div>
      </div>

      {/* Pre-Footer box */}
      <div className="w-[85%] h-[180px] bg-black mx-auto rounded-3xl mt-8 translate-y-1/2 transform flex items-center justify-center">
        <div className="w-[90%] flex items-center justify-between mx-auto ">
          <div><h1 className="font-extrabold text-white text-[40px] w-[577px] ">
            STAY UPTO DATE ABOUT OUR LATEST OFFERS
          </h1>
          </div>

          <div className="p-3">
          <input type="emai" className="w-[400px] h-[48px] rounded-full" /><br />

          <button className="mt-3 w-[400px] h-[48px] bg-[#FFFFFF] text-[16px] rounded-full ">Subscribe to Newsletter </button>

        </div>

        </div>

        
      </div>

      {/* Footer Section */}
      <div className="w-full h-[499px] bg-[#F0F0F0] z-10"></div>
    </div>
  );
}
