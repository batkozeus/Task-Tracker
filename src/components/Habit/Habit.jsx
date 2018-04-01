import React from 'react';
import {RadioGroup, Radio} from 'react-radio-group'
import {Input} from 'react-materialize'
import {Row} from 'react-materialize'
import {Button} from 'react-materialize'
import HabitIcon1 from './icons/semya.svg'
import HabitIcon2 from './icons/zdorovye.svg'
import HabitIcon3 from './icons/samorazv.svg'
import HabitIcon4 from './icons/dosug.svg'
import HabitIcon5 from './icons/okruzh.svg'
import HabitIcon6 from './icons/finansy.svg'
import HabitIcon7 from './icons/kariera.svg'
import HabitIcon8 from './icons/putesh.svg'
// import Modal from 'react-modal';

import './Habit.css';

export default class Habit extends React.Component {
    state = {
        selectedValue: '',
        task: '',
        importance: '',
        date: '',
        comment: ''
    }

    handleChangeRadio = evt => {
        this.setState({
            selectedValue: evt.target.value
        })
    }

    handleSubmit = evt => {
        this.setState({
            task: evt.target.value
        })
    }

    handleChangeSelect = evt => {
        this.setState({
            importance: evt.target.value
        })
    }

    handleChangeComment = evt => {
        this.setState({
            comment: evt.target.value
        })
    }

    render() {
        console.log(this.state);
        return (
            <div className='Habit'>
                <h5>Новая задача</h5>
                <Row className='Habit_input'>
                    <Input className="Modal-input" s={6} placeholder=" Название" onChange={this.handleSubmit}/>
                </Row>
                <RadioGroup name="habits" className='Icons' selectedValue={this.state.selectedValue} >
                    <label>
                        <Radio value="family" onChange={this.handleChangeRadio}/>
                        <img className='Habit_icon' src={HabitIcon1} alt=''/>
                        <p>Семья</p>
                    </label>
                    <label>
                        <Radio value="health" onChange={this.handleChangeRadio}/>
                        <img className='Habit_icon' src={HabitIcon2} alt=''/>
                        <p>Здоровье</p>
                    </label>
                    <label>
                        <Radio value="develop" onChange={this.handleChangeRadio}/>
                        <img className='Habit_icon' src={HabitIcon3} alt=''/>
                        <p>Саморазвитие</p>
                    </label>
                    <label>
                        <Radio value="rest" onChange={this.handleChangeRadio}/>
                        <img className='Habit_icon' src={HabitIcon4} alt=''/>
                        <p>Досуг</p>
                    </label>
                    <label>
                        <Radio value="environment" onChange={this.handleChangeRadio}/>
                        <img className='Habit_icon' src={HabitIcon5} alt=''/>
                        <p>Окружение</p>
                    </label>
                    <label>
                        <Radio value="finance" onChange={this.handleChangeRadio}/>
                        <img className='Habit_icon' src={HabitIcon6} alt=''/>
                        <p>Финансы</p>
                    </label>
                    <label>
                        <Radio value="carrier" onChange={this.handleChangeRadio}/>
                        <img className='Habit_icon' src={HabitIcon7} alt=''/>
                        <p>Карьера</p>
                    </label>
                    <label>
                        <Radio value="travel" onChange={this.handleChangeRadio}/>
                        <img className='Habit_icon' src={HabitIcon8} alt=''/>
                        <p>Путешествия</p>
                    </label>
                </RadioGroup>
                <Row>
                    <Input s={12} className="Modal-input" type='select' defaultValue='6' onChange={this.handleChangeSelect}>
                        <option value='самое важное'>самое важное</option>
                        <option value='очень важное'>очень важное</option>
                        <option value='важное'>важное</option>
                        <option value='такое себе'>такое себе</option>
                        <option value='неважное'>неважное</option>
                        <option value='важность' disabled='disabled'>важность</option>
                    </Input>
                </Row>
                <Row>
                    <Input
                        className="Modal-input"
                        name='on' type='date'
                        placeholder='Время выполнения'
                        onChange={ (e, value) =>  this.setState({time: value})}
                    />
                </Row>
                <Row>
                    <Input className="Modal-input" s={6} placeholder='Комментарий'  onChange={this.handleChangeComment}/>
                </Row>
                <div>
                    <Button className='red' waves='light'>Сохранить</Button>
                </div>
            </div>
        )
    }
}


