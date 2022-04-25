import React from 'react'
import { IngredientsList } from './Ingredients.style'

const Ingredients = ({ section }) => {
  return (
    <IngredientsList>
      <h4>{section.name && section.name}</h4>
        <ul>
          {section.components.map((component, index) => (
            <li key={index}>
              *{component.raw_text}
            </li>
          ))}
        </ul>
    </IngredientsList>
  )
}

export default Ingredients