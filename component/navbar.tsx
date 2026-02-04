"use client";

import { useState } from "react";
import { Menu, X, Calendar } from "lucide-react";
import { Box, AppBar, Toolbar, IconButton, Button, Drawer, List, ListItem } from "@mui/material";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const colors = {
    primary: "#bc9c24",
    dark: "#8b6c0d",
    light: "#f4e8c1",
    text: "#333333",
    white: "#ffffff"
  };

  const navItems = ["Home", "Services", "Doctors", "Contact"];

  return (
    <AppBar 
      position="sticky" 
      sx={{ 
        bgcolor: colors.white,
        boxShadow: "none",
        borderBottom: `1px solid ${colors.light}`,
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", px: { xs: 2, md: 6 } }}>
        
        {/* Logo - Actual Image */}
        <Box sx={{ cursor: "pointer" }}>
          <Box
            component="img"
            src="/logos.png" // Your logo file path
            alt="Maxillofacial Clinic"
            sx={{
              width: { xs: 160, md: 200 }, // Responsive sizing
              height: {xs:75, md: 95},
              objectFit: "contain",
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          />
        </Box>

        {/* Desktop Navigation */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3, alignItems: "center" }}>
          {navItems.map((item) => (
            <Button
              key={item}
              sx={{
                color: colors.text,
                fontWeight: 600,
                textTransform: "none",
                fontSize: "0.95rem",
                position: "relative",
                px: 1,
                "&:hover": {
                  color: colors.primary,
                  bgcolor: "transparent",
                },
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: 0,
                  height: "2px",
                  bgcolor: colors.primary,
                  transition: "width 0.3s",
                },
                "&:hover::after": {
                  width: "100%",
                },
              }}
            >
              {item}
            </Button>
          ))}

          {/* Animated Button */}
          <Button
            sx={{
              background: `linear-gradient(45deg, ${colors.primary}, ${colors.dark})`,
              color: colors.white,
              borderRadius: "25px",
              px: 3,
              py: 1,
              fontWeight: 600,
              textTransform: "none",
              position: "relative",
              overflow: "hidden",
              transition: "all 0.3s",
              "&:hover": {
                transform: "translateY(-2px)",
              },
            }}
          >
            <Calendar size={18} style={{ marginRight: 8 }} />
            Book Appointment
            
            {/* Shine Effect */}
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: "-100%",
                width: "100%",
                height: "100%",
                background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
                transition: "left 0.5s",
              }}
            />
          </Button>
        </Box>

        {/* Mobile Menu Button */}
        <IconButton
          sx={{ 
            display: { md: "none" }, 
            color: colors.primary,
            "&:hover": {
              bgcolor: `${colors.primary}10`,
            },
          }}
          onClick={() => setMobileOpen(true)}
        >
          <Menu />
        </IconButton>
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        sx={{
          "& .MuiDrawer-paper": {
            width: 260,
            bgcolor: colors.white,
          },
        }}
      >
        {/* Drawer Logo */}
        <Box sx={{ display: "flex", justifyContent: "center", py: 3 }}>
          <Box
            component="img"
            src="/logos.png" // Same logo image
            alt="Maxillofacial Clinic"
            sx={{
              width: 80,
              height: "auto",
              objectFit: "contain",
            }}
          />
        </Box>

        {/* Close Button */}
        <IconButton
          sx={{ position: "absolute", top: 16, right: 16, color: colors.text }}
          onClick={() => setMobileOpen(false)}
        >
          <X size={20} />
        </IconButton>

        {/* Mobile Navigation */}
        <List sx={{ px: 2 }}>
          {navItems.map((item) => (
            <ListItem key={item} disablePadding>
              <Button
                fullWidth
                sx={{
                  justifyContent: "flex-start",
                  py: 1.5,
                  color: colors.text,
                  fontWeight: 600,
                  "&:hover": {
                    color: colors.primary,
                    bgcolor: `${colors.primary}08`,
                  },
                }}
                onClick={() => setMobileOpen(false)}
              >
                {item}
              </Button>
            </ListItem>
          ))}
        </List>

        {/* Mobile CTA Button */}
        <Box sx={{ p: 2, mt: 2 }}>
          <Button
            fullWidth
            sx={{
              background: `linear-gradient(45deg, ${colors.primary}, ${colors.dark})`,
              color: colors.white,
              borderRadius: "25px",
              py: 1.5,
              fontWeight: 600,
              textTransform: "none",
              "&:hover": {
                background: `linear-gradient(45deg, ${colors.dark}, ${colors.primary})`,
              },
            }}
          >
            <Calendar size={18} style={{ marginRight: 8 }} />
            Book Appointment
          </Button>
        </Box>
      </Drawer>

      {/* Add shine effect on hover */}
      <style jsx global>{`
        button:hover > div:last-child {
          left: 100%;
        }
      `}</style>
    </AppBar>
  );
};

export default Navbar;