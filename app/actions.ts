"use server";
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function createPost(formData: FormData) {
    const title = formData.get("title");
    const content = formData.get("content");

    // Update data
    return new Promise((resolve) =>{


        // Revalidate cache
        revalidatePath('/posts')
        // redirect the user to a different page after performing an update
        redirect('/posts');

        resolve({
            title,
            content,
            author: 'John Doe',
            tags: ['nextjs', 'react', 'nodejs'],
        })
    })


}


export async function incrementLike(num: number) {
    return num += 1;
}
