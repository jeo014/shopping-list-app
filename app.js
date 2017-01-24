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

var state = {
    items: ["apples", "oranges", "milk", "bread"],
};

var addItem = function(state, item) {
	state.items.push(item);
};

var renderList = function(state, element) {
	var itemsHTML = state.items.map(function(item) {
		return '<li>' +
		'<span class="shopping-item">' + item +
		'</span><div class="shopping-item-controls">' +
		'<button class="shopping-item-toggle">' +
		'<span class="button-label">check</span>' +
		'</button><button class="shopping-item-delete">' +
		'<span class="button-label">delete</span>' +
		'</button></div>'
		'</li>';
	});
	element.html(itemsHTML);
}

// event listeners

$("#js-shopping-list-form").submit(function(event) {
	event.preventDefault();
	addItem(state, $("#shopping-list-entry").val());
	renderList(state,$(".shopping-list"));
})

$(".shopping-item-toggle").click(function(event) {
	event.preventDefault();
	$(".shopping-item-toggle span:first").toggleClass("shopping-item__checked");
	renderList(state, $(".shopping-list"));
});

$(".shopping-item-delete").click(function(event) {
	event.preventDefault();
	$(".this").closest("li").remove();
})

