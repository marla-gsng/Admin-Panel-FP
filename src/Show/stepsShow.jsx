import { Show, SimpleShowLayout, TextField } from "react-admin";

export const StepsShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="steps" />
    </SimpleShowLayout>
  </Show>
);
