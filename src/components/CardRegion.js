import { Grid  } from 'semantic-ui-react'

const CardRegion = ({location}) => {
    return (
        <Grid>
            <Grid.Row columns={5}>
                <Grid.Column>
                    <h3 id="pais">{location?.country}</h3>
                </Grid.Column>
                <Grid.Column >
                    <h3 id="estado">{location?.region}</h3>
                </Grid.Column>
                <Grid.Column >
                    <h3 id="ciudad">{location?.name}</h3> 
                </Grid.Column>
                <Grid.Column >
                    <h3 id="longitud">{location?.lon}</h3>
                </Grid.Column>
                <Grid.Column >
                    <h3 id="latitud">{location?.lat}</h3>
                </Grid.Column>
            </Grid.Row>
        </Grid>                
    );
}

export default CardRegion;