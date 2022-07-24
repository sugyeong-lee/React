function MyButton(props) {
    const [isClicked, setIsClicked] = React.useState(false);

    return React.createElement(
        'button',
        { onClick: () => setIsClicked(true) },
        isClicked ? 'Clicked!' : 'Click here!'
    )
}

const domContainer = document.querySelector('#root'); // Dom의 rend함수 이용하여 리액트 컴포넌트 dom 컴포넌트 랜더링//
ReactDOM.render(React.createElement(MyButton), domContainer);