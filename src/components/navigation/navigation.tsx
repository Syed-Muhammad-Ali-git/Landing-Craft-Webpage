import React, { FC } from "react";
import Box from "@mui/material/Box";
import { navigations } from "./navigation.data";
import { Link } from "@mui/material";
import { useLocation } from "react-router-dom";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import useMediaQuery from "@mui/material/useMediaQuery";

type NavigationData = {
  path: string;
  label: string;
};

const Navigation: FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const isMobile = useMediaQuery("(max-width: 1255px)");

  return (
    <Box
      sx={{
        display: "flex",
        flexFlow: "row wrap",
        justifyContent: "end",
        flexDirection: "row",
        alignItems: "center",
        "@media (max-width: 1255px)": { flexDirection: "column" },
      }}
    >
      {navigations.map(({ path: destination, label }: NavigationData) => (
        <Box
          key={label}
          component={Link}
          href={destination}
          sx={{
            display: "inline-flex",
            position: "relative",
            color: currentPath === destination ? "primary.main" : (isMobile ? "text.primary" : "white"),
            lineHeight: "30px",
            letterSpacing: "3px",
            cursor: "pointer",
            textDecoration: "none",
            textTransform: "uppercase",
            fontWeight: 700,
            alignItems: "center",
            justifyContent: "center",
            px: 2,
            mb: 0,
            "@media (max-width: 1255px)": {
              px: 0,
              mb: 3
            },
            fontSize: "20px",
            ...(destination === "/" && { color: "primary.main" }),
            "& > div": { display: "none" },
            "&.current>div": { display: "block" },
            "&:hover": {
              color: "text.disabled",
            },
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 12,
              transform: "rotate(3deg)",
              "& img": { width: 44, height: "auto" },
            }}
          >
            {/* eslint-disable-next-line */}
            <img src="/images/headline-curve.svg" alt="Headline curve" />
          </Box>
          {label}
        </Box>
      ))}
      <Box
        sx={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          "@media (min-width: 1256px) and (max-width: 1393px)": {
            py: 1, // Padding par top and bottom for when it wraps
            width: "100%", // Force to center line nicely
            marginTop: "10px"
          }
        }}
      >
        <ConnectButton />
      </Box>
    </Box>
  );
};

export default Navigation;
