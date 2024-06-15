import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import PersonIcon from "@mui/icons-material/Person";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import RateReviewIcon from "@mui/icons-material/RateReview";
import ForumIcon from "@mui/icons-material/Forum";
import Groups3Icon from "@mui/icons-material/Groups3";
import HandshakeIcon from "@mui/icons-material/Handshake";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import ReviewsIcon from "@mui/icons-material/Reviews";
import HomeIcon from "@mui/icons-material/Home";
import { colorScheme } from "../../constants/colorScheme";
import { navItems } from "../../constants/Data/navbar";

export default function ResponsiveList({ handleNavItemClick }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        mt: "2rem",
        mb: "-2.2rem",
      }}
    >
      {/* Login button */}

      <ListItem
        key={"LoginList"}
        onClick={() => handleNavItemClick("login", "ResponsiveList")}
        sx={{
          mb: "0.8rem",
          mt: "0.5rem",
          cursor: "pointer",
          textDecoration: "none",
          "&:hover": { color: colorScheme.primaryOrange },
        }}
      >
        <ListItemIcon key={"loginListIcon"}>
          <PersonIcon
            key={"loginIcon"}
            sx={{ color: colorScheme.secondaryGrey }}
          />
        </ListItemIcon>

        <Typography
          key={"loginListText"}
          variant="h6"
          gutterBottom
          sx={{
            textDecoration: "none!important",
            color: "#000000",
            fontSize: "1rem",
            mr: "1rem",
            "&:hover": { color: colorScheme.primaryOrange },
            cursor: "pointer",
          }}
        >
          Login
        </Typography>
      </ListItem>

      <Divider sx={{ height: "0.1rem" }} />
      <List>
        {navItems.map((navItem, index) => (
          <>
            <ListItem
              key={navItem.title + "listItem"}
              sx={{
                mb: "0.8rem",
                mt: "0.5rem",
                cursor: "pointer",
                "&:hover": { color: colorScheme.primaryOrange },
              }}
              onClick={() =>
                handleNavItemClick(navItem.title, "ResponsiveList", "scroll")
              }
            >
              <ListItemIcon key={navItem.title + "listItemIcon"}>
                {navItem.title === "Home" ? (
                  <HomeIcon
                    key={navItem.title + "icon"}
                    sx={{ color: colorScheme.secondaryGrey }}
                  />
                ) : navItem.title === "Forum" ? (
                  <ForumIcon
                    key={navItem.title + "icon"}
                    sx={{ color: colorScheme.secondaryGrey }}
                  />
                ) : navItem.title === "Testimonials" ? (
                  <ReviewsIcon
                    key={navItem.title + "icon"}
                    sx={{ color: colorScheme.secondaryGrey }}
                  />
                ) : navItem.title === "Collaborate" ? (
                  <HandshakeIcon
                    key={navItem.title + "icon"}
                    sx={{ color: colorScheme.secondaryGrey }}
                  />
                ) : navItem.title === "Feedback" ? (
                  <RateReviewIcon
                    key={navItem.title + "icon"}
                    sx={{ color: colorScheme.secondaryGrey }}
                  />
                ) : navItem.title === "Awards" ? (
                  <EmojiEventsIcon
                    key={navItem.title + "icon"}
                    sx={{ color: colorScheme.secondaryGrey }}
                  />
                ) : navItem.title === "Community" ? (
                  <Groups3Icon
                    key={navItem.title + "icon"}
                    sx={{ color: colorScheme.secondaryGrey }}
                  />
                ) : (
                  "#"
                )}
              </ListItemIcon>
              <ListItemText
                key={navItem.title + "listItemText"}
                primary={navItem.title}
                sx={{ "&-hover": { color: colorScheme.primaryOrange } }}
              />
            </ListItem>
            <Divider
              key={navItem.title + "divider"}
              sx={{ height: "0.1rem" }}
            />
          </>
        ))}
      </List>
    </Box>
  );
}
