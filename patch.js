/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

require('dotenv').config();

const fs = require('fs');
const path = require('path');

const APP_NAME = process.env.APP_NAME;

let json = fs.readFileSync(path.join(__dirname, 'package.json'), 'utf8').toString();

json = json.replace(/\$\{app.displayName\}/g, APP_NAME);
json = json.replace(/\$\{app.name\}/g, APP_NAME.replace(/ /g, '').toLowerCase().replace(/\-/g, ''));

fs.writeFileSync(path.join(__dirname, 'package.json'), json);