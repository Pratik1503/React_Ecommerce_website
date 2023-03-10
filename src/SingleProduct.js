import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useProductContext } from "./context/productcontext";
import PageNavigation from "./component/PageNavigation";
import MyImage from "./component/MyImage";
import { Container } from "./styles/Container";
import FormatPrice from "./Helpers/FormatPrice";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import Star from "./component/Star";
import AddToCart from "./component/AddToCart";

const API = "https://api.pujakaitem.com/api/products";

const SingleProduct = () => {
  const { isSingleLoading, singleProduct, getSingleProduct } =useProductContext();

  const { id } = useParams();

  const {
    id: alias,
    name,
    image,
    company,
    price,
    description,
    category,
    stock,
    stars,
    reviews,
  } = singleProduct;

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, []);

  if (isSingleLoading) {
    return <div className="page_loading">...Loading</div>;
  }
  return (
    <Wrapper>
      <PageNavigation title={name} />
      <Container className="container">
        <div className="grid grid-two-column">
          <div className="product-images">
            <MyImage imgs={image} />
          </div>

          <div className="product-data">
            <h2>{name}</h2>
            <Star stars={stars} reviews={reviews} />

            {/* real price */}
            <p className="product-data-price">
              MRP:
              <del>
                <FormatPrice price={price + 250000} />
              </del>
            </p>

            {/* discount price */}
            <p className="product-data-price product-data-real-price">
              Deal of the Day: <FormatPrice price={price} />
            </p>

            {/* description of the product */}
            <p>{description}</p>

            {/* //symbols div */}
            <div className="product-data-warranty">
              {/* 1st symbol */}
              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icons" />
                <p>Free Delivery</p>
              </div>

              {/* 2nd symbol */}
              <div className="product-warranty-data">
                <TbReplace className="warranty-icons" />
                <p>30 Days Replacement</p>
              </div>

              {/* 3rd symbol */}
              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icons" />
                <p>Maal Delivered</p>
              </div>

              {/* 4th symbol */}
              <div className="product-warranty-data">
                <MdSecurity className="warranty-icons" />
                <p>2 year warranty</p>
              </div>
            </div>

            {/* Availabillity */}
            <div className="product-data-info">
              <p>
                Available:{" "}
                <span>{stock > 0 ? "In-Stock" : "Out-of-Stock"}</span>
              </p>

                          {/* id of product */}
            <div>
              ID:<span>{id}</span>
            </div>

            {/* company of product */}
            <div>
              company:<span>{company}</span>
            </div>
            </div>

            <hr/>
            {/* color section */}

            { stock >0  && <AddToCart product={singleProduct}  /> }


          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
  }

  .grid-two-column {
    grid-template-columns: repeat(2, 1fr);
  }

  .product_images {
    display: flex;
    align-items: center;
  }
  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;
    .product-data-warranty {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      margin-bottom: 1rem;

      .product-warranty-data {
        text-align: center;

        .warranty-icons {
          background-color: rgba(220, 220, 220, 0.5);
          border-radius: 50%;
          width: 4rem;
          height: 4rem;
          padding: 0.6rem;
        }
        p {
          font-size: 1.4rem;
          padding-top: 0.4rem;
        }
      }
    }
    .product-data-price {
      font-weight: bold;
    }
    .product-data-real-price {
      color: ${({ theme }) => theme.colors.btn};
    }
    .product-data-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.8rem;
      span {
        font-weight: bold;
      }
    }
    hr {
      max-width: 100%;
      width: 100%;
      /* height: 0.2rem; */
      border: 0.1rem solid #000;
      color: red;
    }
  }
  .product-images {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .page_loading {
    font-size: 3.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0 2.4rem;
  }`;

export default SingleProduct;
