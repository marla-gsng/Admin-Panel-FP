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
          <TextInput source="name" label="Ingredient Name" />
        </SimpleFormIterator>
      </ArrayInput>
      <ArrayInput source="instructions">
        <SimpleFormIterator>
          <TextInput source="step" label="Instruction Step" />
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
