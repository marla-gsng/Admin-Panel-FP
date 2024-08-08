import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
} from "react-admin";
import { Layout } from "./Layout";
import dataProvider from "./dataProvider";
import { authProvider } from "./authProvider";
import UsersList from "./List/usersList";
import { RecipeList } from "./List/recipeList";
import { IngredientsList } from "./List/ingredientsList";
import { StepsList } from "./List/stepsList";

export const App = () => (
  <Admin
    layout={Layout}
    dataProvider={dataProvider}
    authProvider={authProvider}
  >
    <Resource
      name="users"
      list={UsersList}
      // edit={EditGuesser}
      // show={ShowGuesser}
    />

    <Resource name="recipes" list={RecipeList} />

    <Resource name="ingredients" list={IngredientsList} />

    <Resource name="steps" list={StepsList} />
  </Admin>
);
