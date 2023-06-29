    
        // on fait une boucle sur la variable articlesResponseFakeFromApi 
        // qui contient les articles (faussement) récupérés depuis l'API
        // La fonction .map permet de faire une boucle sur un tableau (comme la 
        // fonction foreach)
        // La map prend en parametre une fonction qui sera executée pour chaque 
        // élément du tableau
        // Ici, pour chaque élément du tableau, on retourne du JSX, permettant
        // de créer une balise article avec les données de l'article
    
const ArticlesList = () =>{
    return (
        <div className="App">
            <article>
                <h2> Les photos de voyage qui font rêver</h2>
                <p> Imaginez un peignoir jeté sur une chaise longue savamment placée aux abords de la piscine d’un hôtel chic, dont la terrasse surplombe la mer…</p>
                <img src="https://www.selection.ca/wp-content/uploads/2021/03/photos-de-voyage-piscine-debordement-hotel-reve.jpg" alt="random" />
            </article>


            <article>
                <h2> Les photos de voyage qui font rêver</h2>
                <p> Imaginez un peignoir jeté sur une chaise longue savamment placée aux abords de la piscine d’un hôtel chic, dont la terrasse surplombe la mer…</p>
                <img src="https://www.selection.ca/wp-content/uploads/2021/03/photos-de-voyage-piscine-debordement-hotel-reve.jpg" alt="random" />
            </article>



            <article>
                <h2> Les photos de voyage qui font rêver</h2>
                <p> Imaginez un peignoir jeté sur une chaise longue savamment placée aux abords de la piscine d’un hôtel chic, dont la terrasse surplombe la mer…</p>
                <img src="https://www.selection.ca/wp-content/uploads/2021/03/photos-de-voyage-piscine-debordement-hotel-reve.jpg" alt="random" />
            </article> 

            {/* {articlesResponseFakeFromApi.map((article) => (
        <article>
          <p>{article.title}</p>
          <p>{article.content}</p>
          <img src={article.image} alt={article.title} />
        </article>
            ))} */}
        </div>
    );
};

export default ArticlesList;

