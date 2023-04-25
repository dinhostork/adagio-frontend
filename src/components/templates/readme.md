# Pasta "templates"

A pasta `templates` é usada para armazenar componentes de nível superior que definem a estrutura da página. Esses componentes geralmente são compostos por um ou mais componentes orgânicos e são projetados para serem reutilizáveis em diferentes páginas do aplicativo.

## Estrutura de arquivos

Cada componente de modelo deve ser armazenado em sua própria pasta dentro da pasta `templates`. A pasta do componente deve ser nomeada de acordo com o nome do modelo, usando uma convenção de nomenclatura em PascalCase. Dentro da pasta do componente, devem existir três arquivos: `index.tsx`, `styles.ts` e `types.ts`.

### index.tsx

O arquivo `index.tsx` deve exportar o componente como um padrão de módulo do ES6. O componente deve ser definido usando a biblioteca `styled-components`, que permite criar componentes reutilizáveis com estilos em CSS. O componente também deve ser definido como uma função e deve receber como parâmetro um `children` que contém os componentes orgânicos que compõem a estrutura da página. Aqui está um exemplo de como criar um componente de modelo de página:

```tsx
import React from 'react';
import styled from 'styled-components';
import Header from '../organisms/Header';
import Footer from '../organisms/Footer';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const ContentContainer = styled.main`
  flex: 1;
`;

function PageTemplate({ children }) {
  return (
    <PageContainer>
      <Header />
      <ContentContainer>{children}</ContentContainer>
      <Footer />
    </PageContainer>
  );
}

export default PageTemplate;
```

### styles.ts

O arquivo `styles.ts` deve conter as definições de estilo do componente, usando classes de estilo do Tailwind CSS. Isso permite que os estilos do componente sejam facilmente personalizados e ajustados, sem precisar editar o código-fonte do componente. Aqui está um exemplo de como definir as classes de estilo para o componente de modelo de página:

```typescript 
const styles = {
  container: 'flex flex-col min-h-screen',
  content: 'flex-1',
};

export default styles;
```

### types.ts

O arquivo `types.ts` deve conter as definições de tipo para as propriedades do componente, bem como para as propriedades que podem ser passadas para seus componentes filhos. Aqui está um exemplo de como definir as propriedades para o componente de modelo de página:


```typescript
import { ReactNode } from 'react';

export type PageTemplateProps = {
  children: ReactNode;
};
```