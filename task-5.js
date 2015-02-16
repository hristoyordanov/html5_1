


var taskManager = [];



$(function () {

    function addTask (input) {
        var task = {
            name : input,
            complete : false
        };
        taskManager.push(task);
    }

    function deleteTask (index) {
        taskManager.splice(index, 1);
        console.log(taskManager);
    }

    function drawTask (arr) {

        var indexLastTask = arr.length - 1;
        var taskObject = arr[indexLastTask].name;

        var taskComponent = '<li class="task_item" name="task_item" style="list-style : none;" data-complete="false">' +
            '<span class="task_name">' + taskObject + '</span>' +
                '<input class="status_check" type="checkbox" name="status">' +
            '<span class="delete_task_holder">' +
                '<a href="#" title="" class="delete_task">X</a>' +
           ' </span>' +
        '</li>';

        return taskComponent;
    }


    $('.submit_task').on('click', function (e) {
        e.preventDefault();

        if ($('#add_task').val() && !($('#add_task').val() == ' ')) {
            addTask($('#add_task').val());
            var component = drawTask(taskManager);

            $('.task_wrapper').append($(component));

            $('#add_task').val('');
        } else {
            return false;
        }

    });

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


    });

    $(document).on('change', '[type=checkbox]', function (e) {

        if($(this).is(':checked')){
            $(this).parents('.task_item').css({
                backgroundColor : '#7ad3c3'
            })
            .attr('data-complete', 'true');

            var taskName = $(this).siblings('.task_name').text();
            taskManager.map( function (val, ind) {

                if (taskName == val.name) {
                    return val.complete = true;
                    console.log(val.name);
                }
            });

        } else {
            $(this).parents('.task_item').css({
                backgroundColor : '#af3b3a'
            }).attr('data-complete', 'false');
        }
    });

    $(document).on('click', '#f_no_resolved', function (e) {

        $('.task_item').each(function (ind) {
            console.log(typeof $(this).attr('data-complete'));
            if ($(this).attr('data-complete') == 'true') {
                $(this).css({
                    display : 'none'
                });
            }
            else if ($(this).attr('data-complete') == 'false') {
                $(this).css({
                    display : 'block'
                });
            }
        });
    });

    $(document).on('click', '#f_resolved', function (e) {

        $('.task_item').each(function (ind) {
            console.log(typeof $(this).attr('data-complete'));
            if ($(this).attr('data-complete') == 'false') {
                $(this).css({
                    display : 'none'
                });
            }
            else if ($(this).attr('data-complete') == 'true') {
                $(this).css({
                    display : 'block'
                });
            }
        });
    });


    $(document).on('click', '#f_all', function (e) {

        $('.task_item').each(function (ind) {
            $(this).css({
                display : 'block'
            });
        });
    });

    $(document).on('click', '#f_by_name', function (e) {

        var result = window.prompt('Search by the name of the task');
        console.log(result);

        $('.task_item').each(function (ind) {

            if ($(this).find('.task_name').text() == result) {
                console.log('qq');
                $(this).css({
                    display : 'block'
                });
            } else {
                $(this).css({
                    display : 'none'
                });
            }
        });
    });

});




