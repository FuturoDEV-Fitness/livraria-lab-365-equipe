--Criar um arquivo SQL com os seguintes procedimentos:

--Encontre todos os clientes cujo nome começa com a letra 'A'.
select * from clientes where
	nome like 'A%'
	or
	nome like 'a%';

--Calcule o valor total de pedidos para cada cliente.
select cliente_id, sum(valor) as total_compra_id
from pedidos
group by cliente_id;

--Encontre a média de idade dos clientes em cada cidade.
select cidade, avg(idade) as media_idade_cidade
from clientes
group by cidade;