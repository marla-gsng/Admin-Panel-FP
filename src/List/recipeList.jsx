import {
  List,
  Datagrid,
  TextField,
  ReferenceArrayField,
  SingleFieldList,
  ChipField,
  ArrayField,
  // Edit
} from "react-admin";

export const RecipeList = () => (
  <List>
    <Datagrid>
      <TextField source="id" />
      <TextField source="title" />

      <ArrayField source="ingredients">
        <SingleFieldList>
          <ChipField source="name" size="small" />
        </SingleFieldList>
      </ArrayField>
      <ArrayField source="instructions">
        <SingleFieldList>
          <ChipField source="step" size="small" />
        </SingleFieldList>
      </ArrayField>
      <TextField source="category" />
      <TextField source="prepTime" />
      <TextField source="cookTime" />
      <TextField source="totalTime" />
      <TextField source="servings" />
      <TextField source="tags" />
    </Datagrid>
  </List>
);
