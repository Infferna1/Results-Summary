const summaryContainer = document.querySelector(".summary-container");

fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      const newDiv = document.createElement("div");
      newDiv.className = "summary-item";

      const leftContent = document.createElement("div");
      leftContent.className = "left-content";

      const image = document.createElement("img");
      image.src = data[i].icon;

      const category = document.createElement("p");
      category.textContent = data[i].category;

      const rightContent = document.createElement("div");
      rightContent.className = "right-content";

      const pElement = document.createElement("p");

      const bElement = document.createElement("b");
      bElement.textContent = data[i].score;

      const slashText = document.createTextNode(" / ");

      const totalText = document.createTextNode("100");

      pElement.appendChild(bElement);
      pElement.appendChild(slashText);
      pElement.appendChild(totalText);

      rightContent.appendChild(pElement);

      leftContent.appendChild(image);
      leftContent.appendChild(category);

      switch (data[i].category) {
        case "Reaction":
          leftContent.style.color = "var(--light-red)";
          newDiv.style.backgroundColor = "var(--light-red-transparent)";
          break;
        case "Memory":
          leftContent.style.color = "var(--orange-yellow)";
          newDiv.style.backgroundColor = "var(--light-yellow-transparent)";
          break;
        case "Verbal":
          leftContent.style.color = "var(--green-teal)";
          newDiv.style.backgroundColor = "var(--light-green-transparent)";
          break;
        case "Visual":
          leftContent.style.color = "var(--cobalt-blue)";
          newDiv.style.backgroundColor = "var(--light-blue-transparent)";
          break;
        default:
      }

      newDiv.appendChild(leftContent);
      newDiv.appendChild(rightContent);

      summaryContainer.appendChild(newDiv);
    }
  })
  .catch((error) => console.error("Error:", error));
