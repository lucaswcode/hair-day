import { scheduleCancel } from "../../services/schedule-cancel.js";
import { schedulesDay } from "./load.js";

const periods = document.querySelectorAll(".period");

// Gera um evento de click para cada lista(manhã, tarde e noite)
periods.forEach((period) => {
  // Captura o evento de clique na lista.
  period.addEventListener("click", async (event) => {
    if (event.target.classList.contains("cancel-icon")) {
      // Obtendo a li pai do elemento clicado.
      const item = event.target.closest("li");

      // Pega o ID do agendamento para remover
      const { id } = item.dataset;

      // Confirma que o id foi selecionado.
      if (id) {
        // Confirma se o usuário deseja mesmo cancelar.
        const isConfirm = confirm("Deseja cancelar este agendamento?");

        if (isConfirm) {
          // Faz a requisição na API do cancelamento.
          await scheduleCancel({ id });

          // Recarrega os agendamentos.
          schedulesDay();
        }
      }
    }
  });
});
