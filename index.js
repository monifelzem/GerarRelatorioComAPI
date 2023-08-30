document.addEventListener("DOMContentLoaded", function () {
  const gerarRelatorioButton = document.getElementById("gerarRelatorio");
  const relatorioElement = document.getElementById("relatorio");

  gerarRelatorioButton.addEventListener("click", async function () {
    try {
      const response = await fetch("URLAPI");
      const data = await response.json();

      // Limpa o conteúdo anterior do relatório
      relatorioElement.textContent = "";

      // Exibe os dados do relatório no elemento de pré-formatado (pre)
      relatorioElement.textContent = JSON.stringify(data, null, 2);
    } catch (error) {
      console.error("Erro ao obter relatório:", error);
      relatorioElement.textContent = "Erro ao obter relatório.";
    }
  });
});
