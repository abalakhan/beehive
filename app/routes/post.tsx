import type { Route } from "./+types/post";

export async function loader({params}: Route.LoaderArgs) {
    const postId = params.postId;
    const res = await fetch(``);
    return { postId };
}

export async function action() {

}

export default function Post({loaderData}: Route.ComponentProps) {
    return <div>
        Postid: {loaderData.postId}
    </div>
}