(function () {
	'use strict';

	angular
		.module('oipa.explore')
		.controller('ExploreController', ExploreController);

	ExploreController.$inject = ['$scope', 'Filters', 'FilterSelection'];

	function ExploreController($scope, Filters, FilterSelection){
		var vm = this;
		vm.dashboard = 'geomap'; // options: charts, geomap, list
		vm.openedPanel = ''; // panels: 
		vm.showSelection = false;

		activate();

	    function activate() {
	    	
	    }

	    vm.setDashboard = function(id){
	    	vm.dashboard = id;
	    	vm.openedPanel = '';
	    	vm.showSelection = false;
	    }

		vm.hasOpenFilters = function(){
			return vm.openedPanel.length;
		}

		vm.isOpenedHeader = function(slug){
	    	return vm.openedPanel == slug;
	    }

	    vm.setOpenedHeader = function(slug){
	    	vm.openedPanel = slug;
	    	vm.showSelection = false;
	    }

	    vm.toggleOpenPanel = function(slug){
			if(vm.isOpenedHeader(slug)){
				vm.openedPanel = '';
				vm.saveFilters();
			} else {
				vm.setOpenedHeader(slug);
			}
	    }

	    vm.toggleSelection = function(){
	    	vm.showSelection = !vm.showSelection;
	    	vm.openedPanel = '';
	    }

	    vm.resetFilters = function(){
	    	FilterSelection.toReset = true;
	    }

		vm.saveFilters = function(){
			console.log('saveFilters');
	    	FilterSelection.toSave = true;
	    	vm.openedPanel = '';
	  	}

	  	vm.showDownload = function(){
	  		console.log("TO DO; show download options");
	  	}

	  	vm.share = function(medium){
	  		console.log("TO DO; open "+medium+" share url in new window");
	  	}
	}

})();