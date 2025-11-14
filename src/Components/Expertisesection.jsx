import { Box, Typography, Divider, Container } from "@mui/material";

export default function ExpertiseSection({ items }) {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        color: "#000",
        py: 4,
        px: { xs: 0, sm: 4, md: 6 },
      }}
    >
      <Container maxWidth="xl">
        <Typography
          variant="h3"
          sx={{ textAlign: "center", fontWeight: "bold", mb: 3, fontSize: 42 }}
        >
          Our Diverse Web and Mobile Expertise
        </Typography>
        <Divider
          sx={{
            width: 120,
            height: 5,
            mx: "auto",
            background: "linear-gradient(90deg, #ff5f2e 0%, rgba(255,95,46,0) 100%)",
            mb: 2,
          }}
        />
        <Box
        >
          <Typography
            sx={{
              textAlign: "center",
              fontSize: "27px",
              color: "#000",
              mb: 6,
              fontFamily: "RegularText, sans-serif",
            }}
          >
            Explore a selection of our web and mobile projects, providing a glimpse into
            our diverse expertise.
            <br />
            These projects reflect our commitment to delivering exceptional digital
            solutions.
          </Typography>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
              },
              gridAutoRows: "1fr",
              gap: 2,
              width: { xs: "100%", sm: "90%", md: "87%" },
              mx: "auto",
              position: "relative",
            }}
          >
            {items.map((item, index) => (
              <Box
                key={index}
                sx={{
                  position: "relative",
                  backgroundImage: `url(${item.bgImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  color: "black",
                  borderColor: "black",
                  backgroundColor: "grey",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  overflow: "hidden",
                  minHeight: 300,

                }}
              >
                <Box
                  component="img"
                  src={item.logo}
                  alt={`${item.title} logo`}
                  sx={{
                    width: 150,
                    height: 60,
                    position: "absolute",
                    top: 16,
                    left: 4,
                    objectFit: "contain",

                  }}
                />
                <Box
                  sx={{
                    position: "relative",
                    zIndex: 1,
                    backgroundColor: "rgba(255, 255, 255, 0.3)",
                    py: 3,
                    px: 2,
                    overflow: "hidden",
                    bottom: "-24px",
                    textAlign: "center",
                    transition: "all 0.3s ease-in-out",
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.6)",
                      transform: "translateY(-5px)",
                    },
                    "&:hover .description": {
                      opacity: 1,
                      maxHeight: 100,
                      textAlign: "left"
                    },
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      color: "black",
                    }}
                  >
                    {item.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      opacity: 0.9,
                      color: "black",
                      mb: 1,
                    }}
                  >
                    {item.subtitle}
                  </Typography>

                  <Typography
                    className="description"
                    variant="body2"
                    sx={{
                      color: "black",
                      opacity: 0,
                      maxHeight: 0,
                      overflow: "hidden",
                      transition: "all 0.4s ease",
                      mb: 1,
                    }}
                  >
                    {item.description}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>


    </Box>
  );
}
