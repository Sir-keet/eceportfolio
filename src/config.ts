export const siteConfig = {
  name: "Johnathon Bales",
  title: "Electrical Engineering Student",
  description: "Portfolio website of Johnathon Bales",
  accentColor: "#ffca58",
  social: {
    email: "jlbale01@louisville.edu",
    linkedin: "www.linkedin.com/in/logan-bales-99883b188",
    github: "https://github.com/Sir-keet",
  },
  aboutMe:
    "I'm an Electrical Engineering student at the University of Louisville who loves getting my hands dirty with electronics and automotive projects. Whether I'm etching PCBs, designing keypad circuits, or rebuilding engines, I'm happiest when I'm building something tangible. My goal is to find opportunities that let me grow my technical skills while working on eco friendly solutions—because I believe engineers have a responsibility to create solutions that benefit both people and the planet.",
  skills: ["PCB Design(KiCAD)","PCB Etching","PCB Repair","Automotive Electronics & Wiring","PTC Creo","Multisim","Amateur Radio","Xilinx Vivado","VHDL/Verilog","Basic Assembly","Brazillian Jiu Jitsu","Film Photography"],
  projects: [
    {
      name: "Keypad PCB",
      description:
        "15 key keypad with oled display and rotary encoder. Designed using KiCAD. Ordered through JLCPCB and assembled by hand. Programmed with QMK.",
      link: "https://kicanvas.org/?repo=https%3A%2F%2Fgithub.com%2FSir-keet%2FNugMacro-Keypad",
      skills: ["PCB Design", "PCB Assembly", "PCB Repair"],
      image: "/eceportfolio/PCB.jpg"
    },
    {
      name: "PCB Etching",
      description:
        "Light up heart PCB to practice etching and solder mask application. Etched using a muriatic acid and hydrogen peroxide solution.",
      link: "https://kicanvas.org/?repo=https%3A%2F%2Fgithub.com%2FSir-keet%2FVdaythang%2Ftree%2Fmain%2FVdayThang",
      skills: ["PCB Design", "PCB Etching", "PCB Fabrication"],
      image: "/eceportfolio/Heartcopper.jpg"
    },
    {
      name: "Car Stereo Wiring Harness",
      description:
        "Custom wiring harness to adapt a carplay stereo to the steering wheel controls and amp of an Audi A4. Wires crimped, heatshrinked, and wrapped in tesa tape",
      link: "https://www.instagram.com/nuga.tory/p/DBNiUB5R1DT/",
      skills: ["Automotive Wiring & Electronics","Electronics Hand Tools"],
      image: "/eceportfolio/HarnessPost.jpg"
    },
    {
      name: "Upgrading Apple IPod",
      description:
        "Apple Ipod 5th gen (Video). Modified to accept a larger battery, Iphone 7 Taptic Engine, and 256GB SD Card. Running Rockbox OS",
      link: "https://www.instagram.com/nuga.tory/p/DIPiAghRmE6/",
      skills: ["Component Modification"],
      image: "/eceportfolio/ipodback.jpg"
    },
    {
      name: "Milled Aluminum Case",
      description:
        "6061 aluminum keyboard case. Machined using a Bridgeport mill with Accu-Rite Millpwr.",
      link: "https://www.instagram.com/nuga.tory/p/CeAktqUO4S_/",
      skills: ["CNC Mill Machining","Anodizing","CAD"],
      image: "/eceportfolio/Case.jpg"
    },

  ],
  experience: [
    {
      company: "Cummins Inc.",
      title: "Co-op Engineer - Electronic Hardware Integration",
      dateRange: "Jun 2025 - Dec 2025",
      bullets: [
        "Designed and assisted in manufacturing of 3D printed display mount","Developed and carried out testing of multiple returned electrical relays","Conducted analysis of diesel engines and their electrical components",
      ],
    },
    {
      company: "Jersey Mikes",
      title: "Team Member",
      dateRange: "Jul 2022 - Jun 2023",
      bullets: [
        "Assisted in training new employees",
        "Contributed 11 hours to Jersey Mikes Special Olympics fundraiser helping to raise $157,000",
        "Adhered to all food handling rules and regulations and quickly filled orders",
      ],
    },
    {
      company: "Girls Inc.",
      title: "Event Volunteer",
      dateRange: "2025",
      bullets: [
        "Led and assisted in teaching STEM concepts to grades K-2",
      ],
    },
  ],
  education: [
    {
      school: "University of Louisville",
      degree: "Bachelor of Science in Electrical Engineering",
      dateRange: "2023-2027",
      achievements: [
        "OASiS Semiconductor Rapid Cert.",
      ],
    },
  ],
};
