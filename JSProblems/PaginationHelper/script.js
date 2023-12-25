let result = document.querySelector('#result');

class PaginationHelper {
	constructor(collection, itemsPerPage) {
        this.collection = collection;
        this.itemsPerPage = itemsPerPage;
	}
	itemCount() {
        return this.collection.length;
	}
	pageCount() {
	    return Math.ceil(this.itemCount()/this.itemsPerPage);
	}
	pageItemCount(pageIndex) {
        pageIndex++;
        let pageCount = this.pageCount();
        let itemCount = this.itemCount();
        let modulus = itemCount % this.itemsPerPage;
        if (pageIndex <= 0 || pageIndex > pageCount) return -1;
        if (pageIndex == pageCount && modulus != 0) return modulus;
        return this.itemsPerPage;
	}
	pageIndex(itemIndex) {
        itemIndex++;
        let itemCount = this.itemCount();
        if (itemIndex <= 0 || itemIndex > itemCount) return -1;
        return Math.ceil(itemIndex / this.itemsPerPage) - 1;
	}
}

let helper = new PaginationHelper(['a','b','c','d','e','f'], 4);

console.log(helper.itemCount());
console.log(helper.pageCount());
console.log(helper.pageItemCount(1));
console.log(helper.pageIndex(4));
console.log(helper.pageIndex(-10));

result.innerHTML = 1;