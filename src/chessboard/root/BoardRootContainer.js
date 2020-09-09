/* Copyright 2016 Novartis Institutes for BioMedical Research Inc. Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0. Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License. */
/* eslint no-undef: 0 */
import React, { Component } from 'react';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import reducers from './../reducers';

import ChessGame from '../chess/Game';

class BoardRootContainer extends Component {
    constructor(props) {
        super(props);
        this.store = createStore(
            reducers,
            compose(
                applyMiddleware(thunk),
                window.devToolsExtension ? window.devToolsExtension() : f => f,
            )
        );
    }

    render() {
        return (<Provider store={this.store}>
            <ChessGame />
        </Provider>);
    }
}

export default BoardRootContainer;