import { useState } from 'react';

import Head from 'next/head';
import Menu from '../Components/Menu';
import Footer from '../Components/Footer';


function Cadastro() {
  const [dataForm, setDataForm] = useState({
    nome: '',
    descricao: '',
    preco: '',
    quantidade: '',
    resumo: ''
  });

  const [response, setResponse] = useState({
    type: '',
    mensagem: ''
  });

  const onChangeInput = e => setDataForm({...dataForm, [e.target.name]: e.target.value});

  const sendContact = async e => {
    e.preventDefault();
    console.log(dataForm);

    try {
      const res = await fetch('http://localhost:8080/addproduct', {
        method: 'POST',
        body: JSON.stringify(dataForm),
        headers: { 'Content-Type': 'application/json' }
      });

      const responseEnv = await res.json();

      if (responseEnv.erro) {
        setResponse({
          type: 'error',
          mensagem: 'Erro'
        });
      } else {
        setResponse({
          type: 'success',
          mensagem: 'Cadastrado com sucesso'
        });
        setDataForm({
          nome: '',
          descricao: '',
          preco: '',
          quantidade: '',
          resumo: ''
        });
      }

    } catch(err) {
      setResponse({
        type: 'error',
        mensagem: 'Erro: Tente mais tarde!'
      });
    }
  }

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
      
      <section className='cadastro'>
        <div className='max-width'>
          <h2 className='title'>Cadastrar Produto</h2>
          <div className='cadastro-content'>
            <div className='column right'>
              <div className='text'>
                Formulario de cadastro
              </div>

              {response.type === 'error' ? <p className='alert-danger'>{response.mensagem}</p> : ""}
              {response.type === 'success' ? <p className='alert-success'>{response.mensagem}</p> : ""}

              <form onSubmit={sendContact}>
                <div className='fields'>
                  <div className='field name'>
                    <input 
                      type="text" 
                      name="nome" 
                      placeholder="Nome" 
                      value={dataForm.nome} 
                      onChange={onChangeInput} 
                    />
                  </div>
                </div>

                <div className='fields'>
                  <div className='field name'>
                    <input 
                      type="text" 
                      name="descricao" 
                      placeholder="Descricao" 
                      value={dataForm.descricao} 
                      onChange={onChangeInput} 
                    />
                  </div>
                </div>

                <div className='fields'>
                  <div className='field name'>
                    <input 
                       type="number" 
                       name="preco" 
                       placeholder="Preco" 
                       value={dataForm.preco} 
                       onChange={onChangeInput} 
                    />
                  </div>
                </div>

                <div className='fields'>
                  <div className='field name'>
                    <input 
                       type="number" 
                       name="quantidade" 
                       placeholder="Quantidade" 
                       value={dataForm.quantidade} 
                       onChange={onChangeInput} 
                    />
                  </div>
                </div>

                <div className='fields'>
                  <div className='field name'>
                    <input 
                     type="text" 
                     name="resumo" 
                     placeholder="Resumo" 
                     value={dataForm.resumo} 
                     onChange={onChangeInput} 
                    />
                  </div>
                </div>

                <div className='button-area'>
                  <button 
                    type='submit'
                  >
                    Cadastrar
                  </button>
                </div>
               
            </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />

       <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
       <script src="custom.js"></script>
    
    </div>
  );
}

export default Cadastro;