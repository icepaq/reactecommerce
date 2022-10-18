const bookList = [
  {
    title: "Diary of a Wimpy Kid",
    description:
      "Greg Heffley and his family hit the road for a cross-country camping trip, ready for the adventure of a lifetime.",
    image: "/diary.jpg",
    price: 10,
  },

  {
    title: "Never Split the Difference",
    description:
      "Chriss Voss, an ex-FBI hostage negotiator, shares his strategies for success in business and personal negotiations.",
    image: "/neversplit.jpg",
    price: 15,
  },

  {
    title: "Rich Dad Poor Dad",
    description:
      "What the Rich Teach Their Kids About Money That the Poor and Middle Class Do Not!",
    image: "/richdad.jpg",
    price: 30,
  },

  {
    title: "Way of the Wolf",
    description:
      "Jordan Belfort reveals the step-by-step sales and persuasion system proven to turn anyone into a sales-closing, money-earning rock star.",
    image: "/wolf.jpg",
    price: 25,
  },
];

export const bookMap = {
  "0": bookList[0],
  "1": bookList[1],
  "2": bookList[2],
  "3": bookList[3],
}

export default bookList;