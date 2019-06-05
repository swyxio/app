import { State, Component, h } from "@stencil/core"

type Todo = {
  name: string
  id: number
}

@Component({
  tag: "app-home",
  styleUrl: "app-home.css",
  shadow: true
})
export class AppHome {
  @State() todos: Todo[]

  handleClick() {
    fetch("/.netlify/functions/hello-world")
      .then((res) => res.json())
      .then((data: Todo[]) => void (this.todos = data))
  }

  render() {
    return (
      <div class="app-home">
        <p>
          Welcome to the Stencil App Starter. You can use this starter to build entire apps all with web components
          using Stencil! Check out our docs on <a href="https://stenciljs.com">stenciljs.com</a> to get started.
        </p>

        <stencil-route-link url="/profile/stencil">
          <button>Profile page</button>
        </stencil-route-link>
        <h3>clicky</h3>
        <button onClick={this.handleClick.bind(this)}>click me</button>
        <pre>{JSON.stringify(this.todos, null, 2)}</pre>
      </div>
    )
  }
}
