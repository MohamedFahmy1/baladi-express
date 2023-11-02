import React from "react";
import {
  Typography,
  Button,
  IconButton,
  Breadcrumbs,
  Container,
  InputAdornment,
  Select,
  MenuItem,
} from "@mui/material";
import cart2 from "@/public/images/cart2.png";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import Image from "next/image";
const FruitsAndVeggiesSection = () => {
  return (
    <Container sx={{ padding: 3 }} maxWidth={"xl"} component={"nav"}>
      <Breadcrumbs aria-label="breadcrumb">
        <Typography color="inherit">Home Page</Typography>
        <Typography color="inherit">Baladi Express Mart</Typography>
        <Typography color="secondary" sx={{ textDecoration: "underline" }}>
          Fresh Fruits & Vegetables
        </Typography>
      </Breadcrumbs>
      <Typography variant="h4" style={{ margin: "20px 0" }}>
        Fresh Fruits & Vegetables
      </Typography>
      <Button
        variant="outlined"
        color="secondary"
        sx={{
          border: "2px solid #FF4200",
          color: "rgba(0, 0, 0, 0.50)",
          fontWeight: 600,
          marginRight: 2,
          marginY: 2,
          borderRadius: "10px",
          textTransform: "Capitalize",
        }}
      >
        Fresh Fruits
      </Button>
      <Button
        variant="outlined"
        color="info"
        sx={{
          color: "rgba(0, 0, 0, 0.50)",
          fontWeight: 600,
          marginRight: 2,
          marginY: 2,
          borderRadius: "10px",
          textTransform: "Capitalize",
        }}
      >
        Fresh Vegetables
      </Button>
      <Button
        variant="outlined"
        color="info"
        sx={{
          color: "rgba(0, 0, 0, 0.50)",
          fontWeight: 600,
          marginY: 2,
          borderRadius: "10px",
          textTransform: "Capitalize",
        }}
      >
        Combo Basket
      </Button>

      {/* Sorting and Product Tags */}
      <div style={{ display: "flex", alignItems: "center", marginBottom: 10 }}>
        <Select
          defaultValue="Sort"
          placeholder="Sort"
          variant="outlined"
          sx={{
            minWidth: 120,
            height: 35,
            marginRight: "5px",
            borderRadius: "10px",
          }}
          startAdornment={
            <InputAdornment position="start">
              <SwapVertIcon />
            </InputAdornment>
          }
        >
          <MenuItem value="Sort" sx={{ fontWeight: 700 }}>
            Sort
          </MenuItem>
        </Select>
        {[
          "Apple",
          "Banana",
          "Melon",
          "Cherry",
          "Pineapple",
          "Watermelon",
          "Grapes",
          "Pears",
          "Berries",
          "Lemon",
        ].map((item) => (
          <Button
            variant="outlined"
            color="info"
            style={{
              marginRight: 5,
              color: "#000",
              fontWeight: 500,
              textTransform: "Capitalize",
              borderRadius: "10px",
            }}
            key={item}
          >
            {item}
          </Button>
        ))}
      </div>
      {["Pineapple", "Watermelon", "Grapes", "Pears", "Berries", "Lemon"].map(
        (item) => (
          <Button
            variant="outlined"
            color="info"
            style={{
              marginRight: 5,
              color: "#000",
              fontWeight: 500,
              textTransform: "Capitalize",
              borderRadius: "10px",
            }}
            key={item}
          >
            {item}
          </Button>
        )
      )}
      {/* Cart Icon (Right side) */}
      <IconButton
        size="medium"
        style={{ position: "absolute", top: 251, right: 130 }}
      >
        <Image src={cart2} alt="cart" width={74} height={74} />
      </IconButton>
    </Container>
  );
};

export default FruitsAndVeggiesSection;
