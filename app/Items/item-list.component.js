"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var item_detail_component_1 = require('./item-detail.component');
var item_service_1 = require('./Services/item.service');
var ItemListComponent = (function () {
    function ItemListComponent(itemService) {
        this.itemService = itemService;
        this.title = 'Item List';
    }
    ItemListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.itemService.getItemsSlowly().then(function (items) { return _this.items = items; });
    };
    ItemListComponent.prototype.onSelect = function (item) { this.selectedItem = item; };
    ItemListComponent = __decorate([
        core_1.Component({
            selector: 'item-list',
            moduleId: module.id,
            templateUrl: "item-list.component.html",
            styles: ["\n    .selected {\n      background-color: #CFD8DC !important;\n      color: white;\n    }\n    .items {\n      margin: 0 0 2em 0;\n      list-style-type: none;\n      padding: 0;\n      width: 15em;\n    }\n    .items li {\n      cursor: pointer;\n      position: relative;\n      left: 0;\n      background-color: #EEE;\n      margin: .5em;\n      padding: .3em 0;\n      height: 1.6em;\n      border-radius: 4px;\n    }\n    .items li.selected:hover {\n      background-color: #BBD8DC !important;\n      color: white;\n    }\n    .items li:hover {\n      color: #607D8B;\n      background-color: #DDD;\n      left: .1em;\n    }\n    .items .text {\n      position: relative;\n      top: -3px;\n    }\n    .items .badge {\n      display: inline-block;\n      font-size: small;\n      color: white;\n      padding: 0.8em 0.7em 0 0.7em;\n      background-color: #607D8B;\n      line-height: 1em;\n      position: relative;\n      left: -1px;\n      top: -4px;\n      height: 1.8em;\n      margin-right: .8em;\n      border-radius: 4px 0 0 4px;\n    }\n    .itemList{\n      float:left;\n    }\n    .itemDetail {\n      float:left;\n    }\n  "],
            directives: [item_detail_component_1.ItemDetailComponent]
        }), 
        __metadata('design:paramtypes', [item_service_1.ItemService])
    ], ItemListComponent);
    return ItemListComponent;
}());
exports.ItemListComponent = ItemListComponent;
//# sourceMappingURL=item-list.component.js.map