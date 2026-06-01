import { type RouteConfig, index, route, layout, prefix } from "@react-router/dev/routes";

//render index route and the path where it exists
export default [

    route("dashboard", "routes/dashboard.tsx"),

    index("routes/home.tsx"),
    ...prefix("user", [
        route("about", "routes/about.tsx"),
    ])
    
] satisfies RouteConfig;
