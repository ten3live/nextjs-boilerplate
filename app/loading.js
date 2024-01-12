import React from 'react'
import {Spinner} from '@nextui-org/react'

export default function loading() {
  return (
    <div style={{minWidth:'100%',minHeight:'80vh',display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center',flex:1}}>
      <Spinner color="white" /></div>
  )
}
