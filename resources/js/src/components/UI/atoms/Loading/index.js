import { Row, Col } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";

const LoadingComponent = (props) => (
  <Row>
    <Col span={12} offset={6}>
      <LoadingOutlined style={{ fontSize: "40px" }} />
      {props.txt && (
          <h1>{props.txt}</h1>
      )}
    </Col>
  </Row>
);

LoadingComponent.propTypes = {
  txt: PropTypes.string,
};
export default LoadingComponent;
