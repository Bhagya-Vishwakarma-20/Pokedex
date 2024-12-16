const {Client } = require ('pg');

const SQL = `

CREATE TABLE IF NOT EXISTS names (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR( 255 )
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
const connectionString = `postgresql://postgres:54321@localhost:5432/pokemons`;

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