
import "./App.css";
import Header from "./Header";
import LastProducts from "./LastProducts";
import AllProducts from "./AllProducts";
import SideBar from "./SideBar";
import Footer from "./Footer";


const App = () => {

const productsFromApi = [
    {
      name: "Chaise",
      price: 100,
      description: "Une chaise",
      publishedAt: "2021-09-01T10:00:00.000Z",
      category: "meuble",
    },
    {
      name: "Table",
      price: 200,
      description: "Une table",
      publishedAt: "2021-09-01T10:00:00.000Z",
      category: "meuble",
    },
    {
      name: "Canapé",
      price: 300,
      description: "Un canapé",
      publishedAt: "2021-09-01T10:00:00.000Z",
      category: "meuble",
    },
    {
      name: "Télé",
      price: 400,
      description: "Une télé",
      publishedAt: "2021-09-01T10:00:00.000Z",
      category: "électroménager",
    },
    {
      id:5,
      name: "Frigo",
      price: 500,
      description: "Un frigo",
      publishedAt: "2021-09-01T10:00:00.000Z",
      category: "électroménager",
    },
    {
      id:6,
      name: "Four",
      price: 600,
      description: "Un four",
      publishedAt: "2021-09-01T10:00:00.000Z",
      category: "électroménager",
    },
  ];

const cartFromApi = {
    items: [
      {
        product: "Chaise",
        amount: 200,
        quantity: 2,
      },
    ],
    totalAmount: 400,
    createdAt: "2021-09-01T10:00:00.000Z",
    user: "John Doe",
  };

  return (
    <>
      <Header/>6-
       <LastProducts productsFromApi={productsFromApi} />
      <AllProducts productsFromApi={productsFromApi} />
      <SideBar productsFromApi={productsFromApi} />
      <Footer /> 

    </>
  );
};

export default App;