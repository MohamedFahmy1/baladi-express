import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  CardActions,
  Stack,
  IconButton,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import prod from "@/public/images/bannana.png";
type ProductCardProps = {
  price: number;
  products_locales: [{ title: string }];
  id: number;
};
const ProductCard: React.FC<ProductCardProps> = ({
  price,
  products_locales,
}) => {
  return (
    <Card
      sx={{ minHeight: "280px", padding: "10px", position: "relative" }}
      elevation={0}
      component={"section"}
    >
      <IconButton
        style={{
          position: "absolute",
          top: 5,
          right: 5,
          backgroundColor: "#f1f1f1",
          padding: "5px",
        }}
      >
        <FavoriteBorderIcon color="secondary" />
      </IconButton>
      <CardMedia
        component="img"
        alt={"Product"}
        height="140"
        // There was no link for image in the api response
        image={prod.src}
      />
      <CardContent>
        <Typography
          variant="h5"
          component="div"
          sx={{
            fontSize: "18px",
            fontWeight: 600,
            letterSpacing: "-1px",
          }}
        >
          {products_locales[0].title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {products_locales[0].title.slice(-5)}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6">{price} QAR</Typography>
        <Button
          size="small"
          variant="outlined"
          color="secondary"
          sx={{
            backgroundColor: "success.main",
            padding: "6px 15px",
            borderRadius: "10px",
            fontWeight: 600,
          }}
        >
          Add
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
