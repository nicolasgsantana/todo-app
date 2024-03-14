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
            tasks[property].sort((a, b) => {
                return a.priority === b.priority ? 0 : (a.priority === true ? -1 : 1);
            });
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

    const removeTask = (date, index) => {
        tasks[date].splice(index, 1);
    }

    return { name, addTask, getTasks, removeTask }
}
