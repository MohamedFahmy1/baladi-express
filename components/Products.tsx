import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import { Container, Grid } from "@mui/material";

const ProductsGrid = () => {
  const [products, setProducts] = useState<
    {
      price: number;
      products_locales: [{ title: string }];
      id: number;
    }[]
  >([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://devapi.baladiexpress.com/v4/products/all-new/baladi-express-store?page=1&limit=16&sort_by=latest&order_by=desc&latitude=25.3185782&longitude=51.5003526&category_id=5612",
          {
            headers: {
              "x-api-key":
                "baladi_dev_pX2Rldl9LSFlVSVM3TDN4YTA3ZHNmZ2R5V0E4ZE1S",
            },
          }
        );
        setProducts(response.data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
    return () => {
      setProducts([]);
    };
  }, []);
  return (
    <Container sx={{ marginY: 3 }} maxWidth={"xl"} component={"article"}>
      <Grid container spacing={3}>
        {products?.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <ProductCard {...product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProductsGrid;
