import React from 'react';
import PropTypes from 'prop-types';
import {Card, Col, Row} from "antd";

const ProductsList = ({products}) => {
    return (
        <div className="cards">
            <Row gutter={15}>
                {products.length > 0 && (
                    products.map((product) => (
                        <Col span={8} key={product.id}>
                            <Card title={product.name}>
                                {product.desc}
                            </Card>
                        </Col>
                    
                    ))
                )}
            </Row>
        </div>
    )
}

ProductsList.propTypes = {
    products: PropTypes.array
}

export default ProductsList;