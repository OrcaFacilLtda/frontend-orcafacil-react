import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import customerData from "./data";
import CustomerReviewsStyle from "./Custumer.Style.Jsx";

const CustomerReviews = () => {
  return (
    <CustomerReviewsStyle.Section>
      <CustomerReviewsStyle.Title>
        AVALIAÇÃO DOS NOSSOS CLIENTES
      </CustomerReviewsStyle.Title>
      <CustomerReviewsStyle.Divider />
      <CustomerReviewsStyle.CardsWrapper>
        {customerData.map((customer, index) => (
          <CustomerReviewsStyle.Card key={index}>
            <CustomerReviewsStyle.Avatar
              src={customer.image}
              alt={customer.name}
            />
            <CustomerReviewsStyle.Name>{customer.name}</CustomerReviewsStyle.Name>
            <CustomerReviewsStyle.Stars>
              {Array.from({ length: customer.rating }).map((_, i) => (
                <FontAwesomeIcon icon={faStar} key={i} />
              ))}
            </CustomerReviewsStyle.Stars>
            <CustomerReviewsStyle.Review>
              {customer.review}
            </CustomerReviewsStyle.Review>
          </CustomerReviewsStyle.Card>
        ))}
      </CustomerReviewsStyle.CardsWrapper>
    </CustomerReviewsStyle.Section>
  );
};

export default CustomerReviews;
