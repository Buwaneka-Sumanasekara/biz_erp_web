import Icon from "@ant-design/icons";

import Icons from "./Icons";
import PropTypes from "prop-types";



const CustomIcon = props => <span className={"custom_icon_color"}><Icon component={()=>Icons[props.name]}  {...props} /></span>;


CustomIcon.propTypes = {
  name: PropTypes.string,
};
export default CustomIcon;
