import { Datagrid, List, ReferenceField, TextField } from "react-admin";

export const IngredientsList = () => (
  <List>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="quantity" />
      <TextField source="unit" />
      <TextField source="notes" />
    </Datagrid>
  </List>
);
