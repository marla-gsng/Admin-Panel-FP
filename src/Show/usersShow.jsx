import { Show, SimpleShowLayout, TextField } from "react-admin";

export const UsersShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="username" />
      <TextField source="email" />
    </SimpleShowLayout>
  </Show>
);
