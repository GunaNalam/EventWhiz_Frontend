import "./bootstrap.css";
import "./ServicePage.css";
import Image1 from "./EventsImage1.png";
import Image2 from "./EventsImage2.png";
import Image3 from "./EventsImage3.png";
import Image4 from "./EventsImage4.png";
import Image5 from "./EventsImage5.png";
import Image6 from "./EventsImage6.png";
import Navbar from "./Navbar";
import EventWhixFooter from "./EventWhizFooter";
const ServicePage = () => {
  return (
   <div className="ServiceWholeBody">
    <div className="container-fluid">
      <div className="container container-body" style={{ borderRadius: "35px" }}>
        <Navbar />
        <div className="ServiceBody pt-2">
          <div className="row py-5">
            <div className="col-12 text-center">
              <div className="ServiceBodyHeading1">THIS IS WHAT</div>
              <div className="ServiceBodyHeading2">WE SERVE</div>
            </div>
          </div>
        <div className="row">
          <div className="col-4 ServiceBodySub">
            <div className="container1">
                <img className="image" src={Image2} alt="Your Image" width={'500rem'}/>
                <div className="overlay Image1">
                    <h1 className="overlayHeading">Attend</h1>
                    <h2 className="overlaySubHeading">Events</h2>
                    <p className="overlayContent">Some Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, totam?\Lorem ipsum dolor sit </p>
                </div>
            </div>
          </div>
          <div className="col-4 ServiceBodySub">
            <div className="container1">
                <img className="image" src={Image1} alt="Your Image" width={'500rem'}/>
                <div className="overlay Image2">
                    <h1 className="overlayHeading">Hosting</h1>
                    <h2 className="overlaySubHeading">Events</h2>
                    <p className="overlayContent">Some Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, totam?\Lorem ipsum dolor sit </p>
                </div>
            </div>
          </div>
          <div className="col-4 ServiceBodySub">
            <div className="container1">
                <img className="image" src={Image3} alt="Your Image" width={'500rem'}/>
                <div className="overlay Image3">
                    <h1 className="overlayHeading">Organizers</h1>
                    <h2 className="overlaySubHeading">For events</h2>
                    <p className="overlayContent">Some Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, totam?\Lorem ipsum dolor sit </p>
                </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-4 ServiceBodySub">
            <div className="container1">
                <img className="image" src={Image4} alt="Your Image" width={'500rem'}/>
                <div className="overlay Image4">
                    <h1 className="overlayHeading">Professional</h1>
                    <h2 className="overlaySubHeading">Planners</h2>
                    <p className="overlayContent">Some Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, totam?\Lorem ipsum dolor sit </p>
                </div>
            </div>
          </div>
          <div className="col-4 ServiceBodySub">
            <div className="container1">
                <img className="image" src={Image5} alt="Your Image" width={'500rem'}/>
                <div className="overlay Image5">
                    <h1 className="overlayHeading">Venue</h1>
                    <h2 className="overlaySubHeading">Partners</h2>
                    <p className="overlayContent">Some Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, totam?\Lorem ipsum dolor sit </p>
                </div>
            </div>
          </div>
          <div className="col-4 ServiceBodySub">
            <div className="container1">
                <img className="image" src={Image6} alt="Your Image" width={'500rem'} />
                <div className="overlay Image6">
                    <h1 className="overlayHeading">Dashboard</h1>
                    <h2 className="overlaySubHeading">view</h2>
                    <p className="overlayContent">Some Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, totam?\Lorem ipsum dolor sit </p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    <EventWhixFooter />
    </div>

  );
};

export default ServicePage;
