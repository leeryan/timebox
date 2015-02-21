/*global Vue*/

(function(exports){

  'use strict';

  exports.app = new Vue({

    //The root element that will be compiled
    el: '#timebox',

    data: {
      newTask: '',
      tasks: [
        {
          text: 'Beat vault of glass on Hard',
          duration: '0:00:00'
        },
        {
          text: 'Catch up on emails',
          duration: '0:00:00'
        }
      ]
    },

    methods: {
      addTask: function(){

        var newTask = this.newTask && this.newTask.trim();

        if(!newTask){
          return
        }

        this.tasks.push({
          text: newTask,
          duration: '00:00:00'
        });
        this.newTask = '';

      },

      deleteTask: function(task){
        this.tasks.$remove(task.$data);
      },

      completeEditTask: function(task){
        task.text = task.text.trim();
      },

      startTask: function(task){
        var startTime = moment();


        setInterval(function(){

          var elapsedTime = moment() - startTime;

          var totalDuration = moment.duration(elapsedTime).seconds();

          task.duration = totalDuration;

        }, 1000);

      }
    }

  });

})(window);