// Storage Controller
const StorageCtrl = (function() {

})();


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Item Contloller
const ItemCtrl = (function() {

  // Constructor
  const Item = function(id, name, calories) {
    this.id = id;
    this.name = name;
    this.calories = calories;
  }

  // Data Structure / State
  const data = {
    items: [
      {id: 0, name: 'Steak', calories: 1200},
      {id: 1, name: 'Steak', calories: 1200},
      {id: 1, name: 'Steak', calories: 1200}
    ],
    currentItem: null,
    totalCalories: 0
  }

  // Public methoda
  return {
    getItems: function() {
      return data.items;
    },
    addItem: function(name, calories) {
      let ID;

      if(data.items.length > 0) {
        ID = data.items[data.items.length - 1].id + 1;
      } else {
        ID = 0;
      }
      
      calories = parseInt(calories);

      newItem = new Item(ID, name, calories);
      data.items.push(newItem);
      return newItem;
    },
    logData: function() {
      return data;
    }
  }

})();



//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// UI Controller
const UICtrl = (function() {

  const UiSelectors = {
    itemList: '#item-list',
    addBtn: '.add-btn',
    itemNameInput: '#item-name',
    itemCaloriesInput: '#item-calories'
  }

  // Public methods
  return {
    populateItemList: function(items) {
      let html = "";

      items.forEach(item => {
        html += `
          <li class="collection-item" id="item-${item.id}">
            <strong>${item.name}: </strong>  <em>${item.calories} Calories</em>
            <a href="#" class="secondary-content"><i class="edit-item fas fa-pencil-alt"></i></a>
          </li>`
      });

      document.querySelector(UiSelectors.itemList).innerHTML = html;
    },
    getItemInput: function() {
      return {
        name: document.querySelector(UiSelectors.itemNameInput).value,
        calories: document.querySelector(UiSelectors.itemCaloriesInput).value
      }
    },
    getSelectors: function() {
      return UiSelectors;
    }

  }

})();



//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// App controller
const App = (function(ItemCtrl, UICtrl) {
  // Load event listeners
  const loadEventListeners = function() {
    const UiSelectors = UICtrl.getSelectors();
    document.querySelector(UiSelectors.addBtn).addEventListener('click', itemAddSubmit);
  }

  const itemAddSubmit = function(e) {
    const input = UICtrl.getItemInput();
    if(input.name !== '' && input.calories !== '') {
      // Add item
      const newItem = ItemCtrl.addItem(input.name, input.calories);
      
    }

    e.preventDefault();
  }

  // Public methoda
  return {
    init: function() {
      const items = ItemCtrl.getItems();
      
      UICtrl.populateItemList(items);

      loadEventListeners();      
    }
  }

})(ItemCtrl, UICtrl);

App.init();