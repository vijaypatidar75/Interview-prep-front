import React from "react";
import "../styles/home.css";
import Nav from "../components/Nav";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <Nav />
      <div className="introduction">
        <div className="intro-1">
          <h2 className="text-[#ce0000] text-2xl font-bold mb-2">Who are We</h2>
          <h1 className="mb-4 text-3xl font-bold leading-9 tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
            Empowering Coders, Enabling Dreams
          </h1>
          <p className="mt-4">
            Unveil the essence of InterviewPrep: a community-driven platform
            dedicated to empowering coders of all levels. Discover who we are
            and how we're shaping the future of coding education.
          </p>
          <div>
            <div className="button" id="button-2">
              <div id="slide"></div>
              <Link to="/generate-list-parameter">Explore DSA</Link>
            </div>
          </div>
        </div>
        <div className="intro-2">
          <img
            width="300px"
            height="300px"
            src="https://img.freepik.com/free-vector/colourful-illustration-programmer-working_23-2148281410.jpg?w=740&t=st=1710936470~exp=1710937070~hmac=9f15d0bc75221c0e89be3213ced3278d8f35d3c33b013c45c365ae5525cdec96"
            alt=""
          />
        </div>
      </div>

      <div className="features">
        <div className="feature-items">
          <div>
            <img
              width="22px"
              height="20px"
              src="https://cdn-icons-png.flaticon.com/128/57/57073.png"
              alt=""
            />
            <p>INTERVIEW QUESTIONS</p>
          </div>
          <div>
            <img
              width="20px"
              height="20px"
              src="https://cdn-icons-png.flaticon.com/128/2991/2991115.png"
              alt=""
            />
            <Link
              to="/generate-list-parameter"
              className="a hover:cursor-pointer"
            >
              GENERATE SHEET
            </Link>
          </div>
          <div>
            <img
              width="25px"
              height="22px"
              src="https://cdn-icons-png.flaticon.com/128/2542/2542594.png"
              alt=""
            />
            <p>USEFUL TUTORIALS</p>
          </div>
          <div>
            <img
              width="26px"
              height="24px"
              src="https://cdn-icons-png.flaticon.com/128/7789/7789533.png"
              alt=""
            />
            <p>FAQs</p>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />

      <div className="companies">
        <h2 className="text-4xl font-bold">Be Consistent To Place At</h2>
        <div>
          <img
            width="96px"
            height="29px"
            src="https://res.cloudinary.com/dbepo4xrw/image/upload/w_256,q_100,c_limit,f_auto/amazon"
            alt=""
          />
          <img
            width="96px"
            height="29px"
            src="https://res.cloudinary.com/dbepo4xrw/image/upload/w_256,q_100,c_limit,f_auto/adobe"
            alt=""
          />
          <img
            width="96px"
            height="29px"
            src="https://res.cloudinary.com/dbepo4xrw/image/upload/w_256,q_100,c_limit,f_auto/uber"
            alt=""
          />
          <img
            width="96px"
            height="29px"
            src="https://res.cloudinary.com/dbepo4xrw/image/upload/w_256,q_100,c_limit,f_auto/atlassian"
            alt=""
          />
          <img
            width="96px"
            height="29px"
            src="https://res.cloudinary.com/dbepo4xrw/image/upload/w_256,q_100,c_limit,f_auto/microsoft"
            alt=""
          />
          <img
            width="96px"
            height="29px"
            src="https://res.cloudinary.com/dbepo4xrw/image/upload/w_256,q_100,c_limit,f_auto/oracle"
            alt=""
          />
        </div>

        <div>
          <img
            width="96px"
            height="29px"
            src="https://res.cloudinary.com/dbepo4xrw/image/upload/w_256,q_100,c_limit,f_auto/accenture"
            alt=""
          />
          <img
            width="96px"
            height="29px"
            src="https://res.cloudinary.com/dbepo4xrw/image/upload/w_256,q_100,c_limit,f_auto/jio"
            alt=""
          />
          <img
            width="96px"
            height="29px"
            src="https://res.cloudinary.com/dbepo4xrw/image/upload/w_256,q_100,c_limit,f_auto/volkswagen"
            alt=""
          />
          <img
            width="96px"
            height="29px"
            src="https://res.cloudinary.com/dbepo4xrw/image/upload/w_256,q_100,c_limit,f_auto/accolite"
            alt=""
          />
          <img
            width="96px"
            height="29px"
            src="https://res.cloudinary.com/dbepo4xrw/image/upload/w_256,q_100,c_limit,f_auto/nagarro"
            alt=""
          />
          <img
            width="96px"
            height="29px"
            src="https://res.cloudinary.com/dbepo4xrw/image/upload/w_256,q_100,c_limit,f_auto/capgemini"
            alt=""
          />
        </div>

        <div>
          <img
            width="96px"
            height="29px"
            src="https://res.cloudinary.com/dbepo4xrw/image/upload/w_256,q_100,c_limit,f_auto/samsung"
            alt=""
          />
          <img
            width="96px"
            height="29px"
            src="https://res.cloudinary.com/dbepo4xrw/image/upload/w_256,q_100,c_limit,f_auto/pwc"
            alt=""
          />
          <img
            width="96px"
            height="29px"
            src="https://res.cloudinary.com/dbepo4xrw/image/upload/w_256,q_100,c_limit,f_auto/bandhanBank"
            alt=""
          />
          <img
            width="96px"
            height="29px"
            src="https://res.cloudinary.com/dbepo4xrw/image/upload/w_256,q_100,c_limit,f_auto/ibm"
            alt=""
          />
          <img
            width="96px"
            height="29px"
            src="https://res.cloudinary.com/dbepo4xrw/image/upload/w_256,q_100,c_limit,f_auto/eleven"
            alt=""
          />
          <img
            width="96px"
            height="29px"
            src="https://res.cloudinary.com/dbepo4xrw/image/upload/w_256,q_100,c_limit,f_auto/bosch_img"
            alt=""
          />
        </div>

        <div>
          <img
            width="96px"
            height="29px"
            src="https://res.cloudinary.com/dbepo4xrw/image/upload/w_256,q_100,c_limit,f_auto/mercedes-benz"
            alt=""
          />
          <img
            width="96px"
            height="29px"
            src="https://res.cloudinary.com/dbepo4xrw/image/upload/w_256,q_100,c_limit,f_auto/urban-company"
            alt=""
          />
          <img
            width="96px"
            height="29px"
            src="https://res.cloudinary.com/dbepo4xrw/image/upload/w_256,q_100,c_limit,f_auto/deutsche_telekom"
            alt=""
          />
          <img
            width="96px"
            height="29px"
            src="https://res.cloudinary.com/dbepo4xrw/image/upload/w_256,q_100,c_limit,f_auto/tcs"
            alt=""
          />
          <img
            width="96px"
            height="29px"
            src="https://res.cloudinary.com/dbepo4xrw/image/upload/w_256,q_100,c_limit,f_auto/expediagroup"
            alt=""
          />
          <img
            width="96px"
            height="29px"
            src="https://res.cloudinary.com/dbepo4xrw/image/upload/w_256,q_100,c_limit,f_auto/salesforce"
            alt=""
          />
        </div>

        <div>
          <img
            width="96px"
            height="29px"
            src="https://res.cloudinary.com/dbepo4xrw/image/upload/w_256,q_100,c_limit,f_auto/juspay"
            alt=""
          />
          <img
            width="96px"
            height="29px"
            src="https://res.cloudinary.com/dbepo4xrw/image/upload/w_256,q_100,c_limit,f_auto/siemens"
            alt=""
          />
          <img
            width="96px"
            height="29px"
            src="https://res.cloudinary.com/dbepo4xrw/image/upload/w_256,q_100,c_limit,f_auto/americanExpress"
            alt=""
          />
          <img
            width="96px"
            height="29px"
            src="https://res.cloudinary.com/dbepo4xrw/image/upload/w_256,q_100,c_limit,f_auto/booking"
            alt=""
          />
          <img
            width="96px"
            height="29px"
            src="https://res.cloudinary.com/dbepo4xrw/image/upload/w_256,q_100,c_limit,f_auto/infoedge"
            alt=""
          />
          <img
            width="96px"
            height="29px"
            src="https://res.cloudinary.com/dbepo4xrw/image/upload/w_256,q_100,c_limit,f_auto/paytm"
            alt=""
          />
        </div>
      </div>

      <div className="offering">
        <h2 className="text-2xl font-bold">Our offering</h2>
        <h1 className="mb-4 text-2xl font-bold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl">
          Here is what you get at InterviewPrep
        </h1>
        <div className="offering-container">
          <div className="offering-items">
            <div className="items">
              <img
                width="28px"
                height="27px"
                src="https://cdn-icons-png.flaticon.com/128/8625/8625364.png"
                alt=""
              />
              <p>1. Top Interview Questions on CS Core</p>
            </div>

            <div className="items">
              <img
                width="28px"
                height="27px"
                src="https://cdn-icons-png.flaticon.com/128/8625/8625364.png"
                alt=""
              />
              <p>2. Generate DSA Sheet based on User's Level </p>
            </div>

            <div className="items">
              <img
                width="28px"
                height="27px"
                src="https://cdn-icons-png.flaticon.com/128/8625/8625364.png"
                alt=""
              />
              <p>3. Structured DSA path for Targeted Firm's</p>
            </div>

            <div className="items">
              <img
                width="28px"
                height="27px"
                src="https://cdn-icons-png.flaticon.com/128/8625/8625364.png"
                alt=""
              />
              <p>4. Access All Quality Resources </p>
            </div>

            <div className="items">
              <img
                width="28px"
                height="27px"
                src="https://cdn-icons-png.flaticon.com/128/8625/8625364.png"
                alt=""
              />
              <p>5. Get Regular POTD based on level </p>
            </div>
          </div>

          <img
            className="side-img"
            width="340px"
            height="400px"
            src="https://img.freepik.com/free-vector/open-knowledge-concept-template-banner-flyer-with-isometric-style-vector_82472-734.jpg?t=st=1711124934~exp=1711128534~hmac=c93b4fb4316de82c9de80554df10ab3eae82f4122c9f173fda38ef21f35fc34f&w=360"
            alt=""
          />
        </div>
      </div>

      <footer className="footer">
        <ul className="social-icon">
          <li className="social-icon__item">
            <div className="social-icon__link">
              <ion-icon name="logo-facebook"></ion-icon>
            </div>
          </li>
          <li className="social-icon__item">
            <div className="social-icon__link">
              <ion-icon name="logo-twitter"></ion-icon>
            </div>
          </li>
          <li className="social-icon__item">
            <div className="social-icon__link">
              <ion-icon name="logo-linkedin"></ion-icon>
            </div>
          </li>
          <li className="social-icon__item">
            <div className="social-icon__link">
              <ion-icon name="logo-instagram"></ion-icon>
            </div>
          </li>
        </ul>
        <ul className="menu">
          <li className="menu__item">
            <div className="menu__link">Home</div>
          </li>
          <li className="menu__item">
            <div className="menu__link">About</div>
          </li>
          <li className="menu__item">
            <div className="menu__link">Services</div>
          </li>
          <li className="menu__item">
            <div className="menu__link">Team</div>
          </li>
          <li className="menu__item">
            <div className="menu__link">Contact</div>
          </li>
        </ul>
        <p>&copy;2024 Interview Prep | All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default Home;
