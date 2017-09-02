import { Component, 
  OnInit,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  OnDestroy,
  Input,
  ViewEncapsulation,
  ViewChild,
  ElementRef,
  ContentChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated //<-- None, Native
})
export class ServerElementComponent implements OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,  
  OnDestroy
{
  // using decorator input: by default it used by this component
  // you can also aliase to bind to outside component ex: @Input('srvElement'), assign srvElement as property
  @Input('srvElement') myElement: {type: string, name: string, content: string};
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;

  constructor() { 
    //this.myElement =  { type: 'Test', name: 'Test', content: 'Test' };
    console.log("contstructor called");    
  }

  ngOnChanges(changes: SimpleChanges){
    console.log("ngOnChanges called");
    console.log(changes);
  }

  ngOnInit() {
    console.log('ngOnInit called');  
    console.log('Text Content: ' + this.header.nativeElement.textContent); //here will give you blank cos it hasn't finished rendering
    console.log('Child Content: ' + this.paragraph.nativeElement.textContent); 
  }

  ngDoCheck() {
    console.log('ngDoChecked called');
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit called');
    console.log('Child Content: ' + this.paragraph.nativeElement.textContent); 
  }

   ngAfterContentChecked(){
    console.log('ngAfterContentCheck called');
   }

   ngAfterViewInit(){
    console.log('ngAfterViewInit called');
    console.log('Text Content: ' + this.header.nativeElement.textContent);    
  }

   ngAfterViewChecked(){
    console.log('ngAfterViewCheck called');
   }

   ngOnDestroy() {

     console.log('ngOnDestroy called');
   }
}
