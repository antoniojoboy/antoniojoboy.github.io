import { Injectable, Injector, ApplicationRef, ComponentFactoryResolver, ComponentRef, Type, ViewContainerRef } from '@angular/core'

@Injectable({
  providedIn: 'root'
})

export class DynamicComponentService {

  private compRef: ComponentRef<any>;

  constructor(private injector: Injector,
    private resolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private viewContainerRef: ViewContainerRef
  ) { }


  public injectComponent<T>(component: Type<T>, propertySetter?: (type: T) => void): HTMLDivElement {
    // Remove the Component if it Already Exists
    if (this.compRef) this.compRef.destroy();

    // Resolve the Component and Create
    const compFactory = this.resolver.resolveComponentFactory(component);
    this.compRef = compFactory.create(this.injector);
    // const compFactory = this.viewContainerRef.createComponent(component);

    // Allow a Property Setter to be Passed in (To Set a Model Property, etc)
    if (propertySetter)
      propertySetter(this.compRef.instance);

    // Attach to Application
    this.appRef.attachView(this.compRef.hostView);

    // Create Wrapper Div and Inject Html
    let div = document.createElement('div');
    div.appendChild(this.compRef.location.nativeElement);

    // Return the Rendered DOM Element
    return div;
  }
}