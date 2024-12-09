import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, UntypedFormArray, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { NewProduct } from '../../core/interfaces/form.interface';
import { descriptionValidator } from '../../core/validators/description.validator';
import { debounce, debounceTime, filter, tap } from 'rxjs';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.scss'
})
export class ProductAddComponent {
  // formGroup = new UntypedFormGroup({});
  // formControl = new UntypedFormControl();
  // formArray = new UntypedFormArray([]);
  tagName: string = ""

  productForm = new FormGroup<NewProduct>({
    title: new FormControl('Product Title', { nonNullable: true }),
    description: new FormControl(null, [Validators.required, descriptionValidator(), Validators.minLength(6)]),
    price: new FormControl(0, [Validators.required, Validators.min(100)]),
    category: new FormControl(null),
    dimensions: new FormGroup({
      width: new FormControl(),
      height: new FormControl()
    }),

    agreeOnTerms: new FormControl(false, Validators.requiredTrue),

  })


  // typedfc = new FormControl();

  // typedfA = new FormArray([]);

  constructor(private _formBuilder: FormBuilder) {
    this.productForm.controls.description.valueChanges.pipe(
      debounceTime(300)
    ).subscribe((res) => {
      console.log(res);
    })

    this.productForm.controls.description.statusChanges.pipe(
      filter(status => status === "DISABLED" ),
      tap(res => {
        console.log(res)
      }
      ))
      .subscribe()

    console.log(this.productForm)
    //  const fA = this._formBuilder.array([]);
    //  const fG = this._formBuilder.group({});
    //  const fC = this._formBuilder.control()

  }

  addNestedGroup() {
    const newGroup = new FormGroup({
      hasViewed: new FormControl(false),
      numberofVisits: new FormControl(0)
    })
    // @ts-ignore
    this.productForm.addControl('viewScore', newGroup)

  }
  removeFormControl(name: string) {
    const control = this.productForm.get(name);
    if (control !== null) {
      // @ts-ignore
      this.productForm.removeControl(name)
    }

  }
  onSubmit() {
    if (this.productForm.valid) {
      if (this.productForm.controls.agreeOnTerms.disabled) {
        this.productForm.controls.agreeOnTerms.enable()
      }
      const { dimensions, area } = this.productForm.controls;
      console.log(dimensions.value) // { width: null, height: null}
      // dimensions.setValue({height: 300}); // error
      dimensions.patchValue({ height: 300 }) // valid
      this.productForm.controls.description.addValidators(descriptionValidator())
      area?.setValue(Number(dimensions.controls.width.value) * Number(dimensions.controls.height.value));
      // area?.patchValue(Number(dimensions.controls.width.value) * Number(dimensions.controls.height.value));
    } else {
      this.productForm.markAllAsTouched();
      this.productForm.markAsDirty();
      this.productForm.controls.description.disable();
      // this.productForm.controls.agreeOnTerms.disable();
      // this.productForm.controls.category.disable();
    }
    console.log(this.productForm, this.productForm.value.agreeOnTerms, this.productForm.valid)
    console.log(this.productForm.getRawValue());
    
    this.productForm.setErrors({ formisNotValid: true })

  }
  addTags() {
    const hasTagControl = this.productForm.get('tags') as FormArray;
    const newControl = new FormControl(this.tagName)
    if (hasTagControl) {
      //@ts-ignore
      hasTagControl.push(newControl)
    } else {
      const arrControl = new FormArray<FormControl<string | null>>([]);
      arrControl.push(newControl);
      this.productForm.addControl("tags", arrControl)

    }
    this.tagName = ""

    console.log(this.productForm.controls.tags)
  }


}
