import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

export default function Collage() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%", // Ajuste para que ocupe todo el ancho de la pantalla
        height: "auto", // Ajuste para que ocupe todo el alto de la pantalla
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          width: "90%",
          height: "100%",
          overflowY: "scroll",
        }}
      >
        <ImageList variant="masonry" cols={2} gap={8}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=161&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Box>
  );
}

const itemData = [
  {
    img: "assets/collage1.jpg",
    title: "Bed",
  },
  {
    img: "assets/collage2.jpg",
    title: "Books",
  },
  {
    img: "assets/collage3.jpg",
    title: "Sink",
  },
  {
    img: "assets/collage4.jpg",
    title: "Kitchen",
  },
];
