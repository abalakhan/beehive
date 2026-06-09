import { Outlet } from "react-router";

export default function Dashboard() {
    return <div className="dashboard">
        <h2>Task Manager CRUD</h2>

        {/* Form to add new task */}

        <form style={{marginBottom: "1rem"}} action="">
            <input 
                type="text" 
                placeholder="Task Title"
                style={{width: "100%", marginBottom: "0.5rem", padding: "0.5rem"}} 
            />
            <textarea
                placeholder="Task Description"
                style={{width: "100%", marginBottom: "0.5rem", padding: "0.5rem"}} 
            />
            <button
                type="submit"
                style={{padding: "0.5rem 1rem"}}
            >
                Add Task
            </button>
        </form>

        <ul style={{listStyle: "none", padding: 0}}>
            <li
                style={{
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    padding: "1rem",
                    marginBottom: "0.5rem"
                }}
            >
                <div>
                    <h3>Title</h3>
                    <p>Description</p>
                    <div>
                        <button style={{ padding: "0.5rem 1rem", marginRight: "0.5rem"}}>
                            Edit
                        </button>
                        <button style={{padding: "0.5rem 1rem"}}>Delete</button>
                    </div>
                </div>
            </li>
        </ul>
        <Outlet />
    </div>
}