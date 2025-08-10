import dayjs from "dayjs";

import { scheduleNew } from "../../services/schedule-new.js";

const form = document.querySelector("form");
const clientName = document.getElementById("client");
const selectedDate = document.getElementById("date");

// Data atual para formatar o input.
const inputToday = dayjs(new Date()).format("YYYY-MM-DD");

// Carrega a data atual e define a data mínima como sendo a data atual.
selectedDate.value = inputToday;
selectedDate.min = inputToday;

form.addEventListener("submit", async (event) => {
  //Previne o comportamento padrão de reload.
  event.preventDefault();

  try {
    // Recuperando o nome do cliente.
    const name = clientName.value.trim();

    if (!name) {
      return alert("Informe o nome do cliente!");
    }

    // Recupera o horário selecionado.
    const hourSelected = document.querySelector(".hour-selected");

    // Recuperando o horário selecionado.
    if (!hourSelected) {
      return alert("Seleciona o horário.");
    }

    // Recupera somente a hora
    const [hour] = hourSelected.innerHTML.split(":");

    // Inserir a hora na data
    const when = dayjs(selectedDate.value).add(hour, "hour");

    // Gerar ID
    const id = new Date().getTime();

    await scheduleNew({
      id,
      name,
      when,
    });
  } catch (error) {
    alert("Não foi possível realizar o agendamento.");
    console.log(error);
  }
});
