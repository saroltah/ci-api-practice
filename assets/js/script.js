const API_KEY = "Sd2srdZlZp-GXYC2Ud8AYTFfZJY";
const API_URL = "https://ci-jshint.herokuapp.com/api";
const resultModal = new bootstrap.Modal(document.getElementById("resultModal"));

document
  .getElementById("status")
  .addEventListener("click", (e) => getStatus(e));

async function getStatus(e) {
  const quesryString = `${API_URL}?api_key=${API_KEY}`;

  const response = await fetch(queryString);
  const data = await response.json();

  if (response.ok) {
    displayStatus(data.expiry);
  } else {
    throw new Error(data.error);
  }
}

function displayStatus(data) {
  let heading = "API KEY Status";
  let results = `<div>Your key is valid until</div>`;
  results += `<div class="key-status">${data.expiry}</div>`;

  document.getElementById("resultsModalTotle").innerText = heading;
  document.getElementById("results-content").innerHTML = results;

  resultsModel.show();
}
