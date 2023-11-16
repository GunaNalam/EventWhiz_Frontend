import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../redux";
import { useEffect, useState } from "react";
import { Navigate } from "react-router";
import { apiStatus, authOperation, authStatus } from "../redux/auth/authTypes";
import { Snackbar } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import MuiAlert from "@mui/material/Alert";
import * as React from "react";
import "./bootstrap.css";
import "./Signup.css";
import Logo from "./Group91.png";
import { FaUser} from 'react-icons/fa';
const defaultTheme = createTheme();

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function SignUp() {
  const [emailError, setEmailError] = useState("");
  const [contactError, setContactError] = useState("");
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return emailRegex.test(email);
  };

  const validateContact = (contact) => {
    const contactRegex = /^[0-9]{10}$/;
    return contactRegex.test(contact);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = data.get("name");
    const email = data.get("email");
    const contact = data.get("contact");
    const password = data.get("password");

    // console.log({
    //   name: data.get("name"),
    //   email: data.get("email"),
    //   contact: data.get("contact"),
    //   password: data.get("password"),
    // });

    // Validate the email format
    let error = false;
    if (!validateEmail(email)) {
      setEmailError("Invalid email format");
      error = true;
    } else {
      setEmailError(""); // Clear the email error if it's valid
    }

    // Validate the phone number format
    if (!validateContact(contact)) {
      setContactError("Invalid phone number format");
      error = true;
    } else {
      setContactError(""); // Clear the contact error if it's valid
    }

    // Only dispatch the signup action if both email and contact are valid
    if (!error) {
      dispatch(authActions.signup(name, email, contact, password));
    }
  };

  useEffect(() => {
    if (
      auth.apiStatus === apiStatus.FAILURE &&
      auth.authOperation === authOperation.SIGNUP &&
      auth.authStatus === authStatus.NOT_LOGGED_IN
    ) {
      setOpen(true);
    }
    return () => {};
  }, [auth.apiStatus, auth.authOperation, auth.authStatus]);

  if (auth.accessToken) {
    return <Navigate to="/dashboard"></Navigate>;
  }

  return (
    <div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          {auth.errorReason}
        </Alert>
      </Snackbar>
      <div className="SingUpWholeBody container-fluid">
      <div className="row">
        <div className="col-6 ImageLogin">
          <div className="EventWhizlogo">
            <img src={Logo} alt="" />
          </div>
          <div className="LoginText">
            To Continue,
            <br />
            Sign Up to EventWhiz.
          </div>
        </div>
        <div className="col-6 SideImage">
          <div className="row pageCenter">
            <div className="col-12 text-center pb-5" style={{fontWeight:'600',fontSize:'3.3rem'}}>
              <FaUser/> 
              <span className="ps-3">
                Signup
              </span>
            </div>
            <div className="offset-3 col-9">
                <div>
                  <TextField
                    autoComplete="name"
                    name="name"
                    required
                    fullWidth
                    id="name"
                    label="Name"
                    autoFocus
                    sx={{width:'70%'}}
                    />
                  </div>
                <div className="pt-4">
                  <TextField
                    required
                    fullWidth
                    id="contact"
                    label="Contact Number"
                    name="contact"
                    autoComplete="contact"
                    error={!!contactError}
                    helperText={contactError}
                    sx={{width:'70%'}}
                  />
                  </div>
                <div className="pt-4">
                  <TextField
                    required
                    fullWidth
                    id="contact"
                    label="Email Address"
                    name="contact"
                    autoComplete="contact"
                    error={!!contactError}
                    helperText={contactError}
                    sx={{width:'70%'}}
                    />
                  </div>
                <div className="pt-4">
                  <TextField
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="new-password"
                      sx={{width:'70%'}}
                    />
                  </div>
                <div className="pt-4">
                  <TextField
                      required
                      fullWidth
                      name="password"
                      label="Confirm Password"
                      type="password"
                      id="password"
                      autoComplete="new-password"
                      sx={{width:'70%'}}
                    />
                  </div>
                  <div>
                  <LoadingButton
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx=
                    {{ mt: 3, mb: 2,
                    color: 'white',
                    textDecoration: 'none',
                    border: '2px solid black',
                    padding: '8px 20px',
                    fontSize: '18px',
                    background: 'transparent',
                    position: 'relative',
                    transition: 'all 0.5s',
                    overflow: 'hidden',
                    backgroundColor: '#274A8D',
                    borderRadius: '5px',
                    fontFamily: 'Oswald',
                    width:'40%',
                    marginLeft:'15%',
                    '&:hover': {
                      textDecoration: 'none',
                      border: '2px solid black',
                      padding: '8px 20px',
                      fontSize: '18px',
                      background: 'transparent',
                      position: 'relative',
                      transition: 'all 0.5s',
                      overflow: 'hidden',
                      backgroundColor: '#274A8D',
                      borderRadius: '5px',
                      fontFamily: 'Oswald',
                      color: 'black'
                    },
                    }}
                    loading={
                      auth.apiStatus === apiStatus.IN_PROGRESS &&
                      auth.authOperation === authOperation.SIGNUP &&
                      auth.authStatus === authStatus.NOT_LOGGED_IN
                    }
                  >
                    Sign Up
                  </LoadingButton>
                  </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      {/* <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  
                </Grid>
                <Grid item xs={12}>
                  
                </Grid>
                <Grid item xs={12}>
                  
                </Grid>
                <Grid item xs={12}>
                  
                </Grid>
              </Grid>
              
              <Grid container justifyContent="center">
                <Grid item>
                  <Link href="/login" variant="body2">
                    Already have an account? Login
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider> */}
    </div>
  );
}