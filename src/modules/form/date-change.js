import { schedulesDay } from "../schedules/load";

// Seleciona o input de data.
const selectedDate = document.getElementById("date");

// Recarrega a lista de horário quando o input de data mudar.
selectedDate.addEventListener("change", () => {
  schedulesDay();
});
