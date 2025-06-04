import { createBrowserRouter, createRoutesFromElements,RouterProvider, Route } from "react-router-dom";
import RootLayout from './layouts/RootLayout.jsx';
import HomePage from "./components/home_page/HomePage.jsx";
import CatMenu from "./components/category/CatMenu.jsx";
import ErrorPage from "./layouts/ErrorPage.jsx";
import CatMain from "./components/category/CatMain.jsx";
import ProductMain from "./components/product/ProductMain.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>} >
        <Route index element={<HomePage/>} />
        <Route path="/category" element={<CatMain/>}/>
        <Route path="/product" element={<ProductMain/>} />

        <Route path="*" element={<ErrorPage/>} />
    </Route>
  ) 
) 

const App = () => {
  return <RouterProvider router={router} />;
};

export default App; 