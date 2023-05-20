/* Explicando o código:

    Notação para que a IDE identifique que é um metódo de teste:
        @Test								- 
    Criação de classe sem retorno:
        public void
    Criação de metódo de teste com nome testPesquisaCliente.
        public void nomeClasse() { }

    Asserções:
        AssertThat = Verfique que...

    Estrutura básica de um teste unitário
        Realiação de chamadas
        Leitura de retornos
        Testes - asserts

        Ex01: 
        cria clientes 
            estanciar classe 
                invoca metódo
                    asserts

        Ex02:
        @Test
        public void testPesquisaCliente() 
        {
            ========== Montagem do cenário
            // criando alguns clientes
            Cliente cliente01 = new Cliente(1, "Gustavo Farias", 31, "gugafarias@gmail.com", 1, true);
            Cliente cliente02 = new Cliente(2, "Felipe Augusto", 34, "felipeaugusto@gmail.com", 1, true);

            // inserindo os clientes criados na lista de clientes do banco
            List<Cliente> clientesDoBanco = new ArrayList<>();
            clientesDoBanco.add(cliente01);
            clientesDoBanco.add(cliente02);

            gerClientes = new GerenciadoraClientes(clientesDoBanco);

            ========== Execução
            Cliente cliente = gerClientes.pesquisaCliente(1);

            ========== Verificações
            assertThat(cliente.getId(), is(1));
        }

    Para executar os testes, podemos clicar em uma classe(executar um único), ou clicar em um espaço do código (executar todos)

    Valorize o comentário de códgio, para que todos possam entender o que está sendo feito

    Utilização dos conceitos:
        setUp)()    - executa antes de cada metódo de teste, tudo aquilo que é comum aos testes antes de suas verificões e asserts
        tearDown()  - executa depois de cada metódo de teste.

        Ex;
        @before
            public void setUp()
        @fter
            public void tearDown()
        @test
            public ...
        
*/