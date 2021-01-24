import React from 'react'
import Task from '../Task/Task'




const List = ({ items, setItems }) => {

    return (
        <>
    
        {
            //Om längden på items är 0, visa text, annars loopar den igenom alla Task om items.length är mer än 0. Varje Task tar emot props
            items.length === 0 ? 
            <h2 style={{color: 'white'}}>Please create a task</h2>
            :  items.map(item => {
               return <Task 
                        key={item.id} 
                        item={item} 
                        
                        items={items} 
                        setItems={setItems}                          
                    />
            })
        }


        </>
    )
}

export default List;