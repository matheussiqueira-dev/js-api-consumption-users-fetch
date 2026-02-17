import { fetchUsers } from "./api.js";
import { clearResults, renderUsers } from "./dom.js";
import { setError, setLoading, setSuccess } from "./state.js";

const API_URL = "https://jsonplaceholder.typicode.com/users";

const buttonElement = document.getElementById("btnFetch");
const resultsElement = document.getElementById("results");
const messageElement = document.getElementById("message");

async function handleFetchUsers() {
  clearResults(resultsElement);
  setLoading(buttonElement, messageElement);

  try {
    const users = await fetchUsers(API_URL);
    renderUsers(resultsElement, users);
    setSuccess(buttonElement, messageElement, users.length);
  } catch (error) {
    if (error instanceof TypeError) {
      setError(buttonElement, messageElement, "API nao esta respondendo.");
      return;
    }

    if (error.name === "HttpError") {
      setError(buttonElement, messageElement, "Erro ao buscar os dados.");
      return;
    }

    if (error.message === "Resposta invalida da API.") {
      setError(buttonElement, messageElement, "Resposta invalida da API.");
      return;
    }

    setError(buttonElement, messageElement, "Erro ao buscar os dados.");
  }
}

buttonElement.addEventListener("click", handleFetchUsers);
