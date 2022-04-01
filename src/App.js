import MemoryContext from './API/MemoryContext';
import MemoryUtil from './API/MemoryUtil';
import { useState } from 'react';

import NavBar from './components/NavBar';
import Router from './Router';

function App() {
  let [memo, setMemo] = useState(new MemoryUtil())
  const update = (film, ctx) => {
    let m = new MemoryUtil()
    if (ctx === 'favs') {
      m.updateFav(film);
    } else if (ctx === 'later') {
      m.updateLater(film);
    }
    setMemo(m)

    return;
  }
  return (
    <main className="App">
      <NavBar links={[
        ['/', 'Accueil'],
        ['/decouvrir', 'découvrir'],
        ['/favoris', 'mes favoris'],
        ['/ma-liste', 'ma liste'],
      ]}/>
      <MemoryContext.Provider value={{update, memo}}>
        <Router/>
      </MemoryContext.Provider>
    </main>
  );
}

export default App;
