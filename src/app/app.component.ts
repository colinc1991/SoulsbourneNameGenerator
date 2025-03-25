import { Component, OnInit } from '@angular/core';
import { DescriptorService } from './services/descriptor.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
    title = 'SoulsbourneNameGenerator';
    adjectives: string[] = [];
    nouns: string[] = [];
    locations: string[] = [];
    generatedName: string = '';
    youDiedSound: HTMLAudioElement;

    private descriptorService: DescriptorService;

    constructor(descriptorService: DescriptorService) {
        this.youDiedSound = new Audio();
        this.descriptorService = descriptorService;
    }

    ngOnInit(): void {
        this.adjectives = this.descriptorService.adjectives;
        this.nouns = this.descriptorService.nouns;
        this.locations = this.descriptorService.locations;
        this.youDiedSound.src = 'assets/youdied.wav';
        this.youDiedSound.load();
    }

    getName() {
        this.generatedName = `${this.descriptorService.getRandomAdjective()} ${this.descriptorService.getRandomNoun()} of the ${this.descriptorService.getRandomLocation()}`
        this.playSound();
    }

    playSound(): void {
        if (this.youDiedSound.paused) {
            this.youDiedSound.play().catch(error => console.error('Error playing audio:', error));
        }
    }
}
