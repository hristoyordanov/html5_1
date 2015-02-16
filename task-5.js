
// var taskObject = [{
//     name       : null,
//     completed  : false
// }];
    var taskManager = [];

$(function () {

    function addTask (input) {
        var task = {
            name : input,
            complete : false
        };
        taskManager.push(task);
        console.log(taskManager);
    }

    function deleteTask (index) {
        taskManager.splice(index, 1);
        console.log(taskManager);
    }

    function drawTask (arr) {

        var indexLastTask = arr.length - 1;
        var taskObject = arr[indexLastTask].name;
        
        var taskComponent = '<li class="task_item" name="task_item" style="list-style : none;">' + 
            '<span class="task_name">' + taskObject + '</span>' +
            // '<span class="task_status">' +
                '<input class="status_check" type="checkbox" name="status">' +
            // '</span>' +
            '<span class="delete_task_holder">' +
                '<a href="#" title="" class="delete_task">X</a>' +
           ' </span>' +
        '</li>';

        return taskComponent;
    }


    $('.submit_task').on('click', function (e) {
        e.preventDefault();
        console.log($('#add_task').val());
        if ($('#add_task').val() && !($('#add_task').val() == ' ')) {
            addTask($('#add_task').val());
            var component = drawTask(taskManager);

            $('.task_wrapper').append($(component));

            $('#add_task').val('');
        } else {
            return false;
        }

    });

    // function getName (classAttr, $this) {
    //     return $this.siblings(className).text()
    // }

    $('.task_wrapper').on('click', 'a.delete_task',  function (e) {
        e.preventDefault();

        var tt = $(this).parent().siblings('.task_name').text();

        var ss;
        $.each(taskManager, function (i, val) {
            if (val.name == tt) {
                ss = i;
            }
        });

        deleteTask(ss);
        $('.task_item')[ss].remove();

        console.log(ss);

    });

    $(document).on('change', '[type=checkbox]', function (e) {
        if($(this).is(':checked')){
            $(this).parents('.task_item').css({
                backgroundColor : '#7ad3c3'
            });

            var tt = $(this).parent().siblings('.task_name').text();
            $.each(taskManager, function (i, val) {
                if (val.name == tt) {
                    // val.complete = true;
                    console.log(val[0].complete);
                }
            });
            console.log(taskManager);
        } else {
            
            $(this).parents('.task_item').css({
                backgroundColor : '#af3b3a'
            });

        }
    })
});





// (function(win) {


//     win.mySingleton = (function() {

//         var instance;

//         function init() {

//             function drawTable() {

//                 var args = Array.prototype.slice.call(arguments);
//                     tbl = document.createElement('table');

//                     var tr = document.createElement('tr');
//                 for(prop in args[0][0]) {
//                     var th = document.createElement('th');
//                     th.appendChild(document.createTextNode(prop));
//                     tr.appendChild(th);
//                 }
//                 tbl.appendChild(tr);

//                 args[0].forEach(function (el, index) {
//                     var tr = document.createElement('tr');

//                     Object.keys(el).forEach(function (key) {
//                         var td = document.createElement('td');
//                         td.appendChild(document.createTextNode(el[key]));
//                         tr.appendChild(td);
//                     });
//                     tbl.appendChild(tr);
//                 });

//                 return tbl;

//             };

//             return {
//                 draw: drawTable
//             };

//         };


//         return {
//             getInstance : function () {
//                 if(!instance) {
//                     instance = init();
//                 }

//                 return instance;
//             }
//         }
        
//     })();

//     //Document Ready
//     $(function() {
//         var body = document.getElementsByTagName('body')[0];
//         var app1 = mySingleton.getInstance();
//         var app2 = mySingleton.getInstance();
//         var tt1 = app1.draw(data);
//         // var tt2 = app1.draw(data);
//         // var tt3 = app1.draw(data);
//         // var app1 = mySingleton.draw(data);
//         // var app2 = mySingleton.draw(data);
//         // console.log(app1 == app2);
//         // console.log(app1 === app2); // Other case is false
//         // body.appendChild(tt1);
//     });

// })(window);



