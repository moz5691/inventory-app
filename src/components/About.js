import React from 'react';
import {Link} from 'react-router-dom';
import {Button, Container, Header, Divider} from 'semantic-ui-react';

/**
 *
 * @param props
 * @returns {*}
 * @constructor
 */


const About = (props) => {
  return (

    <div style={{marginTop:"50px"}}>
    <Container textAlign={"justified"}>
      <Header as={'h2'}>What is Bento?</Header>
      <p>
        Bento (弁当 bentō)is a single-portion take-out or home-packed meal common in Japanese cuisine.
        A traditional bento holds rice or noodles, fish or meat, with pickled and cooked vegetables, in a box.
        Containers range from mass-produced disposables to hand-crafted lacquerware.
      </p>
      <p>
        In Japan, "bento" is written as 弁当.
        The word originates from the Southern Song slang term 便当 (便當 (pinyin: biàndāng)), meaning "convenient" or "convenience."
        When imported to Japan, it was written with the ateji 便道 and 弁道.
      </p>
      <Divider/>
      <Header as={'h2'}>What is this app about?</Header>
      <p>
        This app is to help manage inventory and sales of Bento Box.
        Start page starts with filtering of items.  A user can pick the range of dates (start and end).
        Filtering is pretty powerful as it allows to search with partial title, sort by various categories and the range of dates.

      </p>
      <Divider/>
      <Link to={"/home"}><Button color={"green"}>Home</Button></Link>
      <Divider/>
      <p>
        Background Image: <a href="http://www.freepik.com">Designed by vectorpouch / Freepik</a>
      </p>
      <p>
        Reference : <a href="https://en.wikipedia.org/wiki/Bento">Wikipedia</a>
      </p>

    </Container>
    </div>

  )

}

export default About;