import { Component, Input, OnInit } from '@angular/core';
import { DescriptorService } from '../services/descriptor.service';

@Component({
    selector: 'app-base-input',
    templateUrl: './base-input.component.html',
    styleUrl: './base-input.component.scss'
})
export class BaseInputComponent implements OnInit {
    @Input() inputType: string = '';
    descriptors: string[] = [];
    newDescriptor: string = '';
    private descriptorService: DescriptorService;

    constructor(descriptorService: DescriptorService) {
        this.descriptorService = descriptorService;
    }

    ngOnInit(): void {
        this.descriptors = this.getDescriptorArray();
    }

    addInput() {
        if (!this.descriptors.includes(this.newDescriptor)) {
            this.descriptors.push(this.newDescriptor);
            this.descriptors.sort(function (a, b) {
                return a.toLowerCase().localeCompare(b.toLowerCase());
            });
        }
    }

    private getDescriptorArray() {
        switch (this.inputType.toLowerCase()) {
            case 'adjectives':
                return this.descriptorService.adjectives;
            case 'nouns':
                return this.descriptorService.nouns;
            case 'locations':
                return this.descriptorService.locations;
            default:
                throw new Error(`Unknown input type: ${this.inputType}`)
        }
    }
}
