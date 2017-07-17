/**
 * Created by demmith on 7/7/2017.
 */
import React from 'react';

import UserList from '../components/UserList';

/**
 * Home page component
 */
export default class Home extends React.Component
{
  /**]
   * Render
   *
   * @returns {XML}
   */
  render()
  {
    return(
      <div>
        <UserList/>
      </div>
    )
  }
}
