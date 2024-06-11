--Insira um novo cliente na tabela clientes com os seguintes dados: nome: 'Lucas Lima', cidade: 'Salvador', idade: 29.
insert into clientes (nome, cidade, idade)
values('Lucas Lima','Salvador', 29)
select * from clientes;

--Atualize o campo cidade do cliente com cliente_id = 3 para 'Fortaleza'.

update clientes set cidade = 'Fortaleza' where cliente_id = 3;
select * from clientes;

--Delete todos os pedidos que têm valor inferior a 150.00.
delete from pedidos where pedido_id = 5;
select * from pedidos;