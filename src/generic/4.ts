/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface PegeComponent {
  title: string;
}


class Component<T> {
  constructor (public props:T) {

  }
}

class Page extends Component<PegeComponent> {
  pageInfo () {
    console.log(this.props.title);
  }
}

export {};