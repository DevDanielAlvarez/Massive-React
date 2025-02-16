import { Task } from "@/types/TaskType";
import { SetStateAction } from "react";

export default function ToDoList({ tasks, setTasks }: { tasks: Task[], setTasks: React.Dispatch<SetStateAction<Task[]>> }) {

    const handleDeleteTask = (id: number | string) => {
        setTasks((prev) => {
            return prev.filter((task: Task) => {
                if (task.id == id) {
                    return false;
                }
                return true;
            })
        });
    }

    return (
        <div className="grid grid-cols-12  col-span-8 col-start-3">
            <div className="col-span-8 col-start-3 relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Title
                            </th>

                            <th scope="col" className="px-6 py-3">
                                Description
                            </th>

                            <th scope="col" className="px-6 py-3">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tasks.map((task, index) => {
                                return (
                                    <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {task.title}
                                        </th>

                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {task.description}
                                        </th>

                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            <button onClick={() => handleDeleteTask(task.id)} type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                                                Delete
                                            </button>
                                        </th>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>


    );
}