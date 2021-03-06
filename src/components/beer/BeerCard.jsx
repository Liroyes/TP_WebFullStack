import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const sample = {
  "id": "c4f2KE",
  "name": "'Murican Pilsner",
  "nameDisplay": "'Murican Pilsner",
  "abv": "5.5",
  "glasswareId": 4,
  "styleId": 98,
  "isOrganic": "N",
  "isRetired": "N",
  "labels": {
    "icon": "https:\/\/brewerydb-images.s3.amazonaws.com\/beer\/c4f2KE\/upload_jjKJ7g-icon.png",
    "medium": "https:\/\/brewerydb-images.s3.amazonaws.com\/beer\/c4f2KE\/upload_jjKJ7g-medium.png",
    "large": "https:\/\/brewerydb-images.s3.amazonaws.com\/beer\/c4f2KE\/upload_jjKJ7g-large.png",
    "contentAwareIcon": "https:\/\/brewerydb-images.s3.amazonaws.com\/beer\/c4f2KE\/upload_jjKJ7g-contentAwareIcon.png",
    "contentAwareMedium": "https:\/\/brewerydb-images.s3.amazonaws.com\/beer\/c4f2KE\/upload_jjKJ7g-contentAwareMedium.png",
    "contentAwareLarge": "https:\/\/brewerydb-images.s3.amazonaws.com\/beer\/c4f2KE\/upload_jjKJ7g-contentAwareLarge.png"
  },
  "status": "verified",
  "statusDisplay": "Verified",
  "createDate": "2013-08-19 11:58:12",
  "updateDate": "2018-11-02 02:15:14",
  "glass": {
    "id": 4,
    "name": "Pilsner",
    "createDate": "2012-01-03 02:41:33"
  },
  "style": {
    "id": 98,
    "categoryId": 8,
    "category": {
      "id": 8,
      "name": "North American Lager",
      "createDate": "2012-03-21 20:06:46"
    },
    "name": "American-Style Pilsener",
    "shortName": "American Pilsener",
    "description": "This classic and unique pre-Prohibition American-style Pilsener is straw to deep gold in color. Hop bitterness, flavor and aroma are medium to high, and use of noble-type hops for flavor and aroma is preferred. Up to 25 percent corn and\/or rice in the grist should be used. Malt flavor and aroma are medium. This is a light-medium to medium-bodied beer. Sweet corn-like dimethylsulfide (DMS), fruity esters and American hop-derived citrus flavors or aromas should not be perceived. Diacetyl is not acceptable. There should be no chill haze. Competition organizers may wish to subcategorize this style into rice and corn subcategories.",
    "ibuMin": "25",
    "ibuMax": "40",
    "abvMin": "5",
    "abvMax": "6",
    "srmMin": "3",
    "srmMax": "6",
    "ogMin": "1.045",
    "fgMin": "1.012",
    "fgMax": "1.018",
    "createDate": "2012-03-21 20:06:46",
    "updateDate": "2015-04-07 15:40:08"
  }
}




const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 256,
  },
});

export default function BeerCard(props) {
  const [beer, setBeer] = useState(sample);
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={beer.labels.medium}
          title={beer.nameDisplay}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {beer.nameDisplay} - {beer.abv}°
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {beer.style.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          add
        </Button>
      </CardActions>
    </Card>
  );
}
