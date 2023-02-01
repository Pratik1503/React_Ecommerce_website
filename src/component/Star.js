import { icons } from "react-icons";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import styled from "styled-components";

const Star = ({ stars, reviews }) => {
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;

    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <FaStar className="icons" />
        ) : stars >= number ? (
          <FaStarHalfAlt className="icons" />
        ) : (
          <AiOutlineStar className="icons" />
        )}
      </span>
    );
  });

  return (
    <Wrapper>
      <div className="icon-style">
        {ratingStar}
        <p>({reviews} customers)</p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .icon-style {
    display: flex;
    color: orange;
  }

  .icons {
    font-size: large;
  }
  p {
    position: absolute;
    padding-left: 10rem;
    top: 31.8rem;
  }
`;

export default Star;
