package negocio;

import static org.junit.Assert.assertThat;
import static org.hamcrest.CoreMatchers.*;

import java.util.ArrayList;
import java.util.List;

import org.junit.Test;

public class GerenciadoraClientesTest_Ex1 {

	@Test
	public void testPesquisaCliente() {

		// criando alguns clientes
		Cliente cliente01 = new Cliente(1, "Gustavo Farias", 31, "gugafarias@gmail.com", 1, true);
		Cliente cliente02 = new Cliente(2, "Felipe Augusto", 34, "felipeaugusto@gmail.com", 2, true);

		// inserindo os clientes criados na lista de clientes do banco
		List<Cliente> clientesDoBanco = new ArrayList<>();
		clientesDoBanco.add(cliente01);
		clientesDoBanco.add(cliente02);

		// Aquilo que desejo testar, por isso anteriormente foi preciso realizar o
		// cadastro + inserção de clientes em uma lista
		GerenciadoraClientes gerClientes = new GerenciadoraClientes(clientesDoBanco);

		Cliente cliente = gerClientes.pesquisaCliente(1);

		/* Verificando se o ID é 1, pois anteriormente foi pesquisado o cliente(1) */
		assertThat(cliente.getId(), is(2));
		assertThat(cliente.getEmail(), is("gugafarias@gmail.com"));
	}

}
