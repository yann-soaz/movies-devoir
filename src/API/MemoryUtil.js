export default class MemoryUtil {
    #favoriteList = [];
    #toSeeList = [];

    constructor () {
        if ('localStorage' in window) {
            let favs = localStorage.getItem('favs')
            this.#favoriteList = (!favs) ? [] : JSON.parse(favs)
            let later = localStorage.getItem('later')
            this.#toSeeList = (!later) ? [] : JSON.parse(later)
            return this
        } else {
            console.error('No localStorage available !')
            return false
        }
    }

    getFavs () {
        return this.#favoriteList
    }
    
    updateFav (film) {
        let add = true
        let newFavs = this.#favoriteList.filter(
            item => {
                if (item.id === film.id) {
                    add = false
                    return false
                }
                return true
            }
        )
        if (add)
            newFavs.push(film)

        this.#favoriteList = newFavs
        localStorage.setItem('favs', JSON.stringify(newFavs))
        return newFavs
    }

    inFav (film) {
        return this.#favoriteList.some(
            item => item.id === film.id
        )
    }

    getLater () {
        return this.#toSeeList
    }
    
    updateLater (film) {
        let add = true
        let newLater = this.#toSeeList.filter(
            item => {
                if (item.id === film.id) {
                    add = false
                    return false
                } 
                return true
            }
        )
        if (add)
            newLater.push(film)
        this.#toSeeList = newLater
        localStorage.setItem('later', JSON.stringify(newLater))
        return newLater
    }

    inLater (film) {
        return this.#toSeeList.some(
            item => item.id === film.id
        )
    }
}