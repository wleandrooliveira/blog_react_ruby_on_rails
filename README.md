# Blog_react_ruby_on_rails


Projeto de um blog com Frontend React e Backend Ruby On Rails.

O Projeto esta dividido em duas partes uma api rails que será executada na porta 3001 e um Frontend que será executado na porta 3000.

Neste projeto foi utilizado ruby 2.5.1 e rails 5.2.1.

Para Executar aplicação será necessário executar o Backend e posterior o Frontende seguindo os passos abaixo:

Para Testar o Backend

1) git clone https://github.com/wleandrooliveira/blog_react_ruby_on_rails.git

2) cd blog_react_ruby_on_rails\backend_ruby_on_rails\

3) blog_react_ruby_on_rails\backend_ruby_on_rails\bundle install

4) O projeto usar o como gerenciador de banco de dados o PostgreSQL, portando será necessário, instalar o PostgreSQL, caso não esteja instalado.

5) Configure o usuário e senha do arquivo database.yml para o usuário do postgres da máquina.

6) Após a configuração do usuário e senha do postgres, execute os seguintes comandos abaixo:

7) rails db:create
 
8) rails db:migrate

9) Para executar o Backend utilize o comando rails server -p 3001. Após insso acesse http://localhost:3001.

Para Testar o Frontend

10) Acesse a pasta do Frontende usando o comando a seguir:

11) cd blog_react_ruby_on_rails\frontend_react_blog\

12) blog_react_ruby_on_rails\frontend_react_blog\npm install

13) blog_react_ruby_on_rails\frontend_react_blog\npm start

14) Após isso acesse http://localhost:3000.
