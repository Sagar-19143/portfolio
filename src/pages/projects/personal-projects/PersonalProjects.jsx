import {useState} from 'react';
import Project4 from "../../../assets/project4.png";
import chrTruck from "../../../assets/images/chr-truck.png";
import insurejoy from "../../../assets/images/insurejoy.png";
import limoneira2 from "../../../assets/images/limoneira2.0.png";
import hotelBooking  from "../../../assets/images/hotelBooking.png";
import hotelBooking3  from "../../../assets/images/hotelBooking3.png";
import voiceBasedAssistance1 from '../../../assets/images/voiceBasedAssistance1.png';
import voiceBasedAssistance2 from '../../../assets/images/voiceBasedAssistance2.png';
import data from '../../../jsons/personalProject.json'
import './PersonalProjects.css';
const PersonalProjects = () => {

    const [showMoreDetails, setShowMoreDetails] = useState({});

    console.log('data..', data["Advanced Filtering Options"])
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
            <h2 className="text-2xl font-semibold">Personal Projects</h2>
            <div className="flex flex-col sm:flex-row gap-10 mt-11">
              <div className="border border-gray-500 rounded-md p-5 flex-1">
                <img src={voiceBasedAssistance2} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">
                  Voice Based Assistance
                </h3>
                {!showMoreDetails?.virtualAssistance && <p className="text-gray-400 text-sm mt-2">
                This project involves in an application where customers can book heavy load trucks and get paid
                </p>}
                <div onClick={handleOnMoreClick} id = "virtualAssistance">
               {!showMoreDetails?.virtualAssistance ?<p className="projectDescription">
                More details..
                </p>:(
                  <>
                <ul style={{listStyleType:'disc', fontSize: "14px", padding:"11px"}} className='text-gray-400'>
                  <li>I have developed an application that is useful for college, where we can obtain information about the college by
Using voice commands and input text.</li>
                  <li>I used Python for speech recognition algorithms and the kiwi framework for the user interface.</li>
                </ul>
                <div className='flex flex-cols p-2'>
                  <button className="but1 text-sm p-5 py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 mr-3">
                    Python
                  </button>
                  <button className="but text-sm p-5 py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 mr-3">
                    Kiwi
                  </button>
                  </div>
                <p className="text-400 text-sm mt-0 cursor-pointer">
                See less..
                </p>
                </>
                )
                }
                </div>
                <div className="flex mt-16 gap-2">
                  {/* <button disabled={true} className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                    <a href="https://www.navispherecarrier.com/login" target="_blank">Live preview</a>
                  </button> */}
                  {/* <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                    Checkout github
                  </button> */}
                </div>
              </div>
              <div className="border border-gray-500 rounded-md p-5 flex-1">
                <img src={hotelBooking3} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-7">
                Full-Stack Hotel Booking Application:
                </h3>
                {!showMoreDetails?.hotelBooking && <p className="text-gray-400 text-sm mt-2">
                Developed a robust full-stack hotel booking application from inception, offering users a seamless platform to reserve accommodations tailored to their preferences. Employed a secure implementation with JWT authentication to ensure authorized access to resources, enhancing user data protection.
                </p>}
                <div>
               {!showMoreDetails?.hotelBooking ?<p className="projectDescription" onClick={handleOnMoreClick} id = "hotelBooking">
                More details..
                </p>:(
                  <>
                  <h2 style={{fontSize: "20px",marginTop:'5px', marginBottom:'3px'}}>Key Achievements:</h2>
                  {data&&Object.keys(data).map((key)=> (
                      <div>
                      <ul style={{listStyleType: 'disc', padding:'16px'}}>
                      <li>{key}</li>
                      </ul>
                      <p className='text-gray-400'>{data?.[key]}</p>
                      </div>
                  ))}
                  <div className='flex flex-cols p-2'>
                  <button className="text-sm p-5 py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 mr-3">
                    React js
                  </button>
                  <button className="text-sm p-5 py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 mr-3">
                    Express js
                  </button>
                  <button className="text-sm p-5 py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 mr-3">
                    Mongo DB
                  </button>
                  </div>
                  <div className='flex justify-center'>
                  <button className="text-sm p-7 py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 mr-3">
                    Jwt
                  </button>
                  <button className="text-sm p-5 py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500">
                    Stripe
                  </button>
                  </div>
                <p className="text-400 text-sm mt-0 cursor-pointer"  onClick={handleOnMoreClick} id = "hotelBooking">
                See less..
                </p>
                </>
                )
                }
                </div>
                <div className="flex gap-2 mt-12">
                  {/* <button className="flex-1 text-sm py-3 mt-16 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                    <a href="" target="_blank">Live preview </a>
                  </button> */}
                  {/* <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                    Checkout github
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        </div>
    )
}

export default PersonalProjects;