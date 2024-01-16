import "./App.css";
import Porfile from "./assets/Photo.png";
import Project1 from "./assets/project1.png";
import Project2 from "./assets/project2.png";
import Project3 from "./assets/project3.png";
import Project4 from "./assets/project4.png";
import Facebook from "./assets/facebook.svg";
import LinkedIn from "./assets/linkedin.svg";
import Instagram from "./assets/instagram.svg";
import ArrowDown from "./assets/arrow-down.svg";
import resume from "./assets/pdf/resume.pdf";
import { useEffect, useState } from "react";
import ProfessionalProjects from './pages/projects/ProfessionalProjects'
import PersonalProjects from "./pages/projects/personal-projects/PersonalProjects";
import Education from "./pages/education/Education";
import Footer  from './components/Footer'
import profile from './assets/images/profile.jpeg';

function App() {
  const [scrolling, setScrolling] = useState(false);
  const [showMoreDetails, setShowMoreDetails] = useState({});

  const onPageScroll = () => {
    if(window.pageYOffset > 200) {
      setScrolling(true)
    } else {
      setScrolling(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", onPageScroll)
    return() => {
      window.removeEventListener("scroll", onPageScroll)
    }
  }, [])

  const onDownloadClick = () => {
    const pdfUrl = resume;
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "resresume.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

  //   fetch("SamplePDF.pdf").then((response) => {
  //     response.blob().then((blob) => {
       
  //         // Creating new object of PDF file
  //         const fileURL =
  //             window.URL.createObjectURL(blob);
               
  //         // Setting various property values
  //         let alink = document.createElement("a");
  //         alink.href = fileURL;
  //         alink.download = "SamplePDF.pdf";
  //         alink.click();
  //     });
  // });
};

const handleOnMoreClick = (e) => {
  const id = e.target.id
  setShowMoreDetails({[id] : true});
}

  return (
    <div className="max-w-4xl m-auto relative">
      <header className={`${scrolling ? 'border-b border-gray-900' : ''}  fixed left-0 right-0 top-0 z-20`} id="home">
        <div className="container m-auto px-4 py-6 max-w-4xl bg-black">
          <div className="flex flex-col gap-4 sm:flex-row justify-between items-center">
            <div>
              <h1 className="font-bold text-2xl">Portfolio</h1>
            </div>
            <div>
              <ul className="flex gap-4">
                <li>
                  <a href="#projects" className="text-gray-400 hover:text-white cursor-pointer">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#technologies" className="text-gray-400 hover:text-white cursor-pointer">
                    Technologies
                  </a>
                </li>
                <li>
                  <a href="#aboutme" className="text-gray-400 hover:text-white cursor-pointer">
                    About me
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <main className="relative mt-28">
        {/* Intro/Banner section */}
        <section>
          <div className="container m-auto px-4 pt-12 pb-12 sm:pt-20 flex flex-col sm:flex-row gap-6 text-center sm:text-left">
            <div>
              <h2 className="font-bold text-4xl">Hello, I'm Sagar,</h2>
              <div>
                <h2 className="font-bold text-4xl mt-1 gradiant-text">full stack developer</h2>
              </div>
              <div>
                <p className="mt-4 text-gray-400">
                  {/* Former digital-marketing specialist, seeking to apply
                  competent development skills with focus on collaboration,
                  communication, and passion */}
                  Experienced full-stack web developer with a robust background, currently exploring opportunities to leverage advanced development skills. Committed to fostering collaboration, ensuring effective communication, and applying a genuine passion for crafting innovative solutions.
                </p>
                {/* <button onClick={onDownloadClick} className="px-8 shadow-gray-500 shadow-md py-5 mt-5 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                  Download Resume
                </button> */}
                <button className="px-8 shadow-gray-500 shadow-md py-5 mt-5 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                  <a href={resume} target="_blank">View Resume</a>
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="after:bg-[url('./large-long.png')] after:bg-contain after:block after:bg-no-repeat after:w-[420px] after:h-[320px] after:absolute after:top-0 after:-left-20 sm:after:-left-40 before:bg-[url('./small.png')] before:bg-contain before:block before:bg-no-repeat before:w-[220px] before:h-[220px] before:absolute before:bottom-0 before:-right-10">
                <img src={Porfile} className="relative z-10 w-[280px] m-auto sm:w-[600px]" />
              </div>
            </div>
          </div>
        </section>
        {/* Technoglies section */}
        <section className="py-10" id="technologies">
            <div className="container m-auto px-4">
             {/*<h2 className="text-2xl mt-10 font-semibold">Technologies</h2>
            <div className="mt-14">
              <div>
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">HTML</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-full h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">CSS, Sass & Bootstrap</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-full h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">
                    JavaScript, TypeScript
                  </h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-full h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              {/* <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">UI design in Figma</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-[75%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div> */}
              {/* <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">Angular</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-[50%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div> */}
              {/* <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">React</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-[90%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div> */}
              {/* <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">React Native</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-[45%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div> */}
              {/* <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">Python</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-[90%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">C</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-[90%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">MySql</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-[90%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">Mongo DB</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-[90%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">Kiwi</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-[90%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">Turtle</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-[90%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">T-kinter</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-[90%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">Node Js</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-[90%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">Next Js</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-[90%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              </div> */}
              {/* skills with individual headings */}
              <h2 className="text-2xl mt-10 font-semibold">Languages</h2>
              <div className="bye mt-14">
              <div>
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">Python</h2>
                  {/* <p className="text-gray-500">Advanced</p> */}
                </div>
                <div className="flex flex-row">
                <span className="w-[85%] h-2 bg-gradient-to-t from-black-500 to-cyan-500 block rounded-md"></span>
                <span className="text-white-500">85%</span>
                </div>
                <div className="flex">
                <span className="w-[85%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
                <span className="mt-1 after:w-4 after:h-4 after:bg-gradient-to-t after:from-blue-100 after:to-cyan-100 mb-10 after:absolute after:rounded-full after:left-[84%] after:buttom-[12px]" ></span>
                </div>
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">C</h2>
                </div>
                <div className="flex flex-row">
                <span className="w-[80%] h-2 mt-2 bg-gradient-to-t from-black-500 to-cyan-500 block rounded-md"></span>
                <span className="text-white-500">80%</span>
                </div>
                <div className="flex">
                <span className="w-[80%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
                <span className="mt-1 after:w-4 after:h-4 after:bg-gradient-to-t after:from-blue-100 after:to-cyan-100 mb-10 after:absolute after:rounded-full after:left-[79%] after:buttom-[12px]" ></span>
                </div>
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">Java</h2>
                </div>
                <div className="flex flex-row">
                <span className="w-[70%] h-2 mt-2 bg-gradient-to-t from-black-500 to-cyan-500 block rounded-md"></span>
                <span className="text-white-500">70%</span>
                </div>
                <div className="flex">
                <span className="w-[70%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
                <span className="mt-1 after:w-4 after:h-4 after:bg-gradient-to-t after:from-blue-100 after:to-cyan-100 mb-10 after:absolute after:rounded-full after:left-[69%] after:buttom-[12px]" ></span>
                </div>
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">C++</h2>
                </div>
                <div className="flex flex-row">
                <span className="w-[70%] h-2 mt-2 bg-gradient-to-t from-black-500 to-cyan-500 block rounded-md"></span>
                <span className="text-white-500">70%</span>
                </div>
                <div className="flex">
                <span className="w-[70%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
                <span className="mt-1 after:w-4 after:h-4 after:bg-gradient-to-t after:from-blue-100 after:to-cyan-100 mb-10 after:absolute after:rounded-full after:left-[69%] after:buttom-[12px]" ></span>
                </div>
              </div>
              
              
              <h2 className="text-2xl mt-10 font-semibold">Web Technologies</h2>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">
                    JavaScript
                  </h2>
                </div>
                <div className="flex flex-row">
                <span className="w-[90%] h-2 mt-2 bg-gradient-to-t from-black-500 to-cyan-500 block rounded-md"></span>
                <span className="text-white-500">90%</span>
                </div>
                <div className="flex">
                <span className="w-[90%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
                <span className="mt-1 after:w-4 after:h-4 after:bg-gradient-to-t after:from-blue-100 after:to-cyan-100 mb-10 after:absolute after:rounded-full after:left-[89%] after:buttom-[12px]" ></span>
                </div>
              </div>
              {/* <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">UI design in Figma</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-[75%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div> */}
              {/* <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">Angular</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-[50%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div> */}
               <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">
                    TypeScript
                  </h2>
                </div>
                <div className="flex flex-row">
                <span className="w-[90%] h-2 mt-2 bg-gradient-to-t from-black-500 to-cyan-500 block rounded-md"></span>
                <span className="text-white-500">90%</span>
                </div>
                <div className="flex">
                <span className="w-[90%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
                <span className="mt-1 after:w-4 after:h-4 after:bg-gradient-to-t after:from-blue-100 after:to-cyan-100 mb-10 after:absolute after:rounded-full after:left-[89%] after:buttom-[12px]" ></span>
                </div>
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">
                    Html
                  </h2>
                </div>
                <div className="flex flex-row">
                <span className="w-[95%] h-2 mt-2 bg-gradient-to-t from-black-500 to-cyan-500 block rounded-md"></span>
                <span className="text-white-500">95%</span>
                </div>
                <div className="flex">
                <span className="w-[95%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
                <span className="mt-1 after:w-4 after:h-4 after:bg-gradient-to-t after:from-blue-100 after:to-cyan-100 mb-10 after:absolute after:rounded-full after:left-[94%] after:buttom-[12px]" ></span>
                </div>
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">
                    CSS
                  </h2>
                </div>
                <div className="flex flex-row">
                <span className="w-[70%] h-2 mt-2 bg-gradient-to-t from-black-500 to-cyan-500 block rounded-md"></span>
                <span className="text-white-500">70%</span>
                </div>
                <div className="flex">
                <span className="w-[70%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
                <span className="mt-1 after:w-4 after:h-4 after:bg-gradient-to-t after:from-blue-100 after:to-cyan-100 mb-10 after:absolute after:rounded-full after:left-[69%] after:buttom-[12px]" ></span>
                </div>
              </div>

              <h2 className="text-2xl mt-10 font-semibold">Frameworks</h2>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">React</h2>
                </div>
                <div className="flex flex-row">
                <span className="w-[90%] h-2 mt-2 bg-gradient-to-t from-black-500 to-cyan-500 block rounded-md"></span>
                <span className="text-white-500">90%</span>
                </div>
                <div className="flex">
                <span className="w-[90%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
                <span className="mt-1 after:w-4 after:h-4 after:bg-gradient-to-t after:from-blue-100 after:to-cyan-100 mb-10 after:absolute after:rounded-full after:left-[89%] after:buttom-[12px]" ></span>
                </div>
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">Node Js</h2>
                </div>
                <div className="flex flex-row">
                <span className="w-[85%] h-2 mt-2 bg-gradient-to-t from-black-500 to-cyan-500 block rounded-md"></span>
                <span className="text-white-500">85%</span>
                </div>
                <div className="flex">
                <span className="w-[85%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
                <span className="mt-1 after:w-4 after:h-4 after:bg-gradient-to-t after:from-blue-100 after:to-cyan-100 mb-10 after:absolute after:rounded-full after:left-[84%] after:buttom-[12px]" ></span>
                </div>
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">Next Js</h2>
                </div>
                <div className="flex flex-row">
                <span className="w-[80%] h-2 mt-2 bg-gradient-to-t from-black-500 to-cyan-500 block rounded-md"></span>
                <span className="text-white-500">80%</span>
                </div>
                <div className="flex">
                <span className="w-[80%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
                <span className="mt-1 after:w-4 after:h-4 after:bg-gradient-to-t after:from-blue-100 after:to-cyan-100 mb-10 after:absolute after:rounded-full after:left-[79%] after:buttom-[12px]" ></span>
                </div>
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">Turtle</h2>
                </div>
                <div className="flex flex-row">
                <span className="w-[90%] h-2 mt-2 bg-gradient-to-t from-black-500 to-cyan-500 block rounded-md"></span>
                <span className="text-white-500">90%</span>
                </div>
                <div className="flex">
                <span className="w-[90%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
                <span className="mt-1 after:w-4 after:h-4 after:bg-gradient-to-t after:from-blue-100 after:to-cyan-100 mb-10 after:absolute after:rounded-full after:left-[89%] after:buttom-[12px]" ></span>
                </div>
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">Kiwi</h2>
                </div>
                <div className="flex flex-row">
                <span className="w-[85%] h-2 mt-2 bg-gradient-to-t from-black-500 to-cyan-500 block rounded-md"></span>
                <span className="text-white-500">85%</span>
                </div>
                <div className="flex">
                <span className="w-[85%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
                <span className="mt-1 after:w-4 after:h-4 after:bg-gradient-to-t after:from-blue-100 after:to-cyan-100 mb-10 after:absolute after:rounded-full after:left-[84%] after:buttom-[12px]" ></span>
                </div>
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">T-kinter</h2>
                </div>
                <div className="flex flex-row">
                <span className="w-[85%] h-2 mt-2 bg-gradient-to-t from-black-500 to-cyan-500 block rounded-md"></span>
                <span className="text-white-500">85%</span>
                </div>
                <div className="flex flex-row">
                <span className="w-[85%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md after:rounded-full" ></span>
                <span className="mt-1 after:w-4 after:h-4 after:bg-gradient-to-t after:from-blue-100 after:to-cyan-100 mb-10 after:absolute after:rounded-full after:left-[84%] after:buttom-[12px]" ></span>

                {/* <div className="relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full"></div> */}
                </div>
              </div>

              <h2 className="text-2xl mt-10 font-semibold">Database</h2>

              {/* <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">React Native</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-[45%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div> */}
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">MySql</h2>
                </div>
                <div className="flex flex-row">
                <span className="w-[90%] h-2 mt-2 bg-gradient-to-t from-black-500 to-cyan-500 block rounded-md"></span>
                <span className="text-white-500">90%</span>
                </div>
                <div className="flex">
                <span className="w-[90%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
                <span className="mt-1 after:w-4 after:h-4 after:bg-gradient-to-t after:from-blue-100 after:to-cyan-100 mb-10 after:absolute after:rounded-full after:left-[89%] after:buttom-[12px]" ></span>
                </div>
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">Mongo DB</h2>
                  {/* <p className="text-gray-500">Advanced</p> */}
                </div>
                <div className="flex flex-row">
                <span className="w-[85%] h-2 mt-2 bg-gradient-to-t from-black-500 to-cyan-500 block rounded-md"></span>
                <span className="text-white-500">85%</span>
                </div>
                <div className="flex">
                <span className="w-[85%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
                <span className="mt-1 after:w-4 after:h-4 after:bg-gradient-to-t after:from-blue-100 after:to-cyan-100 mb-10 after:absolute after:rounded-full after:left-[84%] after:buttom-[12px]" ></span>
                </div>
              </div>
            </div>
          </div>
        </section>



         {/* Projects section */}
         <ProfessionalProjects />
         <PersonalProjects />
         {/* <section id="projects">
          <div className="container m-auto px-4 sm:py-12">
            <h2 className="text-2xl font-semibold">Projects</h2>
            <div className="flex flex-col sm:flex-row gap-10 mt-11">
              <div className="border border-gray-500 rounded-md p-5 flex-1">
                <img src={Project1} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">
                  load truck booking Application
                </h3>
                <h5>(CHR Navisphere Carrier)</h5>
                <p className="text-gray-400 text-sm mt-2">
                This project involves in an application where customers can book heavy load trucks and get paid
                </p>
                <p onClick={handleOnMoreClick} id="chr" className="text-gray-400 text-sm mt-2">
                More details..
                </p>
                <div className="flex mt-12 gap-2">
                  <button className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                    Live preview
                  </button>
                  <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                    Checkout github
                  </button>
                </div>
              </div>
              <div className="border border-gray-500 rounded-md p-5 flex-1">
                <img src={Project2} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">
                  Designer furniture store landing page
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  Responsive HTML/CSS layout for online store of designer
                  furniture. HTML5, CSS3 (SCSS)
                </p>
                <div className="flex gap-2 mt-12">
                  <button className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                    Live preview
                  </button>
                  <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                    Checkout github
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row  gap-10 mt-11">
              <div className="border border-gray-500 rounded-md p-5 flex-1">
                <img src={Project3} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">
                  Landing page for front-end developer
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  Responsive HTML/CSS layout for landing page for front-end
                  developer. HTML5, CSS3 (SCSS)
                </p>
                <div className="flex gap-4 mt-12">
                  <button className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                    Live preview
                  </button>
                  <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                    Checkout github
                  </button>
                </div>
              </div>
              <div className="border border-gray-500 rounded-md p-5 flex-1">
                <img src={Project4} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">
                  Website redesign for The Venus project
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  Responsive HTML/CSS layout for The Venus project. HTML5, CSS3
                  (SCSS)
                </p>
                <div className="flex gap-2 mt-12">
                  <button className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                    Live preview
                  </button>
                  <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                    Checkout github
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* Additional skills section */}
        {/* <section>
          <div className="container m-auto px-4 py-14">
            <h2 className="text-2xl font-semibold">
              Additional technologies and skills
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-28 mt-12 w-[80%]">
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Git
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Wordpress
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Teamwork
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Quick learning
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-36 mt-4 sm:mt-6 w-[80%]">
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Engagement
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  B2 english
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  RWD
                </p>
              </div>
            </div>
          </div>
        </section> */}
        {/* Education */}
        <Education />
      </main>
      <Footer />
      {/* <footer>
        <div className="container m-auto flex justify-between px-4 py-6">
          <div>
            <p className="text-gray-300 text-sm">Copyright @ 2023</p>
          </div>
          <div>
            <ul className="flex gap-4">
              <li>
                <a>
                  <img src={Facebook} className="w-5" />
                </a>
              </li>
              <li>
                <a>
                  <img src={LinkedIn} className="w-5" />
                </a>
              </li>
              <li>
                <a>
                  <img src={Instagram} className="w-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer> */}
      {
        scrolling && (
          <button className="fixed block right-8 bottom-0 w-24" onClick={() => {
            window.scrollTo(0,0);
          }}>
            <img src={ArrowDown} />
          </button>
        )
      }
    </div>
  );
}

export default App;
