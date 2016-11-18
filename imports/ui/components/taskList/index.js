import { Template } from 'meteor/templating';
import { Todos } from '/imports/api/todos';
import moment from 'moment';

import './taskList.html';
import './taskList.less';

Template.taskList.onCreated(function(){
    this.autorun(() => {
        console.info(this.data);
    });
});

// taskList Wrapper Template

Template.taskList.helpers({
    tasks() {
        Meteor.subscribe('todos', localStorage.getItem('id'));
        return Todos.find()
    }
});

// taskTemplate, the inner one

Template.taskTemplate.helpers({
    since(date) {
        return moment(date, "YYYYMMDD").fromNow();
    }
});
