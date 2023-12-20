import { reactive } from "vue";
export const store = reactive({


  questions: [
    {
      titolo: "Chi è Patrizia",
      answers: [
        {
          titolo: "Zozza",
          success: false,
        },
        {
          titolo: "Angelo",
          success: false,
        },
        {
          titolo: "Brava",
          success: true,
        },
        {
          titolo: "scorretta",
          success: false,
        },
      ],
    },
    {
      titolo: "La capitale dell'italia",
      answers: [
        {
          titolo: "Milano",
          success: false,
        },
        {
          titolo: "Iraq",
          success: false,
        },
        {
          titolo: "Roma",
          success: true,
        },
        {
          titolo: "Genova",
          success: false,
        },
      ],
    },
    {
      titolo: "quanti anni aveva gesù quando è morto?",
      answers: [
        {
          titolo: "222",
          success: false,
        },
        {
          titolo: "12",
          success: false,
        },
        {
          titolo: "33",
          success: true,
        },
        {
          titolo: "47",
          success: false,
        },
      ],
    },
    {
      titolo: "Il verso del cane",
      answers: [
        {
          titolo: "Muu",
          success: false,
        },
        {
          titolo: "Miao",
          success: false,
        },
        {
          titolo: "Bau",
          success: true,
        },
        {
          titolo: "amen",
          success: false,
        },
      ],
    },
  ],
});
