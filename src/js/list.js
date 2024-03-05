export function createList(name) {
    const tasks = [];

    const addTask = task => {
        tasks.push(task);
    }

    const getTasks = () => {
        return tasks;
    }

    return { name, addTask, getTasks }
}
