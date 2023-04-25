# Pasta "organisms"

A pasta `organisms` é usada para armazenar componentes orgânicos, ou seja, componentes ainda mais complexos que geralmente são compostos por um ou mais componentes moleculares e que desempenham uma função mais específica dentro da interface do usuário. Esses componentes geralmente são projetados para serem reutilizáveis em diferentes partes do aplicativo.

## Estrutura de arquivos

Cada componente orgânico deve ser armazenado em sua própria pasta dentro da pasta `organisms`. A pasta do componente deve ser nomeada de acordo com o nome do componente, usando uma convenção de nomenclatura em PascalCase. Dentro da pasta do componente, devem existir três arquivos: `index.tsx`, `styles.ts` e `types.ts`.

### index.tsx

O arquivo `index.tsx` deve exportar o componente como um padrão de módulo do ES6. O componente deve ser definido usando a biblioteca `styled-components`, que permite criar componentes reutilizáveis com estilos em CSS. O componente também deve ser definido como uma função, e os tipos de propriedades do componente devem ser definidos usando TypeScript. Aqui está um exemplo de como criar um componente de cabeçalho orgânico:

```tsx
import React from 'react';
import styled from 'styled-components';
import Logo from '../atoms/Logo';
import Navigation from '../molecules/Navigation';
import { HeaderProps } from './types';

const HeaderContainer = styled.header`
  background-color: #ffffff;
  border-bottom: 1px solid #d6d6d6;
  display: flex;
  justify-content: space-between;
  padding: 16px;
`;

function HeaderOrganism({ links }: HeaderProps) {
  return (
    <HeaderContainer>
      <Logo />
      <Navigation links={links} />
    </HeaderContainer>
  );
}

export default HeaderOrganism;
```

### styles.ts


O arquivo `styles.ts` deve conter as definições de estilo do componente, usando classes de estilo do Tailwind CSS. Isso permite que os estilos do componente sejam facilmente personalizados e ajustados, sem precisar editar o código-fonte do componente. Aqui está um exemplo de como definir as classes de estilo para o componente de cabeçalho:

```typescript
const styles = {
  header: 'bg-white border-b border-gray-200 flex justify-between px-4 py-2',
};

export default styles;

```

### types.ts

O arquivo `types.ts` deve conter as definições de tipo para as propriedades do componente. Isso ajuda a garantir que as propriedades sejam passadas corretamente para o componente e ajuda a documentar o que cada propriedade significa. Aqui está um exemplo de como definir as propriedades para o componente de cabeçalho:

```typescript
type Link = {
  text: string;
  url: string;
};

export type HeaderProps = {
  links: Link[];
};
```