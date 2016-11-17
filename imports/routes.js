import { FlowRouter } from 'meteor/kadira:flow-router';

import '/imports/ui/body';
import '/imports/ui/components/taskList';
import '/imports/ui/components/menu';
import '/imports/ui/components/createTask';

FlowRouter.route('/list', {
    action(params, queryParams) {
        BlazeLayout.render('layout1', { top: 'menu', main: 'taskList' });
    }
});

FlowRouter.route('/create', {
    action(params, queryParams) {
        BlazeLayout.render('layout1', { top: 'menu', main: 'createTask' });
    }
});

FlowRouter.notFound = {
    action: function () {
        FlowRouter.redirect('/list');
    },
};
