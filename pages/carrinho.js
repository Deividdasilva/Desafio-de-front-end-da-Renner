import { useState, useEffect, useRef } from 'react';

import Head from 'next/head';
import Menu from '../Components/Menu';
import Footer from '../Components/Footer';


function Carrinho() {
  const [produtos, setProdutos] = useState([]);
  const carousel = useRef(null);

  useEffect(()=>{
    const meuCarrinho = localStorage.getItem('produto');
    setProdutos(JSON.parse(meuCarrinho) || []);
  },[]);

  function handleDelete(id) {
    let meuCarrinho = produtos.filter((item)=> {
      return (item.id !== id);
    });

    setProdutos(meuCarrinho);
    localStorage.setItem('produto', JSON.stringify(meuCarrinho));

    // toast.success('Produto excluido com sucesso');
  }

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = (e) => {
    e.preventDefault();

    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

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

      <section className='top'>
        <div className='max-width'>
          <div className='top-content' ref={carousel}>
              {produtos.map((item, index)=>{
                return (
                  <div className="item" key={index}>
                    <div className="image">
                      <img src='/tenis.png' alt='' />
                    </div>
                    <div className="info">
                      <span className="name">Nome: {item.nome}</span>
                      <span className="name">Valor R$: {item.preco}</span>
                      <span className="name">Descricao: {item.descricao}</span>
                      <span className="name">Resumo: {item.resumo}</span>
                      <button className='add-carrinho' onClick={() =>handleDelete(item.id)}>Excluir</button>
                    </div>
                  </div>
                );
              })}
          </div>
          {produtos.length > 0 && 
            <div className="buttons">
              <button onClick={handleLeftClick}>
                <img src="/icon.png" alt="Scroll Left" />
              </button>
              <button onClick={handleRightClick}>
                <img src="/icon.png" alt="Scroll Right" />
              </button>
            </div>
           }     
        </div>      
      </section>

      <Footer />

      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
      <script src="custom.js"></script>
    
    </div>
  );
}

export default Carrinho;