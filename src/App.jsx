import { Box, CssBaseline, } from "@mui/material";
import Work from "./Components/work";
import ProjectCard from "./Components/Projectcard";
import ExpertiseSection from "./Components/Expertisesection";

import ifincaBg from "./assets/ifinca-bg.webp";
import ifinca from "./assets/ifinca.webp";
import integraBg from "./assets/integra-bg.webp";
import friendspireBg from "./assets/friendspire-bg.webp";
import nordicStrong from "./assets/Nordic-strong.webp";
import uniqueSchool from "./assets/uniqueschool-bg.webp";
import cimet from "./assets/cimet-bg.webp";
import nordicLogo from "./assets/nordic-strong-logo.webp";
import propawn from "./assets/propawn.webp";
import propawnLogo from "./assets/propawn-logo.webp";
import skyLogo from "./assets/logo.png";
import silverSky from "./assets/silverskysoft.webp";
import tem from "./assets/tem.webp";
import temLogo from "./assets/tem-logo.webp";
import collectionLogo from "./assets/collection-logo.webp";
import collectionaries from "./assets/collectionaries.webp";
import openkey from "./assets/openkey.webp"
import openkeyLogo from "./assets/openkey-logo.webp"
import hdfcLogo from "./assets/hdfc-logo.png"
import hdfc from "./assets/hdfc.webp"
import kfcLogo from "./assets/kfc-logo.png"
import kfc from "./assets/kfc.webp"


export default function App() {
  const projects = [
    {
      title: "ifinca",
      bgImage: ifincaBg,
      overlayImage: ifinca,
      bgColor: "#317062",
      subtitle:
        "A blockchain based solution to streamline the coffee supply chain",
      description:
        "An innovative solution that optimizes and simplifies the coffee supply chain, ensuring transparency, efficiency, and sustainability from farm to cup.",
      points: [
        "Received seed funding of $2 million",
        "Recognized by Coffee Association Boston USA and Start-up Columbia",
        "Over 10,000 stakeholders currently using the platform",
      ],
      tags: ["Supply chain", "Hyperledger Fabric", "Blockchain"],
    },
    {
      title: "Integra Ledger",
      bgImage: integraBg,
      overlayImage: ifinca,
      bgColor: "#182F63",
      subtitle: "A Blockchain-based Digital Signature Platform",
      description:
        "A comprehensive blockchain-based solution for secure and efficient data sharing that ensures tamper-proof records, enabling seamless collaboration and transparency among legal professionals.",
      points: [
        "Secured $3 million funding from the Capital Group",
        "Used by over 300 law firms across the globe",
        "Used by big enterprises like Seven Eleven, Mohawk oil, Hogan Lovell, etc.",
      ],
      tags: ["Legal consortium", "Hyperledger Blockchain", "Web platform"],
    },
    {
      title: "Friendspire",
      bgImage: friendspireBg,
      overlayImage: ifinca,
      bgColor: "#653fee",
      subtitle: "A Personalized Entertainment Recommendation Solution",
      description:
        "A dynamic solution to enhance the way people discover and share recommendations with friends which empowers them to curate personalized lists of their favorite books, movies, TV shows, podcasts, and more.",
      points: [
        "Secured seed funding of $300k",
        "Got 10,000 registrations post-launch",
        "Featured in CBS19, CNN & EU-Startups",
      ],
      tags: ["Social networking", "iPhone", "Android"],
    },
    {
      title: "Unique School",
      bgImage: uniqueSchool,
      overlayImage: ifinca,
      bgColor: "#173f58",
      subtitle: "A Smart School Management Platform",
      description:
        "A smart school management platform that streamlines administrative tasks, enhances communication, collaboration, and addresses security concerns.",
      points: [
        "Used by over 140 renowned schools across the UK and Ireland",
        "More than 100,000 users currently using this platform",
        "Funded by some of the world's leading venture investors",
      ],
      tags: ["Education", "Web platform", "Mobile apps"],
    },
    {
      title: "Cimet",
      bgImage: cimet,
      overlayImage: ifinca,
      bgColor: "#1d4578",
      subtitle: "Simplifying Decision-making Process Through Effortless Comparison",
      description:
        "Cimet is a powerful comparison platform that empowers users to make informed choices by providing comprehensive comparisons of various utilities.",
      points: [
        "Received $26.6 million funding from iSelect",
        "Cimet has witnessed 130 percent annual growth since its launch",
        "Recorded $11 million revenue in 2021-2022",
      ],
      tags: ["Web Development", "Energy Retail", "Utility Comparison"],
    },
  ];

  const expertiseItems = [
    {
      bgImage: nordicStrong,
      logo: nordicLogo,
      title: "Nordic Strong",
      subtitle: "BOUTIQUE FITNESS APP",
      description: "With the aim of delivering a convenient pawnshop experience, Propawn allows customers to explore and buy a wide range of items while accessing collateral-based loans."
    },
    {
      bgImage: propawn,
      logo: propawnLogo,
      title: "Propawn",
      subtitle:
        "DIGITAL PAWNSHOP",
      description: "With the aim of delivering a convenient pawnshop experience, Propawn allows customers to explore and buy a wide range of items while accessing collateral-based loans."
    },
    {
      logo: skyLogo,
      bgImage: silverSky,
      title: "Blockchain Integration",
      subtitle:
        "APPOINTMENT BOOKING FOR SALONS",
      description: "With its user-friendly interface and efficient scheduling tools, it optimizes operations for salon owners while providing a seamless and personalized booking experience for clients."
    },
    {
      logo: temLogo,
      bgImage: tem,
      title: "Tem",
      subtitle:
        "HEALTH IMPROVEMENT APP",
      description: "TEM provides personalized tools and resources for tracking fitness activities, monitoring nutrition, managing stress, and fostering healthy habits."
    },
    {
      logo: collectionLogo,
      bgImage: collectionaries,
      title: "Collectionaire",
      subtitle:
        "MEMORIES COLLECTION PLATFORM",
      description: "Collectionaire is an online platform that simplifies and organizes personal collections. It allows users to digitally catalog and preserve valuable items, memories, and documents"
    },
    {
      logo: openkeyLogo,
      bgImage: openkey,
      title: "OpenKey",
      subtitle:
        "DIGITAL KEY SOLUTION FOR HOTELS",
      description: "OpenKey is a hotel access management solution. It enables hotels to provide digital keys to guests through their smartphones, enhancing convenience and security."
    },
    {
      logo: hdfcLogo,
      bgImage: hdfc,
      title: "HDFC Life Insta Sales",
      subtitle:
        "DIGITAL INSURANCE APP",
      description: "The HDFC Life Insta simplifies the insurance sales process, providing a seamless digital platform to showcase products, calculate premiums, and facilitate customer interactions."
    },
    {
      logo: kfcLogo,
      bgImage: kfc,
      title: "KFC Delivery Store Application",
      subtitle:
        "FOOD RESTAURANT",
      description: "The KFC delivery store app enhances operational efficiency and streamlines order management, ensuring smooth operations and customer satisfaction for the KFC business."
    },

  ];

  return (
    <>
      <CssBaseline />

      <Work />
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          project={project}
          direction={index % 2 === 0 ? "image-left" : "image-right"}
        />
      ))}
      <ExpertiseSection items={expertiseItems} />


    </>
  );
}
