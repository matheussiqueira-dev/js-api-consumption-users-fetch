export async function fetchUsers(url) {
  const response = await fetch(url);

  if (!response.ok) {
    const error = new Error(`Erro HTTP ao buscar usuarios: ${response.status}.`);
    error.name = "HttpError";
    error.status = response.status;
    throw error;
  }

  const data = await response.json();

  if (!Array.isArray(data)) {
    throw new Error("Resposta invalida da API.");
  }

  return data;
}
