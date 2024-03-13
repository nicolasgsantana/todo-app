import { parseDate, sortDates, formatToISO } from "./dateManager";

export function createList(name) {
    let tasks = {};

    const addTask = task => {
        if (task.dueDate in tasks)
            tasks[task.dueDate].push(task);
        else
            tasks[task.dueDate] = [task];

        sortTasks();
    }

    const sortTasks = () => {
        const dates = [];
        for (const property in tasks) {
            dates.push(parseDate(property));
        }

        const sortedDates = sortDates(dates);

        const sortedTasks = {}

        sortedDates.forEach(date => {
            const formattedDate = formatToISO(date);
            sortedTasks[formattedDate] = tasks[formattedDate];
        });

        tasks = sortedTasks;
    }

    const getTasks = () => {
        return tasks;
    }

    return { name, addTask, getTasks }
}
