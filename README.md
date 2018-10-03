## LIBRARY SERVICE

### Setup
Follow the following steps to setup the project:

- Open terminal and run `git clone https://github.com/munala/library-service.git && cd library-service`.
- Setup **node** and **npm** if you haven't set them up. Setup can be found [here][6c9dac39].
- Run `npm install`.
- Setup your mongodb database for each environment (development and production) and get the respective connection strings.
- Run `export LIBRARY_SERVICE_PROD_MONGODB_URL="<production_connection_string>"`.
- Run `export LIBRARY_SERVICE_DEV_MONGODB_URL="<development_connection_string>"`.
- Run `npm install -g nodemon` to setup **nodemon** for live reload.

  [6c9dac39]: https://nodejs.org/en/download/ "Node setup"

### Running
#### Development
Run `npm run start:dev` to run app in development mode.

#### Production
Run `npm run start:prod` to run app in Production mode.

#### Report
Report script can be run directly through node using the command `node scripts/generateReport.js` or through npm using the command `npm run report`.
This can also be run through the shell script `./scripts/generate_report.sh`. Run `chmod 755 scripts/generate_report.sh` if you encounter permission issues using the shell script then run the shell script again.

### Endpoint documentation
[Click here][58286272]

  [58286272]: https://github.com/munala/library-service/blob/master/docs/endpoints.md "Endpoint Documentaion"
