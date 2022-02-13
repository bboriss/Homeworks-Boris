const btn = document.getElementById("button");
const thead = document.getElementById("thead");
const table = document.getElementById("table");
const tBody = document.getElementById("tbody");
const previousBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// event listeners
btn.addEventListener("click", getData);
previousBtn.addEventListener("click", getData);
nextBtn.addEventListener("click", getData);

//dataStorage
let memory = {
  url: "https://rickandmortyapi.com/api/episode",
  data: [],
  previous: null,
  next: null,
};
// fetching data
function getData(e) {
  if (e.target == btn) {
    var url = memory.url;
    console.log(e.target);
  } else if (e.target == previousBtn) {
    var url = memory.previous;
    console.log(e.target);
  } else if (e.target == nextBtn) {
    var url = memory.next;
    console.log(e.target);
  }
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(refreshMemory)
    .then(function () {
      return showData(memory.data);
    });
  console.log(memory);
}

function refreshMemory(data) {
  memory.previous = data.info.prev;
  memory.next = data.info.next;
  memory.data = data.results;
}

// Showing Data from Memory.data
function showData(result) {
  //clear table if clicked again
  thead.innerHTML = "";
  tBody.innerHTML = "";

  //taking first episode
  let firstEp = result[0];
  console.log(firstEp);

  //making an array of its keys
  let allKeys = Object.keys(firstEp);
  console.log(allKeys);

  //taking required keys
  let keys = allKeys.filter(function (key) {
    if (
      key === "id" ||
      key === "name" ||
      key === "air_date" ||
      key === "url" ||
      key === "episode"
    ) {
      return true;
    }
  });
  console.log(keys);

  // create Title Row
  for (let title of keys) {
    const td = document.createElement("td");
    td.innerHTML = title;
    thead.appendChild(td);
  }
  // create Table Row
  for (let episode of memory.data) {
    let table_tr = document.createElement("tr");
    table_tr.innerHTML = `
  <td>${episode.id}</td>
  <td>${episode.name}</td>
  <td>${episode.air_date}</td>
  <td>${episode.url}</td>
  <td>${episode.episode}</td>`;

    tBody.appendChild(table_tr);
  }
  table.style.visibility = "visible";

  // button appereance
  if (memory.previous) {
    previousBtn.style.visibility = "visible";
  }
  if (memory.next) {
    nextBtn.style.visibility = "visible";
  }
  if (memory.previous == null) {
    previousBtn.style.visibility = "hidden";
  }
  if (memory.next == null) {
    nextBtn.style.visibility = "hidden";
  }
}
