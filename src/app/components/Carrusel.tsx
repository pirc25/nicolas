"use client";

import React, { useState } from "react";
import { Box, Typography, MobileStepper, Button } from "@mui/material";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "",
    imgPath: "/assets/collage1.jpg",
  },
  {
    label: "",
    imgPath: "/assets/collage2.jpg",
  },
  {
    label: "",
    imgPath: "/assets/collage3.jpg",
  },
  {
    label: "",
    imgPath: "/assets/collage4.jpg",
  },
];

interface Step {
  label: React.ReactNode;
  imgPath: string;
}

function Carrusel() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const maxSteps: number = images.length;

  const handleNext = () => {
    setActiveStep((prevStep) => (prevStep + 1) % maxSteps);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => (prevStep - 1 + maxSteps) % maxSteps);
  };

  const handleStepChange = (newStep: number) => {
    setActiveStep(newStep);
  };

  return (
    <Box
      sx={{
        maxWidth: { xs: "100%", sm: 600 },
        flexGrow: 1,
        margin: "0 auto",
        overflow: "hidden",
        display: "block",
      }}
    >
      <AutoPlaySwipeableViews
        axis="x"
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <Box key={index} sx={{ display: "flex", justifyContent: "center" }}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                src={step.imgPath}
                alt={`Image ${index}`}
                sx={{
                  height: { xs: 200, sm: 400 }, // Responsivo en altura
                  display: "block",
                  maxWidth: "100%",

                  overflow: "hidden",
                  width: "auto",
                }}
              />
            ) : null}
          </Box>
        ))}
      </AutoPlaySwipeableViews>

      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Siguiente
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            Atras
          </Button>
        }
      />

      {/* <Box sx={{ mt: 2 }}>{images[activeStep].label}</Box> */}
    </Box>
  );
}

export default Carrusel;
