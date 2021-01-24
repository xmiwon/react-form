import React from 'react'
import './StartPage.css'
import { Card, Button } from 'react-bootstrap'

const StartPage = ({ onRouteChange }) => {
  return (
    //Enkel start sida med en knapp. Klickar man på knappen körs funktionen onRouteChange och sätter dit värden 'home' till staten
    <div className="start-container">
      <Card className="text-center">
        <Card.Header>
          <Card.Title>Todo List</Card.Title>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            Click the button below to start creating a todo now.
    </Card.Text>
          <Button onClick={() => onRouteChange('home')} variant="primary">Start</Button>
        </Card.Body>

      </Card>
    </div>
  )
}
//exporterar hela komponenten för att kunna använda den i App.js 
export default StartPage