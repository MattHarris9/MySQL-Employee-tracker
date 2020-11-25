use employee_db

insert into department (name) values ("head programmer");
insert into department (name) values ("Marketing team");
insert into department (name) values ("lead developer");
insert into department (name) values ("IT");
insert into department (name) values ("programmer");

insert into roles (title, salary, department_id) values ("IT", 60000, 4);
insert into roles (title, salary, department_id) values ("Marketing Team", 100000, 1);
insert into roles (title, salary, department_id) values ("lead developer", 1000000, 3);
insert into roles (title, salary, department_id) values ("programmer", 80000, 2);
insert into roles (title, salary, department_id) values ("head programmer", 65000, 5);

insert into employee (first_name, second_name, roles_id) values("Matt", "Harris", 3);
insert into employee (first_name, second_name, roles_id) values("Rachel", "Lindsey", 1);
insert into employee (first_name, second_name, roles_id) values("Greg", "Slayer", 4);
insert into employee (first_name, second_name, roles_id) values("Megan", "Henney", 6);