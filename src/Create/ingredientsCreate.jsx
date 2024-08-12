import { Create, SimpleForm, TextInput } from "react-admin";

export const IngredientsCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="quantity" />
      <TextInput source="unit" />
      <TextInput source="notes" />
    </SimpleForm>
  </Create>
);
