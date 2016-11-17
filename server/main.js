import { Meteor } from 'meteor/meteor';
import {Todos} from '../imports/api/todos.js';

Meteor.startup(() => {
    console.info('its on');
});

if (Meteor.isServer) {
    Meteor.publish('todos.public', function todosPublication() {
        return Todos.find();
    });
}
