import Image from 'next/image'
import Layout from "../components/layout";
import styles from '../styles/nosotros.module.css'

export default function Nosotros() {
  return (
    
      <Layout
      title={`Nosotros`}
      description={`Sobre nosotros, guitarLA, tienda de música`}
      >
        <main className="contenedor">
          <h1 className="heading">Nosotros</h1>
          <div className={styles.contenido}>
            <Image src={'/img/nosotros.jpg'} width={1000} height={800} alt='Imagen sobre nostros'/>

            <div>
              <p>
              Sed pretium purus ut felis vestibulum, sit amet ornare sapien faucibus. Donec et massa vel metus hendrerit interdum vitae eu erat. Ut ac elementum erat, in imperdiet nibh. Ut venenatis dolor non ante tempor convallis sed et tellus. Sed et metus turpis. Quisque luctus felis sit amet felis dignissim, id feugiat metus ullamcorper. In vehicula diam in dolor condimentum, ut dapibus lacus faucibus. Mauris pellentesque eu dolor nec eleifend. Proin non tempor mauris, non sagittis augue. Morbi nisl magna, aliquam et augue at, congue scelerisque arcu.  
              </p>
              <p>
              Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum quis tellus lacinia, dapibus arcu ac, aliquet ante. Nullam vitae ipsum ex.
              </p>
            </div>
          </div>
        </main>
      </Layout>

  )
}
