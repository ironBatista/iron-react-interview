import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import VariableWidthGrid from "react-variable-width-grid";
import { IActivity } from "../../types";
import { StyledCard } from "./StyledCard";
import { StyledPosition } from "./StyledPosition";

const BoredCards = (data: Array<IActivity>): JSX.Element => {
  const BasicCard = (data: IActivity, index: number) => {
    return (
      <StyledCard className="" sx={{ maxWidth: 275 }}>
        <CardContent>
          <StyledPosition>
          <strong>{index}</strong>
          </StyledPosition>
          <Typography variant="body2">
            <strong>Key: </strong>
            {data.key}
          </Typography>
          <Typography variant="body2">
            <strong>Activity: </strong>
            {data.activity}
          </Typography>
          <Typography variant="body2">
            <strong>Link: </strong>
            {data.link}
          </Typography>
          <Typography variant="body2">
            <strong>Type: </strong>
            {data.type}
          </Typography>
          <Typography variant="body2">
            <strong>Participants: </strong>
            {data.participants}
          </Typography>
          <Typography variant="body2">
            <strong>Price: </strong>
            {data.price}
          </Typography>
        </CardContent>
      </StyledCard>
    );
  };
  
  const items = (data as Array<IActivity>).map(BasicCard);
  return <VariableWidthGrid>{items}</VariableWidthGrid>
    
  ;
};

export default BoredCards;
