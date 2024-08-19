import {
  Create,
  SimpleForm,
  TextInput,
  ArrayInput,
  SimpleFormIterator,
  ChipField,
} from "react-admin";

export const RecipeCreate = () => (
  <Create>
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
          <TextInput source="_id" label="Instruction ID" />
        </SimpleFormIterator>
      </ArrayInput>
      <TextInput source="category" />
      <TextInput source="prepTime" />
      <TextInput source="cookTime" />
      <TextInput source="totalTime" />
      <TextInput source="servings" />
      <TextInput source="tags" />
    </SimpleForm>
  </Create>
);
