import * as React from 'react';
import { Provider } from 'react-redux';

import createStoreHelper from '../../helpers/createStore';

import Post from '../../containers/Post';

import IPostStatus from '../../interfaces/IPostStatus';

import '../../stylesheets/components/Post.scss';

interface Props {
  postId: number;
  postStatuses: Array<IPostStatus>;
  isLoggedIn: boolean;
  isPowerUser: boolean;
  authenticityToken: string;
}

class PostRoot extends React.Component<Props> {
  store: any;

  constructor(props) {
    super(props);

    this.store = createStoreHelper();
  }

  render() {
    const {
      postId,
      postStatuses,
      isLoggedIn,
      isPowerUser,
      authenticityToken
    } = this.props;

    return (
      <Provider store={this.store}>
        <Post
          postId={postId}
          postStatuses={postStatuses}

          isLoggedIn={isLoggedIn}
          isPowerUser={isPowerUser}
          authenticityToken={authenticityToken}
        />
      </Provider>
    );
  }
}

export default PostRoot;