const imgSizes = {
    "backdrop_sizes": [
        "w300",
        "w780",
        "w1280",
        "original"
      ],
      "logo_sizes": [
        "w45",
        "w92",
        "w154",
        "w185",
        "w300",
        "w500",
        "original"
      ],
      "poster_sizes": [
        "w92",
        "w154",
        "w185",
        "w342",
        "w500",
        "w780",
        "original"
      ],
      "profile_sizes": [
        "w45",
        "w185",
        "h632",
        "original"
      ],
      "still_sizes": [
        "w92",
        "w185",
        "w300",
        "original"
      ]
      
}

export default class ApiQuery {
    query = {}
    url = ''
    
    apiKey = '5689d637fa00f8965d94a36d64c16fc8'
    base_url = 'https://api.themoviedb.org/3'
    static imgUrl = 'https://image.tmdb.org/t/p/'


    trend (type = 'day') {
        if (type !== 'day' && type !== 'week') 
            type = 'day'
        this.url = this.base_url+'/trending/movie/'+type
        return this
    }

    discover (page = 1, genre = '') {
        page = +(page)
        if (isNaN(page) || page < 1 || page > 1000)
            page = 1
        this.query.page = page;
        if (genre && genre !== '')
            this.query.with_genre = genre
        this.url = this.base_url+'/discover/movie'
        return this;
    }

    queryContent (term = '') {
        this.url = this.base_url+'/search/movie'
        this.query.query = term
    }

    movie (id) {
        this.url = this.url+'/movie/'+id
        return this;
    }

    genre () {
        this.url = this.base_url+'/genre/movie/list'
        return this;
    }

    buildQuery () {
        let query = '';
        for (let q in this.query) {
            query += ( (query === '') ? '?' : '&' )+q+'='+this.query[q]
        }
        query += ( (query === '') ? '?' : '&' )+'api_key='+this.apiKey
        return query
    }

    async get () {
        try {
            let response = await fetch(this.url+this.buildQuery())
            if (!response.ok)
                return false;
            let json = await response.json()
            return json    
        } catch (err) {
            return false
        }
    }

    static getImgUrl (path, width) {
        return this.imgUrl+width+path
    }
    /**
     * get image url for films posters
     * @param {string} path 
     * @param {int} sizeIndex - 0>6 default 4
     * @returns 
     */
    static poster (path, sizeIndex = 4) {
        sizeIndex = +(sizeIndex)
        if (isNaN(sizeIndex) || sizeIndex < 0 || sizeIndex > imgSizes.poster_sizes)
            sizeIndex = 4
        let size = imgSizes.poster_sizes[sizeIndex]
        return this.getImgUrl(path, size)
    }
    /**
     * get image url for film backdrop
     * @param {string} path 
     * @param {int} sizeIndex - 0>3 default 2
     * @returns 
     */
    static backdrop (path, sizeIndex = 2) {
        sizeIndex = +(sizeIndex)
        if (isNaN(sizeIndex) || sizeIndex < 0 || sizeIndex > imgSizes.backdrop_sizes)
            sizeIndex = 2
        let size = imgSizes.backdrop_sizes[sizeIndex]
        return this.getImgUrl(path, size)
    }
}