import Head from "next/head";
import Hedear from "./hedear";
import Footer from "./footer";

export default function Layout({children, title = '', description = ''}) {
  return (
    <>
    <Head>
        <title>{`GuitarLA - ${title}`}</title>
        <meta name="description" content={description}/>
    </Head>   
     <Hedear/>
     {children}
     <Footer/> 
    </>
  )
}
