export class Section {
    constructor({ items, renderer }, containerSelector){
        this._containerSelector = containerSelector;
        this._renderer = renderer;
        this._items = items;
    }
    prependItem(element){
        this._containerSelector.prepend(element);
    }
    appendItem(element){
        this._containerSelector.append(element);
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