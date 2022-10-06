const connection = require('./connection')

const getAll = async () => { // FUNÇÃO QUE TRAZ TODOS OS REGISTROS DA TABELA
        const [tasks] = await connection.execute('SELECT * FROM tasks'); 
        return tasks;
};

const createTask = async (task) => { // FUNÇÂO QUE INSERE REGISTROS NA TABELA TASKS
        const {title} = task;

        const query = 'INSERT INTO tasks(title, status, created_at) VALUES (?,?,?)' // As 3 '?' recebem os valores do objeto abaixo (no execute)

        // Criando a data atual

        const dataMLS = Date.now()
        const dateUTC = new Date(dataMLS).toUTCString()

        const [createdTask] = await connection.execute(query, [title, 'pendente', dateUTC])
//              |-> colacamos entre colchetes para pegar o primeiro índice do array, oque contém o resultado, o segundo índice é o "buffer"
        return {insertId: createdTask.insertId};
}

const deleteTask = async (id) => {
    
    const query = `DELETE FROM tasks WHERE id =` + id

    const [deleteTask] = await connection.execute(query)

    return deleteTask
}

const updateTask = async (id, task) => {
    
    const { title, status} = task;

    const query = 'UPDATE tasks SET title = ?, status = ? WHERE id = ?'

    const [updatedTask] = await connection.execute(query, [title, status, id])

    return updatedTask;
}



module.exports = {
    getAll,
    createTask,
    deleteTask,
    updateTask
};