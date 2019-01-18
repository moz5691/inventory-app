import React from 'react';
import {connect} from 'react-redux';
import {startLogin} from "../actions/auth";
import {Button, Card, Image, Icon} from 'semantic-ui-react'

const LoginPage = (props) => {
  return (
    <div className={"ui one column stackable center aligned page grid"} style={{"marginTop":"160px"}}>

      <Card color={"red"}>
        <Image src='/assets/bento-browser-900x600.jpg' />
        <Card.Content >
          <Card.Header style={{"fontSize":"30px",
            "color":"#00008B",
            "fontStyle":"italic",
            "fontFamily":"Helvetica"}}>Bento ゆめ Yume</Card.Header>
          <Card.Meta style={{"fontSize":"18" +
              "px"}}>The best lunch supplier since 2019</Card.Meta>
          <Card.Description style={{"fontSize":"20px"}}>Please login with your Google</Card.Description>
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