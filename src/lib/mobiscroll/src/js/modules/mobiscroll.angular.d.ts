import { ModuleWithProviders, mobiscroll, MbscRouterToken } from '../frameworks/angular';
import { MbscInput, MbscInputModule } from '../input.angular';
import { MbscCalendarModule, MbscCalendar, MbscCalendarOptions, MbscCalendarComponent } from '../calendar.angular';
import { MbscCardModule, MbscCard, MbscCardComponent, MbscCardOptions, MbscCardContent, MbscCardFooter, MbscCardHeader, MbscCardSubtitle, MbscCardTitle } from '../cards.angular';
import { MbscColorModule, MbscColor, MbscColorOptions, MbscColorComponent } from '../color.angular';
import { MbscDatetimeModule, MbscDate, MbscTime, MbscDatetime, MbscDateComponent, MbscTimeComponent, MbscDatetimeComponent, MbscDatetimeOptions } from '../datetime.angular';
import { MbscEventcalendarModule, MbscEventcalendar, MbscEventcalendarOptions, MbscEventcalendarComponent } from '../eventcalendar.angular';
import { MbscFormsModule, MbscForm, MbscRating, MbscDropdown, MbscTextarea, MbscButton, MbscCheckbox, MbscSwitch, MbscStepper, MbscProgress, MbscSlider, MbscRadio, MbscRadioGroup, MbscSegmentedGroup, MbscSegmented, MbscFormGroup, MbscFormGroupTitle, MbscFormGroupContent, MbscFormOptions, MbscAccordion } from '../forms.angular';
import { MbscImageModule, MbscImage, MbscImageOptions, MbscImageComponent, MbscImageItem } from '../image.angular';
import { MbscListviewModule, MbscListview, MbscListviewSublist, MbscListviewItem, MbscListviewHeader, MbscListviewOptions } from '../listview.angular';
import { MbscMeasurementModule, MbscMeasurement, MbscDistance, MbscForce, MbscMass, MbscSpeed, MbscTemperature, MbscTemperatureOptions, MbscMeasurementOptions, MbscSpeedOptions, MbscMassOptions, MbscDistanceOptions, MbscForceOptions, MbscMeasurementComponent, MbscTemperatureComponent, MbscForceComponent, MbscSpeedComponent, MbscMassComponent, MbscDistanceComponent } from '../measurement.angular';
import { MbscNavigationModule, MbscNav, MbscBottomNav, MbscHamburgerNav, MbscTabNav, MbscNavItem, MbscNavOptions } from '../navigation.angular';
import { MbscNumberModule, MbscNumber, MbscNumberOptions, MbscNumberComponent } from '../number.angular';
import { MbscNumpadModule, MbscNumpad, MbscNumpadDecimal, MbscNumpadDate, MbscNumpadTime, MbscNumpadTimespan, MbscNumpadOptions, MbscNumpadComponent, MbscNumpadDateComponent, MbscNumpadDecimalComponent, MbscNumpadTimeComponent, MbscNumpadTimespanComponent, MbscNumpadDateOptions, MbscNumpadDecimalOptions, MbscNumpadTimeOptions, MbscNumpadTimespanOptions } from '../numpad.angular';
import { MbscOptionlistModule, MbscOptionlist, MbscOptionItem, MbscOptionlistOptions } from '../optionlist.angular';
import { MbscPageModule, MbscPage, MbscPageOptions, MbscNote, MbscAvatar } from '../page.angular';
import { MbscPopupModule, MbscPopup, MbscPopupOptions, MbscWidget, MbscWidgetOptions } from '../popup.angular';
import { MbscRangeModule, MbscRange, MbscRangeOptions, MbscRangeComponent } from '../range.angular';
import { MbscScrollerModule, MbscScroller, MbscScrollerComponent, MbscScrollerOptions } from '../scroller.angular';
import { MbscScrollViewModule, MbscScrollView, MbscScrollViewItem, MbscScrollViewComponent, MbscScrollViewItemComponent, MbscScrollViewOptions } from '../scrollview.angular';
import { MbscSelectModule, MbscSelect, MbscSelectOptions, MbscSelectComponent } from '../select.angular';
import { MbscTimerModule, MbscTimer, MbscTimerOptions, MbscTimerComponent } from '../timer.angular';
import { MbscTimespanModule, MbscTimespan, MbscTimespanOptions, MbscTimespanComponent } from '../timespan.angular';
import { MbscTreelistModule, MbscTreelist, MbscTreelistOptions, MbscTreelistComponent } from '../treelist.angular';
declare class MbscModule {
    static forRoot(config: {
        angularRouter: any;
    }): ModuleWithProviders;
}
export { mobiscroll, MbscCard, MbscCardComponent, MbscCardContent, MbscCardFooter, MbscCardHeader, MbscCardSubtitle, MbscCardTitle, MbscCalendar, MbscCalendarComponent, MbscColor, MbscColorComponent, MbscDate, MbscTime, MbscDatetime, MbscDateComponent, MbscTimeComponent, MbscDatetimeComponent, MbscEventcalendar, MbscEventcalendarComponent, MbscForm, MbscRating, MbscInput, MbscDropdown, MbscTextarea, MbscButton, MbscCheckbox, MbscSwitch, MbscStepper, MbscProgress, MbscSlider, MbscRadio, MbscRadioGroup, MbscSegmentedGroup, MbscSegmented, MbscFormGroup, MbscFormGroupTitle, MbscFormGroupContent, MbscAccordion, MbscPage, MbscNote, MbscAvatar, MbscImage, MbscImageComponent, MbscImageItem, MbscListview, MbscListviewSublist, MbscListviewItem, MbscListviewHeader, MbscOptionlist, MbscOptionItem, MbscMeasurement, MbscDistance, MbscForce, MbscMass, MbscSpeed, MbscTemperature, MbscMeasurementComponent, MbscTemperatureComponent, MbscForceComponent, MbscSpeedComponent, MbscMassComponent, MbscDistanceComponent, MbscNav, MbscBottomNav, MbscHamburgerNav, MbscTabNav, MbscNavItem, MbscRouterToken, MbscNumber, MbscNumberComponent, MbscNumpad, MbscNumpadDecimal, MbscNumpadDate, MbscNumpadTime, MbscNumpadTimespan, MbscNumpadComponent, MbscNumpadDateComponent, MbscNumpadDecimalComponent, MbscNumpadTimeComponent, MbscNumpadTimespanComponent, MbscRange, MbscRangeComponent, MbscScroller, MbscScrollerComponent, MbscScrollView, MbscScrollViewItem, MbscScrollViewComponent, MbscScrollViewItemComponent, MbscSelect, MbscSelectComponent, MbscTimer, MbscTimerComponent, MbscTimespan, MbscTimespanComponent, MbscTreelist, MbscTreelistComponent, MbscPopup, MbscWidget, MbscCardOptions, MbscCalendarOptions, MbscColorOptions, MbscDatetimeOptions, MbscEventcalendarOptions, MbscFormOptions, MbscImageOptions, MbscListviewOptions, MbscOptionlistOptions, MbscMeasurementOptions, MbscTemperatureOptions, MbscSpeedOptions, MbscDistanceOptions, MbscMassOptions, MbscForceOptions, MbscNavOptions, MbscNumberOptions, MbscNumpadOptions, MbscNumpadDateOptions, MbscNumpadDecimalOptions, MbscNumpadTimeOptions, MbscNumpadTimespanOptions, MbscPageOptions, MbscRangeOptions, MbscScrollerOptions, MbscScrollViewOptions, MbscSelectOptions, MbscTimerOptions, MbscTimespanOptions, MbscTreelistOptions, MbscPopupOptions, MbscWidgetOptions, MbscModule, MbscInputModule, MbscCalendarModule, MbscCardModule, MbscColorModule, MbscDatetimeModule, MbscEventcalendarModule, MbscFormsModule, MbscImageModule, MbscListviewModule, MbscMeasurementModule, MbscNavigationModule, MbscNumberModule, MbscNumpadModule, MbscOptionlistModule, MbscPageModule, MbscPopupModule, MbscRangeModule, MbscScrollerModule, MbscScrollViewModule, MbscSelectModule, MbscTimerModule, MbscTimespanModule, MbscTreelistModule };
