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
import { IngredientsCreate } from "./Create/ingredientsCreate";
import { UsersCreate } from "./Create/usersCreate";
import { RecipeCreate } from "./Create/recipesCreate";
import { StepsCreate } from "./Create/stepsCreate";
import { UsersEdit } from "./Edit/usersEdit";
import { RecipesEdit } from "./Edit/recipesEdit";
import { StepsEdit } from "./Edit/stepsEdit";
import { IngredientsEdit } from "./Edit/ingredientsEdit";
import { IngredientsShow } from "./Show/ingredientsShow";

export const App = () => (
  <Admin
    layout={Layout}
    dataProvider={dataProvider}
    authProvider={authProvider}
  >
    <Resource
      name="users"
      list={UsersList}
      edit={UsersEdit}
      create={UsersCreate}
      // show={ShowGuesser}
    />

    <Resource
      name="recipes"
      list={RecipeList}
      edit={RecipesEdit}
      create={RecipeCreate}
    />

    <Resource
      name="ingredients"
      list={IngredientsList}
      edit={IngredientsEdit}
      create={IngredientsCreate}
      show={IngredientsShow}
    />

    <Resource
      name="steps"
      list={StepsList}
      edit={StepsEdit}
      create={StepsCreate}
    />
  </Admin>
);
