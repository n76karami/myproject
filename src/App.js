import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";

// در فایل index.html
// استایل های مربوط به گرادیانت رو به تگ بادی دادم ولی هرکاری کردم اونجور که تو طرح فیگما بود در نیومد

function App() {

  const [text, setText] = useState();

  const get_text = async () => {
    const { data } = await axios("https://1khoffex32.api.quickmocker.com/get_text");
    console.log(data);
    setText(data.text);
    //  ایجا اولش ریسپانس رو گرفتم ولی بعد یه مدت پیام داد محدودیت ریکوئست شما به پایان رسیده برا همین تو کامپوننت ازش استفاده نکردم
  }

  useEffect(() => {

    get_text();

  } ,[])

  return (
    <>
      <Navbar />
      <div
        className='relative w-full h-screen lg:px-12 sm:px-7 px-4 '>
        <div className='absolute top-[calc(50vh-35%)] w-[90%] flex flex-col'>
          <div className="w-[200px] hidden md:flex gap-3 py-5">
            <p className="text-[#9497A1] text-[14px] font-bold font-['Manrope']">Home</p>
            <p className="text-[#9497A1] text-[14px] font-bold font-['Manrope']">|</p>
            <p className="text-white text-[14px] font-bold font-['Manrope']">Contact Us</p>
          </div>
          <div className="w-full flex flex-col justify-center items-center py-2">
            <h1 className=" text-[25px] md:text-[46px] font-[800] flex gap-1 font-['Manrope']">
              <span className="text-[#99EFD0]">CONTACT</span> 
              <span className="text-[#F2994A]">US</span>
            </h1>
            <p className="text-center text-[#9497A1] font-[20px] py-3 ">
            Lorem ipsum dolor sit amet consectetur. Massa odio enim feugiat auctor augue orci. Vivamus ac risus massa nec amet nunc sed. Feugiat diam elit quisque massa. Eu fermentum in nunc nunc. Tortor velit volutpat vitae vitae. A amet.Lorem ipsum dolor sit amet consectetur. Massa odio enim feugiat auctor augue orci. Vivamus ac risus massa nec amet nunc sed. Feugiat diam elit quisque massa. Eu fermentum in nunc nunc. Tortor velit volutpat vitae vitae. A amet.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row mt-20">
            <div className="lg:w-[50%] w-full">
              <div className="grid grid-rows-3">
                <p className="row-span-2 text-[#99EFD0] text-[38px] font-['Manrope'] font-[800] w-[80%] mx-auto lg:mx-0
                lg:text-left text-center">
                  Left questions? Contacts us now for a free consultation and free trial!
                </p>
                <p className="row-span-1 text-[#9497A1] w-[80%] my-auto mx-auto lg:mx-0 lg:text-left text-center" >
                  Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.
                </p>
              </div>
              <div className="flex flex-col mt-10 gap-3 mb-5">
                <div className="mx-auto lg:mx-0">
                  <h1 className="text-[#9497A1] text-[16px] lg:text-left text-center">Email address</h1>
                  <p className="text-[#99EFD0] text-[16px] font-bold lg:text-left text-center">ensome@info.co.us</p>
                </div>
                <div className="mx-auto lg:mx-0">
                  <h1 className="text-[#9497A1] text-[16px] lg:text-left text-center">Phone number</h1>
                  <p className="text-[#99EFD0] text-[16px] font-bold lg:text-left text-center">+1601-201-5580</p>
                </div>
                <div className="mx-auto lg:mx-0">
                  <h1 className="text-[#9497A1] text-[16px] lg:text-left text-center">Address</h1>
                  <p className="text-[#99EFD0] text-[16px] font-bold lg:text-left text-center">
                    1642 Washington Avenue, Jackson, MS, Mississippi, 39201
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-[50%] w-full">
              <div className="w-[436px] mx-auto bg-[#191B51] p-8">
                <h3 className="text-[#99EFD0] font-bold text-[30px] font-['Manrope']">
                  Contact Us
                </h3>
                <div className="flex flex-col my-4">
                  <label className="text-[#9497A1]">
                    Name
                  </label>
                  <input
                    className=" bg-transparent p-2
                     border-[#9497A1] border-b-[1px] focus:outline-none focus:text-[#99EFD0]"
                    type="text"
                  />
                </div>
                <div className="flex flex-col my-4">
                  <label className="text-[#9497A1]">
                    Email
                  </label>
                  <input
                    className=" bg-transparent p-2
                     border-[#9497A1] border-b-[1px] focus:outline-none focus:text-[#99EFD0]"
                    type="text"
                  />
                </div>
                <div className="flex flex-col my-4">
                  <label className="text-[#9497A1]">
                    Theme
                  </label>
                  <input
                    className=" bg-transparent p-2
                     border-[#9497A1] border-b-[1px] focus:outline-none focus:text-[#99EFD0] "
                    type="text"
                  />
                </div>
                <div className="flex flex-col my-4">
                  <label className="text-[#9497A1]">
                    Message
                  </label>
                  <input
                    className=" bg-transparent p-2
                     border-[#9497A1] border-b-[1px] focus:outline-none focus:text-[#99EFD0] "
                    type="text"
                  />
                </div>
                <div className="flex justify-end py-3">
                  <button className=" font-bold py-2 px-10 text-[#FFFFFF] bg-[#F2994A] rounded-md">
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="my-20 bg-[#F2994A] lg:h-[270px] h-[450px]
            p-6
            max-w-7xl flex flex-col lg:flex-row">
            <div className="w-full lg:w-[50%] flex flex-col justify-center p-8 ">
              <h1 className="text-white text-[38px] font-bold font-['Manrope'] py-2">
                Subscribe to our newsletter
              </h1>
              <p className="text-white text-[20px] hidden sm:block">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
              </p>
            </div>
            <div className="w-full lg:w-[50%] flex justify-center items-center p-8 ">
              <input type='text' className="w-60 p-4 focus:outline-none rounded-l-md"/>
              <button className="bg-[#171449] py-4 px-10 rounded-md text-[#99EFD0] translate-x-[-4px]">
                Send
              </button>
            </div>
          </div>
          <div className="grid grid-rows-6">
            <div className="row-span-3 flex flex-col lg:flex-row lg:justify-between">
              <img src='/img/piai.png' className=' w-[79px] h-[24px]  my-2 mr-3 sm:translate-x-[161px] '/>
              <ul className="sm:hidden">
                <li className="flex justify-between items-center py-3 px-1 border-b-[1px] border-[#9497A1]">
                  <p className="text-[#99EFD0] font-bold">Quick link</p>
                  <img src="/img/vector.png" className="w-[12px] h-[7px]" />
                </li>
                <li className="flex justify-between items-center py-3 px-1 border-b-[1px] border-[#9497A1]">
                  <p className="text-[#99EFD0] font-bold">Services</p>
                  <img src="/img/vector.png" className="w-[12px] h-[7px]" />
                </li>
                <li className="flex justify-between items-center py-3 px-1 border-b-[1px] border-[#9497A1]">
                  <p className="text-[#99EFD0] font-bold">Contact info</p>
                  <img src="/img/vector.png" className="w-[12px] h-[7px]" />
                </li>
              </ul>
              <div className="hidden sm:flex flex-row gap-14 pl-[161px] pt-3">
                <ul className="flex flex-col gap-5">
                  <li className="text-[#99EFD0] font-bold text-[16px]">About</li>
                  <li className="text-[#99EFD0] text-[14px]">Home</li>
                  <li className="text-[#99EFD0] text-[14px]">About Us</li>
                  <li className="text-[#99EFD0] text-[14px]">Services</li>
                  <li className="text-[#99EFD0] text-[14px]">Solutions</li>
                </ul>
                <ul className="flex flex-col gap-5">
                  <li className="text-[#99EFD0] font-bold text-[16px]">Information</li>
                  <li className="text-[#99EFD0] text-[14px]">Contacts</li>
                  <li className="text-[#99EFD0] text-[14px]">Our team</li>
                  <li className="text-[#99EFD0] text-[14px]">Blog</li>
                  <li className="text-[#99EFD0] text-[14px]">FAQ</li>
                </ul>
                <ul className="flex flex-col gap-5">
                  <li className="text-[#99EFD0] font-bold text-[16px]">Service</li>
                  <li className="text-[#99EFD0] text-[14px]">Pages</li>
                  <li className="text-[#99EFD0] text-[14px]">Elements</li>
                  <li className="text-[#99EFD0] text-[14px]">Site map</li>
                  <li className="text-[#99EFD0] text-[14px]">Pricing</li>
                  <li className="text-[#99EFD0] text-[14px]">FAQ</li>
                </ul>
              </div>
            </div>
            <div className="row-span-2 border-b-[1px] border-[#9497A1] sm:hidden">
              <div className="flex py-5 gap-[94px]">
                <p className="text-[#99EFD0] font-bold text-[16px]">Follow us</p>
                <ul className="flex gap-4 justify-between">
                  <li>
                    <img src='/img/Vectorfacebook.png' />
                  </li>
                  <li>
                    <img src='/img/Vectortwiter.png' />
                  </li>
                  <li>
                    <img src='/img/Vectorlinkdin.png' />
                  </li>
                  <li>
                    <img src='/img/Vectoryoutube.png' />
                  </li>
                  <li>
                    <img src='/img/Vectordribble.png' />
                  </li>
                  <li>
                    <img src='/img/VectorBe.png' />
                  </li>
                </ul>
              </div>
              <div className="py-2 flex gap-5 mt-[15px]">
                <p className="text-[#99EFD0] font-[400] text-[12px]">Privacy policy</p>
                <p className="text-[#99EFD0] font-[400] text-[12px]">Terms of us</p>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
