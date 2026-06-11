function mostrarDeclaracao() {
  document.getElementById("declaracao").innerHTML =
    "Eu te amo muito! Obrigado por existir na minha vida. ❤️";
}

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/service-worker.js")
    .then(() => {
      console.log("Service Worker registrado com sucesso!");
    })
    .catch(error => {
      console.log("Erro ao registrar Service Worker:", error);
    });
}