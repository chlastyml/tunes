import { FunctionComponent } from 'react'

// export class Page {
// 	public path: string
// 	public component: Component<any, any, any>
// 	public title: string
// 	public exact: boolean
// 	constructor(path: string, component: Component, title: string, exact = false) {
// 		this.path = path
// 		this.component = component
// 		this.title = title
// 		this.exact = exact
// 	}
// }

// export default Page

export interface Page {
	path: string
	component: FunctionComponent
	title: string
	exact?: boolean
}

export default Page
