export async function createPost(formData: FormData) {
    'use server'
    const title = formData.get('title') as string
    const content = formData.get('content') as string
    const author = formData.get('author') as string
    const tags = formData.getAll('tags') as string[]
    const post = {
        title,
        content,
        author,
        tags,
    }
    // Save the post to the database
    // Update data
    // Revalidate cache
    return post;
}

export async function deletePost(formData: FormData) {
    'use server'
    const id = formData.get('id') as string

    // Delete the post from the database
    // Update data
    // Revalidate cache
    return id;
}
