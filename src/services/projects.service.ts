// Este arquivo funcionará como cliente da API (onde as requisições estão).
// Em caso de uso futuro de API externa
// import axios from "axios";
import { projects } from "@/utils/projects";
// Importação da função notFound() nativa de next
import { notFound } from "next/navigation";

// Função que retorna o conteúdo de "projects" (mock data), ou seja, a lista de projetos. O uso do async indica que será retornada uma Promise, o que aconteceria numa API real. Requisição para listar todos os projetos presentes em "projects"
export const getProjects = async () => {
  // No caso de uma API real, basta alterar o endereço do endpoint
  // return axios.get("http:localhost:3000/api/projects");
  // Retorna um objeto contendo um propriedade chamada "data" que contém o array "projects"
  return { data: projects };
};

// Funçaõ que percorre cada projeto em "projects" e busca aquele com o mesmo "slug" passado como argumento
export const getProjectBySlug = async (slug: string) => {
  const project = projects.find((a) => a.slug === slug);

  // Por se tratar de uma Promise, corre-se o risco de o arquivo não ser encontrado (undefined)
  if (!project) {
    return notFound();
  }

  return {
    // Retorna as informações do projeto
    data: project,
  };
};