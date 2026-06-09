import { type RouteConfig, index, route, prefix } from "@react-router/dev/routes";

export default [
    route("dashboard", "routes/dashboard.tsx"),
    index("routes/home.tsx"),
    ...prefix("user", [route("about", "routes/about.tsx")]),
] satisfies RouteConfig;
