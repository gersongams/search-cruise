const dates = [
  { name: "Jan", value: 1 },
  { name: "Feb", value: 2 },
  { name: "Mar", value: 3 },
  { name: "Apr", value: 4 },
  { name: "May", value: 5 },
  { name: "Jun", value: 6 },
  { name: "Jul", value: 7 },
  { name: "Aug", value: 8 },
  { name: "Sep", value: 9 },
  { name: "Oct", value: 10 },
  { name: "Nov", value: 11 },
  { name: "Dec", value: 12 }
];

const transformDate = value => {
  const stringed = value.toString();
  const year = stringed.slice(0, 4);
  const monthNum = parseInt(stringed.slice(4), 10);
  const month = dates.find(i => i.value === monthNum);

  return `${month.name} ${year}`;
};

export { dates, transformDate };
