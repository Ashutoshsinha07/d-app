const form = document.querySelector("#search-form");
const resultdiv = document.querySelector(".result");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const word = form.querySelector("input[name='word']").value;
  getWordInfo(word);
});

const getWordInfo = async (word) => {
  try {
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
    const data = await response.json();
    console.log("API Response:", data);
    resultdiv.innerHTML = `<h2>${data[0].meanings[0].definitions[0].definition}</h2>`;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
