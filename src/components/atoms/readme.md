# Pasta "atoms"

A pasta `atoms` é usada para armazenar componentes atômicos, ou seja, componentes simples e reutilizáveis que não dependem de outros componentes para funcionar. Esses componentes geralmente representam elementos básicos de uma interface do usuário, como botões, ícones, inputs, labels, etc.

## Estrutura de arquivos

Cada componente atômico deve ser armazenado em sua própria pasta dentro da pasta `atoms`. A pasta do componente deve ser nomeada de acordo com o nome do componente, usando uma convenção de nomenclatura em camelCase. Dentro da pasta do componente, devem existir dois arquivos: `index.jsx` e `styles.ts`.


### index.js

O arquivo `index.jsx` deve exportar o componente como um padrão de módulo do ES6. O componente deve ser definido usando a biblioteca `styled-components`, que permite criar componentes reutilizáveis com estilos em CSS. Aqui está um exemplo de como criar um componente de botão atômico:

```tsx
import styled from 'styled-components';

const Button = styled.button`
  background-color: blue;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  font-size: 1rem;
  font-weight: bold;
  border: none;
`;

export default Button;
```
### styles.js

O arquivo `styles.ts` deve conter as definições de estilo do componente, usando classes de estilo do Tailwind CSS. Isso permite que os estilos do componente sejam facilmente personalizados e ajustados, sem precisar editar o código-fonte do componente. Aqui está um exemplo de como definir as classes de estilo para um componente de botão:

```typescript
const styles = {
  primary: 'bg-green-500 text-white',
  secondary: 'bg-gray-500 text-white',
  danger: 'bg-red-500 text-white',
  disabled: 'opacity-50 cursor-not-allowed',
};

export default styles;
```