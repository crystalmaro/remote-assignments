
const Navigation = () => {
    return (
        <nav>
            Welcome Title / Logo
                <div className="topNav" id="myTopNav">
                <a href="javascript:void(0);" class="icon" onclick="toggleMenu()">&#9776;</a>
                <a href="#">Item 1</a>
                <a href="#">Item 2</a>
                <a href="#">Item 3</a>
                <a href="#">Item 4</a>
                </div>
        </nav>
    )
};

const Header = () => {
    return (
        <h1 onClick="{changeH1}">Welcome Message</h1>
    )
};

const Title = () => {
    return (
        <h2>Section Title</h2>
    )
};

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

const Button = () => {
    return (
        // need to center button
        <button>Call to Action</button>
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

const App = () => {
    return (
        <div>
            <Navigation />
            <Header />
            <Title />
            <ContentBox1 />
            <Button />
            <ContentBox2 />
        </div>
    )
};

ReactDOM.render(
    <App />,
    document.getElementById("root")
);