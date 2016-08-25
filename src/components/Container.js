import React, { Component, PropTypes } from 'react'
import ArticleList from './ArticleList'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import moment from 'moment';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import JqueryComponent from './JqueryComponent'
import { findDOMNode } from 'react-dom'

class Container extends Component {
    static propTypes = {

    };

    state = {
        selected: null,
        from: null,
        to: null
    }

    render() {
        const options = this.props.articles.map(article => ({
            label: article.title,
            value: article.id
        }))
        const { from, to } = this.state
        return (
            <div>
                <Select options = {options} value={this.state.selected} onChange = {this.handleChange} multi={true}/>
                <ArticleList articles = {this.props.articles} />
                <JqueryComponent items = {this.props.articles} ref={this.getJQ}/>
                <div>
                     { !from && !to && <p>Please select the <strong>first day</strong>.</p> }
                    { from && !to && <p>Please select the <strong>last day</strong>.</p> }
                    { from && to &&
                      <p>
                        You chose from { moment(from).format('L') } to { moment(to).format('L') }.
                      </p>
                    }
                </div>
                <DayPicker
                    ref = "daypicker"
                    selectedDays = { day => DateUtils.isDayInRange(day, { from, to }) }
                    onDayClick = { this.setRange }
                />
            </div>
        )
    }

    getJQ = (ref) => {
        this.jqRef = ref
        console.log('---', findDOMNode(ref))
    }

    handleChange = (selected) => {
        this.setState({
            selected
        })
    }

    setRange = (e, day) => {
        const range = DateUtils.addDayToRange(day, this.state);
        this.setState(range);
    }
}

export default Container