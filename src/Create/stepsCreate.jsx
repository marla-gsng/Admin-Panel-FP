import { Create, SimpleForm, TextInput } from "react-admin";

export const StepsCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="step" />
    </SimpleForm>
  </Create>
);
