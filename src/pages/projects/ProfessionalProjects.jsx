import {useState} from 'react';
import Project1 from "../../assets/project1.png";
import Project2 from "../../assets/project2.png";
import Project3 from "../../assets/project3.png";
import Project4 from "../../assets/project4.png";
import chrTruck from "../../assets/images/chr-truck.png";
import insurejoy from "../../assets/images/insurejoy.png";
import limoneira1 from "../../assets/images/limoneira.png";
import limoneira2 from "../../assets/images/limoneira2.0.png";
import './ProfessionalProjects.css'

const ProfessionalProjects = () => {

    const [showMoreDetails, setShowMoreDetails] = useState({});


    const handleOnMoreClick = (e) => {
      console.log('e', e, "e.currentTarget", e.currentTarget.id, "e.target", e.target)
        const id = e.currentTarget.id
        let value = true
        if (showMoreDetails[id]) {
          value = false
        }
        setShowMoreDetails({[id] : value});
      }
console.log('showMoreDetails', showMoreDetails)
    return (
        <div>
             <section id="projects">
          <div className="container m-auto px-4 sm:py-12">
            <h2 className="text-2xl font-semibold">Projects</h2>
            <div className="flex flex-col sm:flex-row gap-10 mt-11">
              <div className="border border-gray-500 rounded-md p-5 flex-1">
                <img src={chrTruck} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">
                  load truck booking Application
                </h3>
                <h5>(CHR Navisphere Carrier)</h5>
                {!showMoreDetails?.chr && <p className="text-gray-400 text-sm mt-2">
                This project involves in an application where customers can book heavy load trucks and get paid
                </p>}
                <div onClick={handleOnMoreClick} id = "chr">
               {!showMoreDetails?.chr ?<p className="projectDescription">
                More details..
                </p>:(
                  <>
                <ul style={{listStyleType:'disc', fontSize: "14px", padding:"11px"}} className='text-gray-400'>
                  <li>This project involves in an application where customers can book heavy load trucks and get paid</li>
                  <li>I have worked as front-end developer by using React-Js framework. Which involves developing UI as well as functionality for truck management web application</li>
                  <li>Also worked on complete login , signup portal and worked on unit-testcases for the application by using enzyme and jest for maintaining code coverage</li>
                </ul>
                <p className="text-400 text-sm mt-0 cursor-pointer">
                See less..
                </p>
                </>
                )
                }
                </div>
                <div className="flex mt-16 gap-2">
                  <button className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                    <a href="https://www.navispherecarrier.com/login" target="_blank">Live preview</a>
                  </button>
                  {/* <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                    Checkout github
                  </button> */}
                </div>
              </div>
              <div className="border border-gray-500 rounded-md p-5 flex-1">
                <img src={insurejoy} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-7">
                insurance related services application <span style={{fontSize: '17px'}}>(Insure Joy)</span>
                </h3>
                {!showMoreDetails?.insureJoy && <p className="text-gray-400 text-sm mt-2">
                insurejoy.com has been built with a vision to provide transparently and top-notch insurance related services.
                </p>}
                <div onClick={handleOnMoreClick} id = "insureJoy">
               {!showMoreDetails?.insureJoy ?<p className="projectDescription">
                More details..
                </p>:(
                  <>
                <ul style={{listStyleType:'disc', fontSize: "14px", padding:"11px"}} className='text-gray-400'>
                  <li>insurejoy.com has been built with a vision to provide transparently and top-notch insurance related services are driven by technology with the main objective being simple and easy to understand, inform and educate customers about the importance of buying insurance</li>
                  <li>My responsibility was to develop insurance portals with reusable components. Also integrating Apis by implementing redux saga networks. </li>
                </ul>
                <p className="text-400 text-sm mt-0 cursor-pointer">
                See less..
                </p>
                </>
                )
                }
                </div>
                <div className="flex gap-2 mt-12">
                  <button className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                    <a href="https://www.insurejoy.com/health-insurance" target="_blank">Live preview </a>
                  </button>
                  {/* <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                    Checkout github
                  </button> */}
                </div>
              </div>
            </div>
            <div className="flex gap-10 mt-11">
              <div className="border border-gray-500 rounded-md p-5 flex-1">
                <img src={limoneira2} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">
                Citrus Industry services application <span style={{fontSize: '17px'}}>(Limoneira)</span>
                </h3>
               {!showMoreDetails?.limoneira && <p className="text-gray-400 text-sm mt-2">
                Limoneira has been developed with the vision My responsibility was to develop the screens using helped lay the 
foundations of a thriving California citrus industry.
                </p>}
                <div onClick={handleOnMoreClick} id = "limoneira">
               {!showMoreDetails?.limoneira ?<p className="projectDescription">
                More details..
                </p>:(
                  <>
                <ul style={{listStyleType:'disc', fontSize: "14px", padding:"11px"}} className='text-gray-400'>
                  <li>Limoneira has been developed with the vision My responsibility was to develop the screens using helped lay the 
foundations of a thriving California citrus industry. Their dedication and innovation in the agricultural industry 
helped found and develop many institutions that still exist</li>
                  <li>My responsibility was to develop the screens using ReactJs and writing APIs</li>
                </ul>
                <p className="text-400 text-sm mt-0 cursor-pointer">
                See less..
                </p>
                </>
                )
                }
                </div>
                <div className="flex gap-4 mt-12">
                  <button className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                  <a href="https://www.limoneira.com/" target="_blank">Live preview </a>
                  </button>
                  {/* <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                    Checkout github
                  </button> */}
                </div>
              </div>
              {/* <div className="border border-gray-500 rounded-md p-5 flex-1">
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
              </div> */}
            </div>
          </div>
        </section>
        </div>
    )
}

export default ProfessionalProjects;