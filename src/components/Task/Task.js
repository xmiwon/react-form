import React, { useEffect, useState } from 'react'
import './Task.css'
import { Card } from 'react-bootstrap'
import { CheckCircle, Trash } from 'react-bootstrap-icons'


const Task = ({ item, items, setItems}) => {
    const [color, setColor] = useState()

    //useEffect är lika med componentDidMount. Funktionen laddas så fort komponenten laddas och utför saker. I detta fall har jag gjort en "randomizer" av tal som jag sedan sätter in dem i setColor och ska auto generera en rgb värde. [] använder jag för att useEffect ska endast köra en gång, annars blir det evighet loop
    useEffect(() => {
        const x = Math.floor(Math.random() * (256 - 100) + 156),
              y = Math.floor(Math.random() * (256 - 100) + 156),
              z = Math.floor(Math.random() * (256 - 180) + 156);
        setColor("rgb(" + x + "," + y + "," + z + ")");
      }   
    ,[])

    //Här tar jag bort enskilda task
    const deleteHandler = () => setItems(items.filter(data => data.id !== item.id))
    
    //Här loopar den igenom items och för varje item (data) kollar den om id för varje data matchar med item.id. Om funktionen hittar en match, så "vänd" värden på completed till motsatsen
    const isCompletedHandler = () => {
        setItems(items.map(data => {
            if(data.id === item.id) {
                return {
                    ...data, completed: !data.completed
                }
            }

            return data
        }))
    }

    return (
        //Gör en inline styling
    <Card style={{ borderWidth: 3, borderColor: color, fontWeight: 'bold'}} className="mb-1">
            <div className={`${item.completed ? 'gray-text' : null}`}>
            {
                //Lägger till "completed" om item.completed blir true
                 item.completed ? <Card.Header><div>{item.name} (Completed)</div></Card.Header> : <Card.Header>{item.name}</Card.Header>
            }              
            <Card.Body style={{whiteSpace: 'break-spaces'}}>{item.description}</Card.Body> 
            </div>
            
            <div className="flex-end">
            {
                //Om true eller false => grön eller orange färg på komponenten
            }
                <CheckCircle 
                    onClick={isCompletedHandler} 
                    color={`${item.completed ? 'green' : 'orange'}`} 
                    size={20} 
                    className="mr-5"/>           
                <Trash 
                    color={"red"} 
                    onClick={deleteHandler} 
                    size={20} 
                    className="mr-5"/>             
            </div>

            
        </Card>
    )
}

export default Task;