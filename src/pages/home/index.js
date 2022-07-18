import React from "react";
import { CarouselContainer } from "../../components/Carousel";
import { Layout } from "../../Layout/Layout";
import { useEffect } from "react";
import { getProducts } from "../../helpers/GetProducts";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { CardsContainer, Card } from "./HomePage.style";
import Loader from "../../services/Loader";
import Image from "../../components/Image";
import Button from "../../common/Button";
import { Title } from "../../common/Title";

const HomePage = () => {
  const [loading, setLoading] = useState(true);
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
      console.log(error);
    }
  }, [setSelected]);

  return (
    <Layout>
      <CarouselContainer />

      {loading ? (
        <Loader />
      ) : (
        <>
        <Title textTitle="Selected products!" />
        <CardsContainer>
          {selected.map((product) => (
            <div key={product.id}>
              {product.selected ? (
                <Card>
                  <Title textTitle={product.title.toUpperCase()} margin={".4em 0 .2em 0"} fontSize={"2rem"} />
                  <Image src={product.image} alt={product.name} maxWidth="55%" />
                  <NavLink to={`/item/${product.id}`}><Button textButton="View product" /></NavLink>
                </Card>
              ) : null}
            </div>
          ))}
        </CardsContainer>
        </>
      )}
    </Layout>
  );

}

export default HomePage;