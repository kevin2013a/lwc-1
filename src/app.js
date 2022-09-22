import { LightningElement } from 'lwc';

export default class CalculadoraLWC extends LightningElement {
    
    result;
    visivel = false;

    inputs = {
        n1: '',
        n2: ''
    }

    handleInputChange(event){
        let nameInput = event.target.name;
        let value = event.detail.value;
     
        this.inputs = {
          ...this.inputs, [nameInput]: value
        };
     
        console.log(this.inputs);
       }

    handleOnClickSum (){
        this.result = (parseFloat(this.inputs.n1)+(parseFloat(this.inputs.n2))).toFixed(2);
        this.visivel = false;
       }

    handleOnClickSub (){
        this.result = (parseFloat(this.inputs.n1)-(parseFloat(this.inputs.n2))).toFixed(2);
        this.visivel = false;
       }

    handleOnClickDiv (){
        if(this.inputs.n2 == 0){
            alert('Erro - Impossível dividir por 0');

        }else{
        this.result = (parseFloat(this.inputs.n1)/(parseFloat(this.inputs.n2))).toFixed(2);
        this.visivel = false;
        }
       }

    handleOnClickMul (){
        this.result = (parseFloat(this.inputs.n1)*(parseFloat(this.inputs.n2))).toFixed(2);
        this.visivel = false;
       }
    
    handleReset (){
        this.template.querySelectorAll('lightning-input').forEach(element => {
              element.value = null;
            });
        this.visivel = false;
        }

    showResult (){
this.visivel = true;
    }
 }
