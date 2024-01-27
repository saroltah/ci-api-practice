const API_KEY="Sd2srdZlZp-GXYC2Ud8AYTFfZJY"
const API_URL = "https://ci-jshint.herokuapp.com/api"
const resultModal = new bootstrap.Modal(document.getElementById("resultModal"));

document.getElementById("status").addEventListener("click", e =>getStatus(e));

async function getStatus(e) {
  const quesryString = `${API_URL}?api_key=${API_KEY}`;
  
  const response = await fetch(queryString);
  const data = await response.json();

  if (response.ok) {
    console.log(data);
  }
}