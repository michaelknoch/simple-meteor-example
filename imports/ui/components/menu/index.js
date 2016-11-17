import { Template } from 'meteor/templating';

import './menu.html';
import './menu.less';

Template.menu.onCreated(function(){

});

Template.menu.helpers({

});

Template.menu.events({
    'click .list': () => {
        FlowRouter.go('/list');
    },
    'click .create': () => {
        FlowRouter.go('/create');
    }
});
