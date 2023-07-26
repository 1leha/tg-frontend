# Task manager

This is a fullstack project:\

Frontend (this page) [Backend](https://github.com/1leha/tg-backend).

## Description

This is a project of simple task manager with user auth.\

After authorization, the user gets to the categories page. For example you can
make categories for different departments: managers, designers, boss 😊.

Available actions for categories are: create, delete and edit. Before deletion,
there will be a deletion warning with `yes` or `no` options. You can edit only
category name. Each new category will be added to the top of the category list.

When you click on the category or the `more` button - you will be redirected to
the task page. Each new task will be the first in the list.\
Actions are available for tasks: create, delete and edit.\
Before deletion, there will be a deletion warning with `yes` or `no` options.

## Instaling and starting

Download this repo.

Then:

### `npm install`

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Technologies and libraries

typescript, react, redux, redux-persist, mui, apollo, graphql, formic, yup,
date-fns, toastify
