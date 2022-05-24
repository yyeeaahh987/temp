import { MoreVert } from "@material-ui/icons";
import React, { useContext, useEffect, useState } from "react";
import {
  Grid, Paper, Box, Button
} from '@mui/material';
import axios from "axios";
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './Tree.css'

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));



export default function Post() {
  const [expanded, setExpanded] = useState(false);
  const [treestagramArr, setTreestagramArr] = useState([])
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  useEffect(() => {
    setTreestagramArr([
      {
        title: "Peter Chan",
        description: "A real description",
        photo: "",
        iconName: "P",
        like: true,
      },
      {
        title: "Alex",
        description: "A real description",
        photo: "",
        icon: "A",
        like: true,
      },
      {
        title: "Tom",
        description: "A real description",
        photo: "",
        icon: "T",
        like: true,
      },
      {
        title: "Alan",
        description: "A real description",
        photo: "",
        icon: "A",
        like: false,
      }
    ])
  }, [])
  useEffect(() => {
    console.log(treestagramArr)
  }, [treestagramArr])

  console.log(treestagramArr)

  return (
    <>
      <Grid container justifyContent={"center"} alignContent="center">
        <Grid item xs={12}>
          <Box className="middleBox">
            {
              treestagramArr.map((treegramContent, index) => {
                return (
                  <>
                    <Card sx={{ maxWidth: 600 }} className="boxSize">
                      <CardHeader
                        avatar={
                          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            {treegramContent.icon}
                          </Avatar>
                        }
                        action={
                          <IconButton aria-label="settings">
                            <MoreVertIcon />
                          </IconButton>
                        }
                        title={treegramContent.title}
                      // subheader="September 14, 2016"
                      />
                      <CardMedia
                        component="img"
                        height="194"
                        image="/static/images/cards/paella.jpg"
                        alt="Paella dish"
                      />
                      <CardContent>
                        <Typography variant="body2" color="text.secondary">
                          {treegramContent.description}
                        </Typography>
                      </CardContent>
                      <CardActions disableSpacing>
                        <IconButton
                          aria-label="add to favorites"
                        >
                          <FavoriteIcon
                            className={treegramContent.like === true ? "like" : "dislike"}
                            onClick={() => {
                            }}
                          ></FavoriteIcon>
                        </IconButton>
                        <IconButton aria-label="share">
                          <ShareIcon />
                        </IconButton>
                        <ExpandMore
                          expand={expanded}
                          onClick={handleExpandClick}
                          aria-expanded={expanded}
                          aria-label="show more"
                        >
                          <ExpandMoreIcon />
                        </ExpandMore>
                      </CardActions>
                      <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                          {/* <Typography paragraph>Method:</Typography> */}
                        </CardContent>
                      </Collapse>
                    </Card>
                    <br></br>
                  </>

                )
              })
            }
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
