import { renderMessage } from "./dom.js";

export function setLoading(buttonElement, messageElement) {
  buttonElement.disabled = true;
  renderMessage(messageElement, "Carregando...", "loading");
}

export function setError(buttonElement, messageElement, message) {
  buttonElement.disabled = false;
  renderMessage(messageElement, message, "error");
}

export function setSuccess(buttonElement, messageElement, count) {
  buttonElement.disabled = false;
  renderMessage(messageElement, `${count} usuarios carregados.`, "success");
}
