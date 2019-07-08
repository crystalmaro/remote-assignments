const NavBar = (props) => {
    return (
        <nav>
            Welcome Title / Logo
            <a className="burgerIcon" onClick={ props.onClick }>&#9776;</a>
            <span className="navBarItems">
                <a href="#">Item 1</a>
                <a href="#">Item 2</a>
                <a href="#">Item 3</a>
                <a href="#">Item 4</a>
            </span>
        </nav>
    )
};

const NavDrawer = (props) => {
    return (
        <section className="toggleItems">
            <a className="X" onClick={ props.onClick }>X</a>
            <span>
                <a href="#">Item 1</a>
                <a href="#">Item 2</a>
                <a href="#">Item 3</a>
                <a href="#">Item 4</a>
            </span>
        </section>
    )
};

const Header = (props) => <h1 onClick={ props.onClick }>{ props.text }</h1>;

const Title = () => <h2>Section Title</h2>;

const ContentBox1 = () => {
    return (
        <div className="container">
            <div className="box box1">Content Box 1</div>
            <div className="box box2">Content Box 2</div>
            <div className="box">Content Box 3</div>
            <div className="box">Content Box 4</div>
        </div>
    );
};

const Button = (props) => {
    return (
        <div className="callButton">
            <button onClick={ props.onClick }>Call to Action</button>
        </div>
    )
};

const ContentBox2 = () => {
    return (
        <div className="container container2">
            <div className="box box1">Content Box 5</div>
            <div className="box box2">Content Box 6</div>
            <div className="box">Content Box 7</div>
            <div className="box">Content Box 8</div>
        </div>
    )
};

class App extends React.Component {
    state = {
        header: "Welcome Message",
// App is "parent", Header is "child" in this case
// define click action in App, and pass in as class
        isBoxHidden: true,
        isNavItemsHidden: true
    }
 
    // onclick for header
    changeHeader = () => {
        this.setState( {header: "Have a Good Time!"} );
    }
    
    // display box 5-8
    displayBox = () => {
        // this.setState( {isBoxHidden: false} )
        this.setState( {isBoxHidden: !this.state.isBoxHidden} )
    }

    displayNavItems = () => {
        this.setState( {isNavItemsHidden: !this.state.isNavItemsHidden} )
        // this.setState( {isNavItemsHidden: false} )
    }

    // hide NavItems
    hideNavItems = () => {
        this.setState( {isNavItemsHidden: true} )
    }

    render() {
        return (
            <div>
                <NavBar onClick = {this.displayNavItems} hideNavItems = {this.state.hideNavItems} />
                {/* <NavBar onClick = {this.displayNavItems}/> */}
                {!this.state.isNavItemsHidden && <NavDrawer onClick = {this.hideNavItems}/>}
                {/* {!this.state.isNavItemsHidden && <NavDrawer />} */}
                <Header text = {this.state.header} onClick = {this.changeHeader}/>
                <Title />
                <ContentBox1 />
                <Button onClick = {this.displayBox}/>
                {!this.state.isBoxHidden && <ContentBox2 />}
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);