function updateDate() {
  const now = new Date();
  const options = { year: "numeric", month: "long", day: "numeric" };
  const dateString = now.toLocaleDateString(undefined, options);
  document.getElementById("date").textContent = dateString;
}

updateDate();
