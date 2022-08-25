
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"



export default function Layout (props){
return (
    <>
    <Header className="container"/>
       {props.children}
    <Footer/>
    </>
)}