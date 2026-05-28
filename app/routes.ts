import { type RouteConfig, index, route, layout, prefix } from "@react-router/dev/routes";

//render index route and the path where it exists
export default [
    index("routes/home.tsx"),
    ...prefix("user", [
        route("about", "routes/about.tsx"),
        route("post/:postId", "routes/post.tsx"),
    ]),

    // nested routes
    layout("routes/dashboard.tsx", [
        route("finances", "routes/finances.tsx"),
        route("personal-info", "routes/personal-info.tsx")
    ])
] satisfies RouteConfig;
