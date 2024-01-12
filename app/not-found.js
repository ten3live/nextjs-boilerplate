import React from 'react'
import Link from 'next/link'
import { button as buttonStyles } from "@nextui-org/theme";
export default function loading() {
  return (
<><div style={{minWidth:'100%',minHeight:'80vh',display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center',flex:1}}>
      <div className="column justify-content-center align-items-center text-center">
      <h1 className=" py-10 px-5" style={{fontSize:40}}>Sorry! This Page is Not Available</h1>
      <Link href="/"
			className={buttonStyles({ color: "primary", radius: "full", variant: "shadow" })}>
			Go to Home Page
			</Link>
      </div>
      </div>
      </>
  )
}
