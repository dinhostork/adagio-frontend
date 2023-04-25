# Pasta "atoms"

A pasta `atoms` é usada para armazenar componentes atômicos, ou seja, componentes simples e reutilizáveis que não dependem de outros componentes para funcionar. Esses componentes geralmente representam elementos básicos de uma interface do usuário, como botões, ícones, inputs, labels, etc.

## Estrutura de arquivos

Cada componente atômico deve ser armazenado em sua própria pasta dentro da pasta `atoms`. A pasta do componente deve ser nomeada de acordo com o nome do componente, usando uma convenção de nomenclatura em camelCase. Dentro da pasta do componente, devem existir dois arquivos: `index.js` e `styles.js`.


### index.js

O arquivo `index.js` deve exportar o componente como um padrão de módulo do ES6. O componente deve ser definido usando a biblioteca `styled-components`, que permite criar componentes reutilizáveis com estilos em CSS. Aqui está um exemplo de como criar um componente de botão atômico:

```jsx
import styled from 'styled-components';

const Button = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  background-color: #4caf50;
  color: #ffffff;
  cursor: pointer;
`;

export default Button;
```

### styles.js

O arquivo `styles.js` deve conter as definições de estilo do componente, usando classes de estilo do Tailwind CSS. Isso permite que os estilos do componente sejam facilmente personalizados e ajustados, sem precisar editar o código-fonte do componente. Aqui está um exemplo de como definir as classes de estilo para um componente de botão:

```javascript
const styles = {
  primary: 'bg-green-500 text-white',
  secondary: 'bg-gray-500 text-white',
  danger: 'bg-red-500 text-white',
  disabled: 'opacity-50 cursor-not-allowed',
};

export default styles;
```