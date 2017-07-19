var tarefas = angular.module('tarefas', []);
tarefas.controller("tarefasCtrl", function($scope){

	$scope.tasks = [
	{
		text:'Tarefa 1',
		done: false,
		id: 1
	},
	{
		text:'Tarefa 2',
		done: false,
		id: 2
	},
	{
		text:'Tarefa 3',
		done: true,
		id: 3
	}
	];

$scope.save = function () {
	var taskName = $scope.taskName;
	var done = $scope.done;
	var index = $scope.index;

	if (!taskName == undefined || !taskName == '') {
			if(angular.equals(index, '') || angular.equals(index, undefined)){
				$scope.tasks.push({
					text: taskName,
					done: false
			});
		}
			 else {
				$scope.tasks.splice(index, 1, {
					text: taskName,
					done: done
				});
			};

		$scope.taskName = $scope.done = $scope.index = '';
	};
};


	$scope.edit = function (task, index) {
		$scope.taskName = task.text;
		$scope.done = task.done;
		$scope.index = index;
	};

	$scope.remaining = function() {
		var count = 0;

		angular.forEach($scope.tasks, function(task) {
			count += task.done ? 0 : 1;
		});

		return count;
	};

	$scope.clear = function () {
		var tasks = $scope.tasks;

		$scope.tasks = [];

		angular.forEach(tasks, function(task) {
			if (!task.done) $scope.tasks.push(task);
		});
	};

});
