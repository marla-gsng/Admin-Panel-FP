import {
  List,
  SimpleList,
  Datagrid,
  TextField,
  EmailField,
  DateField,
} from "react-admin";

const UsersList = () => {
  return (
    <List>
      <Datagrid>
        <TextField source="id" />
        <EmailField source="email" />
      </Datagrid>
    </List>
  );
};

export default UsersList;
