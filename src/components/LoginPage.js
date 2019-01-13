import React from 'react';
import {connect} from 'react-redux';
import {startLogin} from "../actions/auth";
import {Button, Card, Image, Icon} from 'semantic-ui-react'

const LoginPage = (props) => {
  return (
    <div className={"ui one column stackable center aligned page grid"} style={{"marginTop":"100px"}}>

      <Card color={"red"}>
        <Image src='/assets/daniel.jpg' />
        <Card.Content >
          <Card.Header >Bento Yume</Card.Header>
          <Card.Meta>The best lunch box in town since 2000</Card.Meta>
          <Card.Description><strong>Please login with your Google</strong></Card.Description>
        </Card.Content>
        <Card.Content extra>
          {/*<a>*/}
            {/*<Icon name='user' />*/}
            {/*10 Friends*/}
          {/*</a>*/}

          <Button onClick={props.startLogin}
                  color={"google plus"}
                  size={"large"}
                  ><Icon name={"google plus"}/>Google</Button>
        </Card.Content>
      </Card>


    </div>
  );
}

const mapDispatchToProps = (dispatch) => (
  {
    startLogin: ()=>dispatch(startLogin())
  }
)

export default connect(null,mapDispatchToProps)(LoginPage);