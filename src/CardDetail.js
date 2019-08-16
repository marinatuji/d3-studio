import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
// import CardList from './CardList';

class CardDetail extends React.Component {


  render() {

    return (
      // <Box display="flex" flexDirection="column" alignItems="center" width="100%">
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
                    Share
                </Button>
                  <Button size="small" color="primary">
                    Learn More
                </Button>
                </CardActions>
              </Card>
            </Box>
          )
        }
        )}
      </div>
      // </Box>
    )
  }
}

export default CardDetail;