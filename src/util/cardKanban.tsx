import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";

export enum skillLevel {
    beginner = 0,
    intermediate = 1,
    advanced = 2,
    expert = 3,
}

interface CardKanbanProps {
    logoUrl: string;
    name: string;
    level: skillLevel;
}

const CardKanban:React.FC<CardKanbanProps>  = ({logoUrl, name}) => {
  const family =
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';
  return (
    <Card
      elevation={0}
      sx={{
        display: "flex",
        padding: 2,
        width: 200,  // Fixed width instead of maxWidth
        minWidth: 200, // Add minimum width to prevent compression
        flexShrink: 0, // Prevent card from shrinking
        borderRadius: "12px",
        boxShadow: "0 2px 4px 0 rgba(138, 148, 159, 0.2)",
        "& > *:nth-child(1)": {
          marginRight: 2,
        },
        "& > *:nth-child(2)": {
          flex: "auto",
        },
      }}
    >
      <Avatar src={logoUrl} />
      <Box>
        <Box
          component="strong"
          sx={{ fontFamily: family, fontSize: 18, marginBottom: 0 }}
        >
          {name}
        </Box>
          {/*<Box display={"flex"} alignItems={"center"}>
          <Slider
            value={25 * (level + 1)}
            defaultValue={50}
            sx={{
              height: 4,
              [`& .${sliderClasses.rail}`]: {
                borderRadius: "10px",
                height: 4,
                backgroundColor: "rgb(202,211,216)",
              },
              [`& .${sliderClasses.track}`]: {
                borderRadius: "10px",
                height: 4,
                backgroundColor: "rgb(117,156,250)",
                border: "none",
              },
              [`& .${sliderClasses.thumb}`]: {
                display: "none",
              },
            }}
          />
          <Box
            component="span"
            sx={{
              marginLeft: 1,
              fontSize: 14,
              color: "grey.500",
            }}
          >
            {skillLevel[level]}
          </Box>
        </Box>*/}
      </Box>
    </Card>
  );
}

export default CardKanban;