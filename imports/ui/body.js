import { Template } from 'meteor/templating';

import '/imports/ui/components/dummy';
import '/imports/ui/components/taskList';

import '/imports/routes.js'
import './body.html';

Template.body.onCreated(function() {
    let id = localStorage.getItem('id') || localStorage.setItem('id', rand(100));
    console.info('Fakeid', id);
});

Template.body.helpers({

});

const rand = (length) => {
    return Math.round((Math.pow(36, length + 1) - Math.random() * Math.pow(36, length))).toString(36).slice(1);
}
