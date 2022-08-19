import React from 'react';

import { Grid, Card } from 'semantic-ui-react';

const ActorList = props => {
        return(
            <div>
                <h1>Actors</h1>
                <Grid stackable columns={3}>
                    {props.actors.map((actor , key) => (
                        <Grid.Column key={key}>
                            <Card
                                image={actor.photo}
                                header={actor.name}
                                extra={actor.description}
                            />
                        </Grid.Column>
                    ))}
                </Grid>
            </div>
        )
}

export default ActorList;