export const loadPosts = async () => {
  const postResponse = fetch("https://jsonplaceholder.typicode.com/posts");
  //.then((res) => res.json())
  //.then((posts) => this.setState({ posts }));
  const photosResponse = fetch("https://jsonplaceholder.typicode.com/photos");
  //promisse.all recebe um array de promessas
  const [posts, photos] = await Promise.all([postResponse, photosResponse]);
  const postsJson = await posts.json();
  const photosJson = await photos.json();

  const postsAndPhotos = postsJson.map((post, index) => {
    return { ...post, cover: photosJson[index].url };
  });
  return postsAndPhotos
};
