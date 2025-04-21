
import { getPosts } from "@/api/posts";
import Post2 from "@/components/Post2";
import { Suspense } from "react";

export default async function Page() {
    const posts = getPosts();

    return (
        <Suspense fallback={ <div>Loading...</div> }>
            <Post2 posts={posts}/>
        </Suspense>
    );
}
