// src/Dashboard.js
import React from "react";
import { Box, Grid2, Typography, useMediaQuery, useTheme } from "@mui/material";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import HomeIcon from "@mui/icons-material/Home";
import aboutImage from "./assets/about.jpeg";
import VCCImage from "./assets/vccImages.jpeg";
import CivilBackgroundImage from "./assets/backgroundImage.jpg";

function Dashboard() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ width: "100%", overflowX: "hidden" }}>
      <Box
        sx={{
          minHeight: { xs: "100vh", md: "100vh" },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          px: { xs: 2, sm: 4, md: 6 },
          py: { xs: 4, sm: 6 },
          backgroundImage: `url(${CivilBackgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          textAlign: "center",
        }}
      >
        {/* Logo/Brand */}
        <Typography
          variant="h1"
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "2.5rem", sm: "3.5rem", md: "5rem", lg: "6rem" },
            color: "#2a4282",
            ml:10
          }}
        >
          VINYASA
        </Typography>

        {/* Taglines */}
        <Typography
          sx={{
            fontSize: { xs: "1rem", sm: "1.5rem", md: "2rem" },
            fontWeight: "bold",
            mt: 1,
            ml:25

          }}
        >
          CONSTRUCTIONS & CONSULTING, ENGINEERS. <br />
          VCCE LLP
        </Typography>

        {/* Contact & Founders Section */}
        <Grid2
  container
  spacing={2}
  sx={{
    width: "100%",
    maxWidth: "900px",
    mt: 4,
    flexDirection: { xs: "column", md: "row" },
    justifyContent: "space-between",
    alignItems: "center", // helps with vertical alignment in row
  }}
>
  {/* Names - centered */}
  <Grid2
    item
    xs={12}
    md={6}
    sx={{
      display: "flex",
      justifyContent: "center",
      textAlign: "center",
      ml:10
    }}
  >
    <Box>
      <Typography fontWeight="bold">
        ASHISH SAVADI (M.TECH STRUCTURES)
      </Typography>
      <Typography fontWeight="bold">
        MALLARI JADHAV (M.TECH STRUCTURES)
      </Typography>
    </Box>
  </Grid2>

  {/* Contact Info - right aligned on md+ */}
  <Grid2
    item
    xs={12}
    md={6}
    sx={{
      display: "flex",
      justifyContent: { xs: "center", md: "flex-end" },
    }}
  >
    <Box
      display="flex"
      alignItems="center"
      flexDirection={{ xs: "column", sm: "row" }}
      textAlign={{ xs: "center", sm: "left" }}
    >
      <PhoneInTalkIcon
        sx={{
          fontSize: 40,
          color: "black",
          borderRadius: "50%",
          padding: 1,
          border: "3.5px solid black",
          mr: { sm: 2, xs: 0 },
          mb: { xs: 1, sm: 0 },
        }}
      />
      <Box>
        <Typography
          sx={{ fontSize: "1.1rem", color: "#000", fontWeight: "bold" }}
        >
          TALK TO US
        </Typography>
        <Typography>+91 7026965686</Typography>
        <Typography>+91 9606701255</Typography>
        <Typography fontWeight="bold">Vincce22@gmail.com</Typography>
      </Box>
    </Box>
  </Grid2>
</Grid2>


        {/* Address Section */}
        <Box
          mt={4}
          display="flex"
          alignItems="center"
          flexDirection={{ xs: "column", sm: "row" }}
          textAlign={{ xs: "center", sm: "left" }}
        >
          <HomeIcon
            sx={{
              fontSize: 40,
              color: "black",
              borderRadius: "50%",
              padding: 1,
              border: "3.5px solid black",
              mr: { sm: 2 },
              mb: { xs: 1, sm: 0 },
            }}
          />
          <Typography>
            Micheal Playin, Near Sapna Book House, 80 Feet Road, Indira Nagar,
            Bengaluru (560038)
          </Typography>
        </Box>
      </Box>

      {/* Second Section */}
      <Box sx={{ minHeight: "100vh", backgroundColor: "#f5f5f5", p: 3 }}>
        <Grid2 container direction="column" alignItems="center">
          <Box maxWidth="900px">
            <Typography
              sx={{ fontWeight: "bold", fontSize: "2.5rem", color: "#2a4282" }}
            >
              VCCE
            </Typography>
            <Typography sx={{ fontSize: "1.5rem", pt: 1 }}>
              PERCEPTIVE IDEAS
            </Typography>

            <Typography sx={{ mt: 3, fontSize: "1.2rem" }}>
              <strong style={{ fontSize: "1.5rem" }}>VCCE</strong> works on the
              philosophy of commitments and long-term solutions. Our team places
              their best efforts to deliver commitments.
            </Typography>

            <Typography sx={{ mt: 2, fontSize: "1.2rem" }}>
              <strong style={{ fontSize: "1.5rem" }}>Our approach</strong> –
              Work backward from committed dates, raise alarm for understanding
              issues well in advance.
            </Typography>

            <Typography sx={{ mt: 2, fontSize: "1.2rem" }}>
              <strong>VCCE</strong> aims to endow absolute client satisfaction.
            </Typography>

            {[
              "COST OPTIMIZING Solutions and Techniques.",
              "Meet Functional Requirements of Projects.",
              "Compliance to all Mandatory Codal-Provisions.",
              "Techno-Commercial Structural Designs.",
              "Maintain High Standards of Quality in CAD & DESIGN.",
              "Transparency in working with supporting Design Notes.",
              "Deliver drawings & documents in committed time.",
              "In-house Standards for Drafting, Modelling, Design, Drawings & Report.",
              "Open to latest Software Technologies like ETABS, SAFE, PROKON, STAAD PRO, AUTO CADD, REVIT STRUCTURES.",
            ].map((text, idx) => (
              <Typography key={idx} sx={{ fontSize: "1.2rem", mt: 1 }}>
                • {text}
              </Typography>
            ))}

            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "1.3rem",
                fontStyle: "italic",
                pt: 5,
              }}
            >
              WWW.VCCE.CO
            </Typography>
          </Box>
        </Grid2>
      </Box>

      {/* Third Section */}
      <Box sx={{ minHeight: "100vh", backgroundColor: "white", p: 2 }}>
        <img
          src={aboutImage}
          alt="About"
          style={{ width: "100%", height: "auto", objectFit: "cover" }}
        />
      </Box>

      {/* Fourth Section */}
      <Box sx={{ minHeight: "100vh", backgroundColor: "white", p: 3 }}>
        <Grid2 container direction="column" alignItems="center">
          <Box maxWidth="900px">
            <Typography
              sx={{ fontWeight: "bold", fontSize: "2.5rem", color: "#2a4282" }}
            >
              VCCE
            </Typography>
            <Typography sx={{ fontSize: "1.5rem", pt: 1 }}>
              TECHNICAL EXPERTISE
            </Typography>

            {[
              "Analysis, Design, Detailing of Building Structures.",
              "Hands-on Experience on Structures (Mivan).",
              "Wind Analysis.",
              "Earthquake Resistance Design.",
              "Underground Water Tanks.",
              "High Rise Multi Storey Residential And Commercial Building.",
              "Educational Buildings.",
              "Structural Pier Review.",
              "STP.",
              "WTP Component Design (Pump House, Air Blower Room, Chlorine House, Filter house, Sludge Sump, Waste Water Recovery Tank).",
              "ZBT'S, ELSR.",
            ].map((text, idx) => (
              <Typography key={idx} sx={{ fontSize: "1.2rem", mt: 1 }}>
                • {text}
              </Typography>
            ))}

            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "1.3rem",
                fontStyle: "italic",
                pt: 5,
              }}
            >
              WWW.VCCE.CO
            </Typography>
          </Box>
        </Grid2>
      </Box>

      {/* Fifth Section */}
      <Box sx={{ minHeight: "100vh", backgroundColor: "white", p: 3 }}>
        <Grid2 container direction="column" alignItems="center">
          <Box maxWidth="900px">
            <Typography
              sx={{ fontWeight: "bold", fontSize: "2.5rem", color: "#2a4282" }}
            >
              VCCE
            </Typography>
            <Typography sx={{ fontSize: "1.5rem", pt: 1 }}>
              TECHNICAL EXPERTISE
            </Typography>

            {[
              "Magnitude of Projects in Built-Up area varies from 10,000 to 2 Lacs Sqft.",
              "Number of floors Ranging from G+2 to G+31 with large multiple level basements.",
              "Diversity in projects involved low-cost housing to super luxury, high-end apartments with massive landscape and elevation elements.",
              "Structural Framing System worked with conventional Beam, Slab, Beamless Flat Slab.",
              "Shear Walls.",
              "Independent Bungalows.",
            ].map((text, idx) => (
              <Typography key={idx} sx={{ fontSize: "1.2rem", mt: 1 }}>
                • {text}
              </Typography>
            ))}

            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "1.3rem",
                fontStyle: "italic",
                pt: 5,
              }}
            >
              WWW.VCCE.CO
            </Typography>
          </Box>
        </Grid2>
      </Box>

      {/* Sixth Section */}
      <Box sx={{ minHeight: "100vh", backgroundColor: "white", p: 2 }}>
        <img
          src={VCCImage}
          alt="VCC Visual"
          style={{ width: "100%", height: "auto", objectFit: "cover" }}
        />
      </Box>
    </Box>
  );
}

export default Dashboard;
