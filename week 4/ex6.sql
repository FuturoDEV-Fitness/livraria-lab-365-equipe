-- Criar um arquivo SQL com os seguintes procedimentos:

-- Encontre o total de itens pedidos em cada mês.
-- query 2 tables "pedidos", "itens_pedidos"
select
	--transformando data a mes
	--query de dos datos (data,cantidad)
    TO_CHAR(p.data_pedido, 'YYYY-MM') as mes,
    SUM(ip.quantidade) AS total_itens
from
    pedidos p
inner join
    itens_pedidos ip ON p.pedido_id = ip.pedido_id
group by
    TO_CHAR(p.data_pedido, 'YYYY-MM')
order by
    mes;

-- Liste os clientes que não têm pedidos associados.

select c.nome, p.cliente_id
	from clientes c
	left join pedidos p 
	on p.cliente_id = c.cliente_id
 	where p.cliente_id is null

-- Encontre o pedido de maior valor.
select pedido_id, valor
	from pedidos
	where valor =
		(select max(valor) from pedidos)

-- Encontre o total de itens pedidos para cada produto.
select pr.nome_produto, sum(ip.quantidade) as total_itens
	from itens_pedidos ip
	inner join 
		produtos pr 
			on pr.produto_id=ip.produto_id
	group by pr.nome_produto
order by pr.nome_produto

-- Calcule a soma dos valores dos pedidos para cada cliente que tenha feito mais de um pedido.
select pd.cliente_id, sum(pd.valor) as sum_pedidos 
	from pedidos pd
		inner join clientes c
		on c.cliente_id = pd.cliente_id
	group by pd.cliente_id
order by pd.cliente_id

-- Encontre o preço médio dos produtos em cada categoria.
select categorias_id, avg(preco) as preco_medio_it_categoria
	from produtos
	group by categorias_id
order by categorias_id

-- Encontre o cliente que fez o pedido de maior valor.
select cliente_id, valor
	from pedidos
	where valor =
		(select max(valor) from pedidos)