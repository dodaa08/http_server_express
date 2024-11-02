import React from 'react';
import { useState } from 'react';

function Content() {


    const [label, setlabel] = useState("");
    const [level, setlevel] = useState("easy");
    const [taskCreated, setTaskCreated] = useState(false);
    let id = 0;
    const handlecreatetask = async (e) => {
        e.preventDefault();

        const todoData = {
            label,
            level,
        };

        try {
            const response = await fetch("http://localhost:3000/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(todoData),
            });

            if (!response.ok) {
                throw new Error("Error creating the task");
            }

            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error("Error creating todo:", error);
        }

        setTaskCreated(true);
    };


    return (
        <>
            <div className="text-center text-2xl mt-4 font-mono text-black">
                <h1>Todo</h1>
            </div>

            <div className="text-black mt-20 mb-20  ">
            <h1 className="text-center text-2xl mb-10">Create Todo's</h1>
            <div className="flex flex-col justify-center items-center">
                <input
                    type="text"
                    placeholder="Enter a Task"
                    onChange={(e) => setlabel(e.target.value)}
                    className="mb-4 p-2 border border-gray-300 rounded"
                />
                <form onSubmit={handlecreatetask} className='flex flex-col justify-evenly'>
                    <label>
                        <input type="radio" name="difficulty" value="easy" checked={level === "easy"} onChange={(e) => setlevel(e.target.value)} /> Easy
                    </label>
                    <label>
                        <input type="radio" name="difficulty" value="medium" checked={level === "medium"} onChange={(e) => setlevel(e.target.value)} /> Medium
                    </label>
                    <label>
                        <input type="radio" name="difficulty" value="hard" checked={level === "hard"} onChange={(e) => setlevel(e.target.value)} /> Hard
                    </label>
                    <button
                        type="submit"
                        className="mt-4 p-2 bg-blue-500 text-white rounded"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>

            <div className="flex flex-row justify-evenly mt-10">
                <div>
                    <h1 className="text-center text-xl font-mono">Not Done</h1>
                    <div className='bg-gray-400 cursor-pointer rounded-xl py-5 px-5 flex flex-col justify-evenly '>
                        {level && (
                            <>
                            <h1>{label}</h1>
                            <h1>{level}</h1>
                            <h1>{new Date().toLocaleString()}</h1>
                            <h1>{id +1}</h1>
                            </>
                        )}
                    </div>
                </div>
                <div>
                    <h1 className="text-center text-xl font-mono">In progress</h1>
                    <div className='bg-white rounded-xl py-5 px-5 flex flex-col justify-evenly '>
                        
                    </div>
                </div>
                <div>
                    <h1 className="text-center text-xl font-mono">50%</h1>
                    <div className='bg-white rounded-xl py-5 px-5 flex flex-col justify-evenly '>
                        
                    </div>
                </div>
                <div>
                    <h1 className="text-center text-xl font-mono">Done !</h1>
                    <div className='bg-white rounded-xl py-5 px-5 flex flex-col justify-evenly '>
                        
                    </div>
                </div>
            </div>
        </>
    );
}

export default Content;
