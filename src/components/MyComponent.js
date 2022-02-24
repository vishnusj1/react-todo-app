import './MyComponent.css';

export default function MyComponent (props) {
 const {name,character} = props;
    return (
      <div className="header">
        <div className="title">Hello, {name}, {character}</div>
      </div>
    )

}
