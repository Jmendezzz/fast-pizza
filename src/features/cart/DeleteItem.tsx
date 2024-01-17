import React from 'react'
import Button from '../../ui/Button'
import { useDispatch } from 'react-redux'
import {  deleteItem } from './cartSlice';

function DeleteItem({id}:{id:string}) {
    const dispatch = useDispatch();
  return (
    <Button onClick={()=> dispatch(deleteItem(id))} type="small">Delete</Button>

  )
}

export default DeleteItem