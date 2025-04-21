export async function getPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1/posts');
    return await response.json();
}