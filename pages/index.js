import Head from 'next/head';
import Menu from '../Components/Menu';

function Home() {
  return (
    <div>
      <Head>
        <meta charSet='utf-8' />
        <meta name='robots' content='index, follow' />
        <meta name='description' content='Produtos' />
        <meta name='author' content='Deivid' />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css' />
        <title>Datum</title>
      </Head>
      <Menu />

      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
      <script src="custom.js"></script>
    
    </div>
  );
}

// Aula 05
// https://www.youtube.com/watch?v=ZUTxamQYJ1g&list=PLmY5AEiqDWwAUcRRSNlcr-RUgDhI2m4xA&index=5

// https://www.youtube.com/watch?v=Ggr3Yd03im8&list=PLmY5AEiqDWwAUcRRSNlcr-RUgDhI2m4xA&index=1

// Exemplo
//https://jasonwatmore.com/post/2021/04/20/next-js-10-crud-example-with-react-hook-form 
export default Home;