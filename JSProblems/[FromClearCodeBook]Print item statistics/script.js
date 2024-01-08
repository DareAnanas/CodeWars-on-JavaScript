class ItemStatisticsMessage {
    verb;
    number;
    pluralModifier;

    make(item, count) {
        this.createDependentMessageParts(count);
        return `There ${this.verb} ${this.number} ${item}${this.pluralModifier}`;
    }

    createDependentMessageParts(count) {
        switch (count) {
            case 0:
                this.verb = 'are';
                this.number = 'no';
                this.pluralModifier = 's';
                return;
            case 1:
                this.verb = 'is';
                this.number = '1';
                this.pluralModifier = '';
                return;
            default:
                this.verb = 'are';
                this.number = count.toString();
                this.pluralModifier = 's';
        }
    }
}

let itemStatisticsMessage = new ItemStatisticsMessage();
console.log(itemStatisticsMessage.make('apple', 0));
console.log(itemStatisticsMessage.make('apple', 1));
console.log(itemStatisticsMessage.make('apple', 2));