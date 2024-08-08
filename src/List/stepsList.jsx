import { Datagrid, List, ReferenceField, TextField } from "react-admin";

export const StepsList = () => (
  <List>
    <Datagrid>
      <TextField source="id" />
      <TextField source="step" />
    </Datagrid>
  </List>
);
