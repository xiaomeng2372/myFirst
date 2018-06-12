(function () {
'use strict';
var shoppingList1 = [ "milk", "donuts", "Peanut Butter", "Sprite" ];
var shoppingList2 = [
{
	name: "milk",
	quantity: 2
},

{
  name: "donots",
  quantity: 3
},
{
	name: "coca",
	quantity: 21
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
        	quantity: $scope.quantity

        };
        if(containsObject(newItem,$scope.shoppingList2)){
        	changeNumber(newItem.name,newItem.quantity,$scope.shoppingList2);
            $scope.errorContext= "You already have this item";

		} else {$scope.shoppingList2.push(newItem);}

	};
	$scope.clear = function(){
		$scope.shoppingList2 =[];
	}
	$scope.removeItem = function (y) {

        $scope.shoppingList2.splice(y, 1);
    }
    function containsObject (obj, list) {
    var i;
    for (i = 0; i < list.length; i++) {
        if (angular.equals(list[i], obj)) {
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