import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, InputGroup, FormControl, Button, Row, Card } from 'react-bootstrap';
import { useState, useEffect } from 'react';

const CLIENT_ID = '15cc4419693b4d45a589f172089327b6';
const CLIENT_SECRET = '63d62680931144f3a00b19da7d6ee635';

function App() {
  const [searchInput, setSearchInput] = useState('');
  const [accessToken, setAccessToken] = useState('');
  const [artist, setArtist] = useState([]);

  useEffect(() => {
    // access token
    let authParam = {
      method: "POST",
      headers: {
        "Content-Type": 'application/x-www-form-urlencoded'
      }, 
      body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + "&client_secret=" + CLIENT_SECRET
    }
    fetch('https://accounts.spotify.com/api/token', authParam)
    .then(result => result.json())
    .then(data => setAccessToken(data.access_token))
  }, []);

  //search
  async function search() {

    // artist id
    let artistParams = {
      method: "GET",
      headers : {
        'Content-Type' : "application/json",
        "Authorization" : "Bearer " + accessToken
      }
    }
    let artistID = await fetch(`https://api.spotify.com/v1/search?q=${searchInput}український&type=artist`, artistParams)
    .then(result => result.json())
    .then(data => {setArtist(data.artists.items)})
    
    //grap albums
/*     let returnedAlbums = await fetch('https://api.spotify.com/v1/artists/' + artistID + '/albums' + '?include_groups=album&market=US&limit=50', artistParams)
    .then(response => response.json())
    .then(data => setAlbums(data.items)) */
    //display

  }
   
  return (
    <div className="App">
      <Container>
        <InputGroup className="mb-3" size='lg'>
          <FormControl
            placeholder="Search"
            type="input"
            onKeyPress={event => {
              if(event.key == "Enter") {
                console.log("Pressed")
              }
            }}
            onChange={event => setSearchInput(event.target.value)}
          />
          <Button onClick={event => {search()}}>
            Search
          </Button>
        </InputGroup>
      </Container>
      <Container>
      <Row className='mx-2 row row-cols-4'>
      {artist.map((album,index) => {      
        return (
        <Card>
          <Card.Img src={album.images[0].url}/>
          <Card.Body>
            <Card.Title>{album.name}</Card.Title>
          </Card.Body>
        </Card>
        )
      })

      }
        
      </Row>
      </Container>
    </div>
  );
}

export default App;
