import React from "react";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import { announcements } from "../../../constants/Data/announcements";
import Button from "@mui/material/Button";
import CampaignIcon from "@mui/icons-material/Campaign";
import { colorScheme } from "../../../constants/colorScheme";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

function Announcements() {
  return (
    <>
      <Box sx={{ mt: { xs: "-2.7rem", md: "-2rem" } }}>
        <Swiper
          effect={"creative"}
          autoHeight={true}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
        >
          {announcements.map((data) => (
            <SwiperSlide key={data}>
              <Alert
                variant="outlined"
                icon={
                  <CampaignIcon sx={{ color: colorScheme.primaryOrange }} />
                }
                sx={{
                  background: `radial-gradient(circle, ${"#ffffff"}, ${
                    colorScheme.primaryOrangeLight
                  })`,
                  p: "0.8rem",
                  display: "flex",
                  color: colorScheme.secondaryGrey,
                  borderColor: colorScheme.primaryOrangeLight,

                  justifyContent: "center",
                }}
              >
                {data}{" "}
                <Button
                  variant="text"
                  sx={{ height: "0.8rem", color: colorScheme.primaryOrange }}
                >
                  Know More
                </Button>
              </Alert>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </>
  );
}

export default Announcements;
