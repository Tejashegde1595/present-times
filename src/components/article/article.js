/** @license
 * Copyright 2015 - present The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Link } from 'react-router-dom';
import React from 'react';
import './article.css'
const url='https://b2kwq7bhkd.execute-api.us-east-1.amazonaws.com';
/**
 * A snippet of an AMP document that links to the full content.
 */
export default class Article extends React.Component {
  render() {
    console.log("image url"+this.props.image);
    return (
      <Link to={this.props.src}>
        <div className='article' style={{backgroundImage: 'url(' +url+ this.props.image + ')'}}>
          <div className='scrim-top'></div>
          <div className='scrim-bottom'></div>
          <h3>{this.props.title}</h3>
          <h4>{this.props.subtitle}</h4>
        </div>
      </Link>
    );
  }
}
