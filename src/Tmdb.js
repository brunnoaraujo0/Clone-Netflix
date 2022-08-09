const API_KEY = '622c716d97e8f146ede73f3c1532dc6f'
const API_BASE = 'https://api.themoviedb.org/3'


/*
Aqui vamos pegar os dados da API,
que sao eles,
-originais netflix
-recomendados (treding)
-ação (top rated)
-comedia
- terror
-romance 
-documentario
*/


const basicFetch = async (endPoint) => {
    const req = await fetch(`${API_BASE}${endPoint}`) /* a função basicFetch Faz uma requisição por fetch no link base da API com cada categoria  */
    const json = JSON.stringify(req); /*Me retorne tudo que tiver em req em json */
    return json; /* Me retorne os dados de json */
    
}



export default {
    /* Aqui criou uma funcao para pegar os dados gerais e depois distribuir em cada quadrado */
    getHomeList: async () => {
        /* se coloca um [] no return pq vai retornar uma array de elementos*/
        return [
            {
                slug: 'originais', /* Aqui é como uma marca de cada elemento*/
                title: 'Originais do Netflix', /* Aqui é o titulo de cada elemento*/
                items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`) /* Aqui vem todos os items desse elemento*/
                /*esse item vai chamara funcao basicFetch jogando nela o link para pegar os dados (esse 213 vem os originais netflix) */
                /* o AWAIT é basicamente "espere a resposta do fetch, depois vá para a outra linha" */
            },
            {
                slug: 'trending', 
                title: 'Recomendados para Você', 
                items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'toprated', 
                title: 'Em Alta', 
                items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'action', 
                title: 'Ação', 
                items: await basicFetch(`discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'comedy', 
                title: 'Comédia', 
                items: await basicFetch(`discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'horror', 
                title: 'Terror', 
               items: await basicFetch(`discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'romance', 
                title: 'Romance', 
                items: await basicFetch(`discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'documentary', 
                title: 'Documentarios', 
                items: await basicFetch(`discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
            }
        ]
    }

}