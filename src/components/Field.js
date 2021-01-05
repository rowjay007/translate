import React, { Component } from "react";
import LanguageContext from "../contexts/LanguageContext";

export class Field extends Component {
  static contextType = LanguageContext;
  render() {
    const text = this.context === "english" ? "Name" : "Voorleggen";
    return (
      <div className="ui field">
        <label>{text}</label>
        <input />
      </div>
    );
  }
}

export default Field;
