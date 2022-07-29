export class Section {
    constructor({ items, renderer }, containerSelector){
        this._containerSelector = containerSelector;
        this._renderer = renderer;
        this._items = items;
    }
    addItem(elements){
        this._containerSelector.prepend(elements);
    }
    rendererElements(){
        this._items.forEach((element) => {
            this._renderer(element);
        });
    }
}