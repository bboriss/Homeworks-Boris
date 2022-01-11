function homeWork(value) {
  return console.log(typeof value);
}

homeWork((car = { type: "Fiat", model: "500", color: "white" }));
homeWork(true);
homeWork(78);
homeWork("sometext");
homeWork();
