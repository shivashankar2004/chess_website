import online from "./online_coaching.png";
import FIDE from "./FIDE_Rated.png";
import feedback from "./feedbacks.png";
import affordable from "./affordable.png";
import group from "./group_disscussion.png";
import onetoone from "./one_on_one.png";
import live from "./livelearning.png";

export const testimonials = [
    {
      image: online,
      feedback:
        "Haritha has thrived in WisdomHub's chess classes. The instructors' expertise and personalized approach have made learning chess both fun and educational for her. We've seen a remarkable improvement in her cognitive skills and overall academic performance. Thank you, WisdomHub!",
      name: "Haritha’s Parent",
      designation: "Student WHA",
      rating: 5,
    },
    {
      image: FIDE,
      feedback:
        "Our son has greatly improved his strategic thinking skills thanks to WisdomHub. The one-on-one coaching sessions were tailored to his specific needs, helping him compete confidently in tournaments.",
      name: "Rahul’s Parent",
      designation: "Student WHA",
      rating: 5,
    },
    {
      image: feedback,
      feedback:
        "WisdomHub’s chess academy has been a game-changer for our daughter. The group classes were interactive and engaging, fostering teamwork and friendly competition.",
      name: "Priya’s Parent",
      designation: "Student WHA",
      rating: 4,
    },
    {
      image: affordable,
      feedback:
        "Affordable and effective! WisdomHub has given my child a solid foundation in chess. Highly recommend for parents looking to introduce their kids to the game.",
      name: "Aarav’s Parent",
      designation: "Student WHA",
      rating: 4,
    },
    {
      image: live,
      feedback:
        "The live learning platform is simply amazing! My child looks forward to every session and has shown remarkable improvement in analytical thinking.",
      name: "Anaya’s Parent",
      designation: "Student WHA",
      rating: 5,
    },
  ];

  
export  const images = [
    { src: online, title: "Online Coaching" },
    { src: FIDE, title: "FIDE Rated" },
    { src: feedback, title: "Monthly Feedback" },
    { src: affordable, title: "Affordable Cost" },
    { src: group, title: "Group Classes" },
    { src: onetoone, title: "One-on-One Classes" },
    { src: live, title: "Best Live Learning Platform" },
  ];

export  const programs = [
    {
      level: "BEGINNERS",
      description:
        "Learn the basics of Chess, from understanding the pieces and game rules to enjoy playing the game.",
      keyConcepts: [
        "Introduction to Chess",
        "Chess rules",
        "Basic knowledge on calculations, strategy",
        "Notation",
        "How to win a game",
      ],
      benefits: [
        "25 Live Classes",
        "300+ Puzzles",
        "24 x 7 E-Book Access",
        "Monthly Feedback",
        "3 Months Course",
      ],
      fee: "INR 2000 / Month",
    },
    {
      level: "INTERMEDIATE",
      description:
        "Increased tactical awareness, improved strategic understanding, and enhanced endgame proficiency.",
      keyConcepts: [
        "Opening theories",
        "Middle game strategies",
        "Tactics like pin, fork, skewer etc.",
        "Attack, Defense with pieces",
        "Checkmate patterns",
        "Endgame theories",
      ],
      benefits: [
        "50 Live Classes",
        "700+ Puzzles",
        "24 x 7 E-Book Access",
        "Monthly Feedback",
        "6 Months Course",
      ],
      fee: "INR 2500 / Month",
    },
    {
      level: "ADVANCED",
      description:
        "Mastering complex tactics, deepening strategic insight, refining endgame technique to the level of professional play.",
      keyConcepts: [
        "Advanced opening principles/theories",
        "Novelty & Best move",
        "Strategic middle game position/moves",
        "Different types of endgame",
        "FIDE rating",
        "Game analysis",
        "Approach towards competition/tournaments",
      ],
      benefits: [
        "50 Live Classes",
        "700+ Puzzles",
        "24 x 7 E-Book Access",
        "Monthly Feedback",
        "Opening theory",
        "6 Months Course",
      ],
      fee: "INR 3000 / Month",
    },
  ];
