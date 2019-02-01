import React from 'react';
import {Segment, Dimmer, Loader} from "semantic-ui-react";

const Loading =(props)=> {
  return (
      <Segment style={{"margin":"400px"}}>
        <Dimmer active inverted>
          <Loader size='massive'>Preparing...</Loader>
        </Dimmer>
      </Segment>

  );
}

export default Loading;