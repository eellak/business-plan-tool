var startActions = [
    {"actionID": 1 , "name": "Ενεργεια1", "actionCost": 56},
    {"actionID": 2 , "name": "Ενεργεια2", "actionCost": 54},
    {"actionID": 3 , "name": "Ενεργεια3", "actionCost": 7}
]

var gantt = new Gantt("#gantt", startActions, {
	on_click: function (task) {
        console.log(task);
    },
    on_date_change: function(task, start, end) {
        console.log(task, start, end);
    },
    on_progress_change: function(task, progress) {
        console.log(task, progress);
    },
    on_view_change: function(mode) {
        console.log(mode);
    } })
gantt.change_view_mode('Month') 