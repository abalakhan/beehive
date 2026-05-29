import { Form, NavLink, redirect, useFetcher, useNavigate, useNavigation } from "react-router";
import type { Route } from "./+types/post";

export async function clientLoader({params}: Route.LoaderArgs) {
    const postId = params.postId;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    return await res.json();
}
// how to do from the db
// export async function loader({params}: Route.LoaderArgs) {
//     const product = await db.getProduct(params.id);
//     return product;
// }

// handles POST, PUT, DELETE actions
export async function clientAction({params}: Route.ClientActionArgs) {
    try {
        await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`, {method: "DELETE"});
        return {isDeleted: true};
        } catch(err) {
        console.log(err);
        return {isDeleted: false};
    }
}

// redirect("") works only in loader or action functions
// useNavigate("") for other functions
export default function Post({loaderData}: Route.ComponentProps) {

    const fetcher = useFetcher();
    const navigate = useNavigate();
    const navigation = useNavigation();

    const isNavigating = Boolean(navigation.location);

    const isDeleted = fetcher.data?.isDeleted;
    const isDeleting = fetcher.state !== "idle";

    if (isNavigating) {
        return <p>Navigating...</p>
    } 

    return <div>
        {" "}
        {!isDeleted && (
            <>
            <p>Title: {loaderData.title}</p>
            <p>Body: {loaderData.body}</p>
        
        </>
        )}
        <button onClick={() => navigate("/")}>Redirect</button>
        <br></br>
        <NavLink to="/user/about">About</NavLink>

        <fetcher.Form method="delete">
            <button type="submit">Delete</button>
        </fetcher.Form>

        {
            isDeleting && <p>Deleting Post...</p>
        }

    </div>
}