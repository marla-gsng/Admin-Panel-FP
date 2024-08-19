import { Edit, ReferenceInput, SimpleForm, TextInput } from "react-admin";

export const UsersEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="username" />
      <TextInput source="email" />
    </SimpleForm>
  </Edit>
);
