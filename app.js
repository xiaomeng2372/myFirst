(function () {
'use strict';
var shoppingList1 = [ "milk", "donuts", "Peanut Butter", "Sprite" ];
var shoppingList2 = [
{
	name: "milk",
	quantity: 2,
	more: 0
},

{
  name: "donots",
  quantity: 3,
  more: 0
},
{
	name: "coca",
	quantity: 21,
	more: 0
}

];


angular.module('ShoppingListApp', [])
.controller('ShoppingListController', shoppingListController);
shoppingListController.inject = ['$scope', '$filter'];
function shoppingListController($scope, $filter){
	var number3;
	
	$scope.shoppingList1 = shoppingList1;
	$scope.shoppingList2 = shoppingList2;
	$scope.addToList = function(){
		$scope.errorContext = "";
		if(!$scope.quantity||!$scope.name){
			return;
		}

        var newItem = {
        	name: $scope.name,
        	quantity: $scope.quantity,
        	more: 0

        };
        if(containsObject(newItem,$scope.shoppingList2)){
            $scope.errorContext= "You already have this item";

		} else {$scope.shoppingList2.push(newItem);}

	};
	$scope.clear = function(){
		$scope.shoppingList2 =[];
	}
	$scope.removeItem = function (y) {

        $scope.shoppingList2.splice(y, 1);
    }
    $scope.addMore = function(i){
    	
    	$scope.shoppingList2[i].quantity = $scope.shoppingList2[i].quantity +$scope.shoppingList2[i].more;
    	
    }
    /*
    contains should check name
    */

    function containsObject (obj, list) {
    var i;
    for (i = 0; i < list.length; i++) {
        if (angular.equals(list[i].name, obj.name)) {
        	var number3 = i;
            return true;

        }
    }

    return false;
};
    function changeNumber(name2, number2, array){
        
           for(var i in array){
           	if(array[i].name == name2){
           		array[i].number = number2 + array[i].number;
           		break;
           	}
           }
           return array;
    }
}
/*
angular.module('ShoppingListApp', [])
.controller('ShoppingListController', ShoppingListController);

ShoppingListController.$inject = ['$scope'];
function ShoppingListController($scope) {
  $scope.shoppingList1 = shoppingList1;
  $scope.shoppingList2 = shoppingList2;

  $scope.addToList = function () {
    var newItem = {
      name: $scope.newItemName,
      quantity: $scope.newItemQuantity
    };

    $scope.shoppingList2.push(newItem);
  };
}
*/
})();