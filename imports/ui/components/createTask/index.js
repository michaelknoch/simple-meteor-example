import { Template } from 'meteor/templating';
import { Todos } from '/imports/api/todos';

import './createTask.html';
import './createTask.less';

Template.createTask.events({
    'submit .new-task': (event) => {
        event.preventDefault();
        console.info('new stuff arrived');

        const text = event.target.text.value;
        if (text.length < 1) {
            return;
        }

        Todos.insert({
            text,
            createdAt: new Date(),
        });

        event.target.text.value = '';

        Meteor.setTimeout(() => {
            FlowRouter.go('/list');
        }, 800)

    }
});
