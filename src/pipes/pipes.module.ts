import { NgModule } from '@angular/core';
import { StringToBytesPipe } from './string-to-bytes/string-to-bytes';
import { BytesToStringPipe } from './bytes-to-string/bytes-to-string';
import { FormEqualValidatePipe } from './form-equal-validate/form-equal-validate';
@NgModule({
	declarations: [StringToBytesPipe,
    BytesToStringPipe,
    FormEqualValidatePipe],
	imports: [],
	exports: [StringToBytesPipe,
    BytesToStringPipe,
    FormEqualValidatePipe], 
    providers :[ FormEqualValidatePipe ]
})
export class PipesModule {}
