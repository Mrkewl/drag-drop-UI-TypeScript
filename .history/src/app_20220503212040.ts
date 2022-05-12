class ProjectInput{
  templateElement:  HTMLTemplateElement;
  hostElement: HTMLDivElement;
  element: HTMLFormElement;
  constructor(){
    this.templateElement = <HTMLTemplateElement>document.getElementById('project-input')! as HTMLTemplateElement;
    this.hostElement = document.getElementById('app')! as HTMLDivElement; 
  
  const importedNode = document.importNode(this.templateElement.content, true);
    this.element

  }

private attach(){
  this.hostElement.insertAdjacentElement('afterbegin', )
}
}