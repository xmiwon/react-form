//Här importerar jag React och dess komponenter samt en custom loader och en StartPage komponent
import React, { useState, Suspense } from 'react'
import Loader from '../components/Loader/Loader'
import StartPage from '../components/StartPage/StartPage'


//container appen 
const App = () => {
//react hook state med route som innehåller 'start' från första början och funktionen setRoute som ska ändra värden på route
const [route, setRoute] = useState('start')

//Här gör jag en route change funktion som ska ändra route beroende var man är på sidan
const onRouteChange = (route) => {
  setRoute(route)
}
//Jag använder react lazy här för att senare importera komponenten när man behöver så att komponenterna laddas styckvis vilket ska förbättra prestanda
const MainLazy = React.lazy(() => import('../components/Main/Main'))

//Renderar sidan
  return (
    //om route är start, kö igång StartPage och skicka props onRouteChange till komponenten. 
      route === 'start' ? 
      <StartPage onRouteChange={onRouteChange} />
      : 
      //Om det är home så laddar det istället MainLazy. Jag använder <> här för att slippa lägga till div till domen när jag ändå inte behöver dess funktion. Suspense använder jag här för att medan MainLazy laddar så ska den visa något annat i den stunden man väntar. I detta fall blir det är en Loader animation
      route === 'home' ? 
      <>
        <Suspense fallback={<Loader />}>
          <MainLazy />
        </Suspense>
      </> : null
  );
}

export default App;
