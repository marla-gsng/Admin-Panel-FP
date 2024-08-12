import { Create, SimpleForm, TextInput } from "react-admin";

export const UsersCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="username" />
      <TextInput source="email" />
      <TextInput source="password" />
    </SimpleForm>
  </Create>
);
