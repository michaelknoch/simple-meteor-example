import { Template } from 'meteor/templating';

import './dummy.html';
import './dummy.less';

Template.dummy.onCreated(function(){
    this.autorun(() => {
        console.info(this.data);
    });
});

Template.dummy.helpers({
    name() {
        return this.name || this;
    },
});

Template.dummy.events({
    'click .one': () => {
        console.log('click 1');
        FlowRouter.go('/layout1');
    },
    'click .two': () => {
        console.log('click 2');
        FlowRouter.go('/layout2');
    }
});
