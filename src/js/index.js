import '../css/style.css';
import { createList } from './list';
import { createTask } from './task';
import { formatDate } from './dateManager';

const first = createTask("Code", "Practice CSS", "12-03-2024", "High");
const second = createTask("Learn", "Play the flute", "01-05-2024", "High");
const third = createTask("Run", "Five Miles", "02-04-2024", "High");
const list = createList("Home");

list.addTask(first);
list.addTask(second);
list.addTask(third);
console.log(list.getTasks());
console.log(formatDate("2024-03-12"));

const dateInput = document.getElementById("date");
dateInput.addEventListener("input", () => {
    console.log(dateInput.value);
})
