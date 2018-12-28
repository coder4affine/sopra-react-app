/* eslint-disable */
import React, {Component} from 'react';

const LanguageContext = React.createContext();

export const { Provider, Consumer: LanguageConsumer } = LanguageContext;
export default class languageContext extends Component {
  state = {
    language: 'en',
    changeLanguage: (language) => this.setState({language})
  };

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}
