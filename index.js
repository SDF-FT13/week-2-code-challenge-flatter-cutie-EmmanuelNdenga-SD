const characterBar = document.getElementById("character-bar");
const detailedInfo = document.getElementById("detailed-info");

// Fetch all characters and display names
fetch("http://localhost:3000/characters")
  .then(response => response.json())
  .then(characters => {
    characters.forEach(character => {
      const span = document.createElement("span"); // Create a span element
      span.textContent = character.name;// the text content of the span is the character's name
      span.classList.add("character-name"); 

      // Add event listener to display details when clicked
      span.addEventListener("click", () => displayCharacterDetails(character));

      // Append to character bar
      characterBar.appendChild(span);
    });
  })
  .catch(error => console.error("Error fetching characters:", error));

