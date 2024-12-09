import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function descriptionValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const value = control.value as string;
        if(value) {
            const prohibitedWords = ['sale', 'free', 'discount']
            const lowerCaseValue = value.toLowerCase();

        for (const word of prohibitedWords) {
            if (lowerCaseValue.includes(word)) {
                return { prohibitedWord: true }
            }
        }
        }
        // if (!value || value.trim().length === 0) {
        //     return { required: true }
        // }

        // if (value.length > 10) {
        //     return { maxLengthExceeded: true }
        // }

        

        return null
    }
}