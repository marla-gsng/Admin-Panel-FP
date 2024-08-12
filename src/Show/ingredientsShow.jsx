import { Show, SimpleShowLayout, TextField } from "react-admin";

export const IngredientsShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="quantity" />
      <TextField source="unit" />
    </SimpleShowLayout>
  </Show>
);
