import '../css/style.css';
import { createList } from './list';
import { createTask } from './task';
import { formatDate } from './dateManager';

const first = createTask("Code", "Practice CSS", "12-03-2024", false);
const second = createTask("Learn", "Play the flute", "12-03-2024", true);
const third = createTask("Run", "Five Miles", "02-04-2024", true);
const fourth = createTask("Dance", "Jump up and down idk", "12-03-2024", true);
const fifth = createTask("Read", "Just pick up a book", "12-03-2024", true);
const list = createList("Home");

list.addTask(first);
list.addTask(second);
list.addTask(third);
list.addTask(fourth);
list.addTask(fifth);
console.log(list.getTasks());
console.log(formatDate("2024-03-12"));

const dateInput = document.getElementById("date");
dateInput.addEventListener("input", () => {
    console.log(dateInput.value);
})
