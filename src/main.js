const search = prompt("Search Now");

// filter data
const result = devs.filter(
  (item) =>
    item.skill === search || item.location === search || item.income >= search
);

//final result
const finalResult = [];
//get data
result.forEach((item, index) => {
  finalResult.push(item);
});
//output
console.table(result);
