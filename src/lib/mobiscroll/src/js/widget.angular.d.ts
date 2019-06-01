import { ElementRef, MbscBase, MbscOptionsService } from './frameworks/angular';
import { Widget, MbscWidgetOptions } from './classes/widget';
export { MbscWidgetOptions };
export declare class MbscWidget extends MbscBase {
    optionService: MbscOptionsService;
    _instance: Widget;
    options: MbscWidgetOptions;
    constructor(initialElem: ElementRef, optionService: MbscOptionsService);
    ngAfterViewInit(): void;
}
