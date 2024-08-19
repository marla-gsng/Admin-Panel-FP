import {
  Show,
  SimpleShowLayout,
  TextField,
  SimpleFormIterator,
  ArrayInput,
} from "react-admin";

export const RecipesShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="title" />
      <ArrayInput source="ingredients">
        <SimpleFormIterator>
          <TextInput source="_id" label="Ingredient ID" />
        </SimpleFormIterator>
      </ArrayInput>
      <ArrayInput source="instructions">
        <SimpleFormIterator>
          <TextInput source="_id" label="Instruction ID" />
        </SimpleFormIterator>
      </ArrayInput>
      <TextField source="category" />
      <TextField source="prepTime" />
      <TextField source="cookTime" />
      <TextField source="totalTime" />
      <TextField source="servings" />
      <TextField source="tags" />
    </SimpleShowLayout>
  </Show>
);
