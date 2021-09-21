import React, { Component } from 'react'
import './SearchBar.css'

export default class SearchBar extends Component {

   constructor(props){
      super(props);
   
      this.state={
         term:""
      };

      this.handleTerm=this.handleTermChange.bind(this);
      this.search=this.search.bind(this);
      this.handeEnter = this.handeEnter.bind(this);

   }

   handleTermChange(event){
      this.setState({term: event.target.value});
   }

   search(){
      this.props.onSearch(this.state.term);
   }

   handeEnter(event){
      if(event.keycode === 13){
         this.search();
      }
   }

   render() {
      return (
         <div className="SearchBar">
            <input placeholder="Enter Song, album or artist" onChange={this.handleTermChange} onKeyUp={this.handeEnter}></input>
            <button className="SearchButton" onClick={this.search}> Search </button>
         </div>
      )
   }
}
