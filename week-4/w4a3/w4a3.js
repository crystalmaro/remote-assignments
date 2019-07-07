const Navigation = (props) => {
    return (
        <nav>
            Welcome Title / Logo
            <a className="burgerIcon" onClick={ props.onClick }>&#9776;</a>
            {!props.hideNavItems && <NavItems onClick={ props.onClick }/>}
        </nav>
    )
};

const NavItems = (props) => {
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
            {/* onClick={displayBox} */}
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

// App is "parents", Header is "child" in this casey
// define click action in App, and pass in as class
class App extends React.Component {
    constructor(props) {
      super(props);
      // initialize state
      this.state = {
          header: "Welcome Message",
          hideBox: true,
          hideNavItems: true,
        }
    }

    // onclick for header
    changeHeader = () => {
        this.setState( {header: "Have a Good Time!"} );
    }
    
    // display box 5-8
    displayBox = () => {
        this.setState( {hideBox: false} )
    }

    displayNavItems = () => {
        this.setState( {hideNavItems: !this.state.hideNavItems} )
        // this.setState( {hideNavItems: false} )
    }

    render() {
        return (
            <div>
                <Navigation onClick = {this.displayNavItems} hideNavItems = {this.state.hideNavItems} />
                <Header text = {this.state.header} onClick = {this.changeHeader}/>
                <Title />
                <ContentBox1 />
                <Button onClick = {this.displayBox}/>
                {!this.state.hideBox && <ContentBox2 />}
            </div>
        )
    }
}






// const App = () => {
//     return (
//         <div>
//             <Navigation />
//             <Header />
//             <Title />
//             <ContentBox1 />
//             <Button />
//             <ContentBox2 />
//         </div>
//     )
// };

ReactDOM.render(
    <App />,
    document.getElementById("root")
);