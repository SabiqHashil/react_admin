import { Admin, EditGuesser, ListGuesser, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";

import { PosterEdit } from "./Components/PosterEdit";
import { PosterList } from "./Components/PosterList";
import { PosterCreate } from "./Components/PosterCreate";
import { CategoryList } from "./Components/CategoryList";
import { CategoryEdit } from "./Components/CategoryEdit";
import { CategoryCreate } from "./Components/CategoryCreate";

const dataProvider = jsonServerProvider("http://localhost:3000")


const App = () => <Admin dataProvider={dataProvider}>
  <Resource
    name="categories"
    list={CategoryList}
    edit={CategoryEdit}
    create={CategoryCreate}
    recordRepresentation="name"
  />
  <Resource
    name="posters"
    list={PosterList}
    edit={PosterEdit}
    create={PosterCreate}
  />
</Admin>

export default App