export class Section {
    constructor({ items, renderer }, containerSelector){
        this._containerSelector = containerSelector;
        this._renderer = renderer;
        this._items = items;
    }
    addItem(elements){
        this._containerSelector.prepend(elements);
    }
    addCard(el){
        this._containerSelector.append(el);
    }
    removeCard(el){
        el.remove();
    }
    rendererElements(items){
        items.forEach((element) => {
            this._renderer(element);
        });
    }
}