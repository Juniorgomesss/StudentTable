import { StudentsTable } from "@/componentes/StudentsTable";
import { students } from "./data/students";


const Page = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-5xl mb-5">Lista de Estudantes</h1>
      <StudentsTable students={students}/>
    </div>
  )
};

export default Page;