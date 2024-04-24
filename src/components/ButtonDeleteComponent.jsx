'use client'
import { deleteWorkspaceAction } from '@/actions/deleteWorkspaceAction'
import React from 'react'

const ButtonDeleteComponent = ({workSpaceId}) => {
    return (
    <div>
        <button onClick={()=>(
           deleteWorkspaceAction(workSpaceId)
        )}>Delete</button>
    </div>
  )
}

export default ButtonDeleteComponent