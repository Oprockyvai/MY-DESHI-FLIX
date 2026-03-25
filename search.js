// search.js

const searchBox = document.getElementById("searchBox");
const searchResults = document.getElementById("searchResults");

function handleSearch() {
  const query = searchBox.value.toLowerCase().trim();
  if (!query) {
    searchResults.style.display = "none";
    return;
  }

  const matched = videoList.filter((v, i, arr) =>
    v.title.toLowerCase().includes(query) &&
    i === arr.findIndex(x => x.link === v.link)
  );

  searchResults.innerHTML = "";

  matched.forEach(v => {
    const a = document.createElement("a");
    a.href = v.link + "?cat=" + (Array.isArray(v.category) ? v.category[0] : v.category);
    a.innerText = v.title;
    searchResults.appendChild(a);
  });

  searchResults.style.display = matched.length ? "block" : "none";
}