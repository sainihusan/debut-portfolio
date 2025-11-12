import { Box, Typography, Divider } from "@mui/material";

export default function Work() {
  return (
    <Box
      sx={{
        backgroundColor: "#182F63",
        color: "white",
        px: { xs: 2, md: 3 },
        py: 7,
        textAlign: { xs: "start", sm: "left" }, 
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          textTransform: "uppercase",
          mb: 2,
        }}
      >
        Our Work
      </Typography>

      <Divider
        sx={{
          width: 120,
          height: 5,
          background:
            "linear-gradient(90deg, #ff5f2e 0%, rgba(255,95,46,0) 100%)",
          mb: 2,
          mx: { xs: "start", sm: 0 },
        }}
      />

      <Typography
        sx={{
          fontSize: 21,
          maxWidth: 1430,
          mx: { xs: "auto", sm: 0 }, 
        }}
        variant="h6"
      >
        Explore our diverse portfolio of Web3, mobile app, and web development
        projects that showcase our commitment to innovation, quality, and client
        satisfaction. From cutting-edge blockchain solutions to captivating
        mobile experiences and stunning web designs, we take pride in delivering
        excellence with every project.
      </Typography>
    </Box>
  );
}
