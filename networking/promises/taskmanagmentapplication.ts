const DEFAULT_ERROR = new Error("No task found with ID")


interface Task {
    id: number;
    description: string;
    resolved: boolean
}

const taskDatabase: Task[] = [
  { id: 1, description: "Revisar correo de clientes", resolved: false },
  { id: 2, description: "Preparar la presentación para la reunión", resolved: true },
  { id: 3, description: "Actualizar el repositorio en GitHub", resolved: false },
  { id: 4, description: "Responder mensajes de soporte", resolved: true },
  { id: 5, description: "Organizar los archivos del proyecto", resolved: false }
];

function getTaskByld (id: number): Promise<Task | undefined >{
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            const foundTask = taskDatabase.find(task => task.id === id);
            if(foundTask){
                resolve(foundTask);
            } else {
                reject(DEFAULT_ERROR + `${id}`);
            }
        }, 1000)
    })
}

function markTaskAsResolved(id: number): Promise<void>{
    return new Promise((resolve) => {
        setTimeout(() => {
            const task = taskDatabase.find(t => t.id === id);

            if(task){
                task.resolved = true;
                resolve();
            }
        }, 1000)
    })
}

async function handleTasks(task: number){

    try {
        const foundTask = await getTaskByld(task);
        if(foundTask) {
            console.log(`Task ${foundTask.id} marked as resolved.`);
            await markTaskAsResolved(foundTask.id)
        }

    } catch (error) {
        console.error(error)
        
    }
} 

const tasksToProcess = [1,2,5]

async function handleAllTasks() {
    for (const taskId of tasksToProcess) {
        await handleTasks (taskId);
    }
}

handleAllTasks()
.then(()=> {
    console.log("All tasks have been processed");
})

.catch((error) => {
console.error("An error occurred while processing tasks");
});







