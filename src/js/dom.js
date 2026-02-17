export function clearResults(resultsElement) {
  resultsElement.textContent = "";
}

export function renderMessage(messageElement, text, type = "") {
  messageElement.textContent = text;
  messageElement.className = `message ${type}`.trim();
}

export function renderUsers(resultsElement, users) {
  const fragment = document.createDocumentFragment();

  users.forEach((user) => {
    const card = document.createElement("article");
    card.className = "user-card";

    const name = document.createElement("h3");
    name.textContent = user.name ?? "Nome indisponivel";

    const email = document.createElement("p");
    email.textContent = user.email ?? "Email indisponivel";

    card.append(name, email);
    fragment.appendChild(card);
  });

  resultsElement.appendChild(fragment);
}
