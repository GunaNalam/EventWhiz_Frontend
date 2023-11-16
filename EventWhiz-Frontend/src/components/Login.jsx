import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import LoadingButton from "@mui/lab/LoadingButton";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../redux";
import { apiStatus, authOperation, authStatus } from "../redux/auth/authTypes";
import { useLocation, useNavigate } from "react-router";
import * as React from "react";
import MuiAlert from "@mui/material/Alert";
import { useState, useEffect } from "react";
import { Snackbar } from "@mui/material";
import "./bootstrap.css";
import "./Login.css";
import Logo from "./Group91.png";
import { FaSignInAlt} from 'react-icons/fa';

const defaultTheme = createTheme();

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Login() {
  const [open, setOpen] = useState(false);
  const [emailError, setEmailError] = useState("");
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const redirectPath = location.state?.path || "/";
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (
      auth.apiStatus === apiStatus.FAILURE &&
      auth.authOperation === authOperation.LOGIN &&
      auth.authStatus === authStatus.NOT_LOGGED_IN
    ) {
      setOpen(true);
    }

    return () => {};
  }, [auth.apiStatus, auth.authOperation, auth.authStatus]);

  useEffect(() => {
    if (auth.accessToken) {
      navigate(redirectPath); // Redirect to the specified path if the user is already authenticated
    }
  }, [auth]);

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

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const password = data.get("password");
    if (!validateEmail(email)) {
      setEmailError("Invalid email format");
    } else {
      setEmailError("");
      dispatch(authActions.login(email, password));
    }
  };

  return (
    <div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          {auth.errorReason}
        </Alert>
      </Snackbar>
      <div className="LoginWholeBody container-fluid">
      <div className="row">
        <div className="col-6 ImageLogin">
          <div className="EventWhizlogo logo">
            <img src={Logo} alt="" />
          </div>
          <div className="LoginText">
            To Continue,
            <br />
            Sign in to EventWhiz.
          </div>
        </div>
        <div className="col-6 SideImage">
          <div className="row pageCenter">
            <div className="col-12 text-center pb-4 " style={{fontWeight:'600',fontSize:'3.3rem'}}>
              Welcome back! 
            </div>
            <div className="offset-3 col-9">
                <div>
                  <TextField 
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  error={!!emailError}
                  helperText={emailError}
                  sx={{width:'70%'}}
                  />
                  </div>
                <div>
                  <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  sx={{width:'70%'}}
                  />
                  </div>
                  <div>
                  <a href="" className="ForgotPassLink" style={{marginLeft:'240px'}}>Forgot Password?</a><br />
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
                    onClick={handleSubmit}
                    loading={
                      auth.apiStatus === apiStatus.IN_PROGRESS &&
                      auth.authOperation === authOperation.LOGIN &&
                      auth.authStatus === authStatus.NOT_LOGGED_IN
                    }
                    >
                      <span className="pe-2">
                        Login
                        </span>
                    <FaSignInAlt/>
                  </LoadingButton>
                  </div>
                <div className="RegisterButton">
                    <div style={{paddingTop:'20px',paddingLeft:'25px',fontSize:'18px'}}>
                      {"Don't have an account?"}  
                    </div>
                  <Link to="/signup" variant="body2" >
                     <button className="btn1 btn-1 mt-3">REGISTER NOW</button>
                  </Link>
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
              Login
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
                Login
              
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider> */}
    </div>
  );
}
// TODO: Input tags lo em marchali and kudirthe password ki oka eye button for visiblility(on both login and signup), R ani vastundi Gmail Image lo.
