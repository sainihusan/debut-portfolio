import { Box, Typography, Chip, Button, Stack } from "@mui/material";

export default function Projectcard({ project, direction }) {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: {
                    xs: "column",
                    md: direction === "image-right" ? "row-reverse" : "row",
                },
                alignItems: "center",
                justifyContent: "space-between",
                backgroundColor: project.bgColor,
                color: "white",
                position: "relative",
                overflow: "hidden",
                textAlign: { xs: "start", md: "left" },
            }}
        >

            
            <Box
                sx={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: { xs: "start", md: "flex-start" },
                    position: "relative",
                    left:
                        direction === "image-right"
                            ? { xs: "0px", md: "60px" }
                            : { xs: "0px", md: "30px" },
                    zIndex: 2,
                    px: { xs: 3, md: 0 },
                }}
            >
                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: "bold",
                        mb: 2,
                        mt: { xs: 3, md: 0 },
                        fontSize: { xs: "2rem", md: "2.5rem" },
                    }}
                >
                    {project.projectTitle}
                </Typography>

                <Typography
                    variant="h6"
                    sx={{
                        fontWeight: 600,
                        lineHeight: 1.5,
                        fontSize: { xs: "1.1rem", md: "19px" },
                        width: { xs: "100%", md: "90%" },
                    }}
                >
                    {project.subtitle}
                </Typography>

                <Typography
                    sx={{
                        lineHeight: 1.7,
                        fontSize: { xs: "1rem", md: "17px" },
                        width: { xs: "100%", md: "90%" },
                        mb: 2,
                    }}
                >
                    {project.description}
                </Typography>

                <Box
                    component="ul"
                    sx={{
                        pl: 0,
                        ml: { xs: 0, md: -3 },
                        listStylePosition: "inside",
                        fontSize: { xs: "1rem", md: "17px" },
                        lineHeight: 2,
                        "& li": { marginBottom: "8px" },
                        textAlign: { xs: "start", md: "left" },
                    }}
                >
                    {project.points.map((point, index) => (
                        <li key={index}>{point}</li>
                    ))}
                </Box>

                <Stack
                    direction="row"
                    spacing={1.5}
                    sx={{
                        mb: 4,
                        flexWrap: "wrap",
                        justifyContent: { xs: "start", sm: "flex-start" },
                        gap: { xs: 1, sm: 1.5 },
                        fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" },
                    }}
                >
                    {project.tags.map((tag, index) => (
                        <Chip
                            key={index}
                            label={tag}
                            sx={{
                                backgroundColor: "rgba(255, 255, 255, 0.15)",
                                color: "white",
                                fontSize: { xs: "0.75rem", sm: "0.85rem", md: "1rem" },
                                px: { xs: 0.5, sm: 1 },
                                py: { xs: 0.2, sm: 0.3 },
                                borderRadius: "8px",
                                "&:hover": {
                                    backgroundColor: "rgba(255, 255, 255, 0.3)",
                                },
                                transition: "background-color 0.3s ease",
                            }}
                        />
                    ))}
                </Stack>

                <Button
                    variant="outlined"
                    sx={{
                        borderColor: "white",
                        color: "white",
                        borderRadius: "10px",
                        px: 3,
                        py: 1,
                        textTransform: "none",
                        fontWeight: "bold",
                        fontSize: { xs: "0.9rem", md: "1rem" },
                        alignSelf: { xs: "start", md: "flex-start" },
                        mb: 2,
                        "&:hover": {
                            borderColor: "#fff",
                            backgroundColor: "rgba(255,255,255,0.1)",
                        },
                    }}
                >
                    View Case Study
                </Button>

                
                <Box
                    component="img"
                    src={project.overlayImage}
                    alt={`${project.projectTitle} overlay`}
                    sx={{
                        display: { xs: "block", md: "none" }, 
                        mt: 2,
                        width: { xs: "220px" },
                        height: "auto",
                        alignSelf: "center",
                    }}
                />
            </Box>

            
            <Box
                sx={{
                    flex: 1,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    overflow: "hidden",
                    position: "relative",
                }}
            >
                <Box
                    component="img"
                    src={project.bgImage}
                    alt={`${project.projectTitle} background`}
                    sx={{
                        width: "118%",
                        height: "694px",
                        objectFit: "cover",
                        display: { xs: "none", md: "block" }, 
                    }}
                />
            </Box>

            
            <Box
                component="img"
                src={project.overlayImage}
                alt={`${project.projectTitle} overlay`}
                sx={{
                    display: { xs: "none", md: "block" }, 
                    position: "absolute",
                    top: "60%",
                    left:
                        direction === "image-right"
                            ? { md: "45%" }
                            : { md: "55%" },
                    transform: "translate(-55%, -56%)",
                    width: { md: "200px" },
                    height: "auto",
                    zIndex: 3,
                    transition: "all 0.3s ease",
                }}
            />
        </Box>
    );
}
