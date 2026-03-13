# 🎓 Tabela de Estudantes (Student Table)

Este é um projeto prático desenvolvido para treinar a renderização de listas, dados dinâmicos e componentização utilizando o ecossistema moderno do React.

O foco principal deste exercício foi a criação de uma interface limpa para exibição de dados de alunos, aplicando lógicas matemáticas simples para cálculo de médias e renderização condicional de status.

## 🚀 Tecnologias Utilizadas

Este projeto foi construído com as seguintes tecnologias:

* **React (v19)** - Biblioteca principal para construção da interface.
* **Next.js (v16)** - Framework React utilizado para estruturação do projeto.
* **TypeScript** - Tipagem estática para garantir a integridade dos dados (ex: `Student` interface).
* **Tailwind CSS (v4)** - Estilização utilitária para um design responsivo e moderno.

## 🧠 O que aprendi e pratiquei

* **Renderização de Listas:** Uso do método `.map()` do JavaScript para iterar sobre um array de objetos de estudantes e gerar as linhas da tabela dinamicamente.
* **Renderização Condicional:** Exibição de diferentes badges de status ("Active" / "Inactive") e cálculos de notas baseados no estado `active` do aluno.
* **Separação de Responsabilidades:** Divisão clara do código entre a página principal (`page.tsx`), o componente visual (`StudentsTable.tsx`), os dados mockados (`students.ts`) e a tipagem (`Students.ts`).

