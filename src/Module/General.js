import top_img from "./Assets/top_img.png";
import ayush from "./Assets/teami/ayush.jpg";
import shreyansh from "./Assets/teami/shreyansh.jpg";
import harshit from "./Assets/teami/harshit.jpg";
import uttam from "./Assets/teami/uttam.jpg";
import aman from "./Assets/teami/aman.jpg";
import shresth from "./Assets/teami/shresth.JPG";
import avikant from "./Assets/teami/avikant.jpg";
import manas from "./Assets/teami/manas.jpg";
import shreya from "./Assets/teami/shreya.jpg";
import rishabh from "./Assets/teami/rishabh.jpg";
import apoorv from "./Assets/teami/apoorv.jpg";
import harsh from "./Assets/teami/harsh.jpg";
import kushagra from "./Assets/teami/kushagra.jpg";
import ashish from "./Assets/teami/ashish.jpg";


const TOP_SECTION = {
  TITLE: "CSOC-2022",
  Typed_effect: ["12 August - 16 August", "60 hours of creation", "Win awesome prizes And Swags", "Events And Sessions"],
  SHORT_DESCRIPTION:
    "Create something cool with us from 12th to 15th of August 2022 for 60 hours challenge involving creation, innovation, & fun",
  IMG_SRC: top_img,
};

const SOCIALS = {
  instagram: "https://instagram.com/techhub_community",
  discord: "https://discord.gg/xbxFZhJQt9",
  linkedin: "https://www.linkedin.com/company/techhub-community/",
  twitter: "https://twitter.com/_techhub",
  email: "mailto:info@techhub.org.in",
  mail: "info@techhub.org.in"
};

const MIDDLE_SECTION = {
  TITLE: "What is Codeshack Summer of Code ?",
  LONG_DESCRIPTION:
    "It is a mentorship program conducted by Codeshack, the technical community of Sir M. Visvesvaraya Institute of Technology, Bengaluru. In this program there were several tracks like web development, app development and competitive programming. Each track had several mentors to guide the teams and help them to learn  new  skill to be able to innovate, develop and create something on their own. This program will be concluded with a hackathon.",
  LOGO_EFFECT: true,
  LOGO: ""
};


const TeamInfo = [
  [
    // Array 1
    {
      Name: "Avikant Shrivastava",
      github: "https://github.com/AvikantSrivastava",
      linkedin: "https://www.linkedin.com/in/avikantsrivastava/",
      img: avikant
    },
    {
      Name: "Shresth Singh",
      github: "https://github.com/shresth26",
      linkedin: "https://www.linkedin.com/in/shresth-singh/",
      img: shresth
    },
    {
      Name: "Shreya Raj",
      github: "https://github.com/shreyaraj13",
      linkedin: "https://www.linkedin.com/in/rajshreya/",
      img: shreya
    }
  ],
  [
    // Array 2
    {
      Name: "Aman Prasad",
      github: "https://github.com/coder-aman2346",
      linkedin: "https://www.linkedin.com/in/aman-prasad-9966971a1/",
      img: aman
    },
    {
      Name: "Apoorv Kumar",
      github: "https://github.com/Apoorv3000",
      linkedin: "https://www.linkedin.com/in/apoorv-kumar-4b6345178/",
      img: apoorv
    },
    {
      Name: "Ashish Kumar Gopalika",
      github: "https://github.com/ashish-gopalika",
      linkedin: "https://www.linkedin.com/in/ashish-gopalika/",
      img: ashish
    },
  ],
  [
    // Array 3
    {
      Name: "Ayush Kumar",
      github: "https://github.com/singhxayush/",
      linkedin: "https://www.linkedin.com/in/ayush-singh-423942203/",
      img: ayush
    },
    {
      Name: "Harsh Verma",
      github: "https://github.com/harshverma1722",
      linkedin: "https://www.linkedin.com/in/harshverma1722/",
      img: harsh
    },
    {
      Name: "Harshit Gulgulia",
      github: "https://github.com/HarshitGulgulia",
      linkedin: "https://www.linkedin.com/in/harshitgulgulia/",
      img: harshit
    },
  ],
  [
    // Array 4
    {
      Name: "Kushagra Agarwal",
      github: "https://github.com/codewithkushagra",
      linkedin: "https://www.linkedin.com/in/codewithkushagra/",
      img: kushagra
    },
    {
      Name: "Manas Dewari",
      github: "https://github.com/manassinghdewari",
      linkedin: "https://www.linkedin.com/in/manas-dewari-2717441a9/",
      img: manas
    },
    {
      Name: "Rishabh Srivastava",
      github: "https://github.com/gitshabh",
      linkedin: "https://www.linkedin.com/in/rishabh-srivastava-88538b20b",
      img: rishabh
    },
  ],
  [
    // Array 5
    {
      Name: "Shreyansh Gupta",
      github: "https://github.com/shreyan55",
      linkedin: "https://www.linkedin.com/in/shreyansh-gupta-9a303a167/",
      img: shreyansh
    },
    {
      Name: "Uttam Bindal",
      github: "https://github.com/UttamBindal",
      linkedin: "https://www.linkedin.com/in/uttam-bindal-b31906228/",
      img: uttam
    },
  ]
];



const frequentlyAskedQuestions = [
  [
    [
      {
        label: "About hackathon?",
        content:
          'This hackathon is a 60 hour event where "hackers" will collaborate on creating a functioning software by the end of the event.'
      },
      {
        label: "Who can Participate?",
        content: "This event is for the teams which are a part of the codeshack mentorship programs. Unfortunately, Others can not participate in the hackathon."
      },
      {
        label: "What can we create?",
        content: "The theme is about India, you all can create any software highlighting or glorifying our nation. You all can also create the software which can solve any problem faced in our country."
      },
      {
        label: "Venue for events?",
        content: "The Hackathon kick-off will be online through Google meet. The final jury round will be offline, venue for it will be announced latter."
      },
      {
        label: "How and What to Submit?",
        content: "You all have to submit GitHub Repository link as well as deployed link of the website or APK in case of App. Deployment/APK will be preferred for evaluation."
      }
    ],
    [
      {
        label: "How to register?",
        content: "All you need is to register yourself on the portal with team members"
      },
      {
        label: "More About Jury Round",
        content: "In Jury Round, the teams will have to give a PPT presentation of the project in max. 5 minutes and there will be a QnA round for next 5 mins. The teams not qualified for the Finals can also attend the Jury Round to learn and improve themselves."
      }
      ,
      {
        label: "Usage of API and packages?",
        content: "Yes, usage of APIs and third party packages is allowed but it is advised to build things from scratch"
      }
      ,
      {
        label: "Will there be swags?",
        content: "Yes, Participants and winners will receive swags, certificates, and much more!"
      }
      ,
      {
        label: "Have more questions?",
        content: "Reach us directly at Codeshack WhatsApp Group, we would be happy to help you. You all can also contact your respective mentors."
      }
    ]
  ],

];

export {
  TOP_SECTION,
  MIDDLE_SECTION,
  SOCIALS,
  TeamInfo,
  frequentlyAskedQuestions,
};
