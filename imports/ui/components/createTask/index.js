import { Template } from 'meteor/templating';
import { Todos } from '/imports/api/todos';
import { ReactiveVar } from 'meteor/reactive-var';

import './createTask.html';
import './createTask.less';


Template.createTask.created = function () {
    this.publicActive = new ReactiveVar(false);
};

Template.createTask.helpers({
    getSecurity: function() {
        return Template.instance().publicActive.get() ? 'public' : 'private';
    }
});

Template.createTask.events({

    'click .visibility-trigger-box': (event, template) => {
        template.publicActive.set(!template.publicActive.get());
    },

    'submit .new-task': (event) => {
        event.preventDefault();
        console.info('new stuff arrived');

        const text = event.target.text.value;
        const _public = Template.instance().publicActive.get();

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
