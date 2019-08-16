import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

class CardList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      database: [],
    }
  }

  componentDidMount() {
    fetch("https://restcountries.eu/rest/v2/all")
      .then(res => res.json())
      .then(res => this.setState({ database: res }))
  }

  render() {
    return (
      <div>  
      {this.state.database.map(element => {
          return (
            <Box display="flex" flexdirection="row" flexWrap="wrap" justifyContent="center">
              <Card className="Card-container" style={{ maxWidth: "70%", margin: 5 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Country Flag"
                    height="30%"
                    image={element.flag}
                    title="Country Flag"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {element.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Population: {element.population}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Region: {element.region}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Capital: {element.capital}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Details
                </Button>
                </CardActions>
              </Card>
            </Box>
          )
        }
        )}
      </div>  
    )
  }
}

export default CardList;