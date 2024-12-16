const {Client } = require ('pg');
require('dotenv').config();
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const SQL = `

CREATE TABLE IF NOT EXISTS names (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR( 255 )
);

INSERT INTO names (name) VALUES
('Bulbasaur'),
('Charmander'),
('Squirtle') ;


CREATE TABLE IF NOT EXISTS cate (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name_id INTEGER ,
  cat VARCHAR( 255 )
);
INSERT INTO cate (name_id, cat) VALUES (1, 'Grass'), (2, 'Fire'), (3, 'Water');
`
const connectionString = process.env.DB_LINK;

const seed = async () => {
    
    const client = new Client(
        {
            connectionString
        }
    )
    // console.log(`Seeding database at: ${connectionString}`);
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("Done seeding!");
}

seed();