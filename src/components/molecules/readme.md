# Pasta "molecules"

A pasta `molecules` é usada para armazenar componentes moleculares, ou seja, componentes mais complexos que geralmente são compostos por dois ou mais componentes atômicos e que desempenham uma função específica dentro da interface do usuário. Esses componentes geralmente são projetados para serem reutilizáveis em diferentes partes do aplicativo.

## Estrutura de arquivos

Cada componente molecular deve ser armazenado em sua própria pasta dentro da pasta `molecules`. A pasta do componente deve ser nomeada de acordo com o nome do componente, usando uma convenção de nomenclatura em PascalCase. Dentro da pasta do componente, devem existir três arquivos: `index.tsx`, `styles.ts` e `types.ts`.

### index.tsx

O arquivo `index.tsx` deve exportar o componente como um padrão de módulo do ES6. O componente deve ser definido usando a biblioteca `styled-components`, que permite criar componentes reutilizáveis com estilos em CSS. O componente também deve ser definido como uma função, e os tipos de propriedades do componente devem ser definidos usando TypeScript. Aqui está um exemplo de como criar um componente de formulário molecular:

```tsx
import React from 'react';
import styled from 'styled-components';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import { FormValues } from './types';

type Props = {
  onSubmit: (values: FormValues) => void;
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

const Label = styled.label`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const FormButton = styled(Button)`
  margin-top: 16px;
`;

function FormMolecule({ onSubmit }: Props) {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const values: FormValues = {
      email: formData.get('email') as string,
      password: formData.get('password') as string,
    };
    onSubmit(values);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label htmlFor="email">Email:</Label>
        <Input type="email" id="email" name="email" required />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="password">Senha:</Label>
        <Input type="password" id="password" name="password" required />
      </FormGroup>
      <FormButton type="submit">Entrar</FormButton>
    </Form>
  );
}

export default FormMolecule;
```

### styles.ts

O arquivo `styles.ts` deve conter as definições de estilo do componente, usando classes de estilo do Tailwind CSS. Isso permite que os estilos do componente sejam facilmente personalizados e ajustados, sem precisar editar o código-fonte do componente. Aqui está um exemplo de como definir as classes de estilo para o componente de formulário:

```javascript
const styles = {
  form: 'flex flex-col',
  formGroup: 'flex flex-col mb-4',
  label: 'text-lg font-bold mb-2',
  button: 'mt-4',
};
export default styles;
```

# types.ts
o arquivo `types.ts` deve conter as definições de tipo para as propriedades do componente. Isso ajuda a garantir que as propriedades sejam passadas corretamente para o componente e ajuda a documentar o que cada propriedade significa.

export interface FormFieldProps {
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
}

