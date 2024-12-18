import { FormArray, FormControl, FormGroup } from "@angular/forms";

export interface NewProduct {
    title: FormControl<string | null>,
    description: FormControl<string | null>,
    price: FormControl<number | null>,
    category: FormControl<string | null>,
    dimensions: FormGroup<Dimension>,
    viewScore?: FormGroup<any>,
    agreeOnTerms: FormControl<boolean | null>,
    tags?: FormArray<FormControl<string|null>>,
    area?: FormControl<number|null>
}
interface Dimension {

    width: FormControl<number>,
    height: FormControl<number>

}
 