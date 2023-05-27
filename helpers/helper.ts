import cleaning from "@/assets/Rectangle 4328.png";
import moving from "@/assets/Rectangle 4328-1.png";
import yardWork from "@/assets/Rectangle 4328-2.png";
import plumbing from "@/assets/Rectangle 4328-3.png";
import mounting from "@/assets/Rectangle 4328-4.png";
import repairs from "@/assets/Rectangle 4328-5.png";
import review1 from "@/assets/Ellipse 248.png";
import review2 from "@/assets/Ellipse 248-1.png";
import review3 from "@/assets/Ellipse 248-2.png";
import review4 from "@/assets/Ellipse 248-3.png";

export const services = [
  {
    id: Math.random(),
    image: cleaning,
    name: "Cleaning",
    request: "+ 500 requests",
  },
  {
    id: Math.random(),
    image: moving,
    name: "Help Moving",
    request: "+ 450 requests",
  },
  {
    id: Math.random(),
    image: yardWork,
    name: "Yard Work",
    request: "+ 400 requests",
  },
  {
    id: Math.random(),
    image: plumbing,
    name: "Plumbing Help",
    request: "+ 500 requests",
  },
  {
    id: Math.random(),
    image: mounting,
    name: "Mounting",
    request: "+ 400 requests",
  },
  {
    id: Math.random(),
    image: repairs,
    name: "Home Repairs",
    request: "+ 300 requests",
  },
  // -------------- LAST FOUR SERVICES SHOULD BE REPLACED HERE
  {
    id: Math.random(),
    image: yardWork,
    name: "Yard Work",
    request: "+ 400 requests",
  },
  {
    id: Math.random(),
    image: plumbing,
    name: "Plumbing Help",
    request: "+ 500 requests",
  },
  {
    id: Math.random(),
    image: mounting,
    name: "Mounting",
    request: "+ 400 requests",
  },
  {
    id: Math.random(),
    image: repairs,
    name: "Home Repairs",
    request: "+ 300 requests",
  },
];

/// EDIT DESCRIPTION
export const faq1 = [
  {
    isVisible: false,
    id: "1",
    title: "What do you need to become a HelpInc?",
    desc: "Once you complete registration steps including creating your Tasker profile, make sure you draw your work area map and set schedule availability to show up in Client search results. If you don’t get task invitations, consider adjusting your rates, your work area, adding availability and additional categories, and editing your profile information to make sure it's clear to Clients which services you offer.",
  },
  {
    id: "2",
    isVisible: false,
    title: "How do I get a job?",
    desc: "Once you complete registration steps including creating your Tasker profile, make sure you draw your work area map and set schedule availability to show up in Client search results. If you don’t get task invitations, consider adjusting your rates, your work area, adding availability and additional categories, and editing your profile information to make sure it's clear to Clients which services you offer.",
  },
  {
    id: "3",
    isVisible: false,
    title: "Do I need experience for the task?",
    desc: "Once you complete registration steps including creating your Tasker profile, make sure you draw your work area map and set schedule availability to show up in Client search results. If you don’t get task invitations, consider adjusting your rates, your work area, adding availability and additional categories, and editing your profile information to make sure it's clear to Clients which services you offer.",
  },
];

export const faq2 = [
  {
    id: "1",
    isVisible: false,
    title: "How long does it take to process my registration?",
    desc: "Once you complete registration steps including creating your Tasker profile, make sure you draw your work area map and set schedule availability to show up in Client search results. If you don’t get task invitations, consider adjusting your rates, your work area, adding availability and additional categories, and editing your profile information to make sure it's clear to Clients which services you offer.",
  },
  {
    id: "2",
    isVisible: false,
    title: "How will I get the money?",
    desc: "Once you complete registration steps including creating your Tasker profile, make sure you draw your work area map and set schedule availability to show up in Client search results. If you don’t get task invitations, consider adjusting your rates, your work area, adding availability and additional categories, and editing your profile information to make sure it's clear to Clients which services you offer.",
  },
  {
    id: "3",
    isVisible: false,
    title: "What categories of tasks can I perform on TaskRabbit?",
    desc: "Once you complete registration steps including creating your Tasker profile, make sure you draw your work area map and set schedule availability to show up in Client search results. If you don’t get task invitations, consider adjusting your rates, your work area, adding availability and additional categories, and editing your profile information to make sure it's clear to Clients which services you offer.",
  },
];

export const reviews = [
  {
    id: "1",
    name: "Soowon E.",
    testimonial:
      "Angel was the best handyman I've ever hired. He was proactive, positive, efficient and truly wanted to help with everything we needed. He's an expert that you can trust in any handman task. I'd definitely hire him again.",
    img: review1,
    starCount: 5,
    date: "April 8,2023",
  },
  {
    id: "2",
    name: "Betsy.T",
    testimonial:
      "Punctual, great communication, great work. I look forward to working with Thomas again!",
    img: review2,
    starCount: 5,
    date: "April 1,2022",
  },
  {
    id: "3",
    name: "Ray E.",
    testimonial:
      "Great cleaning! Reliable and was able to accommodate my schedule. Would recommend - thanks Nikolina!",
    img: review3,
    starCount: 4,
    date: "April 1,2022",
  },
  {
    id: "4",
    name: "Seema.H",
    testimonial:
      "Irina's work was excellent and our home was left spotless. Great communication throughout. Highly recommended.",
    img: review4,
    starCount: 3,
    date: "April 1,2022",
  },
  {
    id: "5",
    name: "Soowon E.",
    testimonial:
      "Angel was the best handyman I've ever hired. He was proactive, positive, efficient and truly wanted to help with everything we needed. He's an expert that you can trust in any handman task. I'd definitely hire him again.",
    img: review1,
    starCount: 5,
    date: "April 8,2023",
  },
];
