import React from 'react';
import Helpful from './Helpful.jsx';
import moment from 'moment';
import axios from 'axios';
import {
  Header,
  LeftSection,
  RightSection,
  Avatar,
  Username,
  Time,
  Location,
  LikeButton,
} from './styled.info.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: -1,
      thumbs: 0,
    };
  }

  componentDidMount() {
    this.setState({
      thumbs: this.props.photo.thumbs,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    var photoid = this.props.photo._id;
    const url = window.location.pathname;
    const id = url.slice(1, url.length - 1);
    if (prevProps.photo !== this.props.photo) {
      this.setState({ thumbs: this.props.photo.thumbs });
    }
  }

  helpfulHandle() {
    var photoid = this.props.photo._id;
    const url = window.location.pathname;
    const id = url.slice(1, url.length - 1);
    const flag = this.state.clicked * -1;
    axios
      .put(`/site/${id}/${photoid}/${flag}`)
      .then((res) => this.setState({ clicked: flag, thumbs: res.data }))
      .catch((err) => console.log(err));
  }

  render() {
    const { photo, location } = this.props;
    return (
      <Header>
        <LeftSection>
          <Avatar src={photo.user.profile_pic_url}></Avatar>
          <Username>{photo.user.username}</Username>
          <Time>{moment(photo.date).fromNow()}</Time>
          <Location>
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            {` ${location}`}
          </Location>
        </LeftSection>
        <RightSection>
          <LikeButton
            isClicked={this.state.clicked}
            onClick={this.helpfulHandle.bind(this)}
          >
            <FontAwesomeIcon icon={faThumbsUp} />
            {` Helpful   ${this.state.thumbs}`}
          </LikeButton>
        </RightSection>
      </Header>
    );
  }
}

export default Info;