// app/components/ProjectList.tsx
import { db } from "@/lib/db";
import { projects } from "@/db/schema";

export default async function ProjectList() {
  const data = await db.select().from(projects);

  return (
    <div className="space-y-3 mt-6">
      {data.map((project) => (
        <div
          key={project.id}
          className="bg-gray-800 p-4 rounded-lg shadow"
        >
          <h3 className="font-bold text-lg">{project.name}</h3>
          {project.description && <p className="text-gray-300 mt-1">{project.description}</p>}
        </div>
      ))}
    </div>
  );
}
