USE employee_db;

INSERT INTO department (name)
VALUES
    ("Finance"),
    ("Sales"),
    ("HR");

INSERT INTO role (title, salary, department_id)
VALUES
    ("Sales Person", 80000, 1),
    ("Business Developer", 200000, 2),
    ("Hiring Manager", 100000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ("Boss", "Johnson", 3, null),
    ("Matt", "Johns", 1, 1),
    ("Jimmy", "Hands", 1, null),
    ("Tom", "Cruz", 2, null),
    ("Rick", "Mayo", 2, null);

