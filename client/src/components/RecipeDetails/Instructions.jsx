import React from 'react'
import { InstructionsList } from './Instructions.style'

const Instructions = ({instruction}) => {
  return (
    <InstructionsList>
      {instruction.position} - {instruction.display_text}
    </InstructionsList>
  )
}

export default Instructions