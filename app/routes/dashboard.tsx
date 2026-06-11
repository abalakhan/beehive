import { useState, useEffect } from "react";
import { Outlet } from "react-router";
import { createClient } from "../utils/supabase.client";

interface Task {
    id: number,
    title: string,
    description: string,
    create_at: string
}


export default function Dashboard() {

    const [newTask, setNewTask] = useState({title: "", description: ""}); 
    const [tasks, setTasks] = useState<Task[]> ([]);

    const fetchTasks = async () => {
        const {error, data} = await createClient().from("tasks").select("*").order("created_at", {ascending: true});
    
         if (error) {
            console.log("Error reading task: ", error.message);
            return;
        } 

        setTasks(data);
    }


    const handleSubmit = async (e: any) => {
        e.preventDefault();
        
        const {error} = await createClient().from("tasks").insert(newTask).single();

        if (error) {
            console.log("Error deleting task: ", error.message);
            return;
        } 
    }

    const deleteDask = async (id: number) => {
        
        const {error} = await createClient().from("tasks").delete().eq("id", id);

        if (error) {
            console.log("Error adding task: ", error.message);
            return;
        } 

        setNewTask({title: "", description: ""});
    }

    useEffect(() => {
        fetchTasks();
    }, []);

    console.log(tasks );

    return <div className="dashboard">
        <h2>Task Manager CRUD</h2>

        {/* Form to add new task */}

        <form onSubmit={handleSubmit} style={{marginBottom: "1rem"}} action="">
            <input 
                type="text" 
                placeholder="Task Title"
                style={{width: "100%", marginBottom: "0.5rem", padding: "0.5rem"}}
                onChange={(e) => setNewTask(((prev) => ({...prev, title: e.target.value})))} 
            />
            <textarea
                placeholder="Task Description"
                style={{width: "100%", marginBottom: "0.5rem", padding: "0.5rem"}} 
                onChange={(e) => setNewTask(((prev) => ({...prev, description: e.target.value})))}
            />
            <button
                type="submit"
                style={{padding: "0.5rem 1rem"}}
            >
                Add Task
            </button>
        </form>

        <ul style={{listStyle: "none", padding: 0}}>
            {tasks.map((task, key) =>
        
            <li
                key={key}
                style={{
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    padding: "1rem",
                    marginBottom: "0.5rem"
                }}
            >
                <div>
                    <h3>{task.title}</h3>
                    <p>{task.description}</p>
                    <div>
                        <button style={{ padding: "0.5rem 1rem", marginRight: "0.5rem"}}>
                            Edit
                        </button>
                        <button onClick={() => deleteDask(task.id)} style={{padding: "0.5rem 1rem"}}>Delete</button>
                    </div>
                </div>
            </li>
        )}
        </ul>
        <Outlet />
    </div>
}