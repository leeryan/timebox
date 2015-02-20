/*global Vue*/

(function(exports){

  'use strict';

  exports.app = new Vue({

    //The root element that will be compiled
    el: '#timebox',

    data: {
      newTask: '',
      tasks: [
        {text: 'Beat vault of glass on Hard'},
        {text: 'Catch up on emails'}
      ]
    },

    methods: {
      addTask: function(){

        var newTask = this.newTask && this.newTask.trim();

        if(!newTask){
          return
        }

        this.tasks.push({text: newTask});
        this.newTask = '';

      },

      deleteTask: function(task){
        this.tasks.$remove(task.$data);
      },

      completeEditTask: function(task){
        task.text = task.text.trim();
      }
    }

  });

})(window);