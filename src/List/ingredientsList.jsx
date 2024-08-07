import {
  Datagrid,
  DateField,
  List,
  ReferenceField,
  TextField,
} from "react-admin";

export const IngredientsList = () => (
  <List>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <ReferenceField source="recipe_id" reference="recipes">
        <TextField source="name" />
      </ReferenceField>
    </Datagrid>
  </List>;
);
