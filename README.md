# Node REST API Starter

Starter template for a REST API using Node, Express, Sequelize, JWT, Passport.

## Set Up Development Environment

### Setting up secret keys

In order to set up you develpoment environment you need to add your secret keys

1. Create a file called `dev.js` and store it in `config/keys`.
2. Copy the contents on the `config/keys/prod.js` file and paste it into `config/keys/dev.js`
3. You then need to replace all the values for each key in `config/keys/dev.js` to use your development environments secret keys.

### Running the app

```bash
npm install                # Install dependencies
npm run dev                # Run the development server
npm start                  # Start the production server

SERVER RUNNING ON PORT: 8080
.
.
.
Database & tables created!
```

## Future Update

This section is for future updates.

### Routes

```bash
/users              # Started - In progress
```

### CLI Command line

Plan is to create a CLI command line tool to easily create new files