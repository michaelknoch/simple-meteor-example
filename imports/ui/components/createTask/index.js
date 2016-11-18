import { Template } from 'meteor/templating';
import { Todos } from '/imports/api/todos';

import './createTask.html';
import './createTask.less';

Template.createTask.events({
    'submit .new-task': (event) => {
        event.preventDefault();
        console.info('new stuff arrived');

        const text = event.target.text.value;
        const _public = event.target.security.checked;

        if (text.length < 1) {
            return;
        }

        Todos.insert({
            text,
            _public,
            createdAt: new Date(),
            userId: localStorage.getItem('id')
        });

        event.target.text.value = '';

        Meteor.setTimeout(() => {
            FlowRouter.go('/list');
        }, 800)

    }
});
