"use client";
import {
  AppBar,
  Toolbar,
  InputBase,
  Button,
  IconButton,
  Select,
  MenuItem,
  Box,
  InputAdornment,
  Container,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import logo from "@/public/images/logo.png";
import cart from "@/public/images/cart.png";
import profile from "@/public/images/profile.png";
import nav from "@/public/images/NavigationArrow.png";
import SearchIcon from "@mui/icons-material/Search";
const Header = () => {
  return (
    <Container
      maxWidth={"xl"}
      sx={{ paddingTop: 3, paddingBottom: 5 }}
      component={"header"}
    >
      <AppBar position="sticky" color="inherit" elevation={0}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Image
              src={logo}
              alt="Logo"
              style={{ marginRight: 10 }}
              width={136}
              height={50}
            />
          </Box>
          <InputBase
            placeholder="Search…"
            style={{ width: "666px", backgroundColor: "#ebebeb" }}
            startAdornment={
              <IconButton size="small">
                <SearchIcon />
              </IconButton>
            }
            sx={{
              padding: "4px 8px",
              border: "1px solid #ccc",
              borderRadius: 4,
            }}
          />
          <Box style={{ display: "flex", alignItems: "center", columnGap: 22 }}>
            <Select
              defaultValue="Lusail, Qatar"
              sx={{
                minWidth: 120,
                border: "none",
                bgcolor: "rgba(255, 88, 0, 0.21)",
              }}
              startAdornment={
                <InputAdornment position="start">
                  <Image src={nav} alt="nav" width={21} height={21} />
                </InputAdornment>
              }
            >
              <MenuItem value="Lusail, Qatar" sx={{ fontWeight: 700 }}>
                Lusail, Qatar
              </MenuItem>
            </Select>

            <Button
              size="medium"
              color="inherit"
              sx={{
                fontSize: "15px",
                fontWeight: 700,
                color: "#FF5800",
                bgcolor: "#ebebeb",
                borderRadius: "10px",
                width: "49px",
                height: "49px",
              }}
            >
              EN
            </Button>
            <Button
              sx={{
                color: "#FF5800",
                bgcolor: "#ebebeb",
                borderRadius: "10px",
                width: "49px",
                height: "49px",
              }}
            >
              <Image src={profile} alt="cart" />
            </Button>
            <Button
              sx={{
                color: "#FF5800",
                bgcolor: "#ebebeb",
                borderRadius: "10px",
                width: "49px",
                height: "49px",
              }}
            >
              <Image src={cart} alt="cart" />
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Container>
  );
};

export default Header;
