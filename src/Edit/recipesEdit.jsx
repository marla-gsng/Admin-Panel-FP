import {
  Edit,
  SimpleForm,
  TextInput,
  ArrayInput,
  SimpleFormIterator,
} from "react-admin";

export const RecipesEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="title" />
      <TextInput source="description" />
      <ArrayInput source="ingredients">
        <SimpleFormIterator>
          <TextInput source="_id" label="Ingredient ID" />
        </SimpleFormIterator>
      </ArrayInput>
      <ArrayInput source="instructions">
        <SimpleFormIterator>
          <TextInput source="_id" label="Step ID" />
        </SimpleFormIterator>
      </ArrayInput>
      <TextInput source="category" />
      <TextInput source="prepTime" />
      <TextInput source="cookTime" />
      <TextInput source="totalTime" />
      <TextInput source="servings" />
      <TextInput source="tags" />
    </SimpleForm>
  </Edit>
);
