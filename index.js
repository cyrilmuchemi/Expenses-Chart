const dataset = [
    {
      "day": "mon",
      "amount": 17.45
    },
    {
      "day": "tue",
      "amount": 34.91
    },
    {
      "day": "wed",
      "amount": 52.36
    },
    {
      "day": "thu",
      "amount": 31.07
    },
    {
      "day": "fri",
      "amount": 23.39
    },
    {
      "day": "sat",
      "amount": 43.28
    },
    {
      "day": "sun",
      "amount": 25.48
    }
];

const w = 500;
const h = 270;

const svg = d3.select("#chart-body")
              .append("svg")
              .attr("width", w)
              .attr("height", h)

      svg.selectAll("rect")
         .data(dataset)
         .enter()
         .append("rect")
         .attr("x", (d, i) =>  i * 61)
         .attr("y", (d, i) => {
          return h - d.amount * 3
         })
         .attr("width", 45)
         .attr("height", (d, i) => d.amount * 3)
         .attr("fill", "hsl(10, 79%, 65%)")

      svg.selectAll("text")
         .data(dataset)
         .enter()
         .append("text")
         .attr("x", (d, i) => i * 61)
         .attr("y", (d, i) => h - 3 * d.amount - 3)
         .text((d, i) => "$" + d.amount)
         
         