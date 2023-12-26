import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import './styles/box.css'
import { useNavigate } from "react-router-dom";

export default function Box() {
  const navigateTo = useNavigate();
  return (
    <div className="box" style={{backgroundColor:"c9d6ff"}}>
      <div className="dibba" >
        <Card sx={{ maxWidth: 345}}>
          <CardActionArea onClick={() => navigateTo("/aadharForm")}  >
            <CardMedia
              component="img"
              height="200"
              image="./aadhar.jpeg"
              alt="aadhar"
            />
            <CardContent >
              <Typography gutterBottom variant="h6" component="div">
                AADHAR Enrollment Form
              </Typography>
              <Typography
                className="paragraph"
                variant="body2"
                color="text.secondary"
              >
                With its increasing utility and the public constant emphasis on
                linking Aadhaar to all major services and schemes. By now, many
                aadhaar cards have been generated.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            {/* <Button
              style={{ margin: "auto", color: "#512DA8" }}
              size="small"
              color="primary"
              onClick={() => navigateTo("/aadharForm")}
            >
              <b>Click here to proceed</b>
            </Button> */}
          </CardActions>
        </Card>
      </div>


      <div className="dibba">
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea onClick={() => navigateTo("/residenceForm")} >
            <CardMedia
              component="img"
              height="200"
              image="/resident.jpg"
              alt="resident"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Residence Certificate Form
              </Typography>
              <Typography
                className="paragraph"
                variant="body2"
                color="text.secondary"
              >
                Residence certificate is a proof of permanent residence of a
                citizen in a village or town or ward. This Certificate is
                required as proof of residence to avail Residence
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            {/* <Button
              style={{ margin: "auto", color: "#512DA8" }}
              size="small"
              color="primary"
              onClick={() => navigateTo("/residenceForm")}
            >
             <b>Click here to proceed</b>
            </Button> */}
          </CardActions>
        </Card>
      </div>



      <div className="dibba">
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea onClick={() => navigateTo("/learnerForm")}>
            <CardMedia
              component="img"
              height="200"
              image="/learner.png"
              alt="learner"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Learner License Form
              </Typography>
              <Typography
                className="paragraph"
                variant="body2"
                color="text.secondary"
              >
                A person should have completed 16 years to obtain a license for
                2 wheelers without gear. The minimum age to apply for a learning
                license is 18 years
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            {/* <Button
              style={{ margin: "auto", color: "#512DA8" }}
              size="small"
              color="primary"
              onClick={() => navigateTo("/learnerForm")}
            >
              <b>Click here to proceed</b>
            </Button> */}
          </CardActions>
        </Card>
      </div>
    </div>
  );
}
