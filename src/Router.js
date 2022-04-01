import { Route, Routes } from "react-router-dom";

import Accueil from './pages/Accueil';
import UserList from './pages/UserList';
import Discover from './pages/Discover';
import { Fragment } from "react";

const Router = () => {
    return (
        <Fragment>
            <Routes>
                <Route path='/' element={<Accueil/>} />
                <Route path='/decouvrir' element={<Discover />} />
                <Route path='/ma-liste' element={<UserList title="Mes films a voir" ctx="later"/>} />
                <Route path='/favoris' element={<UserList title="Mes films favoris" ctx="fav"/>} />
            </Routes>
        </Fragment>
    )
}

export default Router;