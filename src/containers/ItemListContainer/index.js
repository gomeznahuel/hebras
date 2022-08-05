import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { notifyError } from '../../helpers/Notify';

// Components
import ItemList from "../../components/ItemList";
import Filter from "../../common/Filter";

// Loader
import Loader from "../../helpers/Loader";

import { Wrapper } from "./style";
import { Layout } from "../../Layout/Layout";
import { getCategories, getProducts } from "../../services";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);

  const { categoryId } = useParams();

  // Get products from Firebase
  useEffect(() => {
    setLoading(true);
    getProducts(categoryId)
      .then((products) => setProducts(products))
      .catch((error) => notifyError(error.message))
      .finally(() => setLoading(false));
  }, [categoryId]); // eslint-disable-line

  // Get categories from Firebase
  useEffect(() => {
    setLoading(true);
    getCategories()
      .then((categories) => setCategories(categories))
      .catch((error) => notifyError(error.message))
      .finally(() => setLoading(false));
  }, []); 

  return (
    <Layout>
      {loading ? <Loader /> : 
        <>
          <Filter categories={categories} />
          <Wrapper>
            <ItemList products={products} />
          </Wrapper>
        </>
      }
    </Layout>
  );
};

export default ItemListContainer;
