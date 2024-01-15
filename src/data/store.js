import { reactive } from "vue";
export const store = reactive({
  score: 0,
  correctAnswers: [],
  wrongAnswers: [],

  questions: [
    {
      titolo: "Qual è la capitale del Giappone?",
      answers: [
        {
          titolo: "Pechino",
          success: false,
        },
        {
          titolo: "Seul",
          success: false,
        },
        {
          titolo: "Tokyo",
          success: true,
        },
        {
          titolo: "Bangkok",
          success: false,
        },
      ],
    },
    {
      titolo: "Chi ha scritto il famoso romanzo 'Il Piccolo Principe'?",
      answers: [
        {
          titolo: "J.K. Rowling",
          success: false,
        },
        {
          titolo: "Antoine de Saint-Exupéry",
          success: true,
        },
        {
          titolo: "Charles Dickens",
          success: false,
        },
        {
          titolo: "Jane Austen",
          success: false,
        },
      ],
    },
    {
      titolo:
        "In quale anno è stata fondata la NASA (National Aeronautics and Space Administration)?",
      answers: [
        {
          titolo: "1958",
          success: true,
        },
        {
          titolo: "1969",
          success: false,
        },
        {
          titolo: "1975",
          success: false,
        },
        {
          titolo: "1983",
          success: false,
        },
      ],
    },
    {
      titolo:
        "Quale elemento chimico ha il simbolo 'O' nella tavola periodica?",
      answers: [
        {
          titolo: "Oro",
          success: false,
        },
        {
          titolo: "Ossigeno",
          success: true,
        },
        {
          titolo: "Osmio",
          success: false,
        },
        {
          titolo: "Ozono",
          success: false,
        },
      ],
    },
  ],
});
