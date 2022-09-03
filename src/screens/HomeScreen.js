import React from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import Products from "../products";

function HomeScreen() {
  return (
    <>
      <h2>Latest Products</h2>
      <Row>
        {Products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product key={product._id} product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default HomeScreen;
