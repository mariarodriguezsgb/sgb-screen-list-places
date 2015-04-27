'use strict';

angular.module('sgb-screen-list', ['megazord'])
  .controller('sgb-screen-list-controller', ['_router', '_screenParams','$stateParams', '$scope', 'lodash', function(_router, _screenParams, $stateParams, $scope, _){
        $scope.items = $stateParams.data;
        $scope.filteredItems = $scope.items;
        $scope.showSearch = typeof(_screenParams.showSearch) === 'undefined'? true : _screenParams.showSearch;

        $scope.title = _screenParams.title || 'list_title';

        $scope.filterItems = function(){
            var search = $scope.searchText.toLowerCase();
            $scope.filteredItems = _.filter($scope.items, function(item){
                return (item.title && item.title.toLowerCase().indexOf(search) != -1) ||
                    (item.detail1 && item.detail1.toLowerCase().indexOf(search) != -1) ||
                    (item.detail2 && item.title.toLowerCase().indexOf(search) != -1) ||
                    (item.url && item.title.toLowerCase().indexOf(search) != -1);
            });
        };

        $scope.cancelSearch = function(){};

        $scope.itemClickHandler = function(item){
        //Nothing to do but fire the event
        console.log('Going to fire event with ' + item);
        _router.fireEvent({
         name: 'itemClick',
         params: {
           item: item
         }
        })
    };

  }]);