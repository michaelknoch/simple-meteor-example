import { Template } from 'meteor/templating';
import { Todos } from '/imports/api/todos';
import { ReactiveVar } from 'meteor/reactive-var';

import './createTask.html';
import './createTask.less';


Template.createTask.created = function() {

    // this points to Template.instance()
    // component args can be accessed with this.data

    if (Template.instance() === this) {
        console.info('ist echt so');
    } else {
        console.error('ist nicht so');
    }

    this.publicActive = new ReactiveVar(false);
};

Template.createTask.helpers({

    // this points to the data/args of the component instantiation
    //access `real this/Template instance` with Template.instance()

    getSecurity: function() {
        return Template.instance().publicActive.get() ? 'public' : 'private';
    }
});

Template.createTask.events({

    // to access template context from events, use Template.instance()
    // or the event parameter in event invocation

    'click .visibility-trigger-box': (event, template) => {
        template.publicActive.set(!template.publicActive.get());
    },

    'submit .new-task': (event, template) => {
        event.preventDefault();
        console.info('new stuff arrived');

        const text = event.target.text.value;
        const _public = template.publicActive.get();

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
