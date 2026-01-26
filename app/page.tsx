
"use client";

import { Button } from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import { Textarea } from "@material-tailwind/react";
import { Typography } from "@material-tailwind/react";

export default function Home() {

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <Typography variant="h1" className="text-4xl font-bold">
            Beehive 🐝
          </Typography>

          <div className="task-box">
            <div className="flex flex-col items-end gap-6 w-96 py-6">
              <div className="relative w-full min-w-[200px]">

                  <form>

                    <Input placeholder="Task Name" size="md" className="text-gray-950 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-amber-300 px-3 py-2 my-1" />
                    
                    <div className="w-96">
                      <Textarea placeholder="Task Description" size="md" className="text-gray-950 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-amber-300 px-3 py-2 my-1" />
                    </div>

                    <Button size="md" className="bg-amber-500 hover:bg-amber-400 text-black rounded-lg shadow-md px-4 py-2 my-2">
                        + Add
                    </Button>
          
                  </form>

              </div>
            </div>

          </div>

          <div className="tasks">
            <Typography variant="h2" className="text-2xl font-semibold">Tasks</Typography>

            <ul>
              <li></li>
            </ul>
          </div>

          <div className="current-task">
            <h3>Title</h3>
            <p>Description</p>

            <div className="button-group">
              <Button size="md" className="bg-amber-500 hover:bg-amber-400 text-black rounded-lg shadow-md px-4 py-2">
                Edit
              </Button>

              <Button size="md" className="bg-red-400 hover:bg-red-300 text-black rounded-lg shadow-md px-4 py-2 mx-2">
                - Delete
              </Button>

            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
