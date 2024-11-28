import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, UntypedFormArray, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { NewProduct } from '../../core/interfaces/form.interface';

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
    description: new FormControl(null, [Validators.required, Validators.minLength(8)]),
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
    this.productForm.valid && console.log(this.productForm)
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
