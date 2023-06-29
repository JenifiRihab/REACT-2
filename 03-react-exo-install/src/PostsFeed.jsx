// EXO (pour ceux qui ont fini) : 
// - Créer un composant PostsFeed pour afficher les posts des autres utilisateurs 
// - Pour ça utilisez la variable PostsFeedFromFakeApi, et affichez toutes les infos du posts, mais uniquement s'il est publié (isPublished) :

const PostsFeed = () => {
const postsFeedFromFakeApi = [
    {
      id: 1,
      title: "Un développeur web est un informaticien spécialisé dans la programmation",
      description: "des applications qui sont exécutées à partir d'un serveur web sur un navigateur web",
      image: "https://t3.ftcdn.net/jpg/02/91/68/02/240_F_291680294_JddrU1MYMOibilhs0gQ6SZj9BcJ9JiIS.jpg",
      isPublished: true,
      publishedAt: "2021-09-01T12:00:00.000Z",
      author: {
        id: 1,
        firstName: "John",
        lastName: "Doe",
      },
    },
    {
      id: 2,
      title: "Un développeur web est un informaticien spécialisé dans la programmation",
      description: "des applications qui sont exécutées à partir d'un serveur web sur un navigateur web",
      image: "https://t4.ftcdn.net/jpg/02/91/54/71/240_F_291547154_SsOYeiYfB7KEoJuV7l3556HDSUAbKEgd.jpg",
      isPublished: false,
      publishedAt: "2021-09-01T12:00:00.000Z",
      author: {
        id: 2,
        firstName: "Jane",
        lastName: "Doe",
      },
    },
    {
      id: 3,
      title: "Un développeur web est un informaticien spécialisé dans la programmation",
      description: "des applications qui sont exécutées à partir d'un serveur web sur un navigateur web",
      image: "https://t4.ftcdn.net/jpg/02/91/54/71/240_F_291547154_SsOYeiYfB7KEoJuV7l3556HDSUAbKEgd.jpg",
      isPublished: true,
      publishedAt: "2021-09-01T12:00:00.000Z",
      author: {
        id: 3,
        firstName: "Jean",
        lastName: "Bon",
      },
    },
    {
      id: 4,
      title: "Un développeur web est un informaticien spécialisé dans la programmation 4",
      description: "des applications qui sont exécutées à partir d'un serveur web sur un navigateur web",
      image: "https://t3.ftcdn.net/jpg/02/91/54/68/240_F_291546844_xi6aNggvVFUDR8sC1TiMOaOsxvW5zj7n.jpg",
      isPublished: true,
      publishedAt: "2021-09-01T12:00:00.000Z",
      author: {
        id: 4,
        firstName: "Json",
        lastName: "Statham",
      },
    },
  ];


  return (
    <div className="App-Experience">{postsFeedFromFakeApi.map((PostsFeed) => {
      const date = new Date(PostsFeed.publishedAt)

        return (
          PostsFeed.isPublished && (
            <article>
              <h2>{PostsFeed.title}</h2>
              <img src={PostsFeed.image} alt={PostsFeed.title} />
              <p>{PostsFeed.description}</p>
              <p>{date.toDateString('M/D/Y')} </p>     
              <h2>{PostsFeed.firstName}</h2>
              <h2>{PostsFeed.lastName}</h2>
            </article>
          )
        );
      })}
    </div>
  );
}


  export default  PostsFeed