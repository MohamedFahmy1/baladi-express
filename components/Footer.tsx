import React from "react";
import {
  Grid,
  Typography,
  IconButton,
  TextField,
  Button,
  Container,
  InputAdornment,
} from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline"; // Placeholder, replace with your own icon
import footer from "@/public/images/footer.png";
import Vector from "@/public/images/Vector.png";
import facebook from "@/public/images/facebook.png";
import instagram from "@/public/images/instagram.png";
import twitter from "@/public/images/twitter.png";
import youtube from "@/public/images/Group 48096093.png";
import googlePlay from "@/public/images/googlePlay.png";
import apple from "@/public/images/apple.png";
import telegram from "@/public/images/telegram.png";
import Image from "next/image";
const Footer = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${footer.src})`,
        backgroundSize: "cover",
        padding: "140px 60px 20px",
        color: "white",
      }}
    >
      <Container maxWidth={"xl"}>
        <Grid container spacing={4} component={"footer"}>
          <Grid item xs={3}>
            <Typography variant="h4" style={{ marginBottom: "20px" }}>
              <Image src={Vector} alt="logo" />
            </Typography>{" "}
            <Typography
              color="inherit"
              style={{ marginTop: "75px", textDecoration: "underline" }}
            >
              Become a Partner
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography>Let us help you</Typography>
            <Typography>Privacy Policy</Typography>
            <Typography>Warranty Policy</Typography>
            <Typography>Delivery Information</Typography>
            <Typography>T&C</Typography>
            <div style={{ marginTop: "20px" }}>
              <IconButton color="inherit">
                <Image src={youtube} alt="youtube logo" />
              </IconButton>
              <IconButton color="inherit">
                <Image src={twitter} alt="twitter logo" />
              </IconButton>
              <IconButton color="inherit">
                <Image src={facebook} alt="facebook logo" />
              </IconButton>
              <IconButton color="inherit">
                <Image src={instagram} alt="instagram logo" />
              </IconButton>
            </div>
          </Grid>
          <Grid item xs={3}>
            <Typography>Get to know us</Typography>
            <Typography>About us</Typography>
            <Typography>Contact us</Typography>
            <Typography>FAQ</Typography>
          </Grid>
          <Grid item xs={3}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
              }}
            >
              <Typography>Subscribe to our newsletter</Typography>
              <div style={{ display: "flex", marginTop: "10px" }}>
                <TextField
                  fullWidth
                  placeholder="Your email"
                  variant="outlined"
                  color="success"
                  sx={{ border: "none", outline: "none" }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Button
                          variant="contained"
                          color="secondary"
                          startIcon={<Image src={telegram} alt="telegram" />}
                          style={{
                            borderRadius: "50px",
                            padding: "15px 40px",
                            background:
                              "linear-gradient(101deg, #FCA004 5.35%, #FF7471 98.29%)",
                            boxShadow:
                              "0px 5px 15px 0px rgba(254, 138, 57, 0.40)",
                            left: "14px",
                          }}
                        ></Button>
                      </InputAdornment>
                    ),
                    style: {
                      borderRadius: "30px",
                      backgroundColor: "white",
                      color: "gray",
                    },
                  }}
                />
              </div>
              <div style={{ marginTop: "20px" }}>
                <IconButton color="inherit">
                  <Image
                    src={googlePlay}
                    alt="googlePlay logo"
                    width={128}
                    height={41}
                  />
                </IconButton>
                <IconButton color="inherit" sx={{ position: "relative" }}>
                  <Image src={apple} alt="apple logo" />
                  <Typography
                    position={"absolute"}
                    top={15}
                    left={35}
                    lineHeight={1}
                    fontSize={"11px"}
                  >
                    Download on the <br />{" "}
                    <Typography fontSize={"16px"}>App Store</Typography>
                  </Typography>
                </IconButton>
              </div>
            </div>
          </Grid>
        </Grid>
        <Typography
          align="center"
          style={{
            marginTop: "40px",
            borderTop: "1px solid white",
            paddingTop: "20px",
          }}
        >
          © 2023 Baladi Express, All Rights Reserved
        </Typography>
      </Container>
    </div>
  );
};

export default Footer;
