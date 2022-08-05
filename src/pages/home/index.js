import { CarouselContainer } from '../../components';
import { Layout } from "../../Layout/Layout";
import { useEffect } from "react";
import { getProducts } from "../../services/GetProducts";
import { useState } from "react";
import { SectionSelected, CardsContainer, SelectedProductsContainer } from "./style";
import { Title } from "../../common";
import { SelectedProducts } from "../../models/SelectedProducts";
import { Loader, notifyError } from "../../helpers";

const HomePage = () => {
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    setLoading(true);
    try {
      getProducts()
      .then((products) => {
        setSelected(products.filter((product) => product.selected));
        setLoading(false);
      });
    } catch (error) {
      notifyError(error);
    }
  }, [setSelected]);

  return (
    <Layout>
      <CarouselContainer />

      {loading ? (
        <Loader />
      ) : (
        <SelectedProductsContainer>
        <Title textTitle="Selected products!" />
        <CardsContainer>
          {selected.map(({ id, name, title, image, selected}) => (
            <SectionSelected key={id}>
              {selected && <SelectedProducts id={id} name={name} title={title} image={image} /> }
            </SectionSelected>
          ))}
        </CardsContainer>
        </SelectedProductsContainer>
      )}
    </Layout>
  );

}

export default HomePage;