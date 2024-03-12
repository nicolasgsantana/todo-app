export function createList(name) {
    const tasks = {};

    const addTask = task => {
        if (task.dueDate in tasks)
            tasks[task.dueDate].push(task);
        else
            tasks[task.dueDate] = [task];
    }

    const getTasks = () => {
        return tasks;
    }

    return { name, addTask, getTasks }
}
