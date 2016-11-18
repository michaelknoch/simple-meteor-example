import { Meteor } from 'meteor/meteor';
import {Todos} from '../imports/api/todos.js';

Meteor.startup(() => {
    console.info('its on');
});

if (Meteor.isServer) {
    Meteor.publish('todos.public', function todosPublication() {
        return Todos.find();
    });

    Meteor.publish('todos.own', function todosPublication(userId) {
        return Todos.find({userId: userId});
    });

    Meteor.publish('todos', function todosPublication(userId) {
        return Todos.find({
            $or:
            [
                { userId: userId },
                { _public: true }
            ]
        });
    });

}
