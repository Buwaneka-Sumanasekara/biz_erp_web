import { Link } from "react-router-dom";
import { Breadcrumb } from "antd";

const BreadcrumbComponent = (props) => {
  const { routes: passedRoutes } = props;
  function itemRender(route, params, routes, paths) {
    const last = routes.indexOf(route) === routes.length - 1;
    return last ? (
      <span>{route.breadcrumbName}</span>
    ) : (
      <Link to={`/${paths.join("/")}`}>{route.breadcrumbName}</Link>
    );
  }

  return <Breadcrumb itemRender={itemRender} routes={passedRoutes} />;
};

export default BreadcrumbComponent;
