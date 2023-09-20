import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    //mobile first, creating a responsive template
    <Grid
      templateAreas={{
        base: '"nav" "main"', // 0px
        lg: '"nav nav" "aside main"', //wider that 1024px
      }}
    >
      <GridItem area="nav" bg="coral">
        Nav
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg="gold">
          Aside
        </GridItem>
      </Show>
      <GridItem area="main" bg="dodgerblue">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
