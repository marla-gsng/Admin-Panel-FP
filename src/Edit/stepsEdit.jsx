import { Edit, ReferenceInput, SimpleForm, TextInput } from "react-admin";

export const StepsEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="step" />
    </SimpleForm>
  </Edit>
);
