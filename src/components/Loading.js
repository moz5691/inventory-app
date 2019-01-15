import React from 'react';
import {Segment, Dimmer, Loader, Image} from "semantic-ui-react";

function Loading(props) {
  return (
    <div>
      <Segment style={{"margin":"400px"}}>
        <Dimmer active inverted>
          <Loader size='massive'>Loading</Loader>
        </Dimmer>
      </Segment>
    </div>

  );
}

export default Loading;