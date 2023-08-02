import { Grid } from "@mui/material";
import Card from "./Card";
import StaticCard from "./StaticCard";
import "./paintings.css";

function Paintings() {
  let xs = 4;
  let md = 4;
  return (
    <div id="painting-grid">
      <Grid
        container
        spacing={5}
        align="center"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={xs} md={md} className="grid-column">
          <StaticCard index={0} />
        </Grid>
        <Grid item xs={xs} md={md} className="grid-column">
          <StaticCard index={1} />
        </Grid>
        <Grid item xs={xs} md={md} className="grid-column">
          <StaticCard index={2} />
        </Grid>

        <Grid item xs={xs} md={md} className="grid-column">
          <StaticCard index={3} />
        </Grid>

        <Grid item xs={xs} md={md} className="grid-column">
          <StaticCard index={4} />
        </Grid>
        <Grid item xs={xs} md={md} className="grid-column">
          <StaticCard index={5} />
        </Grid>

        <Grid item xs={xs} md={md} className="grid-column">
          <StaticCard index={6} />
        </Grid>

        <Grid item xs={xs} md={md} className="grid-column">
          <StaticCard index={7} />
        </Grid>
        <Grid item xs={xs} md={md} className="grid-column">
          <StaticCard index={8} />
        </Grid>
      </Grid>
    </div>
  );
}

export default Paintings;
