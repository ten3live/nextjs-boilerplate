import Image from "next/image";
import Modal from '@/src/components/Modal'
export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "black",
        color: "white",
        
      flexDirection:'row',
      justifyContent: "center",
      alignItems: "center",
      alignSelf:'center',
      alignContent:'center',
      textAlign:'center'
      }}
    >
     
      <div className="row" style={{
      width:'100%',  
      display:'flex',
      flexDirection:'row',
      justifyContent: "center",
      alignItems: "center",
      alignSelf:'center',
      alignContent:'center',
      textAlign:'center'}}>
         <h1 className="text-white text-center ms-4 mt-4">My Services</h1>
      <div className="row ms-1" style={{ display: "flex",justifyContent:'center',alignItems:'center' }}>
        <div className=" text-white text-center p-4 ms-2 mt-2 col  rounded-2" style={{height:'20vh',fontSize:'2rem',width:'40vw', display: "flex",justifyContent:'center',alignItems:'center',backgroundColor:'#eb5d2a',color:'black'}}>Website</div>
        <div className=" text-white text-center p-4 ms-2 mt-2 col rounded-2"style={{ height:'20vh',fontSize:'2rem',width:'40vw',display: "flex",justifyContent:'center',alignItems:'center',backgroundColor:'#76aa42',color:'black' }}>Android App</div>
      </div>
      <div className="row ms-1" style={{ display: "flex",justifyContent:'center',alignItems:'center' }}>
        <div className=" text-white text-center p-4 ms-2 mt-2 col  rounded-2" style={{ height:'20vh',fontSize:'2rem',width:'40vw',display: "flex",justifyContent:'center',alignItems:'center',backgroundColor:'#4396d0',color:'black' }}>SEO</div>
        <div className=" text-white text-center p-4 ms-2 mt-2 col  rounded-2"style={{ height:'20vh',fontSize:'2rem',width:'40vw',display: "flex",justifyContent:'center',alignItems:'center',backgroundColor:'#ecb811',color:'black' }}>Graphics Design</div>
      </div>
      </div>
        <Modal name="Login"/>
    </div>
  );
}
