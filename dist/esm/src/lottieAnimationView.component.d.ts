import { AfterViewInit, ElementRef } from '@angular/core';
export declare class LottieAnimationViewComponent implements AfterViewInit {
    private platformId;
    constructor(platformId: string);
    options: any;
    width: number;
    height: number;
    animCreated: any;
    lavContainer: ElementRef;
    viewWidth: string;
    viewHeight: string;
    private _options;
    ngAfterViewInit(): void;
}
