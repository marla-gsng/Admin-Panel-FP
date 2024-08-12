import { Edit, ReferenceInput, SimpleForm, TextInput } from "react-admin";

export const IngredientsEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="quantity" />
      <TextInput source="unit" />
      <TextInput source="notes" />
    </SimpleForm>
  </Edit>
);
