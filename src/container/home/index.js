import React from 'react';
import NotFound from '../../NotFound';
import PrismicReact from 'prismic-reactjs';

import './style.scss';

// Declare your component
export default class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			focusItem: null,
			focusLock: false,
			doc: null,
			notFound: false
		};
		if (props.prismicCtx) {
			this.fetchPage(props);
		}
		this.focus = React.createRef();
		this.handleFocus = this.handleFocus.bind(this);
		this.handleLock = this.handleLock.bind(this);
	}

	async componentDidUpdate(prevProps) {
		this.setFocus();
		this.props.prismicCtx.toolbar();
		// We fetch the page only after it's ready to query the api
		if (!prevProps.prismicCtx) {
			await this.fetchPage(this.props);
			this.setFocus();
		}
	}
	componentDidMount() {}
	async fetchPage(props) {
		if (props.prismicCtx) {
			const doc = await props.prismicCtx.api.getSingle('home');
			if (doc) {
				// We put the retrieved content in the state as a doc variable
				this.setState({ doc });
			} else {
				// We changed the state to display error not found if no matched doc
				this.setState({ notFound: !doc });
			}
			// // We are using the function to get a document by its uid
			// return props.prismicCtx.api.getByUID('home', 'home', {}, (err, doc) => {

			// });
		}
		return null;
	}

	handleLock(event) {
		this.setState({
			focusLock: !this.state.focusLock
		});
		console.log('herro', this.state.focusLock);
	}

	handleFocus(event) {
		this.setState({
			focusItem: event.currentTarget
		});
	}

	setFocus() {
		if (this.state.focusItem === null || this.state.focusLock === true) {
			return false;
		}

		//const focusData = this.focus.current.getBoundingClientRect()
		const itemToFocusOnData = this.state.focusItem.getBoundingClientRect();

		this.focus.current.animate(
			[
				// keyframes
				//{ transform: `width: translate(${focusData.x}px,${focusData.y}px)` },
				{
					width: `${itemToFocusOnData.width}px`,
					height: `${itemToFocusOnData.height}px`,
					transform: `translate(${itemToFocusOnData.x}px, ${itemToFocusOnData.y}px)`
				}
			],
			{
				// timing options
				duration: 150,
				fill: 'forwards'
				//iterations: 1
			}
		);
	}

	render() {
		let refIndex = 0;
		if (this.state.doc) {
			return (
				<React.Fragment>
					<div ref={this.focus} onClick={this.handleLock} className="focus" />
					<main>
						<section
							ref={elem => {
								this[`focusItem${refIndex++}`] = elem;
							}}
							tabIndex="0"
							onClick={this.handleLock}
							onMouseOver={this.handleFocus}
							data-wio-id={this.state.doc.id}
						>
							{/* This is how to insert a Rich Text field as plain text */}
							<h1>{PrismicReact.RichText.asText(this.state.doc.data.title)}</h1>
							{/* This is how to insert a Rich Text field into your template as html */}
							{PrismicReact.RichText.render(this.state.doc.data.intro, this.props.prismicCtx.linkResolver)}
						</section>

						<section
							ref={elem => {
								this[`focusItem${refIndex++}`] = elem;
							}}
							tabIndex="1"
							onClick={this.handleLock}
							onMouseOver={this.handleFocus}
						>
							<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac sem a est condimentum pharetra et vitae orci. Morbi sit amet metus nisl. Donec rhoncus a tortor efficitur sagittis. Ut eu interdum velit. Duis ornare libero nec nunc sagittis pellentesque. Maecenas sit amet nisl odio. Aliquam erat volutpat. Phasellus ac ante suscipit, auctor augue et, posuere nulla.</div>
						</section>

						<section
							ref={elem => {
								this[`focusItem${refIndex++}`] = elem;
							}}
							tabIndex="2"
							onClick={this.handleLock}
							onMouseOver={this.handleFocus}
						>
							<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac sem a est condimentum pharetra et vitae orci. Morbi sit amet metus nisl. Donec rhoncus a tortor efficitur sagittis. Ut eu interdum velit. Duis ornare libero nec nunc sagittis pellentesque. Maecenas sit amet nisl odio. Aliquam erat volutpat. Phasellus ac ante suscipit, auctor augue et, posuere nulla.</div>
						</section>
					</main>
				</React.Fragment>
			);
		} else if (this.state.notFound) {
			return <NotFound />;
		}
		return <h1>Loading</h1>;
	}
}
