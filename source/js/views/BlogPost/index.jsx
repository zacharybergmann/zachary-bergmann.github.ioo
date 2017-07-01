import React, { Component } from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom';

export default class BlogPost extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const style = {
      height: '100px',
      width: '100%',
    };
    return (
      <div>
        <Card>
          <CardHeader
            title=''
            subtitle=''
          />
          <CardMedia
            overlay={ <CardTitle title='Overlay title' subtitle='Overlay subtitle' /> }
          >
            <img style={ style } src='../../../assets/img/zach_formal.jpg' alt='' />
          </CardMedia>
          <CardTitle title='Card title' subtitle='Card subtitle' />
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
          </CardText>
          <CardActions>
            <Link to={ `/blogstory/${ this.props.blog.id }` } >
              <FlatButton
                label='Read Article'
              />
            </Link>
          </CardActions>
        </Card>
        <br />
      </div>
    );
  }
}
