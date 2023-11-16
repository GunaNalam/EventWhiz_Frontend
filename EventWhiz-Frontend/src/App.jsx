import Login from "./components/Login";
import { Route, Routes, useLocation } from "react-router";
import SignUp from "./components/Signup";
import HomePage from './components/HomePage';
import NoMatch from "./components/NoMatch";
import ServicePage from './components/ServicePage';
import Testimonials from './components/Testimonials';
import Dashboard from "./components/Dashboard";
import BrowseEvents from "./components/BrowseEvents";
import HostEvent from "./components/HostEvent";
import Profile from "./components/Profile";
import MyEvents from "./components/MyEvents";
import MyBookings from "./components/MyBookings";
import NavbarController from "./components/NavbarController";
import { useEffect, useState } from "react";
import Services from "./components/Services";
import Testinomials from "./components/Testinomials";
import { Box } from "@mui/material";
import ViewEventDetails from "./components/ViewEventDetails";
import UpdateEvent from "./components/UpdateEvent";
import EventRegistrations from "./components/EventRegistrations";
import "./App.css";
import ContactUs from './components/ContactUs';

function App() {
  const [navbarState, setNavbarState] = useState(0);
  const location = useLocation();
  const dashboardNavbarRoutes = [
    "dashboard",
    "browseEvents",
    "browseEvents/*",
    "hostEvent",
    "profile",
    "myEvents",
    "myBookings",
    "updateEvent",
  ];

  useEffect(() => {
    if (dashboardNavbarRoutes.includes(location.pathname.split("/")[1])) {
      setNavbarState(1);
    } else {
      setNavbarState(0);
    }
  }, [location]);

  return (
    <>
      {/* <NavbarController type={navbarState}></NavbarController> */}
      {/* <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          backgroundColor:'white'
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "95%",
          }}
        > */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Service" element={<ServicePage />} />
            <Route path="/Testimonials" element={<Testimonials />} />
            <Route path="/ContactUs" element={<ContactUs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/dashboard" element={<Dashboard></Dashboard>} />
            <Route
              path="/browseEvents"
              element={<BrowseEvents></BrowseEvents>}
            ></Route>
            <Route
              path="/browseEvents/:eventId"
              element={<ViewEventDetails></ViewEventDetails>}
            ></Route>
            <Route path="/hostEvent" element={<HostEvent></HostEvent>}></Route>
            <Route path="/profile" element={<Profile></Profile>}></Route>
            <Route path="/myEvents" element={<MyEvents></MyEvents>}></Route>
            <Route
              path="/updateEvent/:eventId"
              element={<UpdateEvent></UpdateEvent>}
            ></Route>
            <Route
              path="/myBookings"
              element={<MyBookings></MyBookings>}
            ></Route>
            <Route
              path="/myEvents/registrations/:eventId"
              element={<EventRegistrations></EventRegistrations>}
            ></Route>
            <Route path="/services" element={<Services></Services>}></Route>
            <Route
              path="/testinomials"
              element={<Testinomials></Testinomials>}
            ></Route>
            <Route path="*" element={<NoMatch></NoMatch>}></Route>
          </Routes>
        {/* </Box>
      </Box> */}
    </>
  );
}

export default App;
