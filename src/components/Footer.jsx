import Facebook from "../assets/facebook.svg";
import LinkedIn from "../assets/linkedin.svg";
import Instagram from "../assets/instagram.svg";



const Footer = () => {
    return (
        <footer>
        <div className="container m-auto flex justify-between px-4 py-6">
          <div>
            {/* <p className="text-gray-300 text-sm">Copyright @ 2023</p> */}
          </div>
          <div>
            <ul className="flex gap-4">
              <li>
                <a href="https://www.facebook.com/yellaramsagar" target="_blank">
                  <img src={Facebook} className="w-5" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/sagar-yellaram/" target="_blank">
                  <img src={LinkedIn} className="w-5" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/sagar_yellaram/" target="_blank">
                  <img src={Instagram} className="w-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    )
}

export default Footer;