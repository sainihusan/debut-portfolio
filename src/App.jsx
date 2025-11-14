import { Box, CssBaseline } from "@mui/material";
import Work from "./Components/work";
import ProjectCard from "./Components/Projectcard";
import ExpertiseSection from "./Components/Expertisesection";


import ifincaBg from "./assets/ifinca-bg.webp";
import ifinca from "./assets/ifinca.webp";
import integraBg from "./assets/integra-bg.webp";
import friendspireBg from "./assets/friendspire-bg.webp";
import uniqueSchool from "./assets/uniqueschool-bg.webp";
import cimet from "./assets/cimet-bg.webp";

import nordicStrong from "./assets/Nordic-strong.webp";
import uniqueSchoolBg from "./assets/uniqueschool-bg.webp";
import nordicLogo from "./assets/nordic-strong-logo.webp";
import propawn from "./assets/propawn.webp";
import propawnLogo from "./assets/propawn-logo.webp";
import silverSky from "./assets/silverskysoft.webp";
import skyLogo from "./assets/logo.png";
import tem from "./assets/tem.webp";
import temLogo from "./assets/tem-logo.webp";
import collectionLogo from "./assets/collection-logo.webp";
import collectionaries from "./assets/collectionaries.webp";
import openkey from "./assets/openkey.webp";
import openkeyLogo from "./assets/openkey-logo.webp";
import hdfcLogo from "./assets/hdfc-logo.png";
import hdfc from "./assets/hdfc.webp";
import kfcLogo from "./assets/kfc-logo.png";
import kfc from "./assets/kfc.webp";

export default function App() {
  const projects = [
    {
      title: "ifinca",
      bgImage: ifincaBg,
      overlayImage: ifinca,
      bgColor: "#317062",
      subtitle: "A blockchain based solution to streamline the coffee supply chain",
      description:
        "An innovative solution that optimizes and simplifies the coffee supply chain, ensuring transparency and efficiency.",
      points: [
        "Received seed funding of $2 million",
        "Recognized by Coffee Association Boston USA",
        "10,000+ stakeholders currently using the platform",
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
        "A secure digital signature platform ensuring tamper-proof legal documentation.",
      points: [
        "Secured $3 million funding",
        "Used by 300+ law firms",
        "Trusted by global enterprises",
      ],
      tags: ["Legal", "Blockchain", "Secure Data Sharing"],
    },

    {
      title: "Friendspire",
      bgImage: friendspireBg,
      overlayImage: ifinca,
      bgColor: "#653fee",
      subtitle: "Entertainment Recommendation App",
      description:
        "A platform to discover books, movies, shows and share lists with friends.",
      points: [
        "Raised $300k seed",
        "10,000 users post launch",
        "Featured on CNN & EU-Startups",
      ],
      tags: ["Social", "iPhone", "Android"],
    },

    {
      title: "Unique School",
      bgImage: uniqueSchool,
      overlayImage: ifinca,
      bgColor: "#173f58",
      subtitle: "Smart School Management Platform",
      description:
        "Helps schools automate admin, communication and security.",
      points: [
        "Used by 140+ schools",
        "100,000+ users",
        "Backed by top investors",
      ],
      tags: ["Education", "Web platform", "Mobile apps"],
    },

    {
      title: "Cimet",
      bgImage: cimet,
      overlayImage: ifinca,
      bgColor: "#1d4578",
      subtitle: "Effortless Utility Comparison",
      description:
        "A powerful comparison platform for energy, internet and utilities.",
      points: [
        "$26.6M funding from iSelect",
        "130% annual growth",
        "Generated $11M revenue",
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
      description:
        "A complete fitness app offering high-quality workout tracking and coaching.",
    },
    {
      bgImage: propawn,
      logo: propawnLogo,
      title: "Propawn",
      subtitle: "DIGITAL PAWNSHOP",
      description: "A modern pawnshop experience for buying and loaning items.",
    },
    {
      bgImage: silverSky,
      logo: skyLogo,
      title: "Blockchain Integration",
      subtitle: "SALON BOOKING SYSTEM",
      description:
        "A smart appointment booking platform for salons and clients.",
    },
    {
      bgImage: tem,
      logo: temLogo,
      title: "Tem",
      subtitle: "HEALTH IMPROVEMENT APP",
      description:
        "Helps users track fitness, nutrition, stress, and healthy habits.",
    },
    {
      bgImage: collectionaries,
      logo: collectionLogo,
      title: "Collectionaire",
      subtitle: "MEMORY COLLECTION PLATFORM",
      description:
        "A digital platform to preserve and organize memories and documents.",
    },
    {
      bgImage: openkey,
      logo: openkeyLogo,
      title: "OpenKey",
      subtitle: "DIGITAL HOTEL KEY",
      description:
        "Smart key solution for hotels offering seamless and secure access.",
    },
    {
      bgImage: hdfc,
      logo: hdfcLogo,
      title: "HDFC Life Insta Sales",
      subtitle: "DIGITAL INSURANCE APP",
      description:
        "Simplifies insurance sales with premium calculation and product showcase.",
    },
    {
      bgImage: kfc,
      logo: kfcLogo,
      title: "KFC Delivery Store App",
      subtitle: "FOOD RESTAURANT",
      description:
        "Helps KFC teams manage orders smoothly and improve efficiency.",
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
