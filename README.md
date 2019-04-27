# Hapi MongoDB GraphQL API

A Sample API using Hapi MongoDB GraphQL

---
## Requirements

For development, you will only need Node.js and a node global package, Yarn, installed in your environment.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v8.11.3

    $ npm --version
    6.1.0

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

###
### Yarn installation
  After installing node, this project will need yarn too, so just run the following command.

      $ npm install -g yarn
---

## Install

    $ git clone https://github.com/mskhirwar/hapi-mongodb-graphql-api
    $ cd hapi-mongodb-graphql-api
    $ yarn install

---

## MongoDB

We have to store our API data in the database and we are using MongoDB to store our API data.

- Make sure you have MongoDB instance running in your local or you can use cloud provider like [mlab](https://mlab.com/). If you want to mlab then go to https://mlab.com/ and create an account.

- Create a database to store the data.

- Update the following line inside `index.js`

    ```
    mongoose.connect('mongodb://<USER_NAME>:<PASSWORD>@<SERVER_NAME>:<PORT>/<DATABASE_NAME>')
    ```

<!---
## Configure app

Open `a/nice/path/to/a.file` then edit it with your settings. You will need:

- A setting;
- Another setting;
- One more setting;
--->

## Running the project

    $ yarn start

After successful start you should be able to access application on following paths:


- API -http://localhost:4000/api/v1/paintings
- GraphQL - http://localhost:4000/graphiql
- API Documentation - http://localhost:4000/documentation


<!---
## Simple build for production

    $ yarn build
--->