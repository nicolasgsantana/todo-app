import '../css/style.css';
import { createList } from './list';
import { createTask } from './task';

const firstTask = createTask("Learn", "Play something", "anything", "High");
const firstList = createList("Home");

firstList.addTask(firstTask);
firstList.addTask(firstTask);
firstList.addTask(firstTask);
console.log(firstList.getTasks());

