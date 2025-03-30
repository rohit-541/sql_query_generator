#Natural Language to SQL Converter

Overview

This project provides a function, convertToSQL, that converts natural language queries into SQL-like statements. It recognizes common database operations such as SELECT, INSERT, and DELETE and generates appropriate SQL commands based on the input query.

Features

Supports SELECT, INSERT, and DELETE operations.

Identifies table names from predefined tables (users, mentors, doubts).

Handles wildcard selections (all, whole for SELECT *).

Recognizes filtering conditions (where, with, whose).

Generates SQL-like queries with placeholders for column names and values.

Setup Instructions 
1. Use the hosted Website (Link: https://sql-query-generator-9k9j.onrender.com)
2. Can make a post request with api-key and body in json object with query parameter.(Learn more at Postman documentation, Link:https://documenter.getpostman.com/view/40100118/2sB2cPk5eF).
3. In Local Environment:
4. Open in any code editor(Setup should have npm and node installed).
5. run npm install command
6. create a ".env" file
7. create a environment variable "API_KEY",
8. run node index.js in root directory of project.
9. Test by making post resuests from postman.(Postman Collection Link: https://rohit7-8758.postman.co/workspace/Rohit-Workspace~8f6747fd-37bb-40b8-820e-e30ff4d799c8/collection/40100118-35eff918-8723-41ce-af79-58331acbe2f4?action=share&creator=40100118);
