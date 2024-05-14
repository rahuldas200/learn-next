export  async function getAllPosts() {
    const result = await fetch("https://jsonplaceholder.typicode.com/posts")
    return result.json();
}

export async function getPost(id) {
    console.log(id);
    const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    return result.json();
}