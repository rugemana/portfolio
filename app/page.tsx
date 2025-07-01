import { createProject } from "./actions";
import { Plus, FolderKanban } from "lucide-react";
import ProjectList from "./components/ProjectList";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 flex items-center gap-2">
        <FolderKanban /> Project Manager
      </h1>

      <form
        action={createProject}
        className="space-y-4 mb-8 bg-gray-800 p-4 rounded-lg shadow-md"
      >
        <input
          name="name"
          placeholder="Project Name"
          required
          className="w-full p-2 rounded bg-gray-700 text-white placeholder:text-gray-400"
        />
        <textarea
          name="description"
          placeholder="Project Description"
          className="w-full p-2 rounded bg-gray-700 text-white placeholder:text-gray-400"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 transition px-4 py-2 rounded flex items-center gap-2"
        >
          <Plus size={18} /> Create Project
        </button>
      </form>

      <h2 className="text-xl font-semibold mb-3">📋 Your Projects</h2>
      <ProjectList />
    </main>
  );
}
