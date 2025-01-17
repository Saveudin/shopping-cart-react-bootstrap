import storeItems from "../data/items.json";
import { StoreItem } from "../components/StoreItem";
import { Col, Row } from "react-bootstrap";

export function Store() {
  return (
    <>
      <h1>Store</h1>
      <Row
        md={2}
        xs={1}
        xl={3}
        className="g-3">
        {storeItems.map((item) => (
          <Col key={item.id}>
            <StoreItem {...item}></StoreItem>
          </Col>
        ))}
      </Row>
    </>
  );
}
