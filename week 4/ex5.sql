-- Criar um arquivo SQL com os seguintes procedimentos:

-- Liste todos os pedidos junto com as informações dos clientes, usando um INNER JOIN.

select c.nome, p.data_pedido, p.valor
	from clientes c
	inner join pedidos p on c.cliente_id=p.cliente_id;

-- Faça uma consulta que retorna todos os clientes e seus pedidos, incluindo clientes que não fizeram pedidos (use LEFT JOIN).

select c.nome, p.data_pedido, p.valor
	from clientes c
	left join pedidos p on c.cliente_id=p.cliente_id;

-- Faça uma consulta que retorna todos os produtos e seus itens pedidos, incluindo produtos que não foram pedidos (use RIGHT JOIN).

select c.nome, p.data_pedido, p.valor
	from clientes c
	right join pedidos p on c.cliente_id=p.cliente_id;

-- Utilize UNION para combinar duas consultas: uma que retorna clientes de 'São Paulo' e outra que retorna clientes de 'Rio de Janeiro'.

select * from clientes where cidade = 'São Paulo'
union
select * from clientes where cidade = 'Rio de Janeiro';
