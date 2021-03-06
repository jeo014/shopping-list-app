// To complete this challenge requires:
//
// - Using DOM manipulation and traversal to dynamically add and remove HTML 
// elements and apply styles.
// - Using this and event delegation
//
// Requirements
// - Enter items they need to purchase by entering text and hitting 
// "Return" or clicking the "Add item" button
// - Check and uncheck items on the list by clicking the "Check" button
// - Permanently remove items from the list
//
// Hint: you may find it helpful to read up on and use the following 
// jQuery methods: .submit(), preventDefault(), toggleClass(), and closest().

$(function() {
	var state = {};

	var addItem = function(state, item) {
		state[item] = 
			{ displayName: item,
			checked: false };
		console.log(state);
	};


	var renderList = function(state, element) {
		var itemsHTML = function(){
			for (var i=0; i < Object.keys(state).length; i++) {
				var currentItemName = Object.keys(state)[i];
				return '<li><span class="shopping-item">' + 
				currentItemName +
				'</span><div class="shopping-item-controls">' +
				'<button class="shopping-item-toggle">' +
				'<span class="button-label">check</span>' +
				'</button><button class="shopping-item-delete" value="' + currentItemName + '">' +
				'delete' +
				'</button></div>'
				'</li>';
			};
		};
		element.html(itemsHTML);
	}

	// event listeners

	$("#js-shopping-list-form").submit(function(event) {
		event.preventDefault();
		addItem(state, $("#shopping-list-entry").val());
		renderList(state, $(".shopping-list"));
	})

	$(".shopping-list").on("click", ".shopping-item-toggle", function(event) {
		console.log(event.target);
		$(".shopping-item").closest("span").toggleClass("shopping-item__checked");
	});

	$(".shopping-list").on("click", ".shopping-item-delete", function(event) {
		console.log(event.target);
		$(".shopping-item").closest("li").remove();
		var targetToDelete = $(event.target).attr("value");
		delete state[targetToDelete];
		console.log(state);
	});	
})

// make shopping list work
// change data structure for quiz app and make it work
// google "localStorage" to store state of shopping list
// next unit on APIs


//To Do
//move last two functions inside addItem, then fix it
//use .on()
//instead of a list of strings for items, do a list of objects, like items = {name: 'apple', checked: 'false'}
//items will be an array of objects

//look at vue.js (will have to use node)
//angular version 1