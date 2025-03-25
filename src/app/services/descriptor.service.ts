import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class DescriptorService {
    adjectives: string[] = ['Accursed', 'Afflicted', 'Ancient', 'Ashen', 'Black', 'Bronze', 'Burnt', 'Ceaseless', 'Celestial', 'Covetous', 'Cursed', 'Dark', 'Decrepit', 'First', 'Gaping', 'Great', 'Hollow', 'Iron', 'Last', 'Living', 'Lost', 'Mad', 'Moonlit', 'Old', 'Prowling', 'Rotten', 'Royal', 'Scaled', 'Shadowy', 'Slumbering', 'Squalid', 'Steel', 'White', 'Dead'];
    nouns: string[] = ['Archdemon', 'Demon', 'Dragon', 'Druid', 'Father', 'Gargoyle', 'Ghoul', 'Giant', 'Golem', 'Guardian', 'Horror', 'King', 'Knight', 'Queen', 'Shadow', 'Witches', 'Wizard', 'Wolf', 'Cleric'];
    locations: string[] = ['Abyss', 'Asylum', 'Catacombs', 'Cathedral', 'Depths', 'Forest', 'Fortress', 'Garden', 'Night', 'Parish', 'Realm', 'Ruins', 'Throne', 'Bridge'];

    constructor() { }

    getRandomAdjective() {
        return this.getRandomElement(this.adjectives);
    }

    getRandomNoun() {
        return this.getRandomElement(this.nouns);
    }

    getRandomLocation() {
        return this.getRandomElement(this.locations);
    }

    private getRandomElement(array: any[]) {
        return array[Math.floor(Math.random() * array.length)];
    }
}
